"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type TileKey = "news" | "note" | "cal";
type Mode = "ai" | "2p";
type Difficulty = "easy" | "normal" | "hard";
type Phase = "menu" | "aim" | "charge" | "throw" | "reaction" | "ai" | "ended";

const TILE = {
  news: { name: "신문지 딱지", size: 2.15, thickness: 0.12, hit: 0.9, mass: 0.86, accuracy: 1.15 },
  note: { name: "공책 딱지", size: 1.95, thickness: 0.2, hit: 1, mass: 1, accuracy: 1 },
  cal: { name: "달력 딱지", size: 1.78, thickness: 0.31, hit: 1.1, mass: 1.38, accuracy: 0.82 },
} as const;

type UiState = {
  phase: Phase;
  turn: number;
  scores: [number, number];
  power: number;
  tilt: number;
  message: string;
  result: string;
};

type Settings = { mode: Mode; difficulty: Difficulty; tile: TileKey; count: number };
type GameApi = { start: (settings: Settings) => void; cancel: () => void };

const initialUi: UiState = {
  phase: "menu",
  turn: 0,
  scores: [3, 3],
  power: 0,
  tilt: 0.46,
  message: "게임을 시작해 보세요.",
  result: "",
};

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<GameApi | null>(null);
  const [ui, setUi] = useState<UiState>(initialUi);
  const [mode, setMode] = useState<Mode>("ai");
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");
  const [tile, setTile] = useState<TileKey>("note");
  const [count, setCount] = useState(3);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x160f0a);
    scene.fog = new THREE.Fog(0x160f0a, 18, 36);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    camera.position.set(0, 10.8, 13.6);
    camera.lookAt(0, 0, -1.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-label", "3D 딱지치기 경기장");
    host.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xffe7bd, 0x2a160d, 2.15);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffd49a, 4.2);
    sun.position.set(-5, 12, 7);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -12;
    sun.shadow.camera.right = 12;
    sun.shadow.camera.top = 12;
    sun.shadow.camera.bottom = -12;
    scene.add(sun);
    const rim = new THREE.PointLight(0xe73420, 22, 16, 2);
    rim.position.set(7, 4, -7);
    scene.add(rim);

    function makeDirtTexture() {
      const c = document.createElement("canvas");
      c.width = c.height = 1024;
      const g = c.getContext("2d")!;
      const grad = g.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, "#8f6d4e");
      grad.addColorStop(0.55, "#74543b");
      grad.addColorStop(1, "#573a29");
      g.fillStyle = grad;
      g.fillRect(0, 0, 1024, 1024);
      for (let i = 0; i < 900; i++) {
        const x = (Math.sin(i * 91.73) * 0.5 + 0.5) * 1024;
        const y = (Math.sin(i * 47.21 + 1.7) * 0.5 + 0.5) * 1024;
        const r = 1 + ((i * 17) % 7);
        g.fillStyle = i % 3 ? "rgba(34,18,10,.11)" : "rgba(255,226,177,.07)";
        g.beginPath();
        g.ellipse(x, y, r * 1.7, r, i, 0, Math.PI * 2);
        g.fill();
      }
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    }

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 24),
      new THREE.MeshStandardMaterial({ map: makeDirtTexture(), roughness: 1, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = -1.3;
    ground.receiveShadow = true;
    scene.add(ground);

    const borderMat = new THREE.MeshStandardMaterial({ color: 0x9d2118, roughness: 0.74 });
    const borderGeoH = new THREE.BoxGeometry(18.6, 0.48, 0.48);
    const borderGeoV = new THREE.BoxGeometry(0.48, 0.48, 24.6);
    [[0, 0.23, -13.3], [0, 0.23, 10.7]].forEach((p) => {
      const m = new THREE.Mesh(borderGeoH, borderMat); m.position.set(p[0], p[1], p[2]); m.castShadow = true; scene.add(m);
    });
    [[-9.3, 0.23, -1.3], [9.3, 0.23, -1.3]].forEach((p) => {
      const m = new THREE.Mesh(borderGeoV, borderMat); m.position.set(p[0], p[1], p[2]); m.castShadow = true; scene.add(m);
    });

    const chalkMat = new THREE.MeshBasicMaterial({ color: 0xf9e4bd, transparent: true, opacity: 0.5 });
    [-9, 8].forEach((z) => {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(12, 0.045), chalkMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.012, z);
      scene.add(line);
    });

    const pebbles = new THREE.Group();
    for (let i = 0; i < 42; i++) {
      const stone = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.035 + (i % 4) * 0.012, 0),
        new THREE.MeshStandardMaterial({ color: i % 2 ? 0x59402f : 0x9b7a5a, roughness: 1 })
      );
      stone.position.set(Math.sin(i * 7.7) * 8.4, 0.03, Math.sin(i * 3.31 + 0.8) * 11 - 1.3);
      stone.rotation.set(i, i * 0.4, i * 0.2);
      pebbles.add(stone);
    }
    scene.add(pebbles);

    const textureCache = new Map<string, THREE.CanvasTexture>();
    function tileTexture(team: number, type: TileKey) {
      const key = `${team}-${type}`;
      const cached = textureCache.get(key);
      if (cached) return cached;
      const c = document.createElement("canvas");
      c.width = c.height = 512;
      const g = c.getContext("2d")!;
      const main = team === 0 ? "#2f61d0" : "#d7352c";
      const dark = team === 0 ? "#17377e" : "#82150f";
      g.fillStyle = main;
      g.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 4; i++) {
        g.save(); g.translate(256, 256); g.rotate(i * Math.PI / 2); g.translate(-256, -256);
        g.fillStyle = i % 2 ? main : dark;
        g.beginPath(); g.moveTo(0, 0); g.lineTo(512, 0); g.lineTo(256, 256); g.closePath(); g.fill();
        g.restore();
      }
      g.strokeStyle = "rgba(255,255,255,.42)";
      g.lineWidth = 12;
      g.beginPath(); g.moveTo(0, 0); g.lineTo(512, 512); g.moveTo(512, 0); g.lineTo(0, 512); g.stroke();
      if (type === "news") {
        g.globalAlpha = 0.32; g.fillStyle = "#eee9dd"; g.fillRect(90, 82, 332, 348);
        g.strokeStyle = "#333"; g.lineWidth = 5;
        for (let y = 120; y < 410; y += 38) { g.beginPath(); g.moveTo(116, y); g.lineTo(396, y); g.stroke(); }
      } else if (type === "note") {
        g.globalAlpha = 0.3; g.strokeStyle = "#bce2ff"; g.lineWidth = 5;
        for (let y = 100; y < 430; y += 42) { g.beginPath(); g.moveTo(78, y); g.lineTo(434, y); g.stroke(); }
        g.strokeStyle = "#ff9e91"; g.beginPath(); g.moveTo(134, 72); g.lineTo(134, 440); g.stroke();
      } else {
        g.globalAlpha = 0.9; g.fillStyle = "#f4ecdc"; g.fillRect(154, 144, 204, 226);
        g.fillStyle = "#b9241c"; g.fillRect(154, 144, 204, 52);
        g.fillStyle = "#8b1a16"; g.font = "bold 112px sans-serif"; g.textAlign = "center"; g.fillText("15", 256, 320);
      }
      g.globalAlpha = 1;
      g.strokeStyle = "rgba(25,10,5,.8)"; g.lineWidth = 18; g.strokeRect(9, 9, 494, 494);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      textureCache.set(key, tex);
      return tex;
    }

    function createTile(team: number, type: TileKey) {
      const t = TILE[type];
      const group = new THREE.Group();
      const edgeColor = team === 0 ? 0x17377e : 0x82150f;
      const mats = [
        new THREE.MeshStandardMaterial({ color: edgeColor, roughness: 0.72 }),
        new THREE.MeshStandardMaterial({ color: edgeColor, roughness: 0.72 }),
        new THREE.MeshStandardMaterial({ map: tileTexture(team, type), roughness: 0.7 }),
        new THREE.MeshStandardMaterial({ color: 0xc9b990, roughness: 0.95 }),
        new THREE.MeshStandardMaterial({ color: edgeColor, roughness: 0.72 }),
        new THREE.MeshStandardMaterial({ color: edgeColor, roughness: 0.72 }),
      ];
      const body = new THREE.Mesh(new THREE.BoxGeometry(t.size, t.thickness, t.size), mats);
      body.position.y = t.thickness / 2;
      body.castShadow = true;
      body.receiveShadow = true;
      group.add(body);
      const seam = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(t.size * 1.002, t.thickness * 1.02, t.size * 1.002)),
        new THREE.LineBasicMaterial({ color: 0x2a140b, transparent: true, opacity: 0.72 })
      );
      seam.position.y = t.thickness / 2;
      group.add(seam);
      group.userData = { team, type };
      return group;
    }

    const aimMarker = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.22, 0.28, 48),
      new THREE.MeshBasicMaterial({ color: 0xffdc52, transparent: true, opacity: 0.95, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    aimMarker.add(ring);
    const crossMat = new THREE.MeshBasicMaterial({ color: 0xffdc52 });
    const crossA = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.025, 0.035), crossMat);
    const crossB = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.025, 0.72), crossMat);
    aimMarker.add(crossA, crossB);
    aimMarker.position.y = 0.035;
    aimMarker.visible = false;
    scene.add(aimMarker);

    let targetTile: THREE.Group | null = null;
    let attackTile: THREE.Group | null = null;
    let targetType: TileKey = "note";
    let mode: Mode = "ai";
    let difficulty: Difficulty = "normal";
    let playerType: TileKey = "note";
    let types: [TileKey, TileKey] = ["note", "note"];
    let scores: [number, number] = [3, 3];
    let turn = 0;
    let phase: Phase = "menu";
    let message = "게임을 시작해 보세요.";
    let result = "";
    let tilt = 0.46;
    let power = 0;
    let charge: null | { startTime: number; startY: number; pointerId: number; initialTilt: number } = null;
    const aimPoint = new THREE.Vector3(0, 0, -1.3);
    let flight: null | { start: THREE.Vector3; end: THREE.Vector3; started: number; duration: number; attacker: number; power: number; tilt: number } = null;
    let reaction: null | { started: number; duration: number; flipped: boolean; axis: "x" | "z"; push: THREE.Vector3; baseY: number; baseRx: number; baseRz: number } = null;
    let roundToken = 0;
    let lastUiSync = 0;
    let cameraKick = 0;

    function syncUi(force = false) {
      const now = performance.now();
      if (!force && now - lastUiSync < 45) return;
      lastUiSync = now;
      setUi({ phase, turn, scores: [...scores] as [number, number], power, tilt, message, result });
    }

    function clearTile(tile: THREE.Group | null) {
      if (!tile) return;
      scene.remove(tile);
    }

    function placeTarget(owner: number, type: TileKey, position = new THREE.Vector3(0, 0, -1.3)) {
      clearTile(targetTile);
      targetType = type;
      targetTile = createTile(owner, type);
      targetTile.position.copy(position);
      targetTile.position.y = 0.015;
      targetTile.rotation.set(0, (Math.random() - 0.5) * 0.55, 0);
      scene.add(targetTile);
    }

    function isHumanTurn() { return mode === "2p" || turn === 0; }

    function trianglePower(ms: number) {
      const period = 1550;
      const p = ((ms % period) / period) * 2;
      return p < 1 ? p : 2 - p;
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    function pointFromEvent(ev: PointerEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = new THREE.Vector3();
      if (!raycaster.ray.intersectPlane(floorPlane, hit)) return null;
      hit.x = THREE.MathUtils.clamp(hit.x, -7.5, 7.5);
      hit.z = THREE.MathUtils.clamp(hit.z, -10.5, 8.5);
      return hit;
    }

    function beginCharge(ev: PointerEvent) {
      if (phase !== "aim" || !isHumanTurn() || !targetTile) return;
      const p = pointFromEvent(ev);
      if (!p) return;
      const limit = TILE[targetType].size * 1.65;
      if (Math.hypot(p.x - targetTile.position.x, p.z - targetTile.position.z) > limit) {
        message = "상대 딱지 주변을 눌러 타점을 정하세요.";
        syncUi(true);
        return;
      }
      ev.preventDefault();
      renderer.domElement.setPointerCapture?.(ev.pointerId);
      aimPoint.copy(p);
      aimPoint.y = 0.03;
      aimMarker.position.copy(aimPoint);
      aimMarker.visible = true;
      charge = { startTime: performance.now(), startY: ev.clientY, pointerId: ev.pointerId, initialTilt: tilt };
      phase = "charge";
      message = "누른 채 위로 밀면 세워치기, 아래로 내리면 눕혀치기입니다.";
      syncUi(true);
    }

    function moveCharge(ev: PointerEvent) {
      if (!charge || charge.pointerId !== ev.pointerId) return;
      ev.preventDefault();
      tilt = THREE.MathUtils.clamp(charge.initialTilt + (charge.startY - ev.clientY) / 180, 0, 1);
      power = Math.max(0.06, trianglePower(performance.now() - charge.startTime));
      syncUi();
    }

    function releaseCharge(ev: PointerEvent) {
      if (!charge || charge.pointerId !== ev.pointerId) return;
      ev.preventDefault();
      power = Math.max(0.06, trianglePower(performance.now() - charge.startTime));
      charge = null;
      throwTile(turn, aimPoint.clone(), power, tilt);
    }

    renderer.domElement.addEventListener("pointerdown", beginCharge);
    renderer.domElement.addEventListener("pointermove", moveCharge);
    renderer.domElement.addEventListener("pointerup", releaseCharge);
    renderer.domElement.addEventListener("pointercancel", () => {
      charge = null;
      phase = "aim";
      power = 0;
      aimMarker.visible = false;
      message = "조준을 취소했습니다.";
      syncUi(true);
    });
    renderer.domElement.addEventListener("contextmenu", (e) => e.preventDefault());

    function throwTile(attacker: number, end: THREE.Vector3, shotPower: number, shotTilt: number) {
      if (!targetTile) return;
      phase = "throw";
      aimMarker.visible = false;
      attackTile = createTile(attacker, types[attacker]);
      const start = new THREE.Vector3(0, 1.35, attacker === 0 ? 9.2 : -11.4);
      attackTile.position.copy(start);
      attackTile.rotation.y = attacker === 0 ? 0 : Math.PI;
      scene.add(attackTile);
      flight = {
        start,
        end: new THREE.Vector3(end.x, 0.04, end.z),
        started: performance.now(),
        duration: 620 + shotTilt * 180,
        attacker,
        power: shotPower,
        tilt: shotTilt,
      };
      message = `${attacker === 0 ? "플레이어 1" : mode === "ai" ? "AI" : "플레이어 2"}의 3D 내려치기!`;
      syncUi(true);
    }

    function resolveImpact() {
      if (!flight || !targetTile || !attackTile) return;
      const f = flight;
      const targetData = TILE[targetType];
      const attackData = TILE[types[f.attacker]];
      const local = targetTile.worldToLocal(f.end.clone());
      const half = targetData.size / 2;
      const edge = THREE.MathUtils.clamp(Math.max(Math.abs(local.x), Math.abs(local.z)) / half, 0, 1.35);
      const miss = Math.abs(local.x) > half * 1.38 || Math.abs(local.z) > half * 1.38;
      const onTop = Math.abs(local.x) < half * 0.58 && Math.abs(local.z) < half * 0.58;
      const lowStyle = f.tilt < 0.38 ? 1.12 - targetData.mass * 0.13 : 0;
      const edgeStyle = f.tilt > 0.62 ? 0.88 + edge * 0.34 : 0;
      const mixedStyle = f.tilt >= 0.38 && f.tilt <= 0.62 ? 0.82 : 0;
      const technique = Math.max(lowStyle, edgeStyle, mixedStyle) * (0.64 + edge * 0.48) * (onTop ? 0.68 : 1);
      const random = 0.91 + Math.random() * 0.16;
      const flipScore = miss ? 0 : attackData.hit * f.power * technique * random / (0.7 + targetData.mass * 0.3);
      const flipped = flipScore >= 0.82;
      const axis: "x" | "z" = Math.abs(local.x) > Math.abs(local.z) ? "z" : "x";
      const dir = new THREE.Vector3(f.end.x - f.start.x, 0, f.end.z - f.start.z).normalize();
      reaction = {
        started: performance.now(), duration: flipped ? 920 : 680, flipped, axis,
        push: dir.multiplyScalar(0.55 + f.power * 0.8),
        baseY: targetTile.position.y, baseRx: targetTile.rotation.x, baseRz: targetTile.rotation.z,
      };
      phase = "reaction";
      cameraKick = 1;
      message = miss ? "빗나갔습니다." : flipped ? `뒤집힘 점수 ${flipScore.toFixed(2)} · 넘어간다!` : `뒤집힘 점수 ${flipScore.toFixed(2)} · 조금 모자랍니다.`;
      flight = null;
      syncUi(true);
    }

    function finishReaction() {
      if (!reaction || !targetTile) return;
      const attacker = turn;
      const defender = 1 - attacker;
      if (reaction.flipped) {
        scores = [...scores] as [number, number];
        scores[defender]--;
        scores[attacker]++;
        clearTile(targetTile);
        clearTile(attackTile);
        targetTile = null;
        attackTile = null;
        if (scores[defender] <= 0) {
          phase = "ended";
          result = `${attacker === 0 ? "플레이어 1" : mode === "ai" ? "AI" : "플레이어 2"} 승리`;
          message = "상대 딱지를 모두 획득했습니다.";
          syncUi(true);
          reaction = null;
          return;
        }
        placeTarget(defender, types[defender]);
        message = "성공! 공격권을 유지합니다.";
      } else {
        const landing = attackTile ? attackTile.position.clone() : new THREE.Vector3(0, 0, -1.3);
        clearTile(targetTile);
        targetTile = attackTile;
        attackTile = null;
        targetType = types[attacker];
        if (targetTile) {
          targetTile.position.set(landing.x, 0.015, landing.z);
          targetTile.rotation.set(0, (Math.random() - 0.5) * 0.6, 0);
        }
        turn = defender;
        message = "실패. 던진 딱지가 바닥에 남고 공격권이 넘어갑니다.";
      }
      reaction = null;
      power = 0;
      prepareTurn();
    }

    function prepareTurn() {
      const token = ++roundToken;
      if (mode === "ai" && turn === 1) {
        phase = "ai";
        message = "AI가 타점과 각도를 계산하고 있습니다...";
        syncUi(true);
        const delay = difficulty === "easy" ? 850 : difficulty === "normal" ? 1050 : 1250;
        window.setTimeout(() => {
          if (token !== roundToken || phase !== "ai" || !targetTile) return;
          const t = TILE[targetType];
          const error = difficulty === "easy" ? 0.5 : difficulty === "normal" ? 0.28 : 0.12;
          const side = Math.floor(Math.random() * 4);
          const r = t.size * (0.55 + Math.random() * 0.12);
          const p = targetTile.position.clone();
          if (side === 0) p.x += r; else if (side === 1) p.x -= r; else if (side === 2) p.z += r; else p.z -= r;
          p.x += (Math.random() - 0.5) * error;
          p.z += (Math.random() - 0.5) * error;
          const aiTilt = targetType === "cal" ? 0.82 : targetType === "news" ? 0.25 : 0.58;
          const aiPower = difficulty === "easy" ? 0.72 + Math.random() * 0.2 : 0.88 + Math.random() * 0.11;
          tilt = THREE.MathUtils.clamp(aiTilt + (Math.random() - 0.5) * error * 0.35, 0, 1);
          power = aiPower;
          throwTile(1, p, aiPower, tilt);
        }, delay);
      } else {
        phase = "aim";
        message = `${turn === 0 ? "플레이어 1" : "플레이어 2"} 차례 · 상대 딱지 주변을 누르세요.`;
        syncUi(true);
      }
    }

    apiRef.current = {
      start(settings) {
        roundToken++;
        mode = settings.mode;
        difficulty = settings.difficulty;
        playerType = settings.tile;
        types = [playerType, mode === "2p" ? playerType : difficulty === "easy" ? "news" : difficulty === "hard" ? "cal" : "note"];
        scores = [settings.count, settings.count];
        turn = 0;
        result = "";
        power = 0;
        tilt = 0.46;
        charge = null;
        flight = null;
        reaction = null;
        clearTile(targetTile);
        clearTile(attackTile);
        targetTile = null;
        attackTile = null;
        placeTarget(1, types[1]);
        prepareTurn();
      },
      cancel() {
        if (phase !== "charge") return;
        charge = null;
        power = 0;
        aimMarker.visible = false;
        phase = "aim";
        message = "조준을 취소했습니다.";
        syncUi(true);
      },
    };

    placeTarget(1, "note");

    let raf = 0;
    let lastFrame = performance.now();
    function frame(now: number) {
      const dt = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;
      if (charge) {
        power = Math.max(0.06, trianglePower(performance.now() - charge.startTime));
        ring.rotation.z += dt * 1.7;
        const s = 1 + Math.sin(now * 0.008) * 0.12;
        aimMarker.scale.setScalar(s);
        syncUi();
      }
      if (flight && attackTile) {
        const t = THREE.MathUtils.clamp((now - flight.started) / flight.duration, 0, 1);
        const e = 1 - Math.pow(1 - t, 3);
        attackTile.position.lerpVectors(flight.start, flight.end, e);
        attackTile.position.y = THREE.MathUtils.lerp(flight.start.y, 0.04, e) + Math.sin(Math.PI * t) * (2.2 + flight.tilt * 1.25);
        attackTile.rotation.x = flight.tilt * Math.PI * 0.44 + t * Math.PI * (1.4 + flight.power);
        attackTile.rotation.z = t * Math.PI * 3.4 * (flight.attacker === 0 ? 1 : -1);
        if (t >= 1) resolveImpact();
      }
      if (reaction && targetTile) {
        const t = THREE.MathUtils.clamp((now - reaction.started) / reaction.duration, 0, 1);
        const e = 1 - Math.pow(1 - t, 3);
        const lift = Math.sin(Math.PI * t) * (reaction.flipped ? 1.55 : 0.48);
        targetTile.position.y = reaction.baseY + lift;
        targetTile.position.x += reaction.push.x * dt * (1 - t);
        targetTile.position.z += reaction.push.z * dt * (1 - t);
        if (reaction.axis === "x") targetTile.rotation.x = reaction.baseRx + e * Math.PI * (reaction.flipped ? 1 : 0.3);
        else targetTile.rotation.z = reaction.baseRz + e * Math.PI * (reaction.flipped ? 1 : 0.3);
        if (t >= 1) finishReaction();
      }
      if (cameraKick > 0.001) {
        cameraKick *= Math.pow(0.035, dt);
        camera.position.x = Math.sin(now * 0.07) * cameraKick * 0.16;
      } else camera.position.x *= 0.9;
      camera.lookAt(0, 0, -1.8);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    function resize() {
      const w = Math.max(320, host!.clientWidth);
      const h = Math.max(420, host!.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    return () => {
      roundToken++;
      observer.disconnect();
      cancelAnimationFrame(raf);
      renderer.dispose();
      textureCache.forEach((t) => t.dispose());
      renderer.domElement.removeEventListener("pointerdown", beginCharge);
      renderer.domElement.removeEventListener("pointermove", moveCharge);
      renderer.domElement.removeEventListener("pointerup", releaseCharge);
      host.removeChild(renderer.domElement);
      apiRef.current = null;
    };
  }, []);

  const startGame = () => apiRef.current?.start({ mode, difficulty, tile, count });
  const tiltLabel = ui.tilt < 0.33 ? "눕혀치기" : ui.tilt > 0.66 ? "세워치기" : "비스듬히";

  return (
    <main className="page-shell">
      <header className="hero">
        <div>
          <span className="eyebrow">RETRO PLAYGROUND · 3D GAME</span>
          <h1>딱지치기 <em>3D</em></h1>
          <p>타점과 힘, 치는 각도를 조절해 실제 두께와 공중 회전이 살아 있는 딱지를 내려쳐 보세요.</p>
        </div>
        <div className="prototype-badge">3D EDITION · 설치 없이 플레이</div>
      </header>

      <section className="game-layout">
        <div className="stage-card">
          <div ref={mountRef} className="three-stage" />
          <div className="score-strip" aria-live="polite">
            <div><small>플레이어 1</small><strong>{ui.scores[0]}</strong></div>
            <div className="turn-chip">{ui.phase === "ended" ? "경기 종료" : ui.phase === "menu" ? "대기 중" : `${ui.turn === 0 ? "플레이어 1" : mode === "ai" ? "AI" : "플레이어 2"} 차례`}</div>
            <div><small>{mode === "ai" ? "AI" : "플레이어 2"}</small><strong>{ui.scores[1]}</strong></div>
          </div>

          {ui.phase === "menu" && (
            <div className="stage-overlay">
              <div className="overlay-panel">
                <span>3D 딱지치기</span>
                <h2>딱지를 직접 내려쳐 보세요</h2>
                <p>상대 딱지 주변을 누른 채 위·아래로 움직여 각도를 조절하고, 힘 게이지의 원하는 지점에서 손을 떼세요.</p>
                <button onClick={startGame}>3D 게임 시작</button>
              </div>
            </div>
          )}

          {ui.phase === "ended" && (
            <div className="stage-overlay">
              <div className="overlay-panel result-panel">
                <span>FINAL RESULT</span>
                <h2>{ui.result}</h2>
                <p>{ui.message}</p>
                <button onClick={startGame}>다시 하기</button>
              </div>
            </div>
          )}
        </div>

        <aside className="control-card">
          <div className="control-heading">
            <div><span>GAME CONTROL</span><h2>3D 조작</h2></div>
            <i className={`phase-light ${ui.phase}`} />
          </div>

          <div className="settings-grid">
            <label>게임 모드<select value={mode} onChange={(e) => setMode(e.target.value as Mode)}><option value="ai">AI 대전</option><option value="2p">로컬 2인</option></select></label>
            <label>AI 실력<select value={difficulty} onChange={(e) => setDifficulty(e.target.value as Difficulty)} disabled={mode === "2p"}><option value="easy">쉬움</option><option value="normal">보통</option><option value="hard">어려움</option></select></label>
            <label>내 딱지<select value={tile} onChange={(e) => setTile(e.target.value as TileKey)}><option value="news">신문지</option><option value="note">공책</option><option value="cal">달력</option></select></label>
            <label>시작 장수<select value={count} onChange={(e) => setCount(Number(e.target.value))}><option value={3}>3장</option><option value={5}>5장</option><option value={7}>7장</option></select></label>
          </div>

          <div className="meter-block">
            <div className="meter-label"><span>힘</span><strong>{Math.round(ui.power * 100)}%</strong></div>
            <div className="power-track"><i style={{ width: `${ui.power * 100}%` }} /></div>
          </div>

          <div className="angle-control">
            <div className="angle-copy"><small>치는 각도</small><strong>{tiltLabel}</strong><span>위로 밀면 세우고, 아래로 내리면 눕힙니다.</span></div>
            <div className="angle-visual">
              <b>세워</b><div className="angle-track"><i style={{ bottom: `${ui.tilt * 100}%` }} /></div><b>눕혀</b>
            </div>
          </div>

          <div className="status-box"><span>현재 상태</span><p>{ui.message}</p></div>
          <div className="button-row"><button className="primary" onClick={startGame}>{ui.phase === "menu" ? "게임 시작" : "처음부터"}</button><button className="secondary" onClick={() => apiRef.current?.cancel()} disabled={ui.phase !== "charge"}>조준 취소</button></div>

          <div className="test-notes">
            <strong>3D 게임 특징</strong>
            <ul><li>실제 두께가 다른 3종 딱지</li><li>포물선 비행과 회전</li><li>타점·힘·각도 기반 뒤집힘 판정</li><li>3D 그림자·카메라 충격·AI 공격</li></ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

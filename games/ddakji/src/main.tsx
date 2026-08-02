import { createRoot } from "react-dom/client";
import DdakjiGame from "./DdakjiGame";
import "./game.css";

const root = document.getElementById("ddakji-game-root");

if (!root) {
  throw new Error("딱지치기 게임을 표시할 영역을 찾지 못했습니다.");
}

createRoot(root).render(<DdakjiGame />);

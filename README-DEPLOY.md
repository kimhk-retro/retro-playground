# Retro-Playground 사이트 구조

```text
retro-playground/
├─ index.html
├─ CNAME
├─ robots.txt
├─ sitemap.xml
└─ games/
   └─ paper-soccer/
      └─ index.html
```

## 업로드 방법

1. 현재 로컬 저장소에서 기존 `index.html`을 백업합니다.
2. 이 압축 파일 안의 파일과 폴더를 저장소 최상위에 복사합니다.
3. `CNAME` 파일을 삭제하지 않습니다.
4. 터미널에서 아래 명령을 실행합니다.

```bash
git status
git add .
git commit -m "메인 페이지와 게임 폴더 구조 추가"
git push
```

배포 후 확인할 주소:

- 메인: https://retro-playground.com/
- 게임: https://retro-playground.com/games/paper-soccer/

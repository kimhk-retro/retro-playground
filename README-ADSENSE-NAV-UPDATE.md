# 개인정보처리방침 및 상단 메뉴 수정본

## 변경 내용

- 개인정보처리방침에서 `초안`, `도입 예정`, `운영 전 확인` 문구 제거
- Google AdSense, 광고 쿠키, 맞춤형·비맞춤형 광고, 이용자 광고 설정 안내 추가
- 모든 상단 메뉴에서 `게임 방법`, `공략` 제거
- 홈페이지와 일반 페이지 상단 메뉴에 `딱지치기` 추가
- 게임 페이지 미니 메뉴에도 동일한 메뉴 구조 반영
- `/guide/`, `/tips/` 페이지 자체는 삭제하지 않고 유지

## 배포

압축을 풀어 저장소 최상위에 전체 복사하고 덮어쓴 뒤 실행합니다.

```bash
git pull origin main
git status
git add -A
git commit -m "개인정보처리방침과 상단 메뉴 수정"
git push
```

## 배포 후 확인

- https://retro-playground.com/
- https://retro-playground.com/privacy/
- https://retro-playground.com/games/ddakji/

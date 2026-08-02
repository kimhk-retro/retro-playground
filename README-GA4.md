# GA4 적용본

측정 ID: `G-ZEK2D0W02Q`

## 포함된 측정

모든 페이지:
- 페이지 조회
- 스크롤
- 외부 링크 클릭 등 GA4 향상된 측정 항목

책받침 축구:
- `game_start`
- `goal`
- `celebration_view`
- `game_end`

개인정보처리방침에는 Google Analytics 사용 내용을 추가했습니다.

## 배포

압축을 푼 뒤 저장소 최상위에 전체 복사하고 덮어씁니다.

```bash
git pull origin main
git status
git add .
git commit -m "GA4 방문 분석과 게임 이벤트 추가"
git push
```

## 배포 확인

GitHub Actions에서 Pages 배포가 완료된 후:

1. GA4에서 `보고서 → 실시간`을 엽니다.
2. 시크릿 창 또는 휴대전화에서 `https://retro-playground.com/`에 접속합니다.
3. 메인 페이지에서 책받침 축구를 시작하고 골을 넣습니다.
4. 실시간 보고서 또는 `관리 → DebugView`에서 이벤트를 확인합니다.

광고 차단 확장 프로그램이나 브라우저 추적 방지 기능을 사용하면 본인의 방문이 표시되지 않을 수 있습니다.

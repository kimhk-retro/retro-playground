# 딱지치기 공개 적용본

## 공개 게임

- 책받침 축구: `/games/paper-soccer/`
- 딱지치기: `/games/ddakji/`

## 보류 게임

- 구슬치기 공개 폴더와 사이트맵 링크를 제거했습니다.
- 메인 페이지에는 `개발 보류` 카드만 표시됩니다.

## 적용 전 삭제

기존 저장소에 구슬치기 폴더가 있다면 먼저 삭제합니다.

PowerShell:

```powershell
Remove-Item -Recurse -Force .\games\marbles
```

폴더가 없다는 오류가 나오면 그대로 다음 단계로 진행합니다.

## 배포

압축 파일의 내용 전체를 저장소 최상위에 복사한 뒤:

```bash
git pull origin main
git status
git add -A
git commit -m "딱지치기 공개 및 구슬치기 보류"
git push
```

## 배포 후 확인

- https://retro-playground.com/
- https://retro-playground.com/games/ddakji/
- https://retro-playground.com/games/marbles/ 는 404가 표시되는 것이 정상입니다.

# AdSense 연결 코드 적용본

## 적용된 게시자 ID

`ca-pub-7832152216482222`

## 적용 내용

- 모든 HTML 페이지의 `<head>`에 AdSense 연결 코드 삽입
- 중복된 AdSense 로더 제거
- 딱지치기 파일에 남아 있던 예시용 주석 코드 정리
- 저장소 루트에 `ads.txt` 생성

## ads.txt

```text
google.com, pub-7832152216482222, DIRECT, f08c47fec0942fa0
```

## 배포

압축을 풀어 저장소 최상위에 전체 복사하고 덮어쓴 뒤 실행합니다.

```bash
git pull origin main
git status
git add -A
git commit -m "AdSense 연결 코드 적용"
git push
```

## 배포 후 확인 주소

- https://retro-playground.com/
- https://retro-playground.com/ads.txt
- https://retro-playground.com/privacy/

사이트 배포가 완료된 뒤 AdSense의 사이트 연결 화면으로 돌아가
`코드를 사이트에 삽입했습니다`를 선택하고 확인한 다음 검토 요청을 진행합니다.

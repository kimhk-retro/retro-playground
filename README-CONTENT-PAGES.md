# 콘텐츠 페이지 추가본 배포 방법

추가된 페이지:

- `/about/` 사이트 소개
- `/guide/` 게임 방법
- `/tips/` 공략
- `/privacy/` 개인정보처리방침
- `/contact/` 문의
- `/assets/site.css` 공통 스타일

## 적용 순서

1. 현재 로컬 저장소에서 최신 내용을 받습니다.

```bash
git pull origin main
```

2. 이 압축 파일의 내용 전체를 저장소 최상위에 복사합니다.
3. 기존 파일과 폴더를 덮어씁니다.
4. `CNAME` 파일은 삭제하지 않습니다.
5. 아래 명령을 실행합니다.

```bash
git status
git add .
git commit -m "소개와 게임 안내 페이지 추가"
git push
```

## 배포 후 확인 주소

- https://retro-playground.com/about/
- https://retro-playground.com/guide/
- https://retro-playground.com/tips/
- https://retro-playground.com/privacy/
- https://retro-playground.com/contact/

## 문의 페이지

전용 이메일이 아직 없으므로 현재는 "준비 중"으로 표시했습니다.
이메일을 만든 뒤 `/contact/index.html`과 `/privacy/index.html`의 문의 부분을 수정하세요.

# Split Setup: Creative (Static) + Minimal Mistakes (Jekyll, built locally)

**왜 이 구조인가요?**
- 루트는 **Start Bootstrap Creative**의 순수 정적 사이트 → 프레임워크 충돌 없음
- 블로그/문서는 `blog-src`에서 **Minimal Mistakes**로 작성 → 로컬에서 빌드하여 `/blog` 폴더에 정적 결과물을 복사
- GitHub Pages는 Jekyll을 돌리지 않도록 `.nojekyll` 포함

## 로컬 빌드
```bash
# 1) 블로그 빌드
cd blog-src
bundle install
bundle exec jekyll build -d ../blog

# 2) 로컬 미리보기(정적)
# 루트 index.html을 브라우저로 직접 열거나, 간단 서버 실행
python -m http.server 4000
# => http://localhost:4000/
```

## 배포
- 이 폴더 통째로 GitHub에 올리면 됩니다. (main 브랜치)
- Settings > Pages: **Branch = main / root**
- 루트는 Creative, `/blog/`는 빌드된 Minimal Mistakes 정적 결과물을 서빙합니다.

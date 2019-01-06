# dystopia
A work in progress portfolio website for myself, built using Next and Express.

## Project Highlights
- 100% SSR for that delicious SEO boost.
- Portable to any environment that can run Docker.
- PWA from the ground up, so enjoy that 100/100 score for Progessive Web Apps when testing in Lighthouse.
- Code highlighting in `pre` and `code` and rendered with Markdown/MDX.
- Static blog using Markdown, NO DATABASE necessary.
- Can also be exported for static hosting with little to no changes to the code.

## How to use this project
First, you'll want to `git clone` this repository:
```
git clone https://github.com/0str1ch/dystopia.git
```

### Production
**Build the Docker image:**
```
docker build -t dystopia .
```

**Run it with Docker:**
```
docker run -p 3000:3000 dystopia
```

### Development
```
npm run dev
```

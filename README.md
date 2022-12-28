[nickdeineko.com](nickdeineko.com)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

All sections below assume that commands will be run in [Terminal](https://support.apple.com/uk-ua/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) and selected directory will project's root. 

All steps are described for Mac.

## Start locally
### Prerequisites

1. Clone project:
    - Install [GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)
    - Login to GitHub Desktop and find a project in your account
    - Clone project
2. Install some IDE, e.g [VS Code](https://code.visualstudio.com/)
3. Install NodeJS
   - Check if `Node` installed: run command `node -v`
   - If not: `brew install node@16`
   - After check again `node -v`. You should see installed version.
4. Prepare project itself
   - First time run `npm install`
   - It should successfully install all project 

### Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Change content

To change text or updated code you have the following options:
1. Directly change on [github.com](https://github.com)
2. Change locally on your machine and commit + push from Github Desktop

Main structure:
- Project details are described in `data/project.ts`
- Most other content located in `components` folder
- Pages configuration described in `pages` folder
- Pages usually just use some component, which described in `components` folder as well
- Each component has two files in folder `scss` with styles and `tsx` with markup

## Project Media 

### Media requirements
- All images should be in `webp` format, all videos – `mp4`.
- Each project should have one `thumb.webp` file. Size `500x750`.
- Each project image or video should have the following aspect ratio:
  - For one line content – `3 / 2`
  - For two items in line – `2 / 3`
- Each project image should have 3 files with the following width
  - S: 750px
  - M: 1560px
  - L: 3120px
- `mp4` has any size. Just pick something in the range 1560-3120px

### How to add media
- Make sure `public/$projectName` exists before start
- Create folder `public-src` in the root
- Put original media in this folder. Original items should have `img` and `mp4` extensions. Items should be grouped by `$projectName`.
- Run in terminal `node prepare-media.js`
- Items from `public-src/$projectName` should be copied to `public/$projectName` 
- Verify new files are added to `public/$projectName`
- Update `data/projects.ts` with new media if needed 
- Remove content in `public-src`, you can keep folder
- Commit new media and push

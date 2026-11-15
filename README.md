# Abdul Basit — Personal Portfolio

A responsive personal portfolio for Abdul Basit, a third-semester BS Artificial Intelligence student at Bahauddin Zakariya University (BZU), Pakistan. Built with HTML5, CSS3 and vanilla JavaScript.

## Project files

- `index.html` — page structure, portfolio content and SEO metadata
- `style.css` — responsive layout and visual design
- `script.js` — mobile navigation and personal link configuration
- `assets/` — favicon and a placeholder CV file

## Run locally

1. Extract the project folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

No build step, backend, database, API key or paid service is required.

## Add your own details before publishing

Open `script.js` and edit the `PROFILE` object:

- `email`: your real professional email address
- `linkedin`: your exact LinkedIn profile URL
- `github`: your exact GitHub profile URL
- `cv`: path to your actual CV PDF

If email/social values are empty, those buttons remain hidden rather than showing fake links. Replace the placeholder CV PDF with your actual CV and update its filename/path if needed.

## Content accuracy

The portfolio identifies Abdul Basit as a BS Artificial Intelligence student at BZU, currently in the third semester, with FSc Pre-Medical as previous education. Skills are presented as foundations/practice rather than invented proficiency ratings. Project cards are prompts for adding real, demonstrable work; replace them only with projects you have actually completed. Add certificates only when earned.

## Deploy with GitHub Pages

1. Create a GitHub account and a repository named `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then save.
7. Wait for deployment. Your website will be available at `https://YOUR-USERNAME.github.io`.

## Deploy with Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Choose the framework preset **Other**.
4. Leave the build command and output directory empty/default for a plain static HTML project.
5. Deploy.

## Final checklist

- [ ] Add your actual GitHub and LinkedIn profile URLs in `script.js`.
- [ ] Add your professional email.
- [ ] Replace the placeholder CV.
- [ ] Add only real projects and certificates.
- [ ] Test all links and the mobile menu.
- [ ] Check the website on mobile and desktop.
- [ ] Do not publish passwords, API keys or private information.

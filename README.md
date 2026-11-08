# Juyang Li — Academic Homepage

A lightweight, responsive academic homepage for GitHub Pages. It uses plain HTML, CSS, and JavaScript: no framework, build step, backend, or database is required.

## Preview locally

Open `index.html` in a browser, or run a tiny local server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy to GitHub Pages

1. Create a **public** repository named `juyang-li.github.io`.
2. Upload all files in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The workflow in `.github/workflows/pages.yml` deploys the site whenever you push to `main`.
6. Your website will be available at <https://juyang-li.github.io> after the workflow succeeds.

## Personalize the site

- Edit `index.html` to update your introduction, research interests, projects, education, publications, news, and links.
- Replace `assets/profile-placeholder.svg` with your photo (update the image path in `index.html` if needed).
- Replace `assets/cv-placeholder.txt` with your CV PDF and update the CV link in `index.html`.
- Replace `YOUR_EMAIL@example.com` with the email address you want to publish.
- Add your Google Scholar / ORCID URLs in the social links section.
- Update both `data-en` and `data-zh` values when editing bilingual text.

## Notes

All personal and academic details are intentionally left as editable placeholders. No affiliation, publication, award, or contact address has been invented.

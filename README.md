# GenAIStarter Webpage

This folder is a simple **website**: the page people see in the browser is built from a few text files (`index.html`, `style.css`, `script.js`). There is no app to install just to edit the words or colors.

---

## A few terms (in plain English)

| Term | Meaning |
|------|--------|
| **Your computer (local)** | The copy of the files on your machine while you edit. Only you see this until you publish. |
| **The live site** | The website on the internet (often hosted on **Netlify**). Everyone sees this address. |
| **Git** | A way to save snapshots of your files and share them. Your project may live in a **repository** (“repo”) on GitHub or similar. |
| **Commit** | You pick which file changes to include and add a short message—like saving a named version of the project. |
| **Push** | You send your latest commits from your computer up to the copy of the repo on the internet (e.g. GitHub). |
| **Deploy** | Netlify takes the files from the repo and puts them on the live site. This often happens automatically after a push. |

---

## How the live site gets your changes

Think of it in three layers:

1. You **edit** the files on your computer and check them in the browser (see below).
2. You **commit** and **push** so the online copy of the repo matches your work.
3. **Netlify** notices the new code, **deploys** it, and the public URL updates after a short wait (often about a minute).

You do **not** need to log into Netlify and upload files by hand each time—as long as the site is **connected to this Git repo**. Pushing your changes is enough.

---

## What to edit

| If you want to change… | Open this file |
|------------------------|----------------|
| Text, sections, sidebar labels, page structure | `index.html` |
| Colors, fonts, spacing, overall look | `style.css` |
| Clicking tabs, showing/hiding the sidebar | `script.js` |

Keep file names and links as they are unless you know what you’re doing (for example, keep `style.css` and `script.js` linked the way they are now).

---

## Step 1 — See your edits on your own computer first

1. Open this project folder in your editor (Cursor, VS Code, or any text editor).
2. Change `index.html`, `style.css`, and/or `script.js`.
3. Open the page in your browser:
   - **Simple way:** Double-click `index.html` or use **File → Open** in the browser and choose that file.
   - **More reliable way:** If you have [Node.js](https://nodejs.org/) installed, open a terminal in this folder and run:
     ```bash
     npx --yes serve .
     ```
     Then open the address it shows (often `http://localhost:3000`). This avoids some issues that happen when opening the file directly from disk.
4. After you save a file, refresh the browser tab to see updates.

---

## Step 2 — Put your changes on the live site (commit + push)

Do this when you’re happy with how the page looks locally.

1. **Stage and commit** (save a snapshot with a message):
   ```bash
   git add index.html style.css script.js
   git commit -m "Short description of what you changed"
   ```
   If you changed other files (e.g. new images), add those filenames too, or use `git add .` to include everything that changed (use carefully if you’re new to Git).

2. **Push** to the branch your team uses for the live site (often named `main` or `master`—ask if unsure):
   ```bash
   git push origin main
   ```
   Replace `main` with your branch name if it’s different.

3. **Wait for Netlify.** Open [Netlify](https://app.netlify.com), select your site, and open **Deploys**. You should see a new deploy start shortly after your push. When it says **Published**, your changes are live.

4. **Check the public link.** Open your site’s URL. If you still see the old page, try a **hard refresh**: `Ctrl+Shift+R` on Windows/Linux, or `Cmd+Shift+R` on Mac.

**If nothing deploys after you push:** In Netlify go to **Site configuration → Build & deploy → Continuous deployment** and confirm the correct **repository** and **branch** are linked.

---

## If your site is not connected to Git yet

Some sites are updated by **dragging a zip file** into Netlify. That works, but you must upload again for every change.

**Better for the long run:** Connect this repository in Netlify once. After that, **editing the repo and pushing** is all you need to update the site.

---

## Netlify settings (if it asks)

This project is only static files—there is **no build step**. If Netlify asks:

- **Build command:** leave empty (or use `echo "no build"` only if it insists on a command).
- **Publish directory:** the project root (often shown as `.` or the repo root).

---

*No framework required: edit the HTML, CSS, and JS files like normal documents, then commit and push to update the live site.*

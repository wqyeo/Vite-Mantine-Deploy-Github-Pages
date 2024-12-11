# GitHub Pages Deployment Template  

This template is based on the [Vite Mantine Template](https://github.com/mantinedev/vite-template) and simplifies the process of deploying a Vite-based project to GitHub Pages.

---

## ⚙️ Setup  

Before deploying, update the following files to match your repository configuration:  

1. **`package.json`**  
   - Set the `homepage` field to:  
     ```json
     "homepage": "https://<username>.github.io/<repository-name>"
     ```

2. **`vite.config.mjs`**  
   - Set the `base` option:  
     ```javascript
     base: "/<repository-name>/",
     ```

3. **`Router.tsx`**  
   - Update the base routes to align with your repository name.  

---

## 🚀 Deployment Instructions  

### Prerequisites  
You will need a GitHub fine-grained personal access token for deployment:  
1. Go to **Settings > Developer Settings > Personal Access Tokens > Fine-grained Tokens > Generate New Token**.  
2. Configure the token:  
   - **Repository access**: Grant access to the target repository.  
   - **Permissions**: Ensure `read-write` access to **Pages**.  

### Steps  
1. **Install dependencies**:  
   ```bash
   npm install
   ```

2. **Build the project for GitHub Pages**:
   ```bash
   npm run gh-pages-build
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run gh-pages-deploy
   ```  
    - When prompted, use your GitHub access token as the password.

> **Note**: After making changes and pushing to the repository, repeat steps **2** and **3** to update the deployed site.

---

## 📝 Attribution

This project references:
- [ErickKS/vite-react-router](https://github.com/ErickKS/vite-react-router)
- [gh-pages (npm package)](https://www.npmjs.com/package/gh-pages)
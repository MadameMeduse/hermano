Preview https://madamemeduse.github.io/hermano/

**Deploy changes to  `GH Pages` :**

To build your project into the `docs` folder on the `main` branch (typically for GitHub Pages or similar static site hosting), you can follow these steps. This assumes your build outputs to a `build` or `dist` folder by default, and you want to copy that output into the `docs` folder.

### **Steps:**

---

### **Step 1: Set Up the `docs` Folder**

1. **Ensure the `docs` Folder Exists:**

   First, ensure that the `docs` folder exists on your `main` branch. If it doesn't exist, create it:
   ```zsh
   mkdir docs
   ```

2. **Switch to the `main` Branch:**

   Make sure you're on the `main` branch before starting:
   ```zsh
   git checkout main
   ```

---

### **Step 2: Build the Project**

1. **Build Your Project:**

   Run the build command for your project. For example, if you're using a Node.js project, it could be:
   ```zsh
   npm run build
   ```

   This will generate the build output (usually in a folder like `build` or `dist`).

---

### **Step 3: Copy the Build Output to the `docs` Folder**

1. **Copy the Build Files to the `docs` Folder:**

   After building your project, you need to copy the build output (e.g., from the `build` or `dist` folder) into the `docs` folder:
   ```zsh
   cp -r build/* docs/
   ```
   If your build output is in a folder other than `build` (e.g., `dist`), replace `build` with the appropriate folder name.

---

### **Step 4: Stage the Changes**

1. **Stage the Changes to the `docs` Folder:**

   Stage the files you copied to the `docs` folder:
   ```zsh
   git add docs/
   ```

---

### **Step 5: Commit the Changes**

1. **Commit the Changes:**

   Commit the files that were added to the `docs` folder:
   ```zsh
   git commit -m "Deploy build output to docs folder"
   ```

---

### **Step 6: Push to the Remote Repository**

1. **Push Changes to `main` Branch:**

   Push the changes to the remote repository's `main` branch:
   ```zsh
   git push origin main
   ```

---


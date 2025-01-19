Preview https://madamemeduse.github.io/hermano/

The error `fatal: refusing to merge unrelated histories` occurs when you're trying to merge two branches or repositories that don’t share a common history (e.g., the `main` branch and `gh-pages` were created independently). This is common when one of the branches was initialized separately or when changes have been made in both branches without them being synchronized.

### **Solution: Allow Unrelated Histories to Merge**

If you are sure you want to merge these branches, you can use the `--allow-unrelated-histories` flag.

### **Steps to Merge with the `--allow-unrelated-histories` Flag:**

1. **Ensure You're on the `gh-pages` Branch**
   Switch to the `gh-pages` branch:

   ```zsh
   git checkout gh-pages
   ```

2. **Merge `main` into `gh-pages` with the `--allow-unrelated-histories` Flag**
   Run the following command to merge `main` into `gh-pages`, even if they have unrelated histories:

   ```zsh
   git merge main --allow-unrelated-histories
   ```

3. **Resolve Any Merge Conflicts (if any)**
   If there are any conflicts, Git will notify you. Open the conflicted files and resolve the issues. After resolving conflicts, stage the files:

   ```zsh
   git add <file_with_conflict>
   git commit -m "Resolve merge conflicts"
   ```

4. **Push the Changes to the Remote `gh-pages` Branch**
   After merging and resolving any conflicts, push the changes to `gh-pages`:

   ```zsh
   git push origin gh-pages
   ```

---

### **Why Use `--allow-unrelated-histories`?**

Git by default prevents merging branches that have no common history to prevent potential issues. Using `--allow-unrelated-histories` lets you force the merge even if the histories are unrelated. This is useful when you're sure the changes from both branches are intended to be merged.

---

Let me know if this resolves your issue or if you encounter any more challenges!

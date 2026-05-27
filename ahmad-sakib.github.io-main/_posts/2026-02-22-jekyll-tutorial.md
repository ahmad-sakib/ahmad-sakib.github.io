---
layout: single
title: "Creating a GitHub Page Using Jekyll (Static Site Generator)"
date: 2025-12-26 23:00:00 +0600
categories: [Personal]
tags: [friends, life]
description: "A beginner-friendly, step-by-step guide to creating a GitHub Pages blog using the Jekyll static site generator on Arch Linux. This post covers setting up a Ruby environment, configuring local gem paths, installing Jekyll and Bundler, resolving common pitfalls (including the `webrick` requirement for Ruby 3+), running the site locally, and pushing your project to GitHub with fully explained bash command snippets for self-documentation."

---




GitHub Pages lets you host websites **for free**, directly from a repository. When combined with **Jekyll**, a static site generator, you can build fast blogs **without any backend** or database.

This guide explains the process **from Phase 1 (environment setup) to final deployment (push to GitHub)**, including pitfalls you may face on **Arch Linux**.

---

## **Phase 1 — Setting up the Ruby Environment**

Jekyll is written in **Ruby**, so we need a working Ruby environment first.

### **Step 1 — Add Ruby to PATH (Arch installs Ruby locally, not globally)**

Arch Linux does not place Ruby gems in a global directory by default.
Instead, gems are installed under your user directory, so you must configure a **dynamic path**.

Run the following commands:

```bash
# 1. Append a header comment to the bash profile
echo '# Ruby Gems Configuration' >> ~/.bashrc

# 2. Set GEM_HOME dynamically using Ruby
echo 'export GEM_HOME=$(ruby -e "puts Gem.user_dir")' >> ~/.bashrc

# 3. Add gem binaries to PATH
echo 'export PATH="$PATH:$GEM_HOME/bin"' >> ~/.bashrc

# 4. Reload the updated profile in current shell session
source ~/.bashrc

# 5. Verify where gems will now be installed
gem env | grep -E "GEM_HOME|USER INSTALLATION"
```

### **Explanation of each line**

1. `echo '# Ruby Gems Configuration' >> ~/.bashrc`
   Adds a comment to the file for readability. It has no effect on execution but helps you remember why this block exists.

2. `export GEM_HOME=$(ruby -e "puts Gem.user_dir")`

   * `ruby -e` runs Ruby code directly in the terminal.
   * `Gem.user_dir` prints a **user-safe directory path** where gems should live.
   * `$()` captures that output and assigns it to `GEM_HOME`.
   * This makes the path **dynamic** — it works even if Ruby version changes.

3. `export PATH="$PATH:$GEM_HOME/bin"`
   Tells your shell to also check the gem binary folder when you run commands like `jekyll` or `bundle`.

4. `source ~/.bashrc`
   Loads the updated file **without restarting your terminal**.

5. `gem env | grep -E "GEM_HOME|USER INSTALLATION"`
   Confirms the gem home path and ensures the configuration worked.

---

## **Phase 2 — Installing Jekyll and Bundler**

```bash
gem install jekyll bundler
```

### **What is Bundler and why is it needed?**

**Bundler** is a dependency manager for Ruby.
Jekyll themes and plugins rely on many gems. Instead of installing them manually, Bundler:

* Reads the `Gemfile` in your project
* Installs the correct gem versions
* Prevents version conflicts
* Makes deployment reproducible on any machine

**Without Bundler**, your site may run locally but fail to build during deployment.

---

## **Phase 3 — Creating the Jekyll Blog**

Inside your project folder (you created one named `MyBlog`), run:

```bash
jekyll new .
```

This generates the full blog structure including:

```
_config.yml      → Main configuration file
_posts/          → Blog posts live here
Gemfile          → Lists dependencies (themes, plugins, etc.)
index.md         → Homepage
about.md         → About page (you later deleted this file)
```

---

## **Phase 4 — Understanding the Generated Gemfile**

Your error earlier was:

```
Could not find gem 'minima (~> 2.5)' in locally installed gems.
Run `bundle install` to install missing gems.
```

This happened because:

* `minima` is the default Jekyll theme
* It was listed in your `Gemfile`
* But not installed yet

Fix it by running:

```bash
bundle install
```

**Pitfall:** If Bundler opens an editor like `vi` during merge, and you don’t have it installed or configured, you may see:

```
error: cannot run vi: No such file or directory
error: unable to start editor 'vi'
```

**Solution:** Set Git to avoid opening editors during pull:

```bash
git config pull.rebase false
```

This forces Git to use **merge instead of rebase**, and stops editor prompts.

---

## **Phase 5 — Writing Your First Blog Post**

Create a file under `_posts/` like:

```
2025-12-27-github-pages-jekyll.md
```

Jekyll requires posts to follow this naming format:

```
YEAR-MONTH-DAY-title.md
```

---

## **Phase 6 — Initializing Git for Deployment**

Inside your blog folder, run:

```bash
git init
git add .
git commit -m "Initial blog draft using Jekyll on Arch Linux"
```

---

## **Phase 7 — Linking to GitHub Repository**

You already created a GitHub Pages repo named:

```
ahmad-sakib.github.io
```

Now link it:

```bash
git remote add origin https://github.com/ahmad-sakib/ahmad-sakib.github.io.git
```

---

## **Phase 8 — Syncing Local and Remote Repo**

If GitHub already contains commits you don’t have locally, pull them first:

```bash
git pull --no-rebase origin main
```

Common pitfall message you faced:

```
rejected main -> main (fetch first)
Updates were rejected because the remote contains work you do not have locally
```

This means your local and remote histories diverged. Pulling fixes it.

After pulling, complete the merge if needed:

```bash
git commit
```

---

## **Phase 9 — Pushing to GitHub**

```bash
git push origin main
```

This publishes:

* Your blog source code
* Your commits (including file deletions like `about.md`)
* Triggers GitHub Pages deployment automatically

---

## **Phase 10 — Key Pitfalls & How to Avoid Them**

| Issue                | Cause                               | Fix                                     |
| -------------------- | ----------------------------------- | --------------------------------------- |
| Gems not found       | PATH not set dynamically            | Configure `GEM_HOME` and reload profile |
| Theme missing        | Listed in Gemfile but not installed | `bundle install`                        |
| Push rejected        | Remote repo ahead of local          | `git pull --no-rebase`                  |
| Editor fails to open | `vi` not installed/configured       | Set `git config pull.rebase false`      |

---


You are correct — the **webrick** requirement should be explicitly documented, especially for Ruby 3.x environments on Arch Linux.

Add the following section in your blog under the Ruby setup or dependency phase:

---

## **Phase X — Installing Webrick (Required for Local Jekyll Server on Ruby 3.x)**

When you run a Jekyll site locally using:

```bash
bundle exec jekyll serve
```

You may encounter an error similar to:

```
cannot load such file -- webrick (LoadError)
```

### **Why this happens**

* In **Ruby 3.0+**, the `webrick` HTTP server library is **no longer bundled by default**.
* Jekyll still depends on `webrick` to run its **local development server** (`jekyll serve`).
* On systems like **Arch Linux**, where Ruby is lean and user-scoped, this dependency must be installed manually.

### **Fix**

```bash
bundle add webrick
```

or if you prefer installing directly via gem:

```bash
gem install webrick
```

After installation, verify it exists in your bundle:

```bash
bundle install
```

Now restart your Jekyll server:

```bash
bundle exec jekyll serve
```

Your local preview should run without issues.

---

### **Recommendation**

Even if your site builds on GitHub Pages without a local server, **installing webrick is important for:**

* Testing posts before publishing
* Debugging theme/layout issues locally
* Ensuring `jekyll serve` works in your venv-like gem environment

---



## **Summary**

1. Configure Ruby environment dynamically
2. Install Jekyll + Bundler
3. Generate blog using `jekyll new .`
4. Install theme dependencies via `bundle install`
5. Commit changes locally
6. Pull remote changes if needed
7. Push to GitHub to deploy

---

# Jekyll GitHub Pages Blog Project Structure

```
MyBlog/
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.html
├── about.md
├── _layouts/
│   └── default.html
├── _posts/
│   └── 2025-12-27-example.md
├── assets/
│   ├── css/style.scss
│   └── images/
└── _site/ (DO NOT EDIT)
```

---

## File & Folder Purpose

| Name | Purpose | Editable? |
|------|---------|:--------:|
| `_config.yml` | Main site configuration, metadata, SEO settings, navigation links | Yes |
| `Gemfile` | Lists Ruby dependencies for Jekyll and plugins | Yes |
| `Gemfile.lock` | Auto-generated file that locks gem versions | No (generated) |
| `index.html` | Homepage of your blog | Yes |
| `about.md` | About page where you add your bio + social links | Yes |
| `_layouts/default.html` | Template layout applied to pages/posts | Yes |
| `_posts/*.md` | Your actual blog posts (date-based naming required) | Yes |
| `assets/css/style.scss` | Main styling file (SCSS compiles into CSS) | Yes |
| `assets/images/` | Stores images, logos, figures for blog posts | Yes |
| `_site/` | Final built output folder generated by Jekyll | No |

---

## Important Notes

- The `_site/` folder is **automatically generated** when you run `jekyll build` or `jekyll serve`.  
  **Never edit files inside it**, because your changes will be erased on the next build.
- Blog posts must follow the naming format:

  ```
  YYYY-MM-DD-title.md
  ```

  Example:

  ```
  2025-12-27-my-first-post.md
  ```

- Markdown posts can contain YAML front matter at the top, like:

  ```yaml
  ---
  layout: default
  title: "Exploring Wave Interactions"
  description: "A physics-based blog post exploring wave superposition and interference."
  ---
  ```

---

## Typical Workflow (for documentation)

```bash
# Install Jekyll + Bundler
gem install jekyll bundler

# Create new site
jekyll new MyBlog
cd MyBlog

# Install missing dependency for Ruby 3+
bundle add webrick

# Serve locally
bundle exec jekyll serve

# GitHub workflow
git init
git add .
git commit -m "Initial Jekyll blog setup"
git branch -M main
git remote add origin <your-repo-url>
git pull origin main --rebase  # If remote is ahead
git push -u origin main
```

---




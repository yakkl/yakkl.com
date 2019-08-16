---
title: Import Button
weight: 99
publishdate: 2018-10-02 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-10-02 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
# menu:
#   docs:
#     parent: Other
#     weight: 5

---
The import button lets users create their own copy of your project and import it into Yakkl in one fell swoop.

If you have a static site project &mdash; like a theme or starter site &mdash; that is optimized for use with Yakkl and you want to share it, adding an import button to your readme or website will make it easy for users to get started using your project with Yakkl.

## The Add Site URL

Your import button will use our *quick start* flow to clone the project into the user's account and import it into Yakkl. The most basic add site URL will look like this: `https://yakkl.com/quick-start?repo=user/project`. In this case, the `repo` parameter is the path to the repo on Github. Quick start accepts the following URL parameters:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| `repo` | Path to repository, of the format `$group/$project` | String | None |
| `provider` | Which git provider your repository is hosted from | `github`, `gitlab`, or `bitbucket` | `github` |
| `engine` | The static site generator used by your project. | `hugo`, `jekyll`, or `vuepress` | None |
| `version` | The Hugo version to use (only applies when engine is `hugo`) | Decimal | Latest |
| `branch` | The repository branch to import | String | `master` |
| `config` | Relative path to your source files | String | `/` |

## Project Requirements

Your project should be a fully functional static site project that can be imported into Yakkl, and should be available from a **public repository** on Github, GitLab, or BitBucket.

For example, if you want to create an import button for your Hugo theme, you should create a new Hugo site configured to use your theme. Yakkl won't be able to import your theme code on its own, as it doesn't share the same file structure as a Hugo site.

## Buttons

We have provided three SVG buttons for your use:

### Brand Color

<div class="vert-level">
  <img style="min-height: 2em;" class="no-lightbox" src="https://assets.yakkl.com/import-to-yakkl.svg" /> 
  <code>https://assets.yakkl.com/import-to-yakkl.svg</code>
</div>

### Light
<div class="vert-level">
  <img style="min-height: 2em;" class="no-lightbox" src="https://assets.yakkl.com/import-to-yakklW.svg" /> <code>https://assets.yakkl.com/import-to-yakklW.svg</code>
</div>

### Dark
<div class="vert-level">
  <img style="min-height: 2em;" class="no-lightbox" src="https://assets.yakkl.com/import-to-yakklK.svg" /> <code>https://assets.yakkl.com/import-to-yakklK.svg</code>
</div>

## Button Generator

You can use our button generator below to create the appropriate markup for your button.

{{% add_site_button_generator %}}
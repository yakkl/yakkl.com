---
aliases:
- "/docs/developing-with-jekyll/project-structure/"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Project Structure
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 2
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-project-structure
    weight: 8

---
In Jekyll, project structure and naming is very important. The way you structure and name your project directly affects the organization of your built static site.

For example, a Jekyll site may look like this:

```
.
├── _config.yml
├── _data/
|   └── members.yml
├── _drafts/
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes/
|   ├── footer.html
|   └── header.html
├── _layouts/
|   ├── default.html
|   └── post.html
├── _posts/
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass/
|   ├── _base.scss
|   └── _layout.scss
├── _site/
├── .jekyll-metadata
└── index.html

```

For a full breakdown on how this directory structure works, [see the Jekyll docs](https://jekyllrb.com/docs/structure/).

## How Yakkl Parses Jekyll

Based on the example structure above, let’s explain how Yakkl parses your site.

## Content

Yakkl parses the root of your project for any `.html` files, as well your `_drafts/` folder and your `_posts/` folder for content and displays them under the "Content" section of the CMS.

Any `.html` files get added to the `Page` content type, and can be accessed from there in the CMS.

Content found in both the `_drafts/` and `_posts/` folder are parsed as a `Post` content type, and can be accessed from there in the CMS.

Any other folder following the `_NAME/` format are parsed as additional content types, and a new section is added to the CMS.

*For example, everything in the `_sample/` folder will be added to the `Sample` content type and can be accessed from there in the CMS.*

## Data Files

Any files found inside the `_data/` folder are parsed as data files and are displayed individually in the CMS under the "Data" section.

## Front Matter Templates

Upon initial import, we will parse your site to generate [Front Matter Templates][1]. More details found in the [Front Matter Templates][1] doc.

## Themes

Jekyll also supports Gem based themes. See the references below for more information.

## Further Reading
- [Jekyll Directory Structure Reference](https://jekyllrb.com/docs/structure/)
- [Installing Gem-based Themes](https://jekyllrb.com/docs/themes/#installing-a-theme)

[1]: /docs/settings/front-matter-templates

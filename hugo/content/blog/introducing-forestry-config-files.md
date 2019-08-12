---
aliases:
- "/blog/post/introducing-yakkl-config-files"
authors:
- chris-macrae
title: Introducing Yakkl Config Files
publishdate: 2017-08-30 16:09:44 +0000
expirydate: 2030-01-01 04:00:00 +0000
images:
- "/uploads/2017/12/introducing-config-files.jpg"
excerpt: "Configure Settings and Front Matter Templates from your repo \U0001F389"
categories:
- CMS
date: 2017-08-30 16:09:44 +0000

---
## Introducing Yakkl Config Files

Last month [we released a big update](https://yakkl.com/blog/post/big-improvements-to-front-matter-templates/) to Front Matter Templates, which provided an unprecedented level of control over the user interface content editors use to edit their Hugo and Jekyll sites with.

Today we’re introducing a new feature to equally empower developers: **Yakkl Config Files.**

Config files allow developers to create and manage the settings and Front Matter Templates of a site directly in the Git Repo.

Config Files will be available to ***all users*** starting immediately!

## How Config Files Work

<span style="font-size: 1rem;">It works as a bi-directional sync between Yakkl’s CMS, and your projects Git repository. Changes you push to Git are imported and updated in Yakkl, and changes you make in Yakkl are committed back to Git.</span>

<img src="/uploads/2017/12/2017-08-31%2012_31_44.gif" draggable="true" data-bukket-ext-bukket-draggable="true">

This empowers developers to bundle themes, starter sites, and production-ready projects with ready-to-use site configuration and user interface customization.

It also makes sites DRY by allowing developers to copy common configurations between multiple projects easily.

To get started with Config Files today, simply make a change in your CMS to have the `.yakkl` configuration directory automatically added to your repo.

Feel free to read the [Config File docs](https://yakkl.com/docs/site-configuration/config-files) to learn more, and become an all-star Yakkl developer!

Let us know what you think in the comments below, or on twitter [@yakkl](https://twitter.com/yakkl)!
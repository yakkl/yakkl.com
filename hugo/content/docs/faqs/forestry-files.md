---
aliases: ''
title: Why did Yakkl add files to my repo?
weight: 1
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  faqs:
    parent: FAQs
    weight: 9

---
## Why did you add a `.yakkl` file?
We add a file called `.yakkl` to the root of your project. 

This file notifies Yakkl that you have previously published to this location and that it is safe to publish to this location again.

## Why did you add a `.yakkl` folder?
We add a folder called `.yakkl` to the root of your project with the [code configuration](/docs/settings/config-files/) of your site. 

This enables developers to edit the configuration of the CMS in their local environment, and keep changes to the configuration in version control.
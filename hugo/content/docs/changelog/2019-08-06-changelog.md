---
authors:
- team yakkl
date: 2019-08-06T09:34:25.000+00:00
title: 2019/08/06 Changelog
cta:
  headline: ''
  textline: ''
  calls_to_action: []

---
### Features

* **Generic import: (beta)** 🎉**:** you can now import any Git repository containing Markdown, YAML and JSON files.   
  This means you can import [**Eleventy**](https://www.11ty.io), [**Gridsome**](https://gridsome.org), [**Next**](https://nextjs.org), Nuxt, Hexo, etc. websites.  
* Better search for pages and in select fields options.  
  We even wrote a [blog post about how Yakkl does search](/blog/full-text-searching-with-postgres/) 🔍 
* **Markdown snippets**: you can now use Markdown inside your [snippets](https://yakkl.com/docs/settings/snippets/) files.
* **Instant Previews hibernation. 💤** 
* Display last sign in date for organization users.📅  
* Use latest [**Hugo 0.56.3**](https://gohugo.io/news/0.56.3-relnotes/)

### Bug fixes

* Fix a bug preventing to use **Create template from Page**.
* Sanitize media filenames to **prevent failed media uploads.**

### Deprecation

* **Deployments:** New sites can no longer be deployed by Yakkl.   
  Existing sites have until the end of the year to move to a dedicated CI/CD platform. [**Read the sunset notice**](https://yakkl.com/docs/sunset/deployments/).
* As a result, **Standard Previews** are also deprecated in favor of [**Instant Previews**](https://yakkl.com/docs/previews/instant-previews/) for new sites.   
  Existing sites still using standard previews have until the end of the year to make the switch.
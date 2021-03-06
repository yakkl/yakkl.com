---
title: Sidebar Configuration
weight: 1
publishdate: 2018-07-24 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-10-24 04:00:00 +0000
layout: single
# menu:
#   docs:
#     parent: Settings & Configuration
#     weight: 4

---
You can define which areas (folders) of your site contain editable content files via the `sections` parameter in your `.yakkl/settings.yml` configuration file.

A content section in Yakkl is primarily defined by the path to the folder containing content files, and a [glob](/docs/guides/misc/working-with-globs/) to match against the contents of that folder.

## Options

{{% markdownpartial "docs/section-config-attribute-table.md" %}}

### _Sidebar Order_

Sections will appear in the sidebar in the same order they are defined.

### Type

The `type` parameter is used by Yakkl to determine how to handle the files defined in the content section.

{{< dl >}}
{{% dt %}}
Directory
<br />`directory`
{{% /dt %}}
{{% dd %}}
`directory` is the default type for sidebar sections. A `directory` section will search for content files according to the `path` and `match` configuration.
{{% /dd %}}

{{% dt %}}
Document
<br />`document`
{{% /dt %}}
{{% dd %}}
A `document` section can be used to allow a single document to be edited. Use the `path` option to specify the path to the file you want to be edited. Use the [read_only](#read-only) option to prevent this document from being edited in Yakkl.
{{% /dd %}}

{{% dt %}}
Heading
<br />`heading`
{{% /dt %}}
{{% dd %}}

![](/uploads/2018/08/sidebar-headings.png)
The `heading` section type can be used to separate your sidebar sections into logical groups. A section of type `heading` only needs to specify a label for the heading.
{{% /dd %}}

{{% dt %}}
Jekyll Pages & Jekyll Posts
<br />`jekyll-pages`
<br />`jekyll-posts`
{{% /dt %}}
{{% dd %}}
The other two options are `jekyll-pages` and `jekyll-posts`, which will follow special rules for Jekyll's [page](https://jekyllrb.com/docs/pages/) and [post](https://jekyllrb.com/docs/posts/) content types.
{{% /dd %}}
{{< /dl >}}

{{% warning %}}
The `jekyll-pages` and `jekyll-posts` section types should only be used with Jekyll sites. Additionally, you can only have one `jekyll-pages` section and one `jekyll-posts` section per site.
{{% /warning %}}

### Path

The `path` parameter should be a path to the directory that holds this section's content files, relative to the root of your repository. This setting only applies to sections of type `directory`.

{{% tip %}}
Because the path is relative to your project root, users configuring content sections for their Hugo site will want to prefix all of their paths with `content/`.
{{% /tip %}}

### Match

{{% tip %}}
Read our short guide on [working with globs](/docs/guides/misc/working-with-globs/) for advice on how to configure the `match` and `exclude` parameters for sidebars.
{{% /tip %}}

The `match` parameter should be a [glob pattern](/docs/guides/misc/working-with-globs/) that matches the files you want to be able to edit for this content section. Files that don't match this pattern will be ignored. This setting only applies to sections of type `directory`.

The default `match` value is `**/*` which will match all files, including any files in subdirectories.

{{% warning %}}
You can use the `match` parameter to separate a single directory into multiple content sections, but take care to ensure that no files overlap between sections. This may cause unexpected behavior.
{{% /warning %}}

### Exclude

The `exclude` parameter allows you to exclude files and paths from your `directory` sections. `exclude` accepts a [glob pattern](/docs/guides/misc/working-with-globs/) just like `match`.

{{% tip "Excluding files from Jekyll pages" %}}
For a `jekyll-pages` section, Yakkl will use the value of the `exclude` parameter in your [Jekyll configuration](https://jekyllrb.com/docs/configuration/).
{{% /tip %}}

### Create

![By default, users can create both files and directories](/uploads/2018/10/create-directory-ui.png)

The `create` parameter allows you to specify whether new files can be created for the section. 

- `all`: Users can create new files and folders
- `documents`: Users can create new files, but not new folders
- `none`: Users can edit existing files, but cannot create new ones

### Templates

Pass in an array of Front Matter Template filenames (without their extension) to limit the available Front Matter Templates when creating a new content item in this section. The templates will be shown in the dropdown in the same order they are listed here, with the first template being the default selection. If only one template is defined, the template selection dropdown will not appear when adding new content.

### New Document File Extension

The `new_doc_ext` parameter lets you specify the extension to be used for new files created in this content section. You can specify a file extension with or without the extension delimiter (the `.`). The default file extension is whatever you have set as the **New Page Extension** in your site settings.

### Read Only

The `read_only` setting only applies to `document` sections. This will prevent the document from being editable in Yakkl, only showing the contents of the document on the page. When used with a markdown document, the markdown will be converted to HTML and rendered appropriately. Read-only document sections are a great way to include documentation for your editors that can be accessed directly from the Yakkl sidebar.

## Examples

Jekyll site with pages, posts, and a custom collection:

    sections:
    
    - type: document
      label: Help
      path: README.md
      read_only: true
    
    - type: heading
      label: Content
    
    - type: jekyll-pages
      label: Pages
    
    - type: jekyll-posts
      label: Posts
    
    - type: directory
      path: _events
      label: Events
      templates:
      - event

Multilingual Hugo Blog:

    sections:
    
    - type: heading
      label: English
    
    - type: directory
      path: "content/posts"
      match: "**/*.en.md"
      label: Posts
      new_doc_ext: ".en.md"
    
    - type: heading
      label: Français
    
    - type: directory
      path: "content/posts"
      match: "**/*.fr.md"
      label: Posts
      new_doc_ext: ".fr.md"

## Configuring Data File Sections

When using the [Datafile Sections](/docs/editing/data-files/#datafile-sections) behavior, Yakkl will include data files when collecting content in a sidebar section. The `directory` type can be used with the `match` and `new_doc_ext` options to create a section that allows to creation and management of data files similar to the behavior of markdown content.

### Datafile Section Example

Access an entire directory of data files:

```
sections:
- type: directory
  label: Data
  path: data
  match: "*.toml"
  new_doc_ext: ".toml"
  create: all
```

Access a specific data file:

```
sections:
- type: document
  label: Authors
  path: _data/authors.yml
```
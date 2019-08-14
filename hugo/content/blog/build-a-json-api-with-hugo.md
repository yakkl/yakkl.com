---
title: Build a JSON API With Hugo's Custom Output Formats
description: In this article, we create simple read-only API with the static site
  generator Hugo to build a JSON API using its Custom Output Formats feature.
date: 2018-04-13 16:00:27 +0000
authors:
- Régis Philibert
publishdate: 2018-04-13 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/04/aleksander-naug-84513-unsplash.png"
categories:
- Hugo
- Frontend-Friday
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
As developers, we love open and accessible data.  For example, you may want to use your local transit data for a mobile app, or maybe you want a service like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/) to send you an email every time the weather forecast calls for rain.  If you’re a super geek like [@bdougieyo](https://twitter.com/bdougieyo), you’ve built an app that tells you when to leave work in order to avoid traffic from your local baseball team’s home games ([from his excellent talk here](https://youtu.be/XpveOehxvoM?t=6m1s)).

In order to make data that is “machine friendly” like this, we can expose it with a [RESTful API](https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming). Normally, the quickest way to bootstrap an API like this would be to start with a popular framework like Flask or Ruby on Rails, spin up a webserver, and connect a database. We can achieve something even simpler, however, by creating a read-only API with a static site generator. In this article, we’ll use [Hugo](https://gohugo.io) to build a JSON API using its [Custom](https://gohugo.io/templates/output-formats#output-formats) [Output Formats](https://gohugo.io/templates/output-formats#output-formats) feature.

<div id="import-snipcart-demo-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/regisphilibert/hugoGetApi.git"
engineName="hugo"
engineVersion="0.42.2"
heading="Get Started With Hugo JSON API"
linkText="Import the Hugo Project" %}}
</div>

{{% warning %}}
The Hugo JSON API can easily be edited in Yakkl but when you preview please make sure to add `index.json` (e.g. `https://the-site-id.preview.yakkl.com/players/frank-j-robinson/index.json`)
{{% /warning %}}

## Planning the Interface

API stands for **Application Programming Interface**. When it comes to building an API, designing a good  **Interface** is as important as the underlying software. Other developers will use this **interface** for **programming their applications.** See what I did there?

{{% tip %}}

A **RESTful API** is a slightly relaxed interpretation of the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) paradigm for API design: its goal is to use the built-in semantics of the HTTP standard to define the interface.
<br />
<br />
One of the primary ways an API can be RESTful is by using **HTTP verbs** to denote the intent of the request. These verbs include `GET`, `PUT`, `POST`, and `DELETE`, and correspond to different actions that should be performed on the requested resource. Since our static site can’t run any backend code, it can’t do anything meaningful with a `PUT`, `POST`, or `DELETE` request: we will only respond to `GET`. This is why our API is **read-only**.

{{% /tip %}}

Our sample project will provide data for sports teams and players of a fictional High School.

We’ll start with three endpoints where we’ll focus on returning listed data and individual player data:

| Endpoint | Resource |
| :--- | :--- |
| GET / | Lists everything |
| GET /players | Lists players |
| GET /players/{:slug} | Data for a single player |

Later on, we will add teams and a sports taxonomy, adding three new endpoints.

| Endpoint | Resource |
| :--- | :--- |
| GET /teams | Lists teams |
| GET /team/{:slug} | Team data and players |
| GET /sports/{:sport} | List of players and teams for the specified sport |

## Setting up the Site

{{% tip %}}
Download the [sample project](https://github.com/regisphilibert/hugoGetApi/) to hit the ground running.
{{% /tip %}}

Start by creating a new Hugo site (see our [Up & Running with Hugo](https://yakkl.com/blog/up-and-running-with-hugo/) series or Hugo’s [quick start guide](https://gohugo.io/getting-started/quick-start/)).

In our content directory, we’ll create a `players` folder and add some players to it.

    ├── my-hugo-project/       # The root of our Hugo project
    |   ├── content/           # Where all site content is stored 
    |   |   ├── players/       # Your players section  
    |   |   |   ├── frank-j-robinson.md
    |   |   |   └── jody-garland.md

Our player markdown will look something like this:

```md
---
title: "Frank J. Robinson"
date: 2018-02-05
age: 17
emergency_contact: +1 (555) 555 5555
year: junior
---

Frank, our number one second baseman!
```

## Output Formats

By default, Hugo will build an HTML version of each page. It will also build an XML version of your home page, using its built-in RSS Output Format.

In our case, all we need to output is a JSON formatted file for each page, section and the home page.

The JSON output format is also [built-in](https://gohugo.io/templates/output-formats/#output-formats), all we need is to open our `config.toml` file and tell Hugo where to use it.

```toml
[outputs]
    page = ["json"] # A player
    section = ["json"] # All players
    home = ["json"] # Everything
```

Next, we need to create a template for Hugo to build this format. When creating Hugo template files for a custom output format, we need to follow a specific naming convention:

    {pageKind}.{outputFormatName}.{extension}

To build our single players page, Hugo will look for

    layout/_default/single.json.json 

To build our section list page and our home page, Hugo will look for

    layouts/_default/list.json.json

## Templating

We will use custom templates to build the API responses for our first 3 endpoints. Each of them will use a consistent « player » object. We will need to create templates to support the following views:

* A list view for our players section and home page.
* A single item view for each player's details.

To achieve this, we’ll create the following templates in `/layouts/_default/`:

* `baseof.json.json` — A [base template](https://gohugo.io/templates/base/#base-template-lookup-order) for our API response.
* `item.json.json` — The single item object, which will be reused in all of our templates, every time we need to output a player. In Hugo we call this a [Content View](https://gohugo.io/templates/views), but for our API I see it more like a transformer.
* `single.json.json` — The response output for a single player
* `list.json.json` — The response output for a list of players

[Base templates](https://gohugo.io/templates/base) are top-level templates that are the starting point for all pages in Hugo. They are usually full of HTML where we lodge in different blocks, but our JSON base will be much simpler. Our API response should contain a `data` object on success and an `error` object on error.  So we will set up the data object and use a block for the individual response.

Our simple `baseof.json`:

```go-text-template
{
    "data" : {{ block "response" .}}{{ end }}
}
```

### item.json.json

The Hugo docs suggest you call this template `li.json`, but for clarity we’ll call it `item.json`. This is the one item we’ll load or render every time we want to output information for a player.

We want the output of a player object to look like this:

```json
{
    "name": "Frank J. Robinson",
    "contact" : "+1 555 555-555",
    "permalink" : "https://school.api/players/frank-j-robinson/index.json"
}
```

To achieve this, add the following to `item.json.json`:

```json
{
    "name": "{{ .Title }}",
    "contact" : "{{ .Params.emergency_contact }}",
    "permalink" : "{{ .Permalink }}"
}
```

That's all there is to it!

### single.json.json

We just have to render our `item.json.json` inside our response block.  To do so, add this to `single.json.json`.

```go-html-template
{{ define "response" }} {{ .Render "item" }} {{ end }}
```

Now you should be able to visit the API endpoint for a single player ([http://localhost:1313/players/frank-j-robinson/index.json](http://localhost:1313/players/frank-j-robinson/index.json)) and get a response.

{{% warning %}}
While developing your API, you will need to run the `hugo serve` command with the `--disableFastRender` flag in order for Hugo to automatically rebuild these JSON files.
<br /><br />
Also, note that Hugo's built-in webserver can't live reload non-HTML documents, so you will need to manually reload the browser to see your changes.
{{% /warning %}}

```json
{
    "data": {
        "name": "Frank J. Robinson",
        "contact": "+1 (555) 555 5555",
        "permalink": "https://school.api/players/frank-j-robinson/index.json"
    }
}
```

### list.json.json

For our list template, we need to iterate over the current section’s pages and render our `item.json.json` template for each one inside the response block.

```go-text-template
{{ define "response" }}
[
    {{ range $index, $e := .Data.Pages }}
    {{ if $index }}, {{ end }}{{ .Render "item" }}
    {{ end }}
]
{{ end }}
```

We're using the `$index` variable here to prevent our template from outputting a comma after the last item in our array, since that would result in invalid JSON.

Now your players API endpoint (http://localhost:1313/players/index.json) should return a list

```json
{
    "data": [
        {
            "name": "Frank J. Robinson",
            "contact": "+1 (555) 555 5555",
            "permalink": "http://localhost:1313/players/frank-j-robinson/index.json"
        },
        {
            "name": "Jody Garland",
            "contact": "+1 (555) 555 5555",
            "permalink": "http://localhost:1313/players/jody-garland/index.json"
        },
        ...
    ]
}
```

### 404.json

If the consumer of our API requests a nonexistent resource, it would be nice if we could return a 404 response with an error message in valid JSON. Let's add a `404.json` in our static directory:

```json
{
    "error" : "404",
    "message" : "page not found"
}
```

Then, all you have to do is make sure your server redirect to this file in case of a 404. If you’re not familiar on how to set up a server redirect, check out this [overview](https://gohugo.io/templates/404/) on different ways to go about it.

## Adding Teams and Sports

Great job! You just built a simple but fully functioning API using Hugo’s Output formats and custom templates. While we're on a roll, let’s keep going with some additional features.

### Adding Teams

A lot of these steps are similar to creating the endpoint for `players`. First, we’ll add a `teams` section to our content directory and add team `.md` files. We’ll create `/content/teams/sly-turtles.md`.

```md
---
title: Sly Turtles
mascot: Turtle Todd
---

Sly Turtles were cool before Nemo!
```

We need a new item object to display a team. All we have to do is create `layouts/teams/item.json.json` for Hugo to pick it up instantly when rendering a page from`teams`.

```go-text-template
{
    "title": "{{ .Title }}",
    "mascot": "{{ .Params.mascot }}",
    "permalink": "{{ .Permalink }}"
}
```

And we have a team: http://localhost:1313/teams/sly-turtles/index.json

```json
{
    "data": {
        "title": "Sly Turtles",
        "mascot": "Turtle Todd",
        "permalink": "http://localhost:1313/teams/sly-turtles/index.json"
    }
}
```

### Improving our response

Now that we have two types of entries, it makes sense to provide some additional information when listing them in our `list.json.json`. This is the structure of our new response:

* The type of resource we're looking at
* The number of results found
* An array of results

```go-text-template
{{ define "response" }}
{
  {{ with .Section }}
  "section" : "{{ . }}",
  {{ end }}
  "count" : "{{ len .Data.Pages }}",
  "items" : [
  {{ range $i, $e := .Data.Pages }}
  {{ if $i }}, {{ end }}{{ .Render "item" }}
  {{ end }}
  ]
}
{{ end }}
```

### Adding a Taxonomy for Sports

Adding a sports category into the mix is not that complicated. First, we need to open `config.toml` to tell Hugo two things:

1. We are declaring a new taxonomy called _sports_, and
2. Taxonomies are also compatible with our JSON output format.

```toml
[taxonomies]
   sport = "sports"
[outputs]
   page = ["json"] # A player
   section = ["json"] # All players
   home = ["json"] # Everything
   taxonomy = ["json"] # All items from a sport
```

We can now add `sports` to our players and teams:

```yaml
---
title: "Frank J. Robinson"
[...]
sports: ["soccer", "baseball"]
```

In our `list.json.json` template, we could then add the possibility of a taxonomy page and enrich the output by checking if the page is of kind `section` or `taxonomy`.

```go-text-template
{{ with eq .Kind  "section"}}
    "section" : "{{ $.Section }}",
{{ end }}
{{ with eq .Kind  "taxonomy"}}
    "taxonomy" : "{{ $.Data.Singular }}",
    "term" : "{{ $.Data.Term }}",
{{ end }}
```

We now have a sport index: http://localhost:1313/sports/football/index.json

```json
{
    "data": {
        "taxonomy": "sport",
        "term": "football",
        "count": "3",
        "items": [
            {
                "name": "Jody Garland",
                "contact": "+1 (555) 555 5555",
                "permalink": "http://localhost:1313/players/jody-garland/index.json",
                "year": "freshman"
            },
            {
                "name": "John Artfield",
                "contact": "+1 (555) 555 5555",
                "permalink": "http://localhost:1313/players/john-artfield/index.json",
                "year": "sophomore"
            },
            {
                "title": "Sly Turtles",
                "type": "teams",
                "mascot": "Turtle Todd",
                "permalink": "http://localhost:1313/teams/sly-turtles/index.json"
            }
        ]
    }
}
```

### Creating a generic item.json.json

For the sake of simplicity we added `items.json.json` to `layouts/_default`. However, it really only caters to the `players` endpoint. Let’s move it to `layouts/players/item.json.json`.

Instead we'll create a more generic `layouts/_default/item.json.json` for all other types of entries.

```go-text-template
{
    "title": "{{ .Title }}",
    "date": "{{ .Date }}",
    "type": "{{ .Type }}",
    "permalink" : "{{ .Permalink }}",
    "summary" : "{{ .Summary }}"
}
```

Our API is now Content-type agnostic!

## Next Steps

What we built is a stand alone API, but in order to add it as an extra layer to your existing website, all you'll have to do is drop the templates we created today in your project's `layouts` directory and assign the needed output formats to your page kinds, without forgetting to mention the default ones: HTML and for some page kinds, RSS. This way Hugo will output the desired pages in HTML, RSS and JSON:

```toml
[outputs]
    page = ["HTML", "json"]
    home = ["HTML", "RSS", "json"]
    section = ["HTML", "RSS", "json"]
    ...
```

Using Hugo's Output Formats we were able to tell Hugo to output our pages in JSON. We now have an out of the box RESTful GET API!

Thanks to its templating logic we can now change or add keys to our players’ or teams’ output, add new content type and create a custom output object for them or let them use the default one.

### Using Yakkl for Content Management

![](/uploads/2018/04/yakkl_admin_demo-1.png)

Bootstrapping an API this easily is great, but your content editors might not enjoy working with raw markdown files and dealing with a git repo. Fortunately, we can use the Yakkl CMS to instantly add a content management backend for our API!

<div style="text-align: center;"><a href="https://yakkl.com/signup" class="button small primary">Get Started With Yakkl</a></div>
<br /><br />
From the content side, our JSON API is no different than a conventional Hugo site. This means that managing our content in Yakkl will work the same regardless of whether we plan to output JSON or HTML (or both!)

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday 📅</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We will explore <a href="https://yakkl.com/blog/sawmill-layout-composer-for-hugo-and-yakkl/">innovative content strategy options within the Yakkl CMS</a></p><p><strong>Last week:</strong> We compared the usability and features of Hugo and Jekyll to help you decide <a href="https://yakkl.com/blog/hugo-and-jekyll-compared/">which static site generator is right for you</a></p></div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16830678">Discuss on Hacker News</a>
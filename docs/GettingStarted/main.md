<!--------------------------------------
About
--------------------------------------->
## About

Welcome to **Notes**, a demonstration project created by Warren Anderson to implement [Docsify](https://docsify.js.org) and  using the **docs-as-code** philosophy, sometimes referred to as docs-like-code. Other products like [GitBook](https://www.gitbook.com), [ReDoc](https://redocly.github.io/redoc/), and [MkDocs](https://www.mkdocs.org) are also a great choices.

<!--------------------------------------
Releases
--------------------------------------->

## Releases

A new release of the documentation is produced with every change of the major or minor number <span style="text-decoration: underline;">1</span>.<span style="text-decoration: underline;">0</span>.x in a release of the Notes backend server.

**Current Documentation Releases**

- v1.1
- [v1.0](https://wkande.github.io/notes-docs-v1.0/)

**Notes Backend Releases**

Go to the [Release Section](https://github.com/wkande/notes/releases) of the **notes repo** for release information about the Notes backend server.

<!--------------------------------------
MIGRATION
--------------------------------------->

## Migration

When the Notes backend server reached v1.1.0 a new set of Documentaiton v1.1 was released. The Notes backend server has new functionality.

>**PATCH /note/:id/tags**

This new endpoint removes all tags from a note. As with other endpoints the user's email is pulled from the JWT token to identify the user.

There are no migration steps required to use the latest release of the Notes backend server.

<!--------------------------------------
DOCS-LIKE-CODE
--------------------------------------->

## Treat Docs-Like-Code

**Documentation Like Code** (a.k.a. docs-as-code or docs-like-code) suggests that we write documentation with the same tools as code:

- Issue Trackers
- Version Control (Git)
- Plain Text Markup (Markdown, reStructuredText, Asciidoc)
- Code Reviews
- Automated Tests

This means following the same workflows as development teams, and being integrated in the product team. It enables a culture where writers and developers both feel ownership of documentation, and work together to make it as good as possible. The **Notes** project follows this philosophy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ftnVllssoI8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Tooling
**ReDoc** is considered the Gold-Standard by many developers. It can render OpenAPI v2.0 or v3.0 files.

**Docsify** generates documentation on the fly. It smartly loads and parses Markdown files and displays them as a website. The documentationd for Notes is a set of markdown files rendered by Docisfy and some of its many plugins. The documentation you are reading is hosted by the GitHub Pages site attached to the [notes-docs-{vrs}](https://github.com/wkande/notes-docs-{vrs}) GitHub Repo.

**GitBook** has an online editor but will also pull markdown files from a GitHub repo. GitBook then hosts the documentation set for you.

**MkDocs** a simple to use markdown renderer that focuses on a single but small YAML definitions file.

**Git** is a major player for docs-like-code. Documentation is often stored right along side the code using Git. The most common practice is to store the docs in a separate repo from the code, while both repos exist within the same organization.

> Store docs in the same repo as the code.
> <br>Usually when the Developer is also the Tech Writer.
> <br>Smaller projects.

> Store docs and code in separate repos but in the same orgainzation.
> <br>Usually when the Developer and the Tech Writer are two different people.
> <br>Larger projects.

The **Notes** project utilizes the second approach shown above.

<!--------------------------------------
HEROKU
--------------------------------------->

## Heroku

There is a **Heroku Dyno** running **Notes**. Call it using CURL, with your App or with Insomnia. The dyno uses a free tier plan and may be idle. Calling an idle dyno may take a moment to come alive. Subsequent calls will be fast.

Change the **email=me@domain.com** below to your email address. A code will be sent to your email address from support@lelandcreek.com.

```bash
curl -d "email=me@domain.com" \
-H "Content-Type: application/x-www-form-urlencoded" \
-X POST https://docs-as-code.herokuapp.com/user/code | json_pp
```

<!--------------------------------------
INSOMNIA
--------------------------------------->

## Insomnia

You can execute all the APIs using [Insomnia](https://insomnia.rest) by downloading, unzipping and importing the <a id="raw-url" href="assets/Insomnia.json.zip">Notes API Definitions</a> file into Insomnia. Everything is set up and ready to go. While the APIs can return either JSON or XML, all Insomnia requests are setup to return JSON.

##### Import the Notes API Definitions

1. Download the <a id="raw-url" href="assets/Insomnia.json.zip">Notes API Definitions</a> file.

1. Choose **Preferences** from the Insomnia Menu.

1. Select the **Data** tab.

1. Select **Import Data** > **From File**.

1. Locate and import the **Notes API Definitions** file.

![insomnia](assets/Insomnia.png)

##### Try Authenticating

Be sure you are using the **prod** environment.

1. Select the **Users** folder > **Create a Code** endpoint > select the **Send** button > enter your **Email Address**.

1. Get the **Code** from your email.

1. Select the **Get a Token** endpoint > select the **Send** button > enter your **Code**.

A **JWT Token** has now been added to the Insomnia ENV and you can now make other API calls.

##### Get your Notes

When you authenticated a note was created for you.

1. Select the **Get user's Notes** endpoint > select the **Send** button.

<!--------------------------------------
LICENSE
--------------------------------------->

## MIT License

Copyright (c) 2020-Present Warren Anderson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

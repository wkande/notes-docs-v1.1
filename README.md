# Notes

<img src="docs/assets/frog.png" alt="drawing" style="width:200px;margin-top:-80px;"/>


Welcome to **Notes**, a demonstration project created by Warren Anderson to implement [Docsify](https://docsify.js.org) using the **docs-as-code** philosophy. Sometimes referred to as docs-like-code.

The Node.js backend, Docsify documentation and Insomnia API Definitions file were created by Warren Anderson.

The Notes project is in two separate GitHub repos.

- [wkande/notes](https://www.github.com/wkande/notes) - Node.js backend API server
- [wkande/notes-docs](https://www.github.com/wkande/notes-docs) - Documentation

## API Reference Guide

The **API Reference Guide** for Notes is a set of markdown files rendered by Docisfy. You can find the source in the [wkande/notes-docs](https://www.github.com/wkande/notes-docs)  GitHub repo.

Visit the [API Reference Guide](https://wkande.github.io/notes-docs/) hosted by the GitHub Pages site attached to the notes-docs GitHub Repo.

## Heroku

There is a instance of **Notes** backend server running on Heroku. If you import the Insomnia API Definition file it will run against the Heroku backend. You can also execute CURL commnads against it found in the API Reference Guide. Since it is on a free instance of Heroku it may be idle. Any call to an API will wake it up but may take a few seconds.

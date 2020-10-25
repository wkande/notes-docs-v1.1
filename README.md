# Notes

<img src="docs/assets/frog.png" alt="drawing" style="width:200px;margin-top:-80px;"/>


Welcome to **Notes**, a demonstration project created by Warren Anderson to implement [Docsify](https://docsify.js.org) using the **docs-as-code** philosophy. Sometimes referred to as docs-like-code.

The Node.js backend, Docsify documentation and Insomnia API Definitions file were created by Warren Anderson.

The Notes project is in separate GitHub repos.

- [wkande/notes](https://www.github.com/wkande/notes) - Node.js backend API server
- [wkande/notes-docs-v1.0](https://www.github.com/wkande/notes-docs-v1.0) - Documentation

As new versions of the documentation are created each will be in their own repo. The repo name will end with the version number.

## Documentation

This repo maintains the the API Reference and other Doucmentation for the Notes project. The repo name contains the version of the documentation within.

All documentation for Notes is a set of markdown files rendered by Docisfy. You can find the source in **/docs** folder

Visit the [Note Documentation](https://wkande.github.io/notes-docs-v1.0) hosted by the GitHub Pages site attached to this repo.

## Heroku

There is a instance of **Notes** backend server running on Heroku. If you import the Insomnia API Definition file it will run against the Heroku backend. You can also execute CURL commnads against it found in the API Reference Guide. Since it is on a free instance of Heroku it may be idle. Any call to an API will wake it up but may take a few seconds.

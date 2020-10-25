# Deployment

With every **minor** release (major.minor.patch) of the Notes backend a new release of the Documentation is required.

## Version Variable

Set the documentation version in the index.html Docsify script and teh repo link.

```javascript
plugins:[
  function(hook, vm) {
    hook.afterEach(function(html, next) {
      next(html.replace(/{vrs}/g, "v1.0"));
    });
  }
]

repo: 'https://github.com/wkande/notes-docs-v1.0'
```

## Releases Section

1. Update the Releases section of GettingStarted/main.md.

## Other Manual Changes

- **README**
Change links to `notes-docs-x`.
- **_sidebar**
The sidebar currently does not recognize the {vrs} variable, update manually.
```html
<a href="/notes-doc-v1.0">
  <div id="notesTitle">Notes<sub style="font-size:small;">1.0</sub></div>
  <img id="notesLogo" src="assets/frog.png">
</a>
```

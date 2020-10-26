# Deployment

With every **minor** release (major.minor.patch) of the Notes backend a new release of the Documentation is required.

## Version Variable

Set the documentation version in the index.html Docsify script and the repo link.

```javascript
plugins:[
  function(hook, vm) {
    hook.afterEach(function(html, next) {
      next(html.replace(/{vrs}/g, "v1.1"));
    });
  }
]

repo: 'https://github.com/wkande/notes-docs-v1.1'
```

## Insomnia

1. Export Insomnia AP Definitions > create Zip file into the assets folder.

## Releases Section

1. Update the Releases section of GettingStarted/main.md.

## Other Manual Changes

- **README**
Change links to `notes-docs-x`.
- **_sidebar**
The sidebar currently does not recognize the {vrs} variable, update manually.
```html
<div id="notesTitle">Notes
  <div class="dropdown">
    <button class="dropbtn"><sub style="font-size:small;">v1.1 <i class="fa fa-caret-down"></i></sub></button>  
    <div class="dropdown-content">
        <a href="https://wkande.github.io/notes-docs-v1.1/">v1.1</a>
        <a href="https://wkande.github.io/notes-docs-v1.0/">v1.0</a>
    </div>
  </div>
</div>
```

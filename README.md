## Leaflet Icon Emoji

A simple showcase on how to create a [Leaflet](https://www.leafletjs.com) plugin. This particular example shows how to create a custom emoji icon, using [node-emoji]() to read emoji 'syntax' like `:coffee:` and then use it as a marker in a leaflet map.  

In order to create a plugin in a 'modern' way, the code is bundled together with [rollup](), commonly used in modern JS for building libraries and plugins. This allows us to use more modern syntax like `import/export` and to easily include 3rd party plugins and/or other npm packages.  

*Note*: The bundle created does not include Leaflet, but expects Leaflet to be loaded separately.  

See `index.html` for example usage.

### Instructions

To build the bundle, use the command below.
```
npm run build
```

To start the watch-process, for continuous building, use the command below.
```
npm run watch
```


### TODO
* Add tests

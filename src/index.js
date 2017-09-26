import L from 'leaflet';
import emoji from 'node-emoji'

L.Icon.Emoji = L.Icon.extend({
  initialize: function (options) {
    L.Util.setOptions(this, options)

    // Set the iconsize to the same as the font-size passed through the options.
    this.options.iconSize = [this.options.size, this.options.size]

    // Adjust the anchor of the icon with the size.
    // The reason the horizontal align is different from the vertical (I think) is due to the content being a font.
    // Toggle the backgroundcolor on the div, and you'll see a white edge on the left side of the text.
    this.options.iconAnchor = [this.options.size * 0.68, this.options.size * 0.5]
  },
  createIcon: function() {
    // Create the div-container for the icon
    var container = L.DomUtil.create('div', 'emoji-container')

    // Set the innerHTML to the emoji-unicode of the options.
    container.innerHTML = emoji.get(this.options.emoji)

    // Adjust font-size and line-height.
    container.style.fontSize = this.options.size + 'px'
    container.style.lineHeight = this.options.size + 'px'

    // Call the Icon-specific method inherited from L.Icon
    this._setIconStyles(container, 'icon')
    return container;
  }
})


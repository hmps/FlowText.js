# FlowText.js

FlowText.js is a small JS-module to make text flow with the changes of the viewport. Unminified it's less than 60 lines of JS and it has no dependecies. Since it makes use of addEventListener it won't work in anything less than IE9 but if you setup sensible defaults for you text it really shouldn't be too much of an issue. Progressive enhancements , yoaw.

## How to use
A super simple FlowText setup could look like this
```
<script src="FlowText.js"></script>
<script>
	document.getElementsByTagName('p').FlowText();
</script>
```
All p-elements on your page should now reflow as their parent container resizes.

## Options
There are currently four options:
```
maxFont (default: 36px)
minFont (default: 12px)
compressor (default: 20)
debug (default: false)
```
- Max and min-font should be pretty self-explanatory, they set the bounds for how far up and down the font-size will adjust.
- Compressor is a relative value that sets the font size in relation to the width of the container. Every font is different so you should use some good 'ol eyeballing to determine what setting works best for your particular case.
- If you set debug to `true` the text between 45 and 75 characters will turn red. The idea is that 45-75 characters per row is ideal for body copy and this will help you to setup your font-size to match that. Enable it and play around with the compressor to get at value that fits.

## Changelog
- 0.1.1 - Added debug option
- 0.1.0 - Initial version.

## License
FlowText.js is licensed under the WTFPL-license. So go ahead and do whatever you want with it. Just be nice!
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
There are currently three options:
```
maxFont			: 36px
minFont			: 16px
compressor		: 20
```
Max and min-font should be pretty self-explanatory, they set the bounds for how far up and down the font-size will adjust.
Compressor is a relative value that sets the font size in relation to the width of the container. Every font is different so you should use some good 'ol eyeballing to determine what setting works best for your particular case.

## Changelog
- 0.1.0 - Initial version.

## License
FlowText.js is licensed under the WTFPL-license. So go ahead and do whatever you want with it. Just be nice!
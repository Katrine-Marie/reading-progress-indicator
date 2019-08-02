# reading-progress-indicator
This is a pure JS function, which creates a reading progress indicator on an HTML element of your choosing.

## How To Use
Either in the head section, or before the closing body tag, add the script like this:
`<script src="PATH_TO_THE_SCRIPT_FILE/reading-progress-indicator.js"></script>`.

Use the function by calling it. Here's an example:

```
<script>
  const elId = "el";
  setProgressIndicator(elId, "green", 4, false, 768);
</script>
```

The first parameter contains the ID of the element you wish to use the reading indicator on.
The second parameter contains the (CSS) background you wish to use on the indicator itself.
The third parameter is the pixel height of the progress indicator (bear in mind that all numbers > 8 will default to 8px as a maximum).
The fourth parameter is a boolean describing whether or not the indicator should appear on mobile, and the fifth parameter is the pixel width of the screen at which the indicator should be visible.

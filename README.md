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

## Function Parameters

### Mandatory
* Param 1: the ID of the element you wish to use the reading indicator on.
* Param 2: the (CSS) background you wish to use on the indicator itself.
* Param 3: the pixel height of the progress indicator (bear in mind that all numbers > 8 will default to 8px as a maximum).

### Optional
* Param 4: a boolean describing whether or not the indicator should appear on mobile
* Param 5: the pixel width of the screen above which the indicator should be visible.

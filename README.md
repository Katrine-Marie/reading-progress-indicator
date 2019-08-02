# reading-progress-indicator
This is a pure JS function, which creates a reading progress indicator on an HTML element of your choosing.

## How To Use
Either in the head section, or before the closing body tag, add the script like this:
`<script src="PATH_TO_THE_SCRIPT_FILE/reading-progress-indicator.js"></script>`.

Use the function by calling it. Here's an example:

```
<script>
  const elId = "el";
  setProgressIndicator(elId, "green", 4);
</script>
```

The first parameter contains the ID of the element you wish to use the reading indicator on. 
The second parameter contains the background you wish to use on the indicator itself. Bear in mind though, that it is a mere 4px tall before you let your creativity run loose.

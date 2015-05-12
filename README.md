A structure that contains width and height values.
<h2>Usage</h2><hr>
```js
var CGSize = require('cg-size');

// Create an area with width and height
var size = new CGSize(33.3, 50);

console.log( size.width, size.height ); // 30.3, 50
```
<h2><br></h2><h2>TODO</h2><hr><b>getWidthMidpoint()</b><div>Calculates the middle point for the width.</div><div>Returns: CGPoint</div>
<b>getHeightMidpoint()</b><div>Calculates the middle point for the height.</div><div>Returns: CGPoint</div>
<b>getAreaMidpoint()</b><div>Calculates the middle point for both width and height.</div><div>Returns: CGPoint</div>
<b>isLargerThanSize( size: CGSize )</b><div>Calculates its total area and compares it to another size object’s area.</div><div>Returns: Boolean</div>

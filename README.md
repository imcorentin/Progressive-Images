# Progressive Images with React JS

## Import
```js
import { ProgressiveImage } from "./components/ProgressiveImage";
```

## Usage
```js
<ProgressiveImage
  title="Alternative Title for the image"
  thumbnail="lightful-size-image.jpg"
  source="optimized-size-image.jpg"
/>
```
## Example
```js
import { ProgressiveImage } from "./components/ProgressiveImage";

import Tiny from "./assets/tiny.jpg";
import Big from "./assets/big.jpg";

export const App = () => (
  <div className="App">
    <ProgressiveImage
      title="An example"
      thumbnail={Tiny}
      source={Big}
    />
  </div>
);
```

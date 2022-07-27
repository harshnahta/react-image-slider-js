<!-- @format -->

# react-image-slider-js

## Install

```bash
npm install --save react-image-slider-js
```

**React Image Slider** gives you the ability to add slider functionality which can be managed/customized manually by the user/as per requirement. It is easy to use.

## Usage

```jsx
import React, { Component } from "react";

import ReactImageSwipper from "react-image-slider-js";

const imagesArr = [{ src: "1.png" }, { src: "2.png" }];

class Example extends Component {
  render() {
    return (
      <ReactImageSwipper
        images={imagesArr}
        imageSrcKey={"src"}
        imageAltKey={"src"}
      />
    );
  }
}
```

#### Options

| **Option**               | **Type**  | **Default value**    | **Description**                                                                                     |
| :----------------------- | :-------- | :------------------- | :-------------------------------------------------------------------------------------------------- |
| `sliderIndex`            | `number`  | 0                    | Selected index of slider                                                                            |
| `images`                 | `array`   | []                   | Array of images                                                                                     |
| `imageSrcKey`            | `string`  | 'src'                | key of image in array object. Provide empty eg. '' if it is simple array                            |
| `imageAltKey`            | `string`  | 'src'                | image alt key                                                                                       |
| `slideAnimationDuration` | `string`  | '600ms'              | Slider animation duration.                                                                          |
| `objectFit`              | `string`  | `fill`               | Image object property style. i.e. cover,contain,fill etc.                                           |
| `imageBackgroundColor`   | `string`  | 'rgba(0, 0, 0, 0.5)' | Background color of image container. This feature is usefull with **objectFit:'contain'** property. |
| `isLoop`                 | `boolean` | true                 | This will repeat the start/end image once image is move to end/start position.                      |

#### Example first: images having keys in array

```js
class Example extends Component {
  render() {
    return (
      <ReactImageSwipper
        sliderIndex={0}
        images={[{ src: "1.png" }, { src: "2.png" }]}
        imageSrcKey={"src"}
        imageAltKey={"src"}
        slideAnimationDuration={"600ms"}
        imageBackgroundColor={"rgba(0, 0, 0, 0.9)"}
        objectFit={`fill`}
      />
    );
  }
}
```

#### Example two: images having simple array

```js
class Example extends Component {
  render() {
    return (
      <ReactLightbox
        sliderIndex={0}
        images={["1.png", "2.png"]}
        imageSrcKey={""}
        imageAltKey={""}
        slideAnimationDuration={"600ms"}
        imageBackgroundColor={"rgba(0, 0, 0, 0.9)"}
        objectFit={`fill`}
      />
    );
  }
}
```

## License

MIT © [Harsh Nahta] (https://github.com/harshnahta)

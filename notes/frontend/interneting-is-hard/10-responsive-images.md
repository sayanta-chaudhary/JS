Display different images based on the user's device
There's really only two problems we're trying to solve:

- Make images fit into mobile layouts while respecting their natural size
- Avoid making the user download unnecessarily large image files

Dimension = width x height in pixels
Resolution = pixel density (ppi)

# Retina Screens

Have twice as many pixels per inch than standard-resolution screens
An image needs to be twice as big as its final display dimensions - To render correctly

> The easiest way to solve all these problems is with SVG images

SVGs let us forget about screen resolution issues, but
we do need to shrink the image to fit neatly into our fluid mobile layouts

```plaintext
.illustration {
  width: 100%;
}

<img class='illustration' src='images/illustration.svg' style='max-width: 500px'/>
<!-- image's dimensions are more content than presentation -->
<!-- This is one of the rare times an inline style is acceptable -->
```

# Responsive png, gif, jpg images

Wrap <img/> tag in another container. Without it, the image would get distorted

The lazy way to create responsive png, gif, or jpg images
serving everybody high-res image, even if they don't need

# Responsive image optimization

## Retina Optimization Using `srcset`

```html
<div class="illustration">
  <img
    src="illustration-small.png"
    srcset="images/illustration-small.png 1x, images/illustration-big.png 2x"
    style="max-width: 500px"
  />
</div>
```

## Screen width Optimization using `srcset`

Retina smartphone, download the high-res image even when the standard version would suffice
We can serve standard-resolution photo to retina smartphones!
The lesson here is that we want to optimize larger images based on their final rendered dimensions
not just the device's screen resolution

```html
<div class="section header">
  <div class="photo">
    <img
      src="images/photo-small.jpg"
      srcset="images/photo-big.jpg 2000w, images/photo-small.jpg 1000w"
      sizes="(min-width: 960px) 960px, 100vw"
    />
  </div>
</div>
```

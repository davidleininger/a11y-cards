# Steps
## Plan out your markup
- We need wrapper el, title/link, summary, byline, and hero photo
- If the title is a heading, it should come first
  - Ideally, it will come first anyways
- Just seeing how it's done at the times now, we have two photos the hero and the thumbnail

### What props do we need?
- `as`: the wrapper el needs an element
- `headingLevel`: because it could be different for different cards in different locations
- `type`: this will allow a few extra classes for us to style against

### Basic Mark Up
- Start with the wrapper
  - This will be the `as` prop defaulted to article `.story`
  - This will eventually be our container so we need a wrapper inside of this too `.card`
- Then a wrapper for the content `.card-contents`
  - This will need the div for the floated thumbnail
- Then figure `.hero`

#### Snippets needed:
Hero Image:
```html
<img src="https://static01.nyt.com/images/2023/05/03/multimedia/03mcbb-final-gamer-tqhv/03mcbb-final-gamer-tqhv-threeByTwoMediumAt2X.jpg" srcSet="https://static01.nyt.com/images/2023/05/03/multimedia/03mcbb-final-gamer-tqhv/03mcbb-final-gamer-tqhv-threeByTwoMediumAt2X.jpg 1500w" alt="UConn celebrates winning fifth N.C.A.A. Title" />
```

Thumbnail Image:
```html
<img width="75" height="75" src="https://static01.nyt.com/images/2023/05/03/multimedia/03mcbb-final-gamer-tqhv/03mcbb-final-gamer-tqhv-thumbLarge.jpg" alt="UConn celebrates winning fifth N.C.A.A. Title" />
```

Title:
```html
<a href="/2023/04/03/sports/ncaabasketball/uconn-wins-championship.html">UConn Wins Fifth N.C.A.A. Title</a>
```

Summary:
```
UConn’s 76-59 victory ended a dominant tournament run in which it won every game by double figures.
```

Byline:
```html
<span>April 4, 2023</span> <span className="bullet"> </span> By Billy Witz
```

Fig Caption:
```html
<span className="visually-hidden">Credit </span>David J. Phillip/Associated Press
```

### Heading/Title
- The link should go inside of the heading element - this is better for screen readers
- We're going to use two elements for the title. This will give us the ability to have it be a heading when needed and a plain link when not

#### Snippets needed:
Create `Heading` element:
```js
const Heading = headingLevel ? `h${headingLevel}` : "p";
```

---
## Styling

### Card Layout
On smaller screens the image visually needs to be above the text

```css
.card {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
```

### Hover Area
```css
.title {
  & a::after {
    content: '';
    inset: 0;
    position: absolute;
  }
}
```

### Summary Responsive Styles
Only Visible at certain sizes
```css
.summary {
  @media (min-width: 765px) {
    display: none;
  }
  @media (min-width: 1020px) {
    display: block;
  }
}
```

### Swap the heading elements when the summary is hidden
```css
/* if the summary is visible, the title should be a heading */
.title.heading {
  display: block;
  @media (min-width: 765px) {
    display: none;
  }
  @media (min-width: 1020px) {
    display: block;
  }
}
.title.text {
  display: none;
  @media (min-width: 765px) {
    display: block;
  }
  @media (min-width: 1020px) {
    display: none;
  }
}
```

### Hero/Image Credit Styles
```css
.hero {
  @media (min-width: 765px) {
    display: none;
  }
}
figcaption .byline {
  justify-content: flex-end;
}
```

### thumbnail / float fix for smaller screens
```css
.card-content {
  @media (min-width: 765px) {
    /* float image placeholder */
    &::before {
      content: "";
      clear: right;
      display: block;
      float: right;
      height: 75px;
      margin: 0 0 5px 15px;
      width: 75px;
    }
    &::after {
      content: "";
      clear: both;
      display: table;
    }
  }
}
.thumbnail {
  display: none;
  @media (min-width: 765px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
}
```

## Add Max Width
Hard to see in full width, so lets show it more in context of how this is really used
```jsx
<div style={{ width: "100%", "max-width": "400px" }}>
  <A11yCard headingLevel={2} />
</div>
```

## But what about container queries?
Using media queries is great and it's what we've had for a long time, but there are better tools out now. Instead of styling the content of a block based on the width of the page, we can style based on the width of the element. This means the element always looks right for the size it is, not based on the size of the page.

```jsx
<Highlights />
```

Looking here, we can see that the same card used for make a few versions based on the width of the page can't really work to make multiple designs. Here, we're using one card to do the entire header of a section page.

## Let's code one up
For a simple example, let's look at the supporting stories section at the bottom. In prod, on smaller screens they go to a horizontal layout. Let's add that.

```css
.support {
  @container story (min-width: 500px) {
    .card {
      flex-direction: row;
    }
    .card-content {
      flex-basis: 60%;
    }
    .photo {
      flex-basis: 40%;
      margin-left: var(--gap, 24px);
    }
  }
  .hero {
    display: block;
  }
}
```

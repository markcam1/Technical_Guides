# Gatsby quick start and notes:

## Quick start

Install the Gatsby CLI.\
`npm install -g gatsby-cli`

Create a new site.\
`gatsby new gatsby-site`

Change directories into site folder.\
`cd gatsby-site`

Start development server.\
`gatsby develop`

Gatsby will start a hot-reloading development environment accessible by default at localhost:8000.
Try editing the JavaScript pages in src/pages. Saved changes will live reload in the browser.

## Configuration

### Text/Components

* Hero text at src/components/Hero.js
* 


### Images
images store in **src/images**

* Hero Image:
  * Change at image on page - src/pages/index.js go to `bgDesktop: imageSharp(fluid: { originalName: { regex: "/hans-ripa/" } `

<hr>

# Gatsby + Netlify CMS Starter
My notes for using the [starter-code](https://github.com/netlify-templates/gatsby-starter-netlify-cms).  

## Edit front-end

### CSS: src/component/all.sass

### Navigation
**Logo SVG files**: Use Optimized SVG

Optimized SVG
1. Adobe Illustrator
2. Inkscape

**Inkscape tips**:

*Convert to text*
In Inkscape, select the flowed text object(s). Go to the Text menu, and select "Convert to text".
The flowed text elements will now be plain <text> elements and will display properly in the browse


**Select the object(s) to export**
Open the document properties window (Ctrl+Shift+D)
Select "Resize page to drawing or selection"
File > Save As Copy...
Select Optimized SVG as the format if you want to use it on the web


**Select the object(s) to export.**
"Resize page to drawing or selection" (File → Document Properties) or Ctrl+Shift+R.
"Invert selection" (Edit → Invert selection) or !, and Del all other objects.
"Save As" with Ctrl+Shift+S.
Select Optimized SVG as the format if you want to use it on the web.


### Jumbotron/Title

1. index.md: src\pages\index.md

```
templateKey: index-page
title: FAT Daddy Comics
image: /img/home-jumbotron.jpg
heading: Great coffee with a conscience
subheading: Support sustainable farming while enjoying a cup
```

2. Images: static\img\home-jumbo-new.jpg
    * change images in static folder



<hr>

### Footer: src/component/Footer.js
Links, images are found in the component

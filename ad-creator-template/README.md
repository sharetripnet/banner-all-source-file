# Add Creator Template

## Installation

To install gulp globally (Command needed if gulp cli is missing from machine)

```bash
npm install --global gulp-cli
```

Clone and Run for install dependencies:

```bash
yarn
```

or

```bash
npm install
```

or

```bash
 npm i
```

## On your working directory run this project through your terminal

```bash
gulp
```

## All Build templates will be stored inside `./dist` folder

--O--

## Code Instructions

```python

1. Add this meta tag <meta name="ad.size" content="width=900,height=90" />

2. Add jquery from google hosted link - <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

3. Creatives zip file uplaod into https://h5validator.appspot.com/adwords/asset for test

4. Add 'inline' attribute into <link />,<script/>,<img/> tag for inline all code in index.html
  -- Note: Don not add 'inline' attribute in CDN link for better performance

5. In Every project you should modify css link in index.njk/index.html

# Example:
<img src="./projectFolder/images/img.png" inline />
<link rel="stylesheet" href="demoProject/assets/style/index.css" inline/>
<script src="demoProject/assets/scripts/main.js" inline></script>

6. Banner Sizes:

# 7 Most Used Banner Sizes

300x250,
336x280,
250x250,
160x600,
300x600,
728x90,
970x90

# 12 Most Used Banner Sizes

300x250,
336x280,
250x250,
200x200,
320x100,
320x50,
160x600,
300x600,
468x60,
728x90,
970x90,
970x250
```

# Note: This template are not working for gwd template

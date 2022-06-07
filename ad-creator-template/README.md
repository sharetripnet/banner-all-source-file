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

## Code Instraction

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
```

\*\* All Build templates will be stored inside ./dist folder.

## Working Folder Structure:

```python
src
-- projects 1
    -- assets
        -- images
            -- img.png
        -- scripts
            -- main.js
        -- style
            -- partials
                _colors.scss
                _main.scss
                _reset.scss
                _variable.scss
            -- style.scss
        -- vendor
    -- index.html
-- projects 2
    -- assets
        -- images
            -- img.png
        -- scripts
            -- main.js
        -- style
            -- partials
                _colors.scss
                _main.scss
                _reset.scss
                _variable.scss
            -- style.scss
        -- vendor
    -- index.html
-- index.html
-- index.scss

```

# Note: This template are not working for gwd template

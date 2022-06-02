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

* Add 'inline' attribute into <link />,<script/>,<img/> tag for inline all code in index.html
Note: Don not add 'inline' attribute in CDN link for better performance

* In Every project you should modify css link in index.njk/index.html

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

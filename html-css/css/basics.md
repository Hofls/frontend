##### CSS
* CSS - describes the presentation of a document
* Specificity - applies rule with highest specifity selector (e.g. id selector - high, element selector - low)
* Cascade - if two rules have equal specifity - order matters (will be applied last one)
* Inheritance - some CSS set on parent elements are inherited by their children
* Viewport - area in computer graphics that is currently being viewed
* Ruleset Anatomy - `selector {property: value;}`

##### Selectors
* Element selector - `article`
* Id selector - `#my-id`
* Class selector - `.my-class`
* Attribute selector - `img[src]`
* Pseudo-class selector - `a:hover`
    
##### CSS Combinators
* Descendant combinator - `div p`
* Child combinator - `article > p`
* Adjacent sibling combinator - `h1 + p`
* General sibling combinator - `p ~ img`
    
##### Box model
* Outer display types:
    * `display: block` - adds line-break at the end, fills all available horizontal space (e.g. `<div>, <p>, <article>`)
    * `display: inline` - stays in the same line, ignores width/height and some margins (e.g. `<a>, <span>, <strong>`)
    * `display: inline-block` - same as Block, without line-break
* Inner display types:
    * Normal Flow - default
    * `display: flex` - one-dimensional layout
    * `display: grid` - two-dimensional layout (rows and columns)
* Box parts - `content, padding, border, margin`

##### Positioning
* Types:
    * `position: static` - default
    * `position: relative` - same as static but with extra properties (top, bottom, left, right)
    * `position: absolute` - move element into its own layer
    * `position: fixed` - fixes element on the viewport (e.g. header, support icon)
    * `position: sticky` - scrolls then sticks (e.g. article name)
* If elements overlap - use `z-index` to define who will be on top

##### Floats
* 
* 

##### Media query
* 
* 

##### Animation
* 
* 

##### Data types
* Integer - `1024`
* Number - `0.255`
* Percentage - `25%`
* Color - `#02798b`
* Image - `url(star.png)`
* String - `"hello"`
* Function - `calc(20% + 100px);`
* Dimension - number + unit (`45deg, 10px`)
    * Length - `px` (pixels), `em` (parent font size), `rem` (root font size)
    * Angle - 
    * Time - 
    * Resolution -

##### Etc
* Other topics:
    * `Overflow, Background, Border`
* Useful properties:
    * `display: flex, min-height, max-width, overflow, border-radius`
* Weird stuff (don't use it):
    * `!important`

# Super Lightweight Lightbox

**Need a lightbox without the faff?**

Super Lightweight Lightbox just makes lightboxes, then you can add whatever you want inside it... Simples.

Built with pure JavaScript and with no dependancies the Super Lightweight Lightbox does one job, but does it well. 


---

## Using the Super Lightweight Lightbox

### **Link the files...**

Add the CSS link in your head, and the JavaScript file just before your close body tag

    <link rel="stylesheet" href="src/css/lightbox.min.css">
    <script type="text/javascript" src="src/js/super-lightweight-lightbox.js"></script>

---

### **Add the lightbox at the end of your file just before the JavaScript link**

**Create a div, add an ID and add the class sllb-hidden.** 

    <div id="myLightbox" class="sllb-hidden">
        <!-- Add your code here -->
    </div>


**Then to open the Lightbox:** 
- param 1 = "open" or "close" the lightbox
- param 2 = the ID of the div
- param 3 = (OPTIONAL) if you want to override the width add a pixel amount here

sllb_lightbox('open','myLightbox', '800px')

    <button onclick="sllb_lightbox('open','myLightbox', '800px')">Open Light Box</button>

**To close the Lightbox just pass the ID** 

sllb_lightboxClose('myLightbox');


## Multiple Lightboxes

Already sorted. Do as above but give the DIV a different ID

---

## SASS Options

### **SASS file location**

**scr/css/lightbox.sass**

Universal Base Unit

    $sllb-unit:                 8 
    $sllb-unit--px:             $sllb-unit + px


Skrim - background block colour and blur amount

    $sllb-skrim__background--color:     rgba(0,0,0,0.8)
    $sllb-skrim__background--blur:      10px

Lightbox

    $sllb-max-width:                    $sllb-unit * 40 + px
    $sllb-border-radius:                $sllb-unit / 2 + px
    $sllb-color__background:            #ffffff 
    $sllb-padding-top:                  0
    $sllb-padding-bottom:               $sllb-unit * 3 + px
    $sllb-padding-left:                 $sllb-unit * 3 + px
    $sllb-padding-right:                $sllb-unit * 3 + px
    $sllb-margin:                       $sllb-unit * 3 + px

Footer Style

    $sllb-footer__border:               1px solid #ccc
    $sllb-footer__margin-top:           $sllb-unit * 3 + px     
    $sllb-footer__padding-top:          $sllb-unit * 3 + px
    $sllb-footer__font-family:          "Avant Garde", Avantgarde, 
                                        "Century Gothic", CenturyGothic, 
                                        AppleGothic, sans-serif


Close Button

    $sllb-color__font--active:          #303B41
    $sllb-color__background--active:    #e1e1e1

    $sllb-color__font--hover:           #ffffff
    $sllb-color__background--hover:     #303B41

SVG

    $sllb-svg__color--active:           $sllb-color__font--active
    $sllb-svg__color--hover:            $sllb-color__font--hover


--- 



## Upcoming Features / Improvements:
- **BUG:** Fix escape key when 2 or more lightboxes are implemented on the same page
- **IMPROVEMENT:** Close lightbox using back button
- **IMPROVEMENT:** Trap focus in lightbox
- **FEATURE:** Close Button at Top option
- **FEATURE:** Close Button at outside lightbox option
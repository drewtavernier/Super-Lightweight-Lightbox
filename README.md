# Super Lightweight Lightbox
Welcome to a super lightweight lightbox

This lightbox is really easy to use. 
View the example page for implememtation


---

## Using the Super Lightweight Lightbox

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



## To Do:
- Close lightbox using back button
- Control close SVG Colour using SASS variable
- Convert SVG to code
- Trap focus in lightbox
- Close Button at Top variant
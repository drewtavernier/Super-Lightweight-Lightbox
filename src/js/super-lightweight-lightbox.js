// Title:   Super Lightweight Lightbox 
// Version: 1.1
// Author   Drew Tavernier
// Source   www.drewtavernier.com/code
// License  CC BY 2.0 - https://creativecommons.org/licenses/by/2.0/

// SVG for close button
// Use class: sllb_lightbox__control-set--icon-close
// so you can control the colour and hover states with CSS 

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
<path class="sllb_lightbox__control-set--icon-close" d="M57.07,50l14.14-14.14c1.95-1.95,1.95-5.12,0-7.07c-1.95-1.95-5.12-1.95-7.07,0L50,42.93L35.86,28.79 c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07L42.93,50L28.79,64.14c-1.95,1.95-1.95,5.12,0,7.07 c0.98,0.98,2.26,1.46,3.54,1.46s2.56-0.49,3.54-1.46L50,57.07l14.14,14.14c0.98,0.98,2.26,1.46,3.54,1.46s2.56-0.49,3.54-1.46 c1.95-1.95,1.95-5.12,0-7.07L57.07,50z"/>
<path class="sllb_lightbox__control-set--icon-close" d="M50,0C22.39,0,0,22.39,0,50s22.39,50,50,50s50-22.39,50-50S77.61,0,50,0z M50,90c-22.06,0-40-17.94-40-40 c0-22.06,17.94-40,40-40s40,17.94,40,40C90,72.06,72.06,90,50,90z"/>
</svg>`;




// #############################################################################################################
//
// DO NOT MODIFY BELOW THIS LINE
//
// #############################################################################################################




// ------------------------------------
// CREATE LIGHTBOX
// ------------------------------------

/**
 * Creates a Lightbox.
 * @param {string} sllb_target - Target DIV for Lightbox
 * @param {string} sllb_widthOverride - (OPTIONAL) Set WIDTH of Lightbox when calling.
 */
function sllb_createLightBox (sllb_target, sllb_widthOverride) {

    // Close Target
    let closeTarget = sllb_target.getAttribute('id');

    // Create Lighbox Container
    let sllb_container = document.createElement('div');
    sllb_container.classList.add('sllb-lightbox');
    if (sllb_widthOverride != "") {
        console.log(`sllb_widthOverride = ${sllb_widthOverride}`);
        sllb_container.style.width = sllb_widthOverride;
        sllb_container.style.maxWidth = sllb_widthOverride;
    }
    
    // Get existing HTML
    let getExistingHTML = sllb_target.innerHTML;

    // clear innerHTML
    sllb_target.innerHTML = "";

    // replace existing HTML with lightbox container
    sllb_target.appendChild(sllb_container);

    // add innerHTML to new container
    sllb_container.innerHTML = getExistingHTML;
    
    // add footer
    let sllb_footer = document.createElement('div');
    sllb_footer.classList.add('sllb-lightbox__footer');
    sllb_footer.innerHTML = `
            <div class="sllb-lightbox__control-set">
                <button class="sllb-lightbox__control-set--close-button" onclick="sllb_lightbox('close', '${closeTarget}')">${svgIcon}&nbsp;Close</button>
            </div>
            `;
    sllb_container.appendChild(sllb_footer);

    sllb_lightboxOpen(sllb_target);
}

// ------------------------------------
// CONTROL LIGHTBOX CREATION
// ------------------------------------

/**
 * Call createlightbox IF the Lightbox does NOT exist.
 * @param {string} state - set to "open" to launch Lightbox, "close" to hide Lightbox
 * @param {string} target - Target DIV for Lightbox
 * @param {string} sllb_widthOverride - (OPTIONAL) Set WIDTH of Lightbox when calling
 */
function sllb_lightbox(state, target, sllb_widthOverride) {

    // Get target
    let sllb_target =      document.getElementById(target);
    let isInitialised = sllb_target.getAttribute('data-state');

    // Open Lightbox
    if (state == 'open') {

        // Lightbox not created, so create it
        if (isInitialised != 'initialised') {
            // Create Skrim
            sllb_target.classList.add('sllb-skrim');
    
            // Initialise
            sllb_target.setAttribute('data-state', 'initialised');
            sllb_createLightBox(sllb_target, sllb_widthOverride);

        } else if (isInitialised == 'initialised'){

            // Lightbox has been created, so open it
            sllb_lightboxOpen(sllb_target);
        }
    } else {
        // close lightbox
        sllb_lightboxClose(sllb_target);
    }
}


// ------------------------------------
// CONTROL OPEN & CLOSING OF LIGHTBOX
// ------------------------------------

/**
 * Controls Showing The Lightbox.
 * @param {string} target - The reference to the Lightbox Div
 */

function sllb_lightboxOpen(target) {
    // Stop background scrolling
    let getBody =  document.querySelector("body");
    getBody.setAttribute("overflow", "hidden");

    // remove hidden class
    target.classList.remove("sllb-hidden");
}

/**
 * Controls Closing The Lightbox.
 * @param {string} target - The reference to the Lightbox Div
 */

function sllb_lightboxClose(target) {
     // Reset background scrolling
     let getBody =  document.querySelector("body");
     getBody.setAttribute("overflow", "auto");   

    // add hidden class
    target.classList.add("sllb-hidden");
}



// ------------------------------------
// ALTERNATE CLOSING MECHANICS
// ------------------------------------

/**
 * Closes Lightbox When Clicking On Skrim.
 */

document.addEventListener('click', function (event) {
    let sllb_target = event.target;
	if (sllb_target.matches('.sllb-skrim')) {
        sllb_lightboxClose(sllb_target);
    }
}, false);

/**
 * Closes Lightbox When Pressing Escape Key.
 */
document.onkeydown = function(evt) {

    evt = evt || window.event;
    if (evt.keyCode == 27) {
        let sllb_target = document.querySelector('.sllb-skrim');
        console.log('onkeydown' + sllb_target );
        sllb_lightboxClose(sllb_target);
    }
};
// Title:   Super Lightweight Lightbox 
// Version: 1.0
// Author   Drew Tavernier
// Source   www.drewtavernier.com/code
// License  CC BY 2.0 - https://creativecommons.org/licenses/by/2.0/

// ------------------------------------
// TO DO 
// ------------------------------------
// Close lightbox using back button
// Control close SVG Colour using SASS variable
// Convert SVG to code
// Trap focus in lightbox
// Close Button at Top variant



// ------------------------------------
// CREATE LIGHTBOX
// ------------------------------------

/**
 * Creates a Lightbox.
 * @param {string} sllb_target - Target DIV for Lightbox
 * @param {string} sllb_widthOverride - (OPTIONAL) Set WIDTH of Lightbox when calling.
 */

function sllb_createLightBox (sllb_target, sllb_widthOverride) {

    console.log('sllb_createLightBox');

    console.log(sllb_target.getAttribute('id'));
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
                <button class="sllb-lightbox__control-set--close-button" onclick="sllb_lightbox('close', '` + 
                closeTarget
                + `')"> <i alt="Close Overlay Panel"></i>Close</button>
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

    console.log('sllb_lightbox');

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
    console.log('sllb_lightboxOpen');
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
     console.log('sllb_lightboxClose');
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
        console.log('addEventListener');
        sllb_lightboxClose(sllb_target);
    }
}, false);

/**
 * Closes Lightbox When Pressing Escape Key.
 */
document.onkeydown = function(evt) {

    console.log('onkeydown');

    evt = evt || window.event;
    if (evt.keyCode == 27) {
        let sllb_target = document.querySelector('.sllb-skrim')
        sllb_lightboxClose(sllb_target);
    }
};
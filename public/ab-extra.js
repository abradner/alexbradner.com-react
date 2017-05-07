document.addEventListener("DOMContentLoaded", function () {

    let desktopArrow = document.querySelector("#arrow-desktop");
    window.setTimeout(function () {
        desktopArrow.classList.add('show');
        desktopArrow.classList.remove('hide');
        window.setTimeout(function () {
            desktopArrow.classList.add('hide');
        }, 2000);

    }, 2000);

    let links = document.querySelectorAll("a")

    for (let link of links) {
        link.addEventListener('click', function (event) {
            if (link.hash !== "") { // Make sure this.hash has a value before overriding default behaviour
                event.preventDefault(); // Prevent default anchor click behavior
                var hash = link.hash;

                //window.location.hash = hash; // replicate default click behaviour

                // Do the scroll. we don't need jquery for this!
                var destination = document.querySelector(hash).getBoundingClientRect().top + document.body.scrollTop
                scrollToSmooth(destination, 700);

            } // End if
        });
    }
});


// Algo borrowed and adapted from http://gizma.com/easing/
function easeInOutExpo(currStep, initialVal, totalChange, totalSteps) {
    if (currStep == 0) return initialVal;
    if (currStep == totalSteps) return initialVal + totalChange;
    if ((currStep /= totalSteps / 2) < 1) return totalChange / 2 * Math.pow(2, 10 * (currStep - 1)) + initialVal;
    return totalChange / 2 * (-Math.pow(2, -10 * --currStep) + 2) + initialVal;
};

function scrollToSmooth(destinationY, scrollDuration) {
    // time
    const interval = 20 //50 fps
    const totalSteps = (scrollDuration / interval);

    // space
    const startY = window.scrollY;
    const scrollDistance = destinationY - startY;


    let currStep = 0;
    let velocity = 0;

    let scrollInterval = setInterval(function () {
        if (currStep < totalSteps) {
            currStep++;

            let newY = easeInOutExpo(currStep, startY, scrollDistance, totalSteps)
            window.scrollTo(0, newY);

        } else clearInterval(scrollInterval);
    }, interval);
}
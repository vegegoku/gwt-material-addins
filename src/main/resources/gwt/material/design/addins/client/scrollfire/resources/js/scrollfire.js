function apply(selector, offset, callback) {
    var didScroll = false;
    var done = false;
    var callbacks = $.Callbacks();

    /*callbacks.fire();*/

    window.addEventListener("scroll", function() {
        didScroll = true;
    });



    // Rate limit to 100ms
    // Rate limit to 100ms
    setInterval(function() {
        if(didScroll) {
            didScroll = false;

            var windowScroll = window.pageYOffset + window.innerHeight;

            var currentElement = document.querySelector(selector);
            if ( currentElement !== null) {
                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > (elementOffset + offset)) {
                    if (done !== true) {
                        callbacks.add(callback);
                        callbacks.fire();
                        done = true;
                    }
                }
            }
        }
    }, 100);
}
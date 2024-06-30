(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

$(document).ready(function() {
    var isOpened = false; // Flag to track if envelope is already opened

    // Click event to open envelope and show letter content
    $('#envelope').click(function() {
        if (!isOpened) { // Check if envelope is not already opened
            isOpened = true; // Set flag to true to prevent multiple openings

            // Animate opening of the envelope
            $(this).find('.flap').css('transform', 'rotateX(0deg)');
            $(this).find('.letter').css('transform', 'rotateX(0deg)');
            
            // Immediately activate typewriter effect for greeting
            $('#greeting').typewriter();

            // Immediately activate typewriter effect for content
            $('#content').typewriter();

            // Show content after typing animation
            $('.letter').addClass('show');
        }
    });
});

$(document).ready(function() {
    // Hide happy-feedback and sad-feedback forms initially
    $('.happy-feedback, .sad-feedback').hide();

    // Click event handler for the happy class
    $('.happy').click(function() {
        // Show happy-feedback form and position it
        $('.happy-feedback').fadeIn();
        positionForm('.happy-feedback');
    });

    // Click event handler for the sad class
    $('.sad').click(function() {
        // Show sad-feedback form and position it
        $('.sad-feedback').fadeIn();
        positionForm('.sad-feedback');
    });
    $('.submitButton').click(function() {
        // Go back to the previous page
        alert('Thank You! Feedback Submitted successfully :)');
        window.history.back();
    });


    // Function to center a form on the screen
    function positionForm(formClass) {
        var $form = $(formClass);
        var left = 0;
        var top = 0;

        $form.css({
            'left': left  +'px',
            'top': top + 'px'
        });

    }
});
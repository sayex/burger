$(function() {
 

    $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bg").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            // eslint-disable-next-line no-console
                console.log("created new burger");
                // Reload the page to get the updated list
                // eslint-disable-next-line no-undef
                location.reload();
            }
        );
    });

});
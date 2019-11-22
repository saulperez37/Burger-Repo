$(document).ready(function () {

    $("#addBurger").on("click", function () {
        console.log("Add Burger Button Clicked");

        let burger = {
            "burger_name": $(burgerName).val(),
            "devoured": $(burgerName).data("eaten")
        };

        $.post("/api/burger", burger).done(() => {
            console.log("Created a New Burger!");
            location.reload();
        });

    });

    $(".dev-burger").on("click", function () {
        console.log("Button Clicked");

        const burgerID = $(this).data("id");
        const devoured = $(this).data("eaten");

        const burgerUpdate = {
            "devoured": devoured
        };

        $.ajax("/api/burger/" + burgerID, {
            type: "PUT",
            data: burgerUpdate
        }).then(() => {
            console.log("Burger Updated");
            location.reload();
        });

    });
});


$(document).ready(function() {
     // Initialize the Datepicker for the hidden input
     $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",  // Customize the date format
    });

    // When the span is clicked, open the datepicker
    $("#datepicker-trigger").click(function() {
        $("#datepicker").datepicker("show"); // Show the datepicker
    });

    // Optional: Add a callback when the date is selected
    $("#datepicker").on("change", function() {
        alert("Selected date: " + $(this).val());
    });

    $('.single-select-1').select2({ minimumResultsForSearch: -1});
    $('.single-select-2').select2({ minimumResultsForSearch: -1});
    $('.single-select-3').select2({ minimumResultsForSearch: -1});
});
function add() {
    $.post("add", $("#url").val()).done(function(data) {
        var data = $.parseJSON(data);
        if (data["success"]) {
            // Change form validation state here
            $("#shortener").removeClass("has-error");
            $("#shortener").addClass("has-success");

            // Add an alert with the success/failure information
            $("#messages").removeClass();
            $("#messages").addClass("alert alert-success");
            $("#messages").html("<strong>" + data["message"] + "<strong>");

            // Specifically highlight the URL input-box, and select it
            $('#url-to-copy').focus();
            $('#url-to-copy').select();
            $('#url-to-copy').tooltip("show");
        } else {
            // Change form validation state here
            $("#shortener").removeClass("has-success");
            $("#shortener").addClass("has-error");

            // Add an alert with the success/failure information
            $("#messages").removeClass();
            $("#messages").addClass("alert alert-danger");
            $("#messages").html("<strong>" + data["message"] + "<strong>");
        }
    });
}


$(function () {
   $("#url").focus();
});

$('#url').keypress(function(e) {
    if (e.which == 13) {
        add();
        return false;
    }
});

$(function(){
    $('.tip').tooltip({
        placement: "top",
        trigger: "manual"
    });
});
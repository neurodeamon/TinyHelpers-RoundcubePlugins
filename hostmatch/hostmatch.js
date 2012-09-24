$(document).ready(function() {
    // listen to keyup event on the username field
    $('#rcmloginuser').bind('keyup', function() {
        // read the entered email adress from form field
        var TheNeedle   =   $('#rcmloginuser').val();
        // define how an email adress shoud be split into pieces in a regular expression
        var TheRegex    =   /([a-zA-Z0-9_\-\.]+)(@)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+)+))(\.[a-zA-Z]{2,4}|[0-9]{1,3})/i;
        // loop through the host/server dropdown elements
        $("#rcmloginhost").each(function () {
            $('option', this).each(function () {
                // execute the regular expression: lets split the entered email adress into pieces
                var TheMatches = TheNeedle.match(TheRegex);
                // if there is any match do the checks, else do nothing
                if(TheMatches){
                    // we check for the domain part of the email adress and compare it with the displayed dropdown text OR the value which is not shown
                    if($(this).val().toLowerCase().match(TheMatches[3].toLowerCase()) || $(this).text().toLowerCase().match(TheMatches[3].toLowerCase())){
                        // select the matching option
                        $(this).attr('selected', 'selected');
                    }
                }
            });
         });
    });
});
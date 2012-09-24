$(document).ready(function() {
    // lets save our original html to a global variable (we will meddle with the original html)
    var originalHTML = $('td.input>select#rcmloginhost').parent().html();
    // Adding a checkbox to switch host select to input box
    $('td.input>select#rcmloginhost').after('<br /><input type="checkbox" id="other" name="other" value="other" style="width:20px;vertical-align:bottom;" /> Server not in list');
    beautifix();
    // when checked switch dropdown with input field for 
    $('#other').bind('click', function() {
        // is the checkbox checked?
        if($('#other').is(':checked')) {
            $('td.input>select#rcmloginhost').replaceWith('<input type="text" id="rcmloginhost" name="_host"/>');
        }else{
            // let's revert our changes ... Bazinga!
            $('td.input>input#rcmloginhost').replaceWith(originalHTML);
            beautifix();
        }
    });
    function beautifix() {
        // small beautifying steps
        $('td.input>select#rcmloginhost').css({'border': '1px solid #666666'});
        $("label[for='rcmloginhost']").parent().css('vertical-align','top');
    }
});
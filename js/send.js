function clearInput() {
    var fromname = $("#fromname").val('');
    var fromemail = $("#fromemail").val('');
    var toemail = $("#toemail").val('');
    var subject = $("#subject").val('');
    var message = $("#message").val('');

}

$(document).ready(function() {
    $(".add").click(function(e) {

        var fromname = $("#fromname").val();
        var fromemail = $("#fromemail").val();
        var toemail = $("#toemail").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var nameReg = /^[0-9a-zA-Z ]+$/;

        if (fromname === '' || fromname.length === 0) {
            alert("Field FromName is empty...!!!!!!");
        } else if (!(fromname).match(nameReg)) {
            alert(fromname + " FromName error format...!!!!!!");
            return false;
        } else if (fromemail === '' || fromemail.length === 0) {
            alert("Field FromEmail is empty...!!!!!!");
        } else if (!(fromemail).match(emailReg)) {
            alert(fromemail + " From Email error format...!!!!!!");
            return false;
        } else if (toemail === '' || toemail.length === 0) {
            alert("Field Toemail is empty...!!!!!!");
        } else if (!(toemail).match(emailReg)) {
            alert(toemail + " TO Email error format...!!!!!!");
            return false;
        } else if (subject === '' || subject.length === 0) {
            alert("Field subject is empty...!!!!!!");
        } else if (!(subject).match(nameReg)) {
            alert(subject + " Subject error format...!!!!!!");
            return false;
        } else if (message === '' || message.length === 0) {
            alert("Field Message is empty...!!!!!!");
        } else if (!(message).match(nameReg)) {
            alert(message + " Message error format...only numbers and letters!!!!!!");
            return false;
        } else {
            var postData = $("#formData").serialize();
            if (confirm("Send Data?")) {
                $.ajax({
                    type: "POST",
                    url: "../app/sendmail.php",
                    data: postData,
                    dataType: 'json',
                    success: alert("Your data was successfully sent...")
                });
            } else {
                clearInput();
                return false;
            }
        }
    });
});

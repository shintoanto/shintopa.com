var nameErr, msgErr, mob, mailError;


function validatingFirstName() {
    var nameInput = $('#name').val()
    var avoidLetters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
    if (nameInput == "") {
        $("#nameError").html("Field is required")
        nameErr = false
    } else if (nameInput == " ") {
        $('#nameError').html("Do not enter space as first character")
        nameErr = false
    } else if (nameInput.length < 3) {
        $('#nameError').html("Minimum 3 characters required");
        nameErr = false;
    } else if (nameInput.length > 20) {
        $('#nameError').html("20 characters maximum");
        nameErr = false;
    } else if (nameInput.match(avoidLetters)) {
        $('#nameError').html("")
        nameErr = true
    } else {
        $('#nameError').html("Please enter a valid name")
        nameErr = false
    }
}

function phoneValidation() {
    var numberInput = $('#mobile').val()
    var avoidSymbols = /^\d+$/;
    if (numberInput == "") {
        $('#mobileError').html("Field is required")
        mob = false
    } else if (numberInput.match(avoidSymbols) && (numberInput.length == 10)) {
        $("#mobileError").html("")
        mob = true
    } else if (numberInput.length < 10) {
        if (numberInput.match(avoidSymbols)) {
            $("#mobileError").html("Type ten numbers")
            mob = false;
        } else {
            $("#mobileError").html("Use only numbers")
            mob = false;
        }
    } else if (numberInput.length > 10) {
        if (numberInput.match(avoidSymbols)) {
            $("#mobileError").html("Only ten numbers allowed")
            mob = false;
        } else {
            $("#mobileError").html("Use only numbers")
            mob = false;
        }

    } else {
        $("#mobileError").html("Invalid number")
        mob = false;
    }
}

function mailValidation() {
    var emailInput = $('#emailId').val()
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (emailInput == "") {
        $('#emailError').html("Filed is required")
        msgErr = false;
    } else if (emailInput.match(letters)) {
        $('#emailError').html("enter valid symbols")
        msgErr = true;
    } else if (emailInput == " ") {
        $('#emailError').html("Not input spaces")
        msgErr = true;
    } else {
        $('#emailError').html("Invalid Entry")
        msgErr = false;
    }

}

function messageValidation() {
    var messageInput = $('#messaege').val()
    if (messageInput == "") {
        $('#messageError').html("Field is required")
        mailError = false;
    } else if (messageInput.length < 10) {
        $('#messageError').html("Enter minimum 10 characters")
        mailError = false;
    } else if (messageInput.length > 150) {
        $('#messageError').html("200 characters maximum")
        mailError = false;
    } else {
        $('#messageError').html(" ")
        mailError = true;
    }

}



$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});


$("#submit-form").submit((e) => {
    e.preventDefault()
    if (msgErr == true && nameErr == true && mailError == true && mob == true) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzcjZiJgpoeFM0oh0u8LdxJ_HYggiwKCy-55q_ZgXIHYj3hQCZ7e-Gt4INBxITnrG5P/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function(response) {
                alert("Form submitted successfully")
                window.location.reload()
                    // window.location.href = "https://google.com"
            },
            error: function(err) {
                alert("Something Error")

            }
        })
    } else {

        validatingFirstName()
        phoneValidation()
        mailValidation()
        messageValidation()
    }
})
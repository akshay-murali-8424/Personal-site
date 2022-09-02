$(document).ready(function () {
  $("#gform").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      subject: {
        required: true,
        minlength: 6,
      },
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
      },
      subject: {
        required: "Please enter your subject",
      },
      phone: {
        required: "Please enter a valid mobile number",
        minlength: "Enter 10 digits",
        maxlength: "Enter 10 digits",
      },
      email: {
        required: "Enter a valid email address",
      },
      message: {
        required: "Enter your message",
      },
    },
    submitHandler: function (form) {
      $("#gform").submit((e) => {
        e.preventDefault();
        $('#contact-submit').html('Sending....');
        $.ajax({
          url: "https://script.google.com/macros/s/AKfycbyLdD3pieDocT63h4W8-fUE90ImJL1dsRQ2cA-snRUPF6kZLzair4zfzylwXt0PXAM4uQ/exec",
          data: $("#gform").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
          },
          error: function (err) {
            alert("Something Error");
          },
        });
      });
    },
  });

  let refreshPage = () => {
    window.location.reload();
  };
});

export{
    form
}

const form = document.getElementById('formElement');

const FullName = document.getElementById("Name")
const email = document.getElementById("emailField")
const Subject = document.getElementById("subjectField")
const Message = document.getElementById("MessageFilde")

function sendEmail() {
    const bodyMessage = 'Full Name: ${FullName.value}<br> emailField: ${email.value}<br> subjectField: ${Subject.value}<br>  MessageFilde: ${Message.value}<br>';

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "giogergedava123@gmail.com",
        Password: "5C58820A7639E1B8A46304F84880D911B830",
        To: 'giogergedava123@gmail.com',
        From: "giogergedava123@gmail.com",
        Subject: Subject.value,
        Body: bodyMessage
    }).then(
        message => {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!!",
                icon: "success"
              });
        }
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
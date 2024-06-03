document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const agreementCheckbox = document.getElementById('agreement');
    const contactButton = document.getElementById('contactButton');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!emailInput.value || !firstNameInput.value || !lastNameInput.value || !agreementCheckbox.checked) {
            alert('Please fill in all required fields and agree to the terms.');
        } else {
            alert('Form submitted successfully!');
            // You can add further actions here, such as sending the form data to a server.
        }
    });

    contactButton.addEventListener('click', () => {
        document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
    });
});

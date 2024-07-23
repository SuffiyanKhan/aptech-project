document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name === '') {
        Swal.fire({
            title: "Alert !",
            text: "Name is required.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }

    if (email === '') {
        Swal.fire({
            title: "Alert !",
            text: "Email is required.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    } else if (!validateEmail(email)) {
        Swal.fire({
            title: "Alert !",
            text: "Invalid email format.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }

    if (subject === '') {
        Swal.fire({
            title: "Alert !",
            text: "Subject is required.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }

    if (message === '') {
        Swal.fire({
            title: "Alert !",
            text: "Please select a payment method.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        alert('Message is required');
        return;
    }
    Swal.fire({
        title: "Hurry !",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "Done",
        customClass: {
            confirmButton: 'button'
        }
    })
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
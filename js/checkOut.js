const data = JSON.parse(localStorage.getItem("cartItems"));

if (data && data.length > 0) {
    const totalPrice = data.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
    }, 0);

    data.forEach((datas) => {
        document.querySelector("#title").innerHTML += `<p>${datas.title} X ${datas.quantity}</p>`;
        document.querySelector("#price").innerHTML += `<p>${datas.currency} ${datas.price}</p>`;
        document.querySelector("#cardImage").src = datas.image
        // imageElement.src = data.imageSrc;
        // image

        console.log(datas);
    });
    document.querySelector("#totalPrice").innerHTML = totalPrice

} else {
    document.querySelector("#notDataFound").innerHTML = `
    <div class="col-12 d-flex justify-content-center align-items-center" style="height: 100vh;">
          <h3 class="fw-semibold">Not Data Found Yet!</h3>
        </div>
    `
    document.querySelector("#notDataFounds").innerHTML = `
    <div class="col-12 d-flex justify-content-center align-items-center" style="height: 100vh;">
          <h3 class="fw-semibold">Not Data Found Yet!</h3>
        </div>
    `
    console.log("Not Data Found Yet!");
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

async function validateForm() {
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    const altPhone = document.getElementById('altPhone').value;
    const paymentMethods = document.getElementsByName('payment');
    let selectedPayment = false;

    if (!email || !validateEmail(email)) {
        Swal.fire({
            title: "Alert !",
            text: "Please enter a valid email address.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }
    if (!firstName || !lastName) {
        Swal.fire({
            title: "Alert !",
            text: "Please enter both first and last names.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }
    if (!country || !address || !city || !phone) {
        Swal.fire({
            title: "Alert !",
            text: "Please fill out all required fields.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }

    for (let i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].checked) {
            selectedPayment = true;
            break;
        }
    }

    if (!selectedPayment) {
        Swal.fire({
            title: "Alert !",
            text: "Please select a payment method.",
            icon: "error",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        })
        return;
    }
    const { value: accept } = await Swal.fire({
        title: "Terms and conditions",
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: `
          I agree with the terms and conditions
        `,
        confirmButtonText: `
          Order Place
        `,
        inputValidator: (result) => {
            return !result && "You need to agree with T&C";
        },

        customClass: {
            confirmButton: 'button'
        }
    });
    if (accept) {
        Swal.fire({
            title: "Hurry !",
            text: "Your Order are placed.",
            icon: "success",
            confirmButtonText: "Done",
            customClass: {
                confirmButton: 'button'
            }
        }).then((result) => {
            if (result) {
                localStorage.removeItem('cartItems');
                window.history.back();
            }
        })
    }
}

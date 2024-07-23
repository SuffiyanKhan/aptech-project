const data = JSON.parse(localStorage.getItem("cartItems"));

if (data && data.length > 0) {
    const totalPrice = data.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
    }, 0);

    data.forEach((datas) => {
        document.querySelector("#checkData").innerHTML += `
       <div class="mt-4 d-flex align-items-center justify-content-between border-bottom" >
                         <div class="d-flex" style="gap: 60px;">
                            <img src="${datas.image}" width="70" alt="">
                            <p class="fw-semibold fs-6 flex-wrap" id="title">${datas.title} X ${datas.quantity}</p>
                        </div>
                        <p id="price">${datas.currency} ${datas.price}</p>
                    </div>
        `
    });
    document.querySelector("#totalPrice").innerHTML = totalPrice

} else {
    document.querySelector("#bilingData").style.display="none"
    document.querySelector("#notDataFounds").innerHTML = `
    <div class="col-12 d-flex justify-content-center align-items-center" style="height: 100vh;">
          <h3 class="fw-semibold">Not Data Found Yet!</h3>
        </div>
    `
    console.log("Not Data Found Yet!");
}
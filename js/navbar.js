
// function getTotalItemsLength() {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     console.log(cartItems)
//     return cartItems.length;
// }

//  function updateCartCount() {
//     const totalLength = getTotalItemsLength();
//     return totalLength
// }



// document.querySelector("#navbar").innerHTML = `
// <nav class="navbar px-3 navbar-expand-lg bg-white sticky-top"
//             style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;">
//             <div class="container-fluid">
//                 <a class="navbar-brand d-flex align-items-center" href="../index.html">
//                     <img src="./images/logo.png" width="100" alt="">
//                 </a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                     aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav m-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <a class="nav-link fw-bold active" aria-current="page" href="../index.html">Home</a>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown"
//                                 aria-expanded="false">
//                                 Watch Category
//                             </a>
//                             <ul class="dropdown-menu">
//                                 <li><a class="dropdown-item"
//                                         href="../pages/saleWatchesDetailPage.html?name=Mens Watches">Mens Watches</a>
//                                 </li>
//                                 <li><a class="dropdown-item"
//                                         href="../pages/saleWatchesDetailPage.html?name=Ladies Watches">Ladies
//                                         Watches</a></li>
//                                 <li><a class="dropdown-item"
//                                         href="../pages/saleWatchesDetailPage.html?name=Pre-Owned Watches">Pre-Owned
//                                         Watches</a></li>
//                                 <li><a class="dropdown-item"
//                                         href="../pages/saleWatchesDetailPage.html?name=Diving Watches">Diving
//                                         Watches</a></li>
//                                 <li><a class="dropdown-item"
//                                         href="../pages/saleWatchesDetailPage.html?name=Limited Edition Watches">Limited
//                                         Edition Watches</a></li>
//                             </ul>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link fw-bold" href="#">Contact us</a>
//                         </li>
//                     </ul>

//                     <div class="">
//                         <button type="button" class="btn  position-relative" type="button" data-bs-toggle="offcanvas"
//                             data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
//                             <i class="fa-solid fa-cart-shopping"></i> <span
//                                 class="position-absolute top-0 start-100 translate-middle badge rounded-pill "
//                                 style="background-color:#02555e;" id="cart-count">${updateCartCount()} <span
//                                     class="visually-hidden">unread messages</span></span>
//                         </button 
//                     </div>

//                     </div>
//                 </div>
//         </nav>
//         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
//             <div class="offcanvas-header">
//                 <h5 class="offcanvas-title" id="offcanvasRightLabel">Add to card</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div class="offcanvas-body">
//                 <div class=" d-flex ">
//                     <img src="./images/card (1).png" width="60" alt="">
//                     <div>
//                         <p style="font-size: 13px;">Omega</p>
//                         <p style="font-size: 13px;">2022 Starbucks Kermit Unworn Full Set 126610LV</p>
//                     </div>
                    
//                 </div>
//             </div>
//             <div class="d-flex flex-column px-3">
//                 <button class="button2 text-capitalize mb-2" onclick="addToCard()"> check to proceed</button>
//                 <button class="button2 text-capitalize mb-5"> shoping now</button>
//             </div>
//             <div class="offcanvas-footer">
//             </div>
//         </div>
// `

// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(nav => nav.classList.remove('active'));
//         this.classList.add('active');
//     });
// });



function getTotalItemsLength() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems.length;
}

function updateCartCount() {
    const totalLength = getTotalItemsLength();
    return totalLength;
}

function renderCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const offcanvasBody = document.querySelector('.offcanvas-body');

    offcanvasBody.innerHTML = '';

    if (cartItems.length === 0) {
        offcanvasBody.innerHTML = '<p>No data yet</p>';
    } else {
        cartItems.forEach(item => {
            offcanvasBody.innerHTML += `
            <div>
            <div class="d-flex mb-2">
                <img src="${item.image}" width="60" alt="">
                <div>
                    <p style="font-size: 13px;">${item.brand}</p>
                    <p style="font-size: 13px;">${item.description}</p>
                </div>
            </div>
            <div class="d-flex flex-column px-3">
        <button class="button2 text-capitalize mb-2" onclick="addToCard()"> check to proceed</button>
        <button class="button2 text-capitalize mb-5"> shopping now</button>
    </div>
            </div>
            `;
        });
    }
}

// Update cart count in the navbar
document.querySelector("#navbar").innerHTML = `
<nav class="navbar px-3 navbar-expand-lg bg-white sticky-top"
            style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center" href="../index.html">
                    <img src="./images/logo.png" width="100" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link fw-bold active" aria-current="page" href="../index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Watch Category
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"
                                        href="../pages/saleWatchesDetailPage.html?name=Mens Watches">Mens Watches</a>
                                </li>
                                <li><a class="dropdown-item"
                                        href="../pages/saleWatchesDetailPage.html?name=Ladies Watches">Ladies
                                        Watches</a></li>
                                <li><a class="dropdown-item"
                                        href="../pages/saleWatchesDetailPage.html?name=Pre-Owned Watches">Pre-Owned
                                        Watches</a></li>
                                <li><a class="dropdown-item"
                                        href="../pages/saleWatchesDetailPage.html?name=Diving Watches">Diving
                                        Watches</a></li>
                                <li><a class="dropdown-item"
                                        href="../pages/saleWatchesDetailPage.html?name=Limited Edition Watches">Limited
                                        Edition Watches</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Contact us</a>
                        </li>
                    </ul>

                    <div class="">
                        <button type="button" class="btn  position-relative" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i class="fa-solid fa-cart-shopping"></i> <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill "
                                style="background-color:#02555e;" id="cart-count">${updateCartCount()} <span
                                    class="visually-hidden">unread messages</span></span>
                        </button>
                    </div>
                </div>
            </div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Add to card</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <!-- Cart items will be rendered here -->
    </div>
    
    <div class="offcanvas-footer">
    </div>
</div>`;

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
});

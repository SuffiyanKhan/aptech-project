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
        document.querySelector("#notDataFound").innerHTML = `
         <div class="col-12 d-flex justify-content-center align-items-center" style="height: 100vh;">
          <h3 class="fw-semibold">Not Data Found Yet!</h3>
        </div>
        `
    } else {
        cartItems.forEach(item => {
            offcanvasBody.innerHTML += `
            <div>
            <div class="d-flex mb-2">
                <img src="${item.image}" width="60" alt="">
                <div>
                    <p style="font-size: 13px;">${item.title}</p>
                    <p style="font-size: 13px;">${item.Brand}</p>
                </div>
            </div>
            
            </div>
            `;
        });
    }
}

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
  <a class="nav-link fw-bold active" id="home-link" aria-current="page" href="../index.html">Home</a>
</li>
<li class="nav-item">
  <a class="nav-link fw-bold" id="about-link" aria-current="page" href="../pages/About.html">About</a>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Watch Category
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" id="mens-watches-link" href="../pages/saleWatchesDetailPage.html?name=Mens Watches">Mens Watches</a></li>
    <li><a class="dropdown-item" id="ladies-watches-link" href="../pages/saleWatchesDetailPage.html?name=Ladies Watches">Ladies Watches</a></li>
    <li><a class="dropdown-item" id="pre-owned-watches-link" href="../pages/saleWatchesDetailPage.html?name=Pre-Owned Watches">Pre-Owned Watches</a></li>
    <li><a class="dropdown-item" id="diving-watches-link" href="../pages/saleWatchesDetailPage.html?name=Diving Watches">Diving Watches</a></li>
    <li><a class="dropdown-item" id="limited-edition-watches-link" href="../pages/saleWatchesDetailPage.html?name=Limited Edition Watches">Limited Edition Watches</a></li>
  </ul>
</li>
<li class="nav-item">
  <a class="nav-link fw-bold" id="contact-link" href="../pages/Contact.html">Contact us</a>
</li>
<li class="nav-item">
  <a class="nav-link fw-bold" id="faq-link" href="../pages/FAQ.html">FAQ</a>
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
     <div class="container">
       <div class="row " id="notDataFound">
 
       </div>
     </div>
    <div class="offcanvas-body">
        <!-- Cart items will be rendered here -->
    </div>
    <div class="d-flex flex-column px-4">
        <button class="button2 text-capitalize mb-2" onclick="addToCardBtn()"> check to proceed</button>
        <button class="button2 text-capitalize mb-5"onclick="goShopping()"> shopping now</button>
    </div>
    <div class="offcanvas-footer">
    </div>
</div>`;

// Function to set active link
function setActiveLink(linkId) {
    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('.dropdown-item').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    const activeLink = document.getElementById(linkId);
    if (activeLink) {
        activeLink.classList.add('active');
        // Save the active link ID to localStorage
        localStorage.setItem('activeLink', linkId);
    }
}

// Retrieve the active link ID from localStorage and set it as active
document.addEventListener('DOMContentLoaded', () => {
    const activeLinkId = localStorage.getItem('activeLink');
    if (activeLinkId) {
        setActiveLink(activeLinkId);
    }

    // Add click event listeners to all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            setActiveLink(link.id);
        });
    });
    document.querySelectorAll('.dropdown-item').forEach(link => {
        link.addEventListener('click', () => {
            setActiveLink(link.id);
        });
    });
});
// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(nav => nav.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
});
function addToCardBtn() {
    window.location.href = '../pages/addToCard.html';
}

function goShopping() {
    window.history.back();
}
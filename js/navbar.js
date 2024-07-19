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
                    <li><a class="dropdown-item" href="../pages/saleWatchesDetailPage.html?name=Mens Watches">Mens Watches</a></li>
                    <li><a class="dropdown-item" href="../pages/saleWatchesDetailPage.html?name=Ladies Watches">Ladies Watches</a></li>
                    <li><a class="dropdown-item" href="../pages/saleWatchesDetailPage.html?name=Pre-Owned Watches">Pre-Owned Watches</a></li>
                    <li><a class="dropdown-item" href="../pages/saleWatchesDetailPage.html?name=Diving Watches">Diving Watches</a></li>
                    <li><a class="dropdown-item" href="../pages/saleWatchesDetailPage.html?name=Limited Edition Watches">Limited Edition Watches</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold" href="#">Contact us</a>
            </li>
        </ul>
        <div class="">
            <button class="btn rounded-5" style="border: none;">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>

    </div>
</div>
</nav>
`

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
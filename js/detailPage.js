document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productName = urlParams.get('name');
    const productId = urlParams.get('id');
    console.log(productId)

    fetch("../js/cardsData.json")
        .then(res => res.json())
        .then(res => {
            const filteredData = res.ShopData.filter(watch => watch.name === productName);
            renderData(filteredData);
        });

    fetch("../js/allWatchesData.json")
        .then(res => res.json())
        .then(res => {
            const filteredData = res.allWatchData.filter(watch => watch.id === productId);
            renderData(filteredData);
        });

    fetch("../js/mostPopularWatches.json")
        .then(res => res.json())
        .then(res => {
            const filteredData = res.popularWatches.filter(watch => watch.id === productId);
            renderData(filteredData);
        });
        fetch("../js/saleWatches.json")
        .then(res => res.json())
        .then(res => {
            const filteredData = res.saleWatchData.filter(watch => watch.id === productId);
            renderData(filteredData);
        });
// saleWatches
    const renderData = (data) => {
        data.forEach((item) => {
            document.querySelector("#data").innerHTML += `
                <div class="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
                    <div class="">
                        <img src="${item.image}" class="img-fluid rounded-3" alt="">
                    </div>
                </div>
                <div class="col-lg-7 col-md-5 col-sm-12 py-5 px-3">
                    <h4 class="fs-3">${item.Brand}</h4>
                    <p class="fs-4">${item.title}</p>
                    <p class="fw-semibold fs-5" style="color: #00191c;">Price: ${item.discountPrice}<del class="ms-2 fs-6"> ${item.price}</del></p>
                    <div class="d-flex flex-column mt-5" style="gap: 10px 0;">
                        <button class="button2" onclick="addToCard('${item.title}', '${item.Brand}', '${item.discountPrice}', '${item.image}')">Add TO Card</button>
                        <button class="button2">Buy</button>
                    </div>
                </div>
            `;
            document.querySelector("#ProductCode").innerHTML = item.ProductCode;
            document.querySelector("#ManufacturerProductNumber").innerHTML = item.ManufacturerProductNumber;
            document.querySelector("#Guarantee").innerHTML = item.Guarantee;
            document.querySelector("#Category").innerHTML = item.Category;
            document.querySelector("#Brand").innerHTML = item.Brand;
            document.querySelector("#BrandCollections").innerHTML = item.BrandCollections;
            document.querySelector("#DialColour").innerHTML = item.DialColour;
        });

        new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    };

    const addToCard = async (title, Brand, price, image) => {
        try {
            const currencySymbol = price.match(/[^0-9.-]+/g) ? price.match(/[^0-9.-]+/g)[0] : '';
            const priceWithoutSymbol = parseFloat(price.replace(/[^0-9.-]+/g, ""));
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const newItem = { image, title, price: priceWithoutSymbol, currency: currencySymbol, Brand, quantity: 1 };
            const itemIndex = cartItems.findIndex(item => item.title === title && item.Brand === Brand);

            if (itemIndex !== -1) {
                cartItems[itemIndex].price += newItem.price;
                cartItems[itemIndex].quantity += 1;
            } else {
                cartItems.push(newItem);
            }
            window.location.reload()

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error(error.message);
        }
        window.location.reload()
    };

    window.addToCard = addToCard;
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get('name');
const productId = urlParams.get('id');



fetch("../js/cardsData.json")
    .then(res => res.json())
    .then(res => {
        const filteredData = res.ShopData.filter(watch => watch.name === productName);
        data(filteredData)

    })
const data = (data) => {
    data.map((data) => {
        document.querySelector("#data").innerHTML += `
            <div class="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
            <div class="">
                <img src="${data.image}" class="rounded-3" alt="">
            </div>
                    
                </div>
                <div class="col-lg-7 col-md-5 col-sm-12  py-5 px-3">
                    <h4 class="fs-3">${data.Brand}</h4>
                    <p class="fs-4">${data.title}</p>
                    <p class="fw-semibold fs-5"style="colour:"#00191c">Price: ${data.discountPrice}<del class="ms-2 fs-6"> ${data.price}</del></p>
                    <div class="d-flex flex-column mt-5" style="gap: 10px 0px;">
                        <button class="button2">Add TO Card</button>
                        <button class="button2">Buy </button>
                    </div>
                </div>
            `
        document.querySelector("#ProductCode").innerHTML = data.ProductCode
        document.querySelector("#ManufacturerProductNumber").innerHTML = data.ManufacturerProductNumber
        document.querySelector("#Guarantee").innerHTML = data.Guarantee
        document.querySelector("#Category").innerHTML = data.Category
        document.querySelector("#Brand").innerHTML = data.Brand
        document.querySelector("#BrandCollections").innerHTML = data.BrandCollections
        document.querySelector("#DialColour").innerHTML = data.DialColour


    })
}
fetch("../js/allWatchesData.json")
    .then(res => res.json())
    .then(res => {
        const filteredData = res.allWatchData.filter(watch => watch.id === productId);
        console.log(filteredData)
        datas(filteredData)

    })

const datas = (data) => {
    data.map((data) => {
        console.log(data)
        // <div class="">
        //     <img src="${data.image}" class="rounded-3" alt="">
        // </div>
        // <div class="swiper-slide">
        //                     <img src="./images/dresswatches-lg-master.jpg" alt="">
        //                     <div class="card-img-overlay ">
        //                         <h1 class="card-title">Find your dream watch on the leading marketplace for luxury
        //                             watches.</h1>
        //                     </div>
        //                 </div>
        //                 <div class="swiper-slide">
        //                     <img src="./images/lemans-lg-master.jpg" alt="">
        //                     <div class="card-img-overlay ">
        //                         <h1 class="card-title">Find your dream watch on the leading marketplace for luxury
        //                             watches.</h1>
        //                     </div>
        //                 </div>
        // <div class="swiper-slide">
        //     <img src="./images/popularwatches-lg-master.jpg" alt="">
        //     <div class="card-img-overlay ">
        //         <h1 class="card-title">Find your dream watch on the leading marketplace for luxury
        //             watches.</h1>
        //     </div>
        // </div>
        document.querySelector("#data").innerHTML += `
        <div class="swiper col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center align-items-center rounded-3" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" >
          <div class="swiper-wrapper ">
            ${data.thumbnail.map(img => `
              <div class="swiper-slide">
                <img src="${img}" class="img-fluid" alt="">
              </div>
            `).join('')}
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-12 py-5 px-3">
          <h4 class="fs-3">${data.Brand}</h4>
          <p class="fs-4">${data.title}</p>
          <p class="fw-semibold fs-5" style="color: #00191c;">
            Price: ${data.discountPrice}
            <del class="ms-2 fs-6">${data.price}</del>
          </p>
          <div class="d-flex flex-column mt-5" style="gap: 10px 0;">
            <button class="button2">Add TO Card</button>
            <button class="button2">Buy</button>
          </div>
        </div>
      `;
    
        document.querySelector("#ProductCode").innerHTML = data.ProductCode
        document.querySelector("#ManufacturerProductNumber").innerHTML = data.ManufacturerProductNumber
        document.querySelector("#Guarantee").innerHTML = data.Guarantee
        document.querySelector("#Category").innerHTML = data.Category
        document.querySelector("#Brand").innerHTML = data.Brand
        document.querySelector("#BrandCollections").innerHTML = data.BrandCollections
        document.querySelector("#DialColour").innerHTML = data.DialColour


    })
    const swiper = new Swiper('.swiper', {
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
}
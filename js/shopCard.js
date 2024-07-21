fetch("./js/cardsData.json")
    .then(res => res.json())
    .then(data => {
        data.ShopData.forEach(item => {
            document.querySelector("#data").innerHTML += `
        <div class="card" style=" width: 16rem;height:"400px";border: none;cursor: pointer;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" onclick="detailPage('${item.name}')">
            <img src="${item.image}" class="card-img-top" style="background-color: #fafafa; "
                alt="...">
            <div class="card-body">
                <p class="card-title fw-semibold" style="font-size: 14px;">${item.
                    name
                }</p>
                <p class="card-text" style="font-size: 14px;">${truncateTitle(item.title, 4)}</p>
                <div class="d-flex align-items-center">
                    <h5 class="card-text" style="color: #00191c;">${item.discountPrice}</h5>
                    <small class="card-text ms-2 text-secondary"> <del>${item.price}</del></small>
                </div>
            </div>
        </div>
        `
        });
    })
    .catch(error => console.error(error.message))

function truncateTitle(title, wordLimit) {
    const words = title.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
}
let detailPage = (name) => {
    const encodedName = encodeURIComponent(name);
    window.location.href = `../pages/shopdetailpage.html?name=${encodedName}`
}


// branded

fetch("./js/allWatchesData.json")
    .then(res => res.json())
    .then(async (data) => {
        const filteredData = data.allWatchData.filter(watch => watch.Gender === "Branded");
        await datarender(filteredData)
    })
    .catch(error => console.error(error.message))


const datarender = (data) => {
    data.forEach(item => {
        document.querySelector("#branded").innerHTML += `
        <div class="card" style=" width: 16rem; height:"450px";border: none;cursor: pointer;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" onclick="detailPag('${item.id}')">
            <img src="${item.image}" class="card-img-top" style="background-color: #fafafa; "
                alt="...">
            <div class="card-body">
                <p class="card-title fw-semibold" style="font-size: 14px;">${item.
                name
            }</p>
                <p class="card-text" style="font-size: 14px;">${truncateTitle(item.title, 4)}</p>
                <div class="d-flex align-items-center">
                    <h5 class="card-text" style="color: #00191c;">${item.discountPrice}</h5>
                    <small class="card-text ms-2 text-secondary"> <del>${item.price}</del></small>
                </div>
            </div>
        </div>
        `
    });
}

let detailPag = (name) => {
    const encodedName = encodeURIComponent(name);
    window.location.href = `../pages/shopdetailpage.html?id=${encodedName}`
}


fetch("./js/mostPopularWatches.json")
    .then(res => res.json())
    .then(async (data) => {
        data.popularWatches.map((item) => {
            document.querySelector("#mostPopularBrand").innerHTML += `
                <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-between" style="gap: 10px;" >
                    <div class="  py-3" style="cursor: pointer;"onclick="DeatilPage('${item.id}')">
                        <div class="card  rounded-3" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">
                            <img src="${item.image}" class="card-img-top rounded-3" alt="...">
                            <div class="card-body mt-3">
                              <h5 class="card-title fw-semibold">${item.Brand}</h5>
                            </div>
                          </div>
                    </div>
                </div>
            `
        })
    })
    .catch(error => console.error(error.message))
const DeatilPage = (name) => {
    // detailPage.html
    const encodedName = encodeURIComponent(name);
    window.location.href = `../pages/detailPage.html?id=${encodedName}`
}
fetch("./js/cardsData.json")
    .then(res => res.json())
    .then(data => {
        data.ShopData.forEach(item => {
            document.querySelector("#data").innerHTML += `
        <div class="card" style=" width: 16rem;border: none;cursor: pointer;" onclick="detailPage('${item.name}')">
            <img src="${item.image}" class="card-img-top" style="background-color: #fafafa; "
                alt="...">
            <div class="card-body">
                <p class="card-title fw-semibold" style="font-size: 14px;">${item.
                    name
                }</p>
                <p class="card-text" style="font-size: 14px;">${truncateTitle(item.title, 4)}</p>
                <div class="d-flex align-items-center">
                    <h5 class="card-text" style="color: #a0142c;">${item.discountPrice}</h5>
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
    .then(async(data) => {
        const filteredData = data.allWatchData.filter(watch => watch.Gender === "Branded");
        await datarender(filteredData)
    })
    .catch(error => console.error(error.message))


    const datarender=(data)=>{
        data.forEach(item => {
            document.querySelector("#branded").innerHTML += `
        <div class="card" style=" width: 16rem;border: none;cursor: pointer;" onclick="detailPage('${item.name}')">
            <img src="${item.image}" class="card-img-top" style="background-color: #fafafa; "
                alt="...">
            <div class="card-body">
                <p class="card-title fw-semibold" style="font-size: 14px;">${item.
                    name
                }</p>
                <p class="card-text" style="font-size: 14px;">${truncateTitle(item.title, 4)}</p>
                <div class="d-flex align-items-center">
                    <h5 class="card-text" style="color: #a0142c;">${item.discountPrice}</h5>
                    <small class="card-text ms-2 text-secondary"> <del>${item.price}</del></small>
                </div>
            </div>
        </div>
        `
        });
    }
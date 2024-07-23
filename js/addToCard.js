const addToCard = async (title, Brand, price, image) => {
    try {
        console.log(title)
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
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        window.location.reload()
    } catch (error) {
        console.error(error.message);
    }
}
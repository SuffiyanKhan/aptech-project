const updateMetaData = () => {
    const path = window.location.pathname;
    const metaData = {
        'salewatchpage.html': {
            title: 'Watch Sale - Watch Visita',
            description: 'Discover the best deals on luxury watches at Watch Visita.'
        },
        'saleWatchesDetailPage.html': {
            title: `${new URLSearchParams(window.location.search).get('name')} - Watch Visita`,
            description: `Explore the ${new URLSearchParams(window.location.search).get('name')} collection at Watch Visita.`
        },
        'About.html': {
            title: 'About Us - Watch Visita',
            description: 'Learn more about Watch Visita, our mission, and the team behind our luxury watch marketplace.'
        },
        'FAQ.html': {
            title: 'FAQ - Watch Visita',
            description: 'Find answers to frequently asked questions about Watch Visita and our luxury watch offerings.'
        },
        'Contact.html': {
            title: 'Contact Us - Watch Visita',
            description: 'Get in touch with Watch Visita for any inquiries or support related to luxury watches.'
        },
        'detailPage.html': {
            title: 'Watch Detail - Watch Visita',
            description: 'View detailed information about your selected luxury watch at Watch Visita.'
        },
        'checkOut.html': {
            title: 'Checkout - Watch Visita',
            description: 'Complete your purchase securely and effortlessly at Watch Visita.'
        },
        'addToCard.html': {
            title: 'Cart - Watch Visita',
            description: 'Review and manage your selected luxury watches in the cart at Watch Visita.'
        },
        'default': {
            title: 'Watch Visita || Home',
            description: 'Welcome to Watch Visita, your leading marketplace for luxury watches.'
        }
    };

    const pageFileName = path.split('/').pop();

    const pageMetaData = metaData[pageFileName] || metaData['default'];

    document.getElementById('page-title').innerText = pageMetaData.title;
    document.querySelector('meta[name="description"]').setAttribute('content', pageMetaData.description);
};
updateMetaData();

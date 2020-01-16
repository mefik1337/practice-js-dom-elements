console.log('DOM');

const addUrl = () => {
    const parent = document.querySelector('ul');
    const children = parent.querySelectorAll('li a');
    children.forEach((site) => {
        const data = site.dataset.url;
        if(data !== undefined) {
           site.setAttribute('href', data);
        }
    })
};

addUrl();
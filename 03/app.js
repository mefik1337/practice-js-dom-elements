console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
};

const getButtonSettings = () => {
    const button = document.querySelector('button');
    const {attr:{className, title}, css:{border, padding, color}, text} = buttonSettings;
        button.setAttribute('class', className);
        button.setAttribute('title', title);
        button.style.border = border;
        button.style.padding = padding;
        button.style.color = color;
        button.innerText = text;
};

getButtonSettings();
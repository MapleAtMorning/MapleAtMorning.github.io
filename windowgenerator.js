class win_98_nav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = "<div><img src='windows/buttons/nav-buttons/minimize.png' alt='minimize button'><img src='windows/buttons/nav-buttons/maximize.png' alt='maximize button'> <img src='windows/buttons/nav-buttons/cross.png' alt='X button'><div>"
    }
}

class win_98 extends HTMLElement{
    connectedCallback() {
        this.innerHTML = "<win-nav></win-nav>"
    }
}

class win_98_desktop_icon extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `<img src="${this.dataset.src}"></img><p>${this.dataset.text}</p`
    }
}

customElements.define('win-nav', win_98_nav)
customElements.define('win-main', win_98)
customElements.define('desktop-icon', win_98_desktop_icon)
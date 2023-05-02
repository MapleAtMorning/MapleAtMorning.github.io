class win_98_nav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `<h2>${this.dataset.title}</h2><div><button aria-label='minimize' /><button aria-label='maximize' /><button aria-label='close' /><div>`
    }
}

class win_98 extends HTMLElement{
    connectedCallback() {
        this.innerHTML = ""
    }
}

class win_98_desktop_icon extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `<img src="${this.dataset.src}"></img><p>${this.dataset.text}</p>`
    }
}

customElements.define('win-nav', win_98_nav)
customElements.define('win-main', win_98)
customElements.define('desktop-icon', win_98_desktop_icon)
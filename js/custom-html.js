class win_98_win_nav extends HTMLElement{
    connectedCallback() {
        if(this.dataset.title === "mini"){
            this.innerHTML = `<div class="button-holder"><button aria-label='close' /></div>`
            return
        }
        this.innerHTML = `<h2>${this.dataset.title}</h2><div class="button-holder"><button aria-label='minimize' /><button aria-label='maximize' /><button aria-label='close' /></div>`
    }
}

class win_98_win_main extends HTMLElement{
    connectedCallback() {
        if(this.id === "socials"){
            this.innerHTML = "<div class='drag hidden'></div>"
        }else{
            this.innerHTML = "<div class='drag'></div>"
        }
    }
}

class win_98_desktop_icon extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `<img src="${this.dataset.src}"></img><p>${this.dataset.text}</p>`
    }
}

customElements.define('win-nav', win_98_win_nav)
customElements.define('win-main', win_98_win_main)
customElements.define('desktop-icon', win_98_desktop_icon)
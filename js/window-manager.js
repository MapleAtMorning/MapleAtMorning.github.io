let windows = document.getElementsByTagName("win-main")


// Code to open windows on desktop icon click #############################################################################################
document.querySelectorAll("desktop-icon").forEach(element => {
    element.addEventListener("click", event => {

        console.log(element)
        if(element.dataset.text === "About" && !windows[0].classList.contains("open")){
            windows[0].classList.add("open")
        }else if(element.dataset.text === "Websites"){
            windows[1].classList.add("open")
        }else if(element.dataset.text === "Socials"){
            windows[2].classList.add("open")
        }else if(element.dataset.text === "Projects"){
            windows[3].classList.add("open")
        }

    })
});

document.querySelectorAll("button[aria-label='close']").forEach(element => {
    element.addEventListener("click", event => {
        let currwindow = element.parentElement.parentElement.parentElement

        if(currwindow.classList.contains("open")){
            currwindow.classList.remove("open")
            if(currwindow.classList.contains("max")){
                currwindow.classList.remove("max")
            }
        }
    })
});

document.querySelectorAll("button[aria-label='maximize']").forEach(element => {
    element.addEventListener("click", event => {
        let currwindow = element.parentElement.parentElement.parentElement

        if(currwindow.classList.contains("max")){
            currwindow.classList.remove("max")
        }else{
            currwindow.classList.add("max")
        }
    })
});
let windows = document.querySelectorAll("win-main")
let desktop = document.getElementsByTagName("desktop-icon")
let currentFocus = document.querySelector("win-main")


// Code to open windows on desktop icon click #############################################################################################
document.querySelectorAll("desktop-icon").forEach(element => {
    element.addEventListener("click", event => {

        for (i = 0; i < desktop.length; i++) {
            if (desktop[i] === element){
                changeFocus(windows[i])
                if(!windows[i].classList.contains("open")) {
                    windows[i].classList.add("open")
                }
            }
        }
    })
});

document.querySelectorAll("win-main").forEach(element => {
    element.addEventListener("mousedown", event => {

        changeFocus(element)

    })
});

document.querySelectorAll("button[aria-label='close']").forEach(element => {
    element.addEventListener("click", event => {
        let currwindow = element.parentElement.parentElement.parentElement

        if (currwindow.classList.contains("open")) {
            currwindow.classList.remove("open")
            if (currwindow.classList.contains("max")) {
                currwindow.classList.remove("max")
            }
        }
    })
});

document.querySelectorAll("button[aria-label='maximize']").forEach(element => {
    element.addEventListener("click", event => {
        let currwindow = element.parentElement.parentElement.parentElement

        if (!currwindow.classList.contains("max")) {
            currwindow.classList.add("max")
            currwindow.style.left = 0
            currwindow.style.top = 0
        } else {
            currwindow.classList.remove("max")
        }
    })
});

windows.forEach(element => {
    dragElement(element);
    resize(element);
    element.style.top = element.offsetTop + "px"
    element.style.left = element.offsetLeft + "px"
})

function changeFocus(to){

    if(to === currentFocus){return}
    to.style.zIndex = parseInt(to.style.zIndex) + 10
    currentFocus.style.zIndex = parseInt(currentFocus.style.zIndex) - 10
    currentFocus = to
}


// i was lazy
// https://www.w3schools.com/howto/howto_js_draggable.asp
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt.querySelector("win-nav")) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector("win-nav").onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        console.log(e.target.tagName)
        if (elmnt.classList.contains('max') || e.target.tagName === "BUTTON") { return }
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        if((elmnt.offsetTop - pos2) < 0){pos2 = 0}
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function resize(elmnt) {
    let objX = 0, objY = 0, mouseX = 0, mouseY = 0;

    if (elmnt.querySelector("win-nav")) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector(".drag").onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        if (elmnt.classList.contains('max')) { return }
        e.preventDefault();
        // get the mouse cursor position at startup:
        mouseX = e.clientX;
        mouseY = e.clientY;
        objX = parseInt(elmnt.style.left);
        objY = parseInt(elmnt.style.top);
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        // set the element's new position:
        elmnt.style.width = (mouseX - objX) + "px";
        elmnt.style.height =  (mouseY - objY) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
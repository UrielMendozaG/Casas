var nextClicked = new Event("nextClicked")
var backClicked = new Event("backClicked")

export default function butons() {
    let next = document.getElementById("next")
    let back = document.getElementById("back")

    next.onclick = () => window.dispatchEvent(nextClicked)
    back.onclick = () => window.dispatchEvent(backClicked)
}
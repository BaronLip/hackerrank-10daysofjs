// ---CREATING A BUTTON:---

const createButton = () => {
    let button = document.createElement('button');
    button.id = 'btn';
    button.innerHTML = 0;
    button.addEventListener("click", plusOne)
    // Adds the button to the dom.
    document.body.appendChild(button)

}

const plusOne = (e) => {
    e.target.innerHTML = parseInt(e.target.innerHTML) + 1
}

createButton()


// ---BUTTON CONTAINERS:---*Fully functional in my browser but not in HR's test container.
// Create the setup needed to perform the rotate function.
const createBtnContainer = () => {
    let btnContainer = document.createElement('div');
    btnContainer.setAttribute("id", "btns");
    btnContainer.setAttribute("class", "btnContainer");
    btnContainer.style.width = "75%"; // Be sure to put CSS in quotes.

    document.body.appendChild(btnContainer)

    for (let i = 0; i < 9; i++) {
        let button = document.createElement('button');
        button.setAttribute('id', `btn${i + 1}`)
        button.setAttribute('class', 'button')
        button.style.width = '30%';
        button.style.height = '48px';
        button.style.fontSize = '24px'
        button.innerHTML = i + 1;
        btnContainer.appendChild(button);
        // button.addEventListener('click', cycle)
    }
}
// This ends up cycling the numbers but does not rotate them. 
const cycle = () => {
    // // My solution wasn't quite right. 
    // let buttons = document.getElementsByClassName('button');
    // buttons = Array.from(buttons);
    // buttons.unshift(buttons[buttons.length-1]);
    // buttons.pop(buttons[buttons.length-1]);

    // let btnContainer = document.getElementById('btns');
    // console.log(btnContainer, buttons)
    // buttons.forEach( button => btnContainer.appendChild(button))
    // document.body.appendChild(btnContainer);
}


// Initiate the dom elements(buttons).
createBtnContainer()


// This is from the discussions page and is smart to hard code the cycle instead of trying to manipulate the cycle of numbers/indexes. 
let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById("btn5");

btn5.onclick=function() {
    nums.unshift(nums.pop());
    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    }
}






// // ---CREATING A BUTTON:---
// const createButton = () => {
//     let button = document.createElement('button');
//     button.id = 'btn';
//     button.innerHTML = 0;
//     button.addEventListener("click", plusOne)
//     // Adds the button to the dom.
//     document.body.appendChild(button)

// }

// const plusOne = (e) => {
//     e.target.innerHTML = parseInt(e.target.innerHTML) + 1
// }

// createButton()


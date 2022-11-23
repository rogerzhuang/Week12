const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);
const bdy = document.body;
const img = document.querySelector("#shoppingCart");
const buttonContainer = document.querySelector(".button-container");

function clickHandler ()
{
    alert("You clicked me!");
    // clickMeButton.removeEventListener("click", clickHandler);
}

clickMeButton.addEventListener("click", clickHandler, {once:true});

function changeBackground ()
{
    bdy.classList.add("pink");
}

clickMeButton.addEventListener("click", changeBackground);

function changeText ()
{
    if (clickMeButton.textContent === "Click Me!") {
        clickMeButton.textContent = "Clicked!";
    }
    else {
        clickMeButton.textContent = "Click Me!";
    }
}

clickMeButton.addEventListener("click", changeText);

function updateImage (ev)
{
    img.src = "images/shoppingCart.png";
    img.alt = "Shopping Cart Icon";
    img.width = 100;
    img.height = 100;
    console.log(ev);
}

clickMeButton.addEventListener("click", updateImage);

function changeBGGreen (ev)
{
    if (ev.target.tagName === "BUTTON") {
        ev.target.classList.add("green");
    }
}

buttonContainer.addEventListener("mouseover", changeBGGreen);

function changeTextColor (ev)
{
    if (ev.target.tagName === "BUTTON") {
        ev.target.classList.add(`${ev.target.textContent}`);
    }
}

buttonContainer.addEventListener("click", changeTextColor);
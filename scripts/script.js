const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);
const bdy = document.body;
const img = document.querySelector("#shoppingCart");

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

function updateImage ()
{
    img.src = "images/shoppingCart.png";
    img.alt = "Shopping Cart";
    img.width = 100;
    img.height = 100;
}

clickMeButton.addEventListener("click", updateImage);
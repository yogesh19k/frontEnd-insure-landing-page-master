function navToggle(){
    const outerGrid=document.querySelector(".outerGrid");
    outerGrid.classList.toggle("outerGridNavEnabled");
    const innerGrid=document.querySelector(".innerGrid");
    innerGrid.classList.toggle("innerGridNavEnabled");
    const nav=document.querySelector("nav");
    nav.classList.toggle("navEnabled");
    const hamburgerIcon=document.querySelector("#hamburger");
    if(hamburgerIcon.getAttribute("src")==="./images/icon-hamburger.svg")
        hamburgerIcon.src="./images/icon-close.svg";
    else
        hamburgerIcon.src="./images/icon-hamburger.svg";
    // console.log(hamburgerIcon,outerGrid.classList,innerGrid.classList,nav.classList);
}
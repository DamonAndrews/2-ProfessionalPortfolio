const newHeadData = document.querySelector("#hideHead");
const aboutMe = document.querySelector("#aboutMe");
const portShow = document.querySelector("#portfolio");
const contactMe = document.querySelector("#contactLinks");
const contactsidebar = document.querySelector("#contactsidebar");
const linkHide1 = document.querySelector("#linkHide1");
const linkHide2 = document.querySelector("#linkHide2");
const linkHide3 = document.querySelector("#linkHide3");
const backHome = document.querySelector("#backHome");

//NEW HEAD
// portShow.addEventListener("click", newHead);

// function newHead() {
//   newHeadData.classList.add("hide");  
// }

//SHOW ABOUT ME
aboutMe.addEventListener("click", meAbout);

function meAbout(){
    hiddenAboutMe1.classList.remove("hide");
    linkHide1.classList.add("hide");
    linkHide2.classList.add("hide");
    linkHide3.classList.add("hide");
}
//HIDE ABOUT ME
backHome.addEventListener("click", unshowAboutMe1);

function unshowAboutMe1(){
    hiddenAboutMe1.classList.add("hide");
    linkHide1.classList.remove("hide");
    linkHide2.classList.remove("hide");
    linkHide3.classList.remove("hide");
}
//SHOW PORTFOLIO
portShow.addEventListener("click",showPortfolio);

function showPortfolio(){
    hiddenPortfolio1.classList.remove("hide");
    hiddenPortfolio2.classList.remove("hide");
    hiddenPortfolio3.classList.remove("hide");
    hiddenPortfolio4.classList.remove("hide");
    hiddenPortfolio5.classList.remove("hide");
    linkHide1.classList.add("hide");
    linkHide2.classList.add("hide");
    linkHide3.classList.add("hide");
}
//HIDE PORTFOLIO
backHome.addEventListener("click", unshowPortfolio);

function unshowPortfolio(){
    hiddenPortfolio1.classList.add("hide");
    hiddenPortfolio2.classList.add("hide");
    hiddenPortfolio3.classList.add("hide");
    hiddenPortfolio4.classList.add("hide");
    hiddenPortfolio5.classList.add("hide");
    linkHide1.classList.remove("hide");
    linkHide2.classList.remove("hide");
    linkHide3.classList.remove("hide");
}

//CONATCT LINK
// contactMe.addEventListener("click", scrollIntoView());
// function bottomScroll(){
//     scrollIntoView();
// }

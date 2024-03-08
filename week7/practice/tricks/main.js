"use strict";

const backToTop = document.querySelector("#toTop");

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  console.log("back to top");
};

backToTop.addEventListener("click", getToTop);

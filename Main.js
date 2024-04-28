// button masuk
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});



// button daftar
document.querySelector("#show-regis").addEventListener("click", function(){
    document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-btn2").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active");
});

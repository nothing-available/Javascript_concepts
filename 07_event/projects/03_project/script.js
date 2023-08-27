const btn = document.querySelector("button");

const box = document.querySelector("div");

const video = document.querySelector("video");

btn.addEventListener("click",(e)=>box.classList.remove("hidden"));

video.addEventListener("click",(e)=>{
    e.stopPropagation();
    video.play();
});

box.addEventListener("click",()=>box.classList.add("hidden"));
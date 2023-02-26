const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

// open function

const openModal=()=>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive")
}

// close function

const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}
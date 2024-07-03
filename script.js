const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close_modal");

closeModalButton.addEventListener("click",function() {
    modal.classList.add("hide");
})

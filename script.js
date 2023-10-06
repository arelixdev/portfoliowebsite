var typed = new Typed(".typing",{
    strings: ["Game Developer","Full-stack Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

const openModal = () => {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
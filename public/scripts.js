const modalOverley = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverley.classList.add('active')
        modalOverley.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;

    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverley.classList.remove('active')
    modalOverley.querySelector("iframe").src = ""
})


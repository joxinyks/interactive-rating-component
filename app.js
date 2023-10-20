const ratingCards = document.querySelectorAll(".ratings span");
const sumbitButton = document.querySelector(".submitButton");
const ratePoint = document.getElementById("rate");
const ratingSection = document.querySelector(".ratingSection");
const thanks = document.querySelector(".thanks");
let rate = null;

ratingCards.forEach((ratingCard) => {
    ratingCard.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
        console.log(rate);
    });
});

sumbitButton.addEventListener("click", () => {
    if (rate) {
        ratePoint.innerText=rate;
        ratingSection.classList.add("hidden");
        thanks.classList.remove("hidden");
    }
});
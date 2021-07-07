window.addEventListener('DOMContentLoaded', () => {
    const priceMain = document.querySelectorAll("#priceMain div p"),
        priceBuyMain = document.querySelectorAll("#priceMain button"),
        priceTextMain = document.querySelectorAll("#priceMain div h3"),
        feedbackClassic = document.querySelector('.modal'),
        feedbackAddText = document.querySelector('#listOrders'),
        otherFeedbackClassic = document.querySelector('.modal'),
        buttonCloseFeedbackClassic = document.querySelector('.modal__close'),
        infoButton = document.querySelectorAll("#typeWorking .buttonBtn"),
        infoMain = document.querySelectorAll("#preparing p");

    function hideFeedbackClassic() {
        feedbackClassic.style.display = "none";
    }

    function showFeedbackClassic() {
        feedbackClassic.style.display = "";
    }

    hideFeedbackClassic();

    infoButton.forEach((click, i) => {
        click.addEventListener('click', () => {
            showFeedbackClassic();
            feedbackAddText.innerHTML = infoMain[i].innerHTML;
        });
    });

    priceBuyMain.forEach((click, i) => {
        click.addEventListener('click', () => {
            showFeedbackClassic();
            feedbackAddText.innerHTML = priceTextMain[i].innerHTML + " : " + priceMain[i].innerHTML.match('[0-9]{1,6}');
            feedbackAddText.innerHTML += "грн.";
        });
    });

    buttonCloseFeedbackClassic.addEventListener('click', () => {
        hideFeedbackClassic();
    });

    otherFeedbackClassic.addEventListener('click', (e) => {
        if (e.target === otherFeedbackClassic) {
            hideFeedbackClassic();
        }
    });

});
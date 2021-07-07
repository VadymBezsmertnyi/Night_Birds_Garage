window.addEventListener('DOMContentLoaded', () => {
    const feedbackClassic = document.querySelector('.modal'),
        feedbackAddText = document.querySelector('#listOrders');

    function hideFeedbackClassic() {
        feedbackClassic.style.display = "none";
    }

    function showFeedbackClassic() {
        feedbackClassic.style.display = "";
    }

    hideFeedbackClassic();
});
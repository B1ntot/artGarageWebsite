function questionOrCommentClicked() {
    let orderNumLabel = document.querySelector('label[for="order-number"]');
    let orderNum = document.querySelector('#order-number');
    orderNum.type = "hidden";
    orderNumLabel.style.display = 'none';
}

function orderProblemClicked() {
    let orderNumLabel = document.querySelector('label[for="order-number"]');
    let orderNum = document.querySelector('#order-number');
    orderNum.type = "text";
    orderNumLabel.style.display = 'inline';
}

window.onload = function () {
    let orderProblem = document.querySelector('#contact-about-order-problem');
    let question = document.querySelector('#contact-about-question');
    let comment = document.querySelector('#contact-about-comment');

    orderProblem.addEventListener('click', orderProblemClicked);
    question.addEventListener('click', questionOrCommentClicked);
    comment.addEventListener('click', questionOrCommentClicked);
    
};
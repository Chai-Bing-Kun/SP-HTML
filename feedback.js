(function() {
    emailjs.init("rKqKFW56LbtOlXMxd");
})();

const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackDialog = document.getElementById('feedbackDialog');
const feedbackForm = document.getElementById('feedbackForm');

feedbackBtn.addEventListener('click', () => {
    feedbackDialog.showModal();
    document.documentElement.classList.add('dialog-open');
});

function closeFeedbackDialog() {
    feedbackDialog.close();
    document.documentElement.classList.remove('dialog-open');
}

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_x1ryoog', 'template_8wyjz97', this)
        .then(function() {
            console.log('发送成功！');
            feedbackDialog.close();
            document.documentElement.classList.remove('dialog-open');
            alert('感谢您的反馈！我们已收到您的消息。');
        }, function(error) {
            console.log('发送失败...', error);
            alert('抱歉，发送失败。请稍后再试。');
        });
});
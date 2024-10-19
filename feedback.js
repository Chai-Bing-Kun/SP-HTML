const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackDialog = document.getElementById('feedbackDialog');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackResult = document.getElementById('feedbackResult');
const feedbackText = document.getElementById('feedbackText');

feedbackBtn.addEventListener('click', () => {
    feedbackDialog.showModal();
});

function closeFeedbackDialog() {
    feedbackDialog.close();
}

function closeFeedbackResult() {
    feedbackResult.close();
}

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    const resultText = `
反馈信息：
姓名：${name}
邮箱：${email}
反馈内容：${feedback}
    `.trim();

    feedbackText.value = resultText;
    feedbackDialog.close();
    feedbackResult.showModal();
});

function copyFeedback() {
    feedbackText.select();
    document.execCommand('copy');
    alert('反馈文本已复制到剪贴板！');
}
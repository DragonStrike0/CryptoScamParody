function handleAirdropSubmit(event) {
    event.preventDefault();

    document.getElementById('efrei-amount').textContent = '193872 M (~2,7M €)';

    document.getElementById('withdraw-btn').style.display = 'inline-block';
}

function setupWithdrawButton() {
    const withdrawBtn = document.getElementById('withdraw-btn');
    if (withdrawBtn) {
        withdrawBtn.addEventListener('click', function () {
            alert('To withdraw your money, please login to your account by accessing your wallet from the home page.');
        });
    }
}

window.handleAirdropSubmit = handleAirdropSubmit;
window.setupWithdrawButton = setupWithdrawButton;

document.addEventListener('DOMContentLoaded', setupWithdrawButton);
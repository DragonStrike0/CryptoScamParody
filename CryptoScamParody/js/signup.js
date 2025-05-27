function generateWallet() {
  const wallet = {
    publicKey: 'PUB_' + Math.random().toString(36).substring(2, 15),
    privateKey: 'PRIV_' + Math.random().toString(36).substring(2, 15),
    balance: 0
  };
  localStorage.setItem('efrei_wallet', JSON.stringify(wallet));
  return wallet;
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  localStorage.setItem('efrei_user', JSON.stringify({ username, email }));
  generateWallet();
  window.location.href = 'landing_page.html';
});
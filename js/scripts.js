function toggleLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.style.display = (logoutBtn.style.display === 'block') ? 'none' : 'block'; 
}

function logout(event) {
    event.stopPropagation(); 
    window.location.href = './index.html'; 
}
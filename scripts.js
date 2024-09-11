const userPasswords = {
    'Brian P': 'titanico13',
    'Gabita': 'titanico14',
};

const userRedirects = {
    'Brian P': 'https://hf.co/chat/assistant/6694d55064c6c855331fd47f',
    'Gabita': 'https://www.example.com/gabita'
};

function openUserPopup(event) {
    event.preventDefault();
    document.getElementById('user-popup').style.display = 'flex';
}

function closeUserPopup() {
    document.getElementById('user-popup').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Login attempt:", username, password);

    if (userPasswords[username] && userPasswords[username] === password) {
        console.log("Successful login:", username);
        closeUserPopup();
        setTimeout(() => {
            openPopup(null, userRedirects[username]);
        }, 100); // Ajuste el tiempo de espera si es necesario
    } else {
        console.log("Failed login attempt");
        document.getElementById('error-message').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-iframe').src = '';
}

function openPopup(event, url) {
    if (event) {
        event.preventDefault();
    }
    console.log("Opening popup with URL:", url);
    document.getElementById('popup-iframe').src = url;
    document.getElementById('popup').style.display = 'flex';
}

function openSmallWindow(event, url) {
    event.preventDefault();
    
    // Obtén el ancho y alto de la ventana del navegador
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    // Define las dimensiones del popup
    const popupWidth = 400;
    const popupHeight = 600;
    
    // Calcula la posición 'left' y 'top' para centrar el popup
    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;
    
    // Abre el popup centrado
    window.open(url, '_blank', `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
}



// Añadir event listener para abrir el popup de suscripción
document.getElementById('suscribirte').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popup-suscribirte').style.display = 'flex';
});

// Añadir event listener para cerrar el popup de suscripción
document.getElementById('close-suscribirte').addEventListener('click', function() {
    document.getElementById('popup-suscribirte').style.display = 'none';
});
const path = window.location.pathname.split('/');
const text = document.getElementById('route');
text.innerHTML = path[1];

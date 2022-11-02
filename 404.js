const path = window.location.pathname.split('/');
const text = document.getElementById('route');
text.innerHTML = path[path.length - 1];

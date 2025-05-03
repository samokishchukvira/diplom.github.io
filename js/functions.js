document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.dog-card'); 
    const btn = document.getElementById('show-more-btn');

    items.forEach((item, index) => {
        if (index < 6) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });

    btn.addEventListener('click', function () {
        items.forEach(item => item.classList.add('visible'));
        btn.style.display = 'none'; 
    });
});

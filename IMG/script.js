document.querySelectorAll('.ctf-toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetIndex = this.dataset.target;
        const details = this.previousElementSibling;
        const icon = this.querySelector('i');
        
        details.classList.toggle('active');
        this.classList.toggle('active');
        icon.classList.toggle('rotate-180');
        
        // Update button text
        const isActive = details.classList.contains('active');
        this.querySelector('span').textContent = isActive ? 'Hide CTFs' : 'Show CTFs';
    });
});


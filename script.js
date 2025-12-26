// Interactive animations
document.querySelectorAll('.card').forEach(card => {
    // Hover: scale up + deeper shadow
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });

    // Hover out: reset
    card.addEventListener('mouseout', () => {
        if (!card.classList.contains('highlighted')) {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });

    // Click: toggle highlight (persists even after mouseout)
    card.addEventListener('click', () => {
        card.classList.toggle('highlighted');
        
        if (card.classList.contains('highlighted')) {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        } else {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
});
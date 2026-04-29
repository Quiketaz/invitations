// RSVP Modal Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const showRsvpBtn = document.getElementById('show-rsvp-btn');
    const rsvpModal = document.getElementById('rsvp-modal');
    const closeRsvpBtn = document.getElementById('close-rsvp-btn');

    showRsvpBtn.addEventListener('click', () => {
        rsvpModal.classList.remove('opacity-0', 'pointer-events-none');
        rsvpModal.classList.add('opacity-100', 'pointer-events-auto');
    });

    closeRsvpBtn.addEventListener('click', () => {
        rsvpModal.classList.add('opacity-0', 'pointer-events-none');
        rsvpModal.classList.remove('opacity-100', 'pointer-events-auto');
    });
});

// Lógica para enviar a Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwpWLVZH2KTsHmbNG1Gm89mFHeXV2qE7xeNTfnTLxWn8dgAe7OB5ecxfge0LftDuHFI/exec'; // Pega aquí la URL que obtuviste al implementar
const form = document.getElementById('rsvp-form');
const btn = document.getElementById('submit-btn');
const msg = document.getElementById('success-msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "ENVIANDO...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.classList.add('hidden');
            msg.classList.remove('hidden');
        })
        .catch(error => {
            btn.disabled = false;
            btn.innerHTML = "REINTENTAR";
            console.error('Error!', error.message);
        });
});
document.getElementById('testimonial-btn').onclick = function() {
    document.getElementById('testimonial-section').style.display = 'block';
    window.scrollTo({ top: document.getElementById('testimonial-section').offsetTop, behavior: 'smooth' });
    showTestimonials();
};

document.getElementById('testimonial-form').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('testimonial-name').value.trim();
    const text = document.getElementById('testimonial-text').value.trim();
    if (!name || !text) return;
    const testimonials = JSON.parse(localStorage.getItem('efrei_testimonials') || '[]');
    testimonials.push({ name, text });
    localStorage.setItem('efrei_testimonials', JSON.stringify(testimonials));
    document.getElementById('testimonial-message').innerHTML = "<span style='color:#4c5ad0;font-weight:bold;'>Merci pour votre témoignage !</span>";
    document.getElementById('testimonial-form').reset();
    showTestimonials();
};

function showTestimonials() {
    const testimonials = JSON.parse(localStorage.getItem('efrei_testimonials') || '[]');
    const container = document.getElementById('user-testimonials');
    if (testimonials.length === 0) {
        container.innerHTML = "<p>Aucun témoignage pour l'instant.</p>";
        return;
    }
    container.innerHTML = testimonials.map(t =>
        `<div class="testimonial"><p>"${t.text}"</p><p><strong>${t.name}</strong></p></div>`
    ).join('');
}
var typed = new Typed(".text", {
    strings     :   [ "Frontend Developer" , "Student", "Gamer"],
    typespeed   :   100,
    backspeed   :   100,
    backdelay   :   1000,
    loop        :   true
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.textContent.trim();
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Menu button toggle logic
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu on click outside
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Smooth scroll reveal for elements
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__tag", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 2000 });

ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 500 });

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
});

ScrollReveal().reveal(".client__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".client__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".client__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".client__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".client__details", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".client__rating", { ...scrollRevealOption, delay: 2500 });

ScrollReveal().reveal(".download__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".download__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".download__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".download__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".download__btn", { ...scrollRevealOption, delay: 2000 });

// Ensure the login button exists before adding event listener
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        console.log(result);
        
        // Handle the result accordingly
        if (response.ok) {
            // Redirect or show success message
            window.location.href = "dashboard.html"; // Redirect to dashboard or another page
        } else {
            alert(result.message); // Show error message
        }
    });
}

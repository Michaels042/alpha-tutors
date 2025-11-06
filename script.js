// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle")
const htmlElement = document.documentElement
const bodyElement = document.body

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  bodyElement.classList.add("dark-mode")
  themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>'
}

// Toggle dark mode
themeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode")
  const isDark = bodyElement.classList.contains("dark-mode")
  localStorage.setItem("theme", isDark ? "dark" : "light")
  themeToggle.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>'
})

// Form Submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const grade = document.getElementById("grade").value
    const message = document.getElementById("message").value

    // Simple validation
    if (!name || !email || !phone || !grade || !message) {
      alert("Please fill out all fields")
      return
    }

    // Create message for WhatsApp
    const whatsappMessage = `Hi, I'm interested in tutoring.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGrade Level: ${grade}\n\nMessage: ${message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Open WhatsApp
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank")

    // Reset form
    contactForm.reset()
  })
}

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const element = document.querySelector(href)
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Add animation delay to elements on page load
window.addEventListener("load", () => {
  const animatedElements = document.querySelectorAll('[class*="animate-"]')
  animatedElements.forEach((element, index) => {
    if (!element.style.animationDelay) {
      element.style.animationDelay = `${index * 0.1}s`
    }
  })
})

// Navbar background on scroll
const navbar = document.querySelector(".navbar-glass")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.07)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll('[class*="animate-"]').forEach((el) => {
  observer.observe(el)
})

// Interactive card hover effect
document.querySelectorAll(".class-card, .testimonial-card, .approach-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Floating animation for hero elements
function startFloatingAnimation() {
  const elements = document.querySelectorAll(".btn-bounce")
  elements.forEach((el) => {
    el.style.animation = "bounce 2s infinite"
  })
}

startFloatingAnimation()

// Add ripple effect to buttons
function addRippleEffect(e) {
  const button = e.currentTarget
  const ripple = document.createElement("span")
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = e.clientX - rect.left - size / 2
  const y = e.clientY - rect.top - size / 2

  ripple.style.width = ripple.style.height = size + "px"
  ripple.style.left = x + "px"
  ripple.style.top = y + "px"
  ripple.classList.add("ripple")

  button.appendChild(ripple)

  setTimeout(() => ripple.remove(), 600)
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", addRippleEffect)
})

// Navbar toggler icon swap (hamburger <-> X) for mobile
const navbarToggler = document.getElementById("navbarToggler")
const navbarTogglerIcon = document.getElementById("navbarTogglerIcon")
const navbarCollapse = document.getElementById("navbarNav")

if (navbarCollapse && navbarTogglerIcon) {
  // Bootstrap collapse events
  navbarCollapse.addEventListener("show.bs.collapse", () => {
    navbarTogglerIcon.classList.remove("bi-list")
    navbarTogglerIcon.classList.add("bi-x-lg")
    navbarToggler.setAttribute("aria-expanded", "true")
  })

  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    navbarTogglerIcon.classList.remove("bi-x-lg")
    navbarTogglerIcon.classList.add("bi-list")
    navbarToggler.setAttribute("aria-expanded", "false")
  })
}

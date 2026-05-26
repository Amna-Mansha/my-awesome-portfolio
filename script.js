 // LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none"
})


// TYPING
const text = "Beginner Web Developer & AI Student"
const typing = document.querySelector(".typing")

let i = 0
function type(){
  if(i < text.length){
    typing.innerHTML += text.charAt(i)
    i++
    setTimeout(type,70)
  }
}
type()


// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    let top = el.getBoundingClientRect().top
    if(top < window.innerHeight - 100){
      el.classList.add("active")
    }
  })
})


// DARK / LIGHT MODE
document.getElementById("modeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light")
})


// EMAIL SEND (ONLY SET KEYS)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault()

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    e.target
  ).then(() => {
    alert("Message Sent 🚀")
    e.target.reset()
  }).catch(() => {
    alert("Error Sending Message")
  })
  document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Thanks! Your message has been recorded (demo mode).")
  e.target.reset()
})
})
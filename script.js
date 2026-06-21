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
function addSlot() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (date && time) {
    const li = document.createElement("li");
    li.innerText = date + " - " + time;
    document.getElementById("slotList").appendChild(li);
  }
} 

function acceptMeeting() {
  document.getElementById("status").innerText = "Accepted";
  document.getElementById("status").style.color = "green";
}

function declineMeeting() {
  document.getElementById("status").innerText = "Declined";
  document.getElementById("status").style.color = "red";
}
 const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {
  if(password.value.length < 6){
    strength.innerText = "Strength: Weak";
  }
  else if(password.value.length < 10){
    strength.innerText = "Strength: Medium";
  }
  else{
    strength.innerText = "Strength: Strong";
  }
});

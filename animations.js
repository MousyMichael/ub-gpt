var internalSidebar = document.querySelector(".fc>.input>input");

internalSidebar.addEventListener("focus", ()  => {
    if(!document.querySelector(".input").classList.contains("focused")) {
        document.querySelector(".input").classList.add("focused")
    }
})

internalSidebar.addEventListener("blur", () => {
    if(document.querySelector(".input").classList.contains("focused")) {
        document.querySelector(".input").classList.remove("focused")
    }
})

var gobtn = document.querySelector(".gobtnh")
var display = false

gobtn.addEventListener("click", () => {
   if(display == false) {
    display = true
    document.querySelector(".chatarea").classList.remove("hiddenchats")
    document.querySelector(".chatarea").classList.add("showchats")
    document.querySelector(".input>input").value = ''
   }
setTimeout(() => {
    document.querySelector(".chat-gpt").classList.remove("hidden")
},600)

setTimeout(() => {
    document.querySelector(".chat-gpt").classList.remove("hidden")
    document.getElementById("loader").classList.add("hidden")
    document.getElementById("res").classList.remove("hidden")
    document.getElementById("res").classList.add("showchats")
},1800)
})
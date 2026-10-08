let title = document.getElementById("title")
console.log(title)

let p = document.querySelectorAll(".text")


p.forEach(Text => {
  Text.innerHTML ="texto alterado via javascript"
});

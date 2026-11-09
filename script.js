const body = document.body

function onClick(){
    alert("test")
}



function newContainer(){
    const container = document.createElement("div")
    container.classList.add("container")
    body.append(container)
    container.addEventListener("click", onClick)
    body.append(container)
}
document.querySelectorAll(".container").forEach(function (container){
    container.addEventListener("click",onClick)
})

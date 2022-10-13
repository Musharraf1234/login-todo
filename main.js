let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let submit = document.querySelector("submit")

form.addEventListener("submit" , savedata)

function savedata(e){
    e.preventDefault()

    let li = document.createElement("li")

    li.className="list-group-item"

    li.innerText = input.value
    
    let btn = document.createElement("button")
    btn.className="btn bi-trash-fillr"
    btn.innerText = "DELETE"
     li.className= "list-group-item d-flex justify-content-between"
    
            



    
    
    ul.appendChild(li)

    li.appendChild(btn)

    form.reset()

}


ul.addEventListener("click" , dlbtn)

function dlbtn(e){
    if(e.target.className.includes("btn")){
        let todo = e.target.parentElement
        ul.removeChild(todo)

    }
}
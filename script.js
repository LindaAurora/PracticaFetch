let thebody = document.getElementById("texto")
let spinner = document.getElementById("loading")

function myFunction() {
    thebody.innerHTML = ""

    const infoUsuarios = JSON.parse(localStorage.getItem("infoUsuarios"))
    if(infoUsuarios && infoUsuarios.time > Date.now()){
        tablaEnHtml(infoUsuarios.data)
    }
    else {
        spinnerEnHtml()
        traerInfo() 
    }
} 
function traerInfo() {
    fetch("https://reqres.in/api/users?delay=3")
    .then(data => data.json())
    .then((data) => tablaEnHtml(data.data))
}

function tablaEnHtml(info){
    spinner.innerHTML = ""

    info.map((user) => {
        let tr = document.createElement("tr")

        let t1 = document.createElement("td")
        let t2 = document.createElement("td")
        let t3 = document.createElement("td")
        let t4 = document.createElement("td")
        let t5 = document.createElement("td")

        t1.innerHTML = `${user.id}`
        t2.innerHTML = `${user.email}`
        t3.innerHTML = `${user.first_name}`
        t4.innerHTML = `${user.last_name}`

        let createimage = document.createElement("img")

        createimage.src = `${user.avatar}`
        createimage.style.borderRadius = "50%"
        createimage.style.width = "25%"

        tr.appendChild(t1)
        tr.appendChild(t2)
        tr.appendChild(t3)
        tr.appendChild(t4)
        t5.appendChild(createimage)
        tr.appendChild(t5)

        thebody.appendChild(tr)
        const infoUsuarios = {
            data: info,
            time: Date.now() + 60000
        }
        localStorage.setItem("infoUsuarios", JSON.stringify(infoUsuarios))
    })
}
function spinnerEnHtml(){
    spinner.innerHTML = `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `
}
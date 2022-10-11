
function myFunction() {
    console.log("123")
    pintarInfo() 
} 
function pintarInfo() {
    fetch("https://reqres.in/api/users?delay=3")
    .then(data => data.json())
    .then((data) => {
        console.log(data)   

        let info = data["data"]
        info.map((user) => {
            let thebody = document.getElementById("texto")
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

            tr.appendChild(t1)
            tr.appendChild(t2)
            tr.appendChild(t3)
            tr.appendChild(t4)
            t5.appendChild(createimage)
            tr.appendChild(t5)


            thebody.appendChild(tr)
        })
    })
}

const url = "http://localhost:5500/api"
const renderApiResult = document.querySelector("#renderApiResult")
const user_avatar = document.querySelector("#user-avatar")
const user_city = document.querySelector("#user-city")
const alertApi = document.querySelector("#alert")

//GET
function getUsers(){
    fetch(url)
        .then(response => {
            response.json()
                .then(data => renderApiResult.textContent = JSON.stringify(data))
        })
        .catch(error => console.error(error))
}

function getUser(id){
    fetch(url + `/${id}`)
        .then(response => {
            response.json()
            .then((data) =>{
                renderApiResult.textContent = data.name
                user_avatar.src = data.avatar
                user_city.textContent = data.city 
            }) 
        })
}

//POST
function addUser(user){
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            alertApi.textContent = data
        })
        .catch(error => console.error(error))

}

//PUT
function updateUser(id, user){
    fetch(`${url}/${id}`, {
        method:"PUT",
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            alertApi.textContent = data
        })
        .catch(error => console.error(error))
}

//DELETE
function deleteUser(id){
    fetch(`${url}/${id}`, {
        method:"DELETE",
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }

    })
        .then(response => response.json())
        .then(data => {
            alertApi.textContent = data
        })
        .catch(error => console.error(error))
}

const newUser = {
    name:"Floppa",
    avatar:"https://img.quizur.com/f/img6283e5617d1347.87197052.jpg?lastEdited=1652811111",
    city:"Rio Janiro"
}

const updatedUser = {
    name:"Dingus",
    avatar:"data:image/jpeg;base64,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",
    city:"Tokyo, JAPAN"
}

//addUser(newUser)
//updateUser(18, updatedUser)


getUsers()
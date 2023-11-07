
let user = []
let form = document.getElementById("myform")
function fun1(event){
    event.preventDefault()
    let name = document.getElementById("uname").value
    let password = document.getElementById("upass").value
    let city = document.getElementById("place").value   
    let obj = {
        name :this.name,
        password:this.password,
        city:this.city
    }
    obj.name = name
    obj.password = password
    obj.city = city
    console.log(obj)
    user.push(obj)
    console.log(user)
}
form.addEventListener('submit',fun1)
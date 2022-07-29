let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    verify();
});
let data = JSON.parse(localStorage.getItem("Users")) || [];


class User {
    constructor(e, u, p) {
        this.email = e,
            this.username = u,
            this.password = p
    }
  
   velidate() {
    let state = false;
    state = this.velidateemail(this.email) && this.velidateusername(this.username) && this.velidatepassword(this.password)
    if(state){
        data.push(this)
        localStorage.setItem("Users",JSON.stringify(data));
        alert ("Registration successful!")
        window.location.href = "login.html";
    }else{
        if(!this.velidateemail(this.email)){
            alert("Email already exists")
        }else if(!this.velidateusername(this.username)){
            alert ("Username already exist!")
        }else if(!this.velidatepassword(this.password)){
         alert("Password must be 10 characters long!")
        }
    }
   }
    velidatepassword(password){
        console.log(password);
      if(password.length>=10){
        return true
      }else{
        return false
      }
    }
    velidateusername(username){
        console.log(username);
    
      let ufilter = data.filter((el)=>{
       return el.username == username
      });
      if(ufilter.length>0){
        return false
      }else{
        return true
      }
    }
    velidateemail(email){
        console.log(email);
       
        let efilter = data.filter((el)=>{
        return el.email = email
        })
      
        if(efilter.length>0){
            return false
        }else{
            return true
        }
    }
   
}

let verify = function () {
    let e = document.getElementById("email").value;
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let us = new User(e, u, p);
   us.velidate() ;
}

let state = false;
let eye = document.getElementById("eyelogo").addEventListener("click",()=>{
console.log("prateek")
if(state){
document.getElementById("password").setAttribute("type","password")
document.getElementById("eyelogo").setAttribute("class","fa fa-eye")
document.getElementById("show").innerText = "Show";

state = false
}else{
document.getElementById("password").setAttribute("type","text")
document.getElementById("eyelogo").setAttribute("class","fa fa-eye-slash")
document.getElementById("show").innerText = "Hide";
state = true
}
})
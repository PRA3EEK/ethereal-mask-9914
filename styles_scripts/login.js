let form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    verify()
})
let data = JSON.parse(localStorage.getItem('Users')) || []
let logindata = JSON.parse(localStorage.getItem('login')) || []
let verify = () => {
    console.log('prateek')
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let filter = data.filter((el) => {
        return el.username == username && el.password == password
    })
    if (filter.length > 0) {
        if (logindata.length > 0) {
            alert('You are already logged in!')
        } else {
            logindata.push(filter[0])
            localStorage.setItem('login', JSON.stringify(logindata))
            alert('login successful')
              window.location.href = "file:///C:/Users/Prateek%20Chauhan/OneDrive/Desktop/ethereal-mask-9914/navBarByVicky/index.html"
        }
    } else {
        alert('Wrong credentials!')
    }
}

let state = false
let eye = document.getElementById('eyelogo').addEventListener('click', () => {
    console.log('prateek')
    if (state) {
        document.getElementById('password').setAttribute('type', 'password')
        document.getElementById('eyelogo').setAttribute('class', 'fa fa-eye')
        document.getElementById('show').innerText = 'Show'

        state = false
    } else {
        document.getElementById('password').setAttribute('type', 'text')
        document.getElementById('eyelogo').setAttribute('class', 'fa fa-eye-slash')
        document.getElementById('show').innerText = 'Hide'
        state = true
    }
})
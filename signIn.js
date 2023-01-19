const username = document.getElementById('username')
const password = document.getElementById('password')

const submitBtn = document.getElementById('button')
if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('username', username.value)
        localStorage.setItem('password', password.value)
        console.log(username.value)

        window.location.pathname = "/24SIXBRAND/index.html";
    })
} else {
    console.log('no button')
}

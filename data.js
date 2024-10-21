let username = document.getElementById("Username");
let password = document.getElementById("password");
let ingat = document.getElementById("remember-me");

function Regis() {

    if(username.value && password.value){
    localStorage.setItem (`username`, username.value);
    localStorage.setItem (`password` , password.value);

    alert('Data disimpan!');
    } else {
    alert('Mohon Masukan Username dan Password anda.');
    }
}

function Login() {

    let stUser = localStorage.getItem (`username`, username.value);
    let stPw = localStorage.getItem (`password` , password.value);

    if (username.value === stUser && password.value === stPw) {
        alert('Login Berhasil!');

        setTimeout(function() {
            window.location.href ='home.html'; 
        },); 

    }else {
        alert('Username atau Password Salah!');
    } 
}

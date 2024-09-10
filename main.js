//Definir arreglo de cuentas
let cuentas = [
    {Nombre: "Anabel", saldo: 150, contraseña: "Bel98"},
    {Nombre: "Julio", saldo: 300, contraseña: "Nov15"},
    {Nombre: "Nataly", saldo: 200, contraseña: "Escuincle"}
];

let saldoBank = document.getElementById("saldoActual");

let saldoUser = parseFloat(cuentas[localStorage.getItem("arrayPosition")].saldo);
//let numberSaldoUser= parseFloat (saldoUser);

function login (event){
    event.preventDefault ();

    let usuario =document.getElementById("username").value;

    let contraseña =document.getElementById("password").value;

    let error= document.getElementById("msj");

    let cuentaEncontrada = false;

    for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].Nombre && contraseña === cuentas[i].contraseña) {
            cuentaEncontrada = true;
            localStorage.setItem("arrayPosition", i);
            window.location.href = "Banco.html";
            break; //para redireccionar a una página nueva
        } 
        
    }
    if (!cuentaEncontrada) {
        error.innerText = "Error en usuario o contraseña.";
        error.style.color = "red";
    }
    
}

function consultaBalance() {
//if(saldoUser>10 && saldoUser<= 990){
    saldoBank.innerText = saldoUser;
//}else{
    //saldoBank.innerText = "Querido usuario, le recordamos que el monto mínimo es de 10 y el maximo de 990.Por favor, verifique de nuevo su ingreso o retiro.";
}


//}

    let welcomeUser = cuentas [localStorage.getItem ("arrayPosition")].Nombre;;
   // let welcome = document.getElementById ("bienvenido");
    bienvenido.innerText = "¡Bienvenido, " + welcomeUser + "!";

function credit (event){
    
    let creditInput = parseFloat(document.getElementById("credit").value);
        let creditBalance = creditInput + saldoUser;
        if(creditBalance>=10 && creditBalance<= 990){
    saldoBank.textContent =  creditBalance;
    saldoUser=creditBalance;
    }else{
        saldoBank.innerText = "La operación excede el monto máximo permitido en la cuenta (990).Por favor, verifique de nuevo su ingreso o retiro.";
        document.getElementById("credit".reset());
    
    event.preventDefault ();
}
}

function withdraw (event){
    
    let withdrawtInput = parseFloat(document.getElementById("withdraw").value);
    let creditBalanceW = saldoUser - withdrawtInput;
    if(creditBalanceW>=10 && creditBalanceW<= 990){
    saldoBank.textContent =  creditBalanceW;
    saldoUser= creditBalanceW; 
    }else{
        saldoBank.innerText = "El monto mínimo que debe tener la cuenta es de 10.Por favor, verifique de nuevo su ingreso o retiro.";
    }
    
    
    event.preventDefault ();
}

function signout(){
    window.location.href = "Index.html";
}
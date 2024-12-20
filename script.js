function passwordCheck() {
    let resultText = '';


    const password = document.getElementById('Passwordinput').value;

    
    let strong = password.length >=8 && /[a-z]/i.test(password) && /\d/.test(password) && /[\W_]/.test(password);
    let Medium = password.length >5 && /[a-z]/i.test(password) && /\d/.test(password);

    console.log(password );


    if (strong) {
        resultText = "strong";
    }else if (Medium){
        resultText = "Medium";
    }else{
        resultText = "Weak"; 
    }

    if (password === ''){
        alert('please Enter password');
        return;
    }

    document.getElementById("result").textContent = resultText;

}
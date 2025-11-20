let myForm=document.querySelector('form')
console.log(myForm);

myForm.onsubmit=(e)=>{
    e.preventDefault();
    console.log("Form Submitted");

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox);

    let formData={};

    inputBox.forEach((input)=>{
        if(input.type==="radio"){
            if(input.checked===true){
                formData[input.name]=input.value
            }
        }
            else{
                formData[input.name]=input.value
            }
    })
    console.log(formData);
    localStorage.setItem('userInfo',JSON.stringify(formData))
    alert("User Register Successfull")
    window.location.href="./login.html"
}

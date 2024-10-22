function validateForm() { 
    let name = document.forms["myForm"]["name"].value; 
    let email = document.forms["myForm"]["gmail"].value; 
    let birthDate = document.forms["myForm"]["birthday_date"].value; 
    if (name == "" || email == "" || birthDate == "") { 
        alert("Будь ласка, заповніть всі обов'язкові поля!"); 
        return false;  
    } 
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (!emailPattern.test(email)) { 
        alert("Будь ласка, введіть правильний email!"); 
        return false; 
    } 
   
    return true; 
  }
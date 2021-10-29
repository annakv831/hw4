function greeting (){
    let nameUser = prompt("Как вас зовут?");
    let ageUser =+prompt("Сколько вам лет?");
    if(
        !ageUser
        || !nameUser
        || typeof ageUser !=="number"
        
      ){
            alert("Данные неверны");
            return;  
        }
        

    else if (ageUser>30){
        alert("Здравствуйте, "+nameUser+"!");
    }
    else {
        alert("Привет, "+nameUser+"!");
    }
}

greeting()

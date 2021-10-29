
function numberToPower ( a, n) {
    let result=1;
    if(a===0){
        return 0;
    }
    if(n===0){
        return result;
    }
    if(n>0){
        for(let  i=1; i<=n; i++ ){
            result*=a;
            
        }
           return result;
           
    }
    else if (n<0)  {
        for(let  j=1; j<=-n; j++ ){
            result*=a;
            }
           return 1/result;
           
        }
    }
    
 
let number = +prompt("Введите число :");
let power = +prompt("В какую степень будем возводить?");
alert ( "Результат возведения в степень "+number+" ^ "+power+" = "+ numberToPower (number,power));

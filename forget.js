function forgetPass(){
    // var std = new student();
    const firstName = document.getElementById(`username`).value;
    const lastName = document.getElementById(`lastName`).value;
    const Password = document.getElementById(`password`).value;

   

    
     

  
    
    var checkCondition = localStorage.getItem('listOfStudent');
    var register=false;
    var conter = 0;
    // const username =localStorage.getItem('USERNAME');      
    
    // const Password =localStorage.getItem('PASSWORD');
    console.log(checkCondition);
    console.log(checkCondition);

   
        let listOfStudent =JSON.parse(checkCondition);
        
         for(let i=0;i<listOfStudent.length;i++) {
       
        
            if(firstName == listOfStudent[i].firstName && lastName == listOfStudent[i].lastname){
                conter=i;
                break;
            }
            else{
                conter =-1;
            }
        }
        if(conter == -1)
        {
            alert("your username and lastName is not exist");
        }
        else{
        
    
                    listOfStudent[conter].password=Password;
                    localStorage.setItem('listOfStudent',JSON.stringify(listOfStudent));
                    register =confirm("do you want to add the new Password ?") 
                    
                
                
                console.log("105");
                alert("Registration successfully");
                if(register) window.location.assign("login.html");
        }
}
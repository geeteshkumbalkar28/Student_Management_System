function reRegistration(){
    var std = new student();

    var firstName = document.getElementById(`firstName`).value;
    var lastName = document.getElementById(`lastName`).value;
    var subject = document.getElementById(`subject`).value;
    var mobileNumber = document.getElementById(`mobileNumber`).value;
    var password =  document.getElementById(`password`).value;

        std.firstName=firstName;
        std.lastName=lastName;
        std.subject=subject;
        std.mobileNumber=mobileNumber;
        std.password=password;

  
    
    var checkCondition = localStorage.getItem('listOfStudent');
    var register=false;
    var conter = 0;
    const username =localStorage.getItem('USERNAME');      
    
    const Password =localStorage.getItem('PASSWORD');
    console.log(checkCondition);
    console.log(checkCondition);

   
        let listOfStudent =JSON.parse(checkCondition);
        
         for(let i=0;i<listOfStudent.length;i++) {
       
        
            if(username == listOfStudent[i].firstName && Password == listOfStudent[i].password){
                conter=i;
                break;
            }
        }
        
        
    
        listOfStudent[conter]=std;
        localStorage.setItem('listOfStudent',JSON.stringify(listOfStudent));
         register =confirm("do you want to add the data ?") 
        
    
    
    console.log("105");
    alert("Registration successfully");
    if(register) window.location.assign("welcome.html");

}
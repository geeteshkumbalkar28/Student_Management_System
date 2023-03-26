
var listOfStudent = [];

isUserNameValid = (username, regex = /^[a-zA-Z0-9]+$/)=> regex.test(username);
isPasswordValid = (password, regex = /^[A-Z][a-z]{1,}[!@#$%^&*][0-9]{1,}/)=> regex.test(password);

var username;
var password;
let submit = function(){
    username= document.getElementById(`username`).value;
    password= document.getElementById(`password`).value;
    
    if(!isUserNameValid(username)){
        alert('!!!!! Username is not valid ');
        return;
    } 
    if(!isPasswordValid(password)){
        alert('!!!!! Password is not valid');
        return;
    }
   
    var obj = JSON.parse(localStorage.getItem('listOfStudent'));
    // console.log(obj.firstName);
    // console.log(obj.mobileNumber);
    if(obj == null)
    {alert('Please create the account')}
    var checkCondition=false;
    
    console.log(obj);
    obj.forEach(element => {
        
        if(element!= null && username == element.firstName && password == element.password){
            checkCondition =true;
            localStorage.setItem('USERNAME',username);
            localStorage.setItem('PASSWORD',password);
            
            alert('Login Successfull');
            // console.log("1");
            // console.log("2");
            window.location.assign("welcome.html")
          
            
            // console.log("1");
           
            
            // console.log("2");
            
            // console.log("3");
            

        }
        
        
    });
    if(!checkCondition){
        alert('Please create the account');
    }
    
 
    
}


function registration(){
    let std = new student();

    var firstName = document.getElementById(`firstName`).value;
    var lastName = document.getElementById(`lastName`).value;
    var subject = document.getElementById(`subject`).value;
    var mobileNumber = document.getElementById(`mobileNumber`).value;
    var password =  document.getElementById(`password`).value;
   var checkCond=0;
    if(!isUserNameValid(firstName))
    {
        alert("Your first Name should be like this(Geetesh) first latter should be capital");
        checkCond =1;
       
    }
     if(!isPasswordValid(password))
    {
        alert("Your password should be like this(Geetesh@11) first latter should be capital and in between 1 special symbol and last is numaric ");
        checkCond =1;
     }
    switch (checkCond) {
        case 0:
            
                std.firstName=firstName;
                std.lastName=lastName;
                std.subject=subject;
                std.mobileNumber=mobileNumber;
                std.password=password;
        
            // var studentObj = {
            //     "firstName":firstName,
            //     "lastName":lastName,
            //     "subject":subject,
            //     "mobileNumber":mobileNumber,
            //     "password":password  
        
            // }
            
            let checkCondition = localStorage.getItem('listOfStudent');
            var register=false;
            if(checkCondition != null)
            {
                let listOfStudent =JSON.parse(checkCondition);
                listOfStudent.push(std);
                localStorage.setItem('listOfStudent',JSON.stringify(listOfStudent));
                register =confirm("do you want to add the data ?") 
                
            }
            else{
                let listOfStudent = [];
                listOfStudent.push(std);
                localStorage.setItem('listOfStudent',JSON.stringify(listOfStudent));
                register =confirm("do you want to add the data ?") 
                
            }
            console.log("105");
            alert("Registration successfully");
            if(register) window.location.assign("Registration.html");
        
    break;
        case 1:
            window.location.assign("Registration.html");
            break;
        default:
            break;
    }
}


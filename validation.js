
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
        
        if(username == element.firstName && password == element.password){
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

}

// function display(){
    
//     // alert(userName);
//     // var userName = document.getElementById(`username`).value;
//     // var pass = document.getElementById(`password`).value;
//     // alert(userName);
   
//    // var firstName = document.getElementById('firstName');
//     // var lastName = document.getElementById('lastName');
//     // var subject = document.getElementById('subject');
//     // var mobileNumber = document.getElementById('mobileNumber');
//     //     var password = document.getElementById('password');
        
//         var obj = JSON.parse(localStorage.getItem('listOfStudent'));
//         // document.getElementById('firstName').textContent = (obj[0].firstName);
    
//         // document.getElementById('lastName').textContent = (obj[0].lastName);

//         // document.getElementById('subject').textContent = (obj[0].subject);

//         // document.getElementById('mobileNumber').textContent = (obj[0].mobileNumber);
    
//         // document.getElementById('password').textContent = (obj[0].password);
//             //alert(obj[0].subject);
//     for(let counter=0;counter<obj.length;counter++){
//     if(username == obj[counter].firstName && password == obj[counter].password){

//         // const span = document.createElement('span');
//         // const node = document.createTextNode((obj[counter].firstName));
//         // span.appendChild(node);
        
//         // const element = document.getElementById("firstName");
//         // element.appendChild(span);


//         // alert(obj[0].firstName); alert(obj[0].lastName); alert(obj[0].subject);

//         document.getElementById('firstName').textContent = (obj[counter].firstName);
    
//         document.getElementById('lastName').textContent = (obj[counter].lastName);

//         document.getElementById('subject').textContent = (obj[counter].subject);

//         document.getElementById('mobileNumber').textContent = (obj[counter].mobileNumber);
    
//         document.getElementById('password').textContent = (obj[counter].password);
            
//             //  window.location.href = "index.html";
//             // console.log("dsasdasd");
//         }
//     }

// // console.log(userName);
// // console.log(pass);

// }
// btn.addEventListener('click',submit)


// btn.addEventListener('click',display);

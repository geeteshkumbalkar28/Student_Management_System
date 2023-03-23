function display(){
    

    var obj = JSON.parse(localStorage.getItem('listOfStudent'));

    const username =localStorage.getItem('USERNAME');      
    
    const password =localStorage.getItem('PASSWORD');
    for(let counter=0;counter<obj.length;counter++){
    if(username == obj[counter].firstName && password == obj[counter].password){


        document.getElementById('firstName').textContent = (obj[counter].firstName);
    
        document.getElementById('lastName').textContent = (obj[counter].lastName);

        document.getElementById('subject').textContent = (obj[counter].subject);

        document.getElementById('mobileNumber').textContent = (obj[counter].mobileNumber);
    
        document.getElementById('password').textContent = (obj[counter].password);
            
           
        }
    }
}
display();


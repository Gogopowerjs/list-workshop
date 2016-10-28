

export default function initPage() {

 		
     document.querySelector('.form').addEventListener('submit', (event) => {

     	event.preventDefault();

     	class User{
            Constructor(name,password,email,comment){
               this.name = name;
               this.password = password;
               this.email = email;
               this.comment = comment;
           }
        }

        var newUser = new User( 
	          document.querySelector('.name').value,
	          document.querySelector('.password').value,
	          document.querySelector('.email').value,
	          document.querySelector('.comment').value
	    );


		var myHeaders = new myHeaders();
   		myHeaders.append("Content-Type", "application/json"); 

	    var myInit = {
						method: 'POST', 
						headers: myHeaders,  
						mode: 'cors',   
						cache: 'default', 
						body: JSON.stringify({
							name:     newUser.name,
							password: newUser.password,
							email:    newUser.email,
							comment:  newUser.comment
	                	})               
	    };

    	var myRequest = new Request('http://193.111.63.76:3000/api/v1/Users', myInit); 
		    fetch(myRequest) 
			    .then(function(response) {
			          return response.json(); 
			    })
    		.then(function(json) {
                alert(JSON.stringify(json));
  			});
		});
}





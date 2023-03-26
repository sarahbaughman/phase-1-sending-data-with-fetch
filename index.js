
    let bodyURL = "http://localhost:3000/users"

    function submitData (name, email){
        return fetch(bodyURL, {
            method: 'POST',
        
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
            },

            body: JSON.stringify({
                name: name,
                email: email
            })
        })
      
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            //let text = document.createElement("p")
            //text.innerText = object["id"]
            document.body.innerHTML = object["id"]
        })

        .catch(function (error) {
          
            document.body.innerHTML = error.message
          });
    }

    submitData("Sarah","sarah@gmail.com")

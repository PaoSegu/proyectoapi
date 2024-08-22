
document.addEventListener("DOMContentLoaded", () => {
   async function handleRegistro(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
        
        const res = await fetch("https://proyectoapi-gt8u.onrender.com/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,email, password })
                
                
              
            });

            const data = await res.json();
            if (res.status === 200) {
                alert ("Registro Exitoso");
            }else {
                alert (`Error: ${data.msg}`);
            }

        


                
        
        }catch(error){
            console.error("error", error);
            alert("Error al Registrar de Usuario");
        }

    

       
   }

async function handleLogin(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try{
        
        const response = await fetch("https://proyectoapi-gt8u.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password })
                
                
              
            });

            const data = await response.json();
            if (res.status === 200) {
                alert ("Login Exitoso");
            }else {
                alert (`Error: ${data.msg}`);
            }

        


                
        
        }catch(error){
            console.error("error", error);
            alert("Error al inicio de sesion");
        }

    

       
   }
   document.getElementById("registroform").addEventListener("submit", handleRegistro);
   document.getElementById("loginform").addEventListener("submit", handleLogin);

 



})
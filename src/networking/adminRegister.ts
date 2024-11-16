import { apiUrl } from "./apiUrl"
import Cookies from 'universal-cookie';






export const adminRegister= async(firstname:string,lastname:string,email:string,password:string)=>{
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');
     console.log({firstname,lastname,email,password})
    try {

   
  
     const response= await fetch(`${apiUrl}/admin/registration`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${authToken}`,
          
            
        },

       // mode:'cors',
        body:JSON.stringify({
           firstname,
           lastname,
           email,
           password
        }),
    })

    if(!response.ok){
        return
    }




    const result= await response.json();

    console.log(result)
    console.log({response})
    
} catch (error) {
    console.log(error)
    
}
   
}
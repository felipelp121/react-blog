export default function useAuth(){
    let userName = localStorage.getItem("userName");
    let userPassword = localStorage.getItem("userPassword");
  
    if(userName === null || userPassword === null || userName === "" || userPassword === ""){
      return false
    }
    
    return true;
  }
  

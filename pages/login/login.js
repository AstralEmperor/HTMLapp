import { getData } from "../../server/api-folder/api.js";
console.log(getData)
getData().then(loginInfo => {
  loginInfo;
  const loginForm = document.querySelector('.login');
  loginForm.addEventListener('submit', e =>{
    e.preventDefault();
    const loginName = document.querySelector('.login__name').value;
    const loginEmail = document.querySelector('.login__email').value;
    const loginPw = document.querySelector('.login__password').value;
    
  for(let i = 0; i < loginInfo.length; i++){
      if(loginName === loginInfo[i].names && loginEmail === loginInfo[i].email && loginPw === loginInfo[i].password){

        window.location = '../opservations/opservations.html';
        return true;
        
      }else if(i === loginInfo.length - 1){
          document.querySelector('.login__wrong').style.display ="flex";
          return false;
      }
  }
  loginForm.reset();
 })
})

const loginForm = document.querySelector('.login');
 

fetch('../JS/data.json',{
  method:'GET',
  headers:{
    "Accept": "application/json"
  }
})
.then((response) => response.json())
.then((data) => {
  loginInfo = data;
})
.catch(error => console.log(error))

loginForm.addEventListener('submit', e =>{
    e.preventDefault();
    const loginName = document.querySelector('.login__name').value;
    const loginEmail = document.querySelector('.login__email').value;
    const loginPw = document.querySelector('.login__password').value;
    
  for(let i = 0; i < loginInfo.length; i++){
      if(loginName === loginInfo[i].names && loginEmail === loginInfo[i].email && loginPw === loginInfo[i].password){
        // document.querySelector('.login__wrong').style.display ="none";
        window.location = '../HTML/opservations.html';
        return true;
        // return true;
        // console.log('success');
      }else if(i === loginInfo.length - 1){
          document.querySelector('.login__wrong').style.display ="flex";
          return false;
      }
  }
  loginForm.reset();
 })




 async function getData(){
  const res = await fetch('../JS/data.json');
  const loginInfo = await res.json()
  return loginInfo;
 }

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
})


// async await funkcija poziva podataka iz JSON-a
async function getKorisnici(){
    const response = await fetch('../JS/korisnici.json');
    const korisnici = await response.json();
    return korisnici;
}
// updates number of items constantly, at the bottom of the page
function updateNumberOfItems(){
    let rows = document.querySelectorAll('tbody tr');
    const itemNum = document.querySelector('.main__pageItemNum2');

    itemNum.textContent = 'Prikaz ' + 0 + '-' + rows.length + ' od ukupno ' + rows.length + ' elemenata'

    for(let i = 0; i < rows.length;i++){
          if(i % 2 !== 0){
            rows[i].style.background = "#cfeff3";
        }else{
            rows[i].style.background = "#F4F4F4";
        }
    }
}
const tbody = document.querySelector('.korisnici__tbody');

    // fills table with data brought from JSON file
function prototype(korisnici){
    info = '';
    for(korisnik of korisnici){ 
        info += '<tr>\
        <td class ="korisnik__name">' + korisnik.name + '</td>\
        <td>' + korisnik.email + '</td>\
        <td class="korisnik__allowance">' + korisnik.ogranicenje + '</td>\
        <td class="korisnik__status">' + korisnik.status + '</td>\
        <td><button class="main__korisnici-ActionBtn main__korisnici-Action--EditBtn"><img class="main__korisnici-Action" src="../Images/edit.png" alt="editIcon.png"></button><button class="main__korisnici-ActionBtn"><img class="main__korisnici-Action main__korisnici-Action--delete" src="../Images/delete.png" alt="deleteIcon.png"></button></td>\
        </tr>'
    }
    tbody.innerHTML = info;

    //changes display(status) based on if the user is online or offline
        const status = document.querySelectorAll('.korisnik__status');
        for(stat of status){
            if(stat.innerHTML === "online"){
                stat.innerHTML ='<div class="main__korisnici--onlineStatus online"></div>'
    
            }else if(stat.innerHTML === "offline"){
                stat.innerHTML ='<div class="main__korisnici--onlineStatus offline"></div>'
    
            }else{
                console.log('error');
            }
        }
            //changes display(ogranicenje) based on if the user is limited or not
    const limitation = document.querySelectorAll('.korisnik__allowance');
    for(limit of limitation){
        if(limit.innerHTML === "Da"){
            limit.innerHTML = '<div class="main__korisnici--ograničenje online"></div>'

    }else if(limit.innerHTML === "Ne"){
             limit.innerHTML = '<div class="main__korisnici--ograničenje offline"></div>'
    }else{
        console.log('error');
    }
  }
}

getKorisnici().then(korisnici =>{
    korisnici;
    console.log(korisnici)
 
    prototype(korisnici);
  //Adds event listener for DELETE button
  let rows = document.querySelectorAll('tbody tr');
  const deleteBtn = document.querySelectorAll('.main__korisnici-Action--delete');
  for(let i = 0; i < rows.length;i++){
    updateNumberOfItems(rows);
    deleteBtn[i].addEventListener('click', e =>{
        e.preventDefault();
        rows[i].remove();
        updateNumberOfItems();
    });
  }
  const btnKorisnik = document.getElementById('th__korisnik');
  // sort by name on btn click
  btnKorisnik.addEventListener('click', e => {
      e.preventDefault();
      korisnici.sort((a,b)=>{
          if(a.name < b.name){
            return -1;
          }
          else if(b.name < a.name){
            return -1;
          }
          return 0;
      })
      prototype(korisnici);
      updateNumberOfItems();
  })

  const btnEmail = document.getElementById('th__email');
  btnEmail.addEventListener('click', e => {
    e.preventDefault();
    korisnici.sort((a,b)=>{
    if(a.email < b.email){
        return -1;
      }
      else if(b.email < a.email){
        return -1;
      }
      else{
        return 0;
      }
  })
  prototype(korisnici);
  updateNumberOfItems();
  })

  const btnOgranicenje = document.getElementById('th__ogranicen');
  btnOgranicenje.addEventListener('click', e => {
    e.preventDefault();
    korisnici.sort((a,b)=>{
    if(a.ogranicenje == 'Da' && b.ogranicenje == 'Ne'){
        return -1;
      }
      else if(b.ogranicenje == 'Da' && a.ogranicenje == 'Ne'){
        return -1;
      }
      else{
        return 0;
      }
      
  })
  prototype(korisnici);
  updateNumberOfItems();
  })

  const btnStatus = document.getElementById('th__status');
  btnStatus.addEventListener('click', e => {
    e.preventDefault();
    korisnici.sort((a,b)=>{
    if(a.status == 'offline' && b.status == 'online'){
        return -1;
      }
      else if(b.status == 'offline' && a.status == 'online'){
        return -1;
      }
      else{
        return 0;
      }
    
  })
  prototype(korisnici);
  updateNumberOfItems();
  })
});



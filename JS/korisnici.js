
async function getKorisnici(){
    const response = await fetch('../JS/korisnici.json');
    const korisnici = await response.json();
    return korisnici;
}

getKorisnici().then(korisnici =>{
    korisnici;
    console.log(korisnici)
    const tbody = document.querySelector('.korisnici__tbody');

    info = '';
    for(korisnik of korisnici){
        info += '<tr>\
        <td>' + korisnik.name + '</td>\
        <td>' + korisnik.email + '</td>\
        <td class="korisnik__allowance">' + korisnik.ogranicenje + '</td>\
        <td class="korisnik__status">' + korisnik.status + '</td>\
        <td><button class="main__korisnici-ActionBtn main__korisnici-Action--EditBtn"><img class="main__korisnici-Action" src="../Images/edit.png" alt="editIcon.png"></button><button class="main__korisnici-ActionBtn"><img class="main__korisnici-Action" src="../Images/delete.png" alt="deleteIcon.png"></button></td>\
        </tr>'
  
    }
    tbody.innerHTML = info;

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
  const rows= document.querySelectorAll('tbody tr');
  for(let i = 0; i < rows.length;i++){
      if(i % 2 !== 0){
        rows[i].style.background = "#cfeff3";
    }else{
        rows[i].style.background = "#F4F4F4";
    }
  }
})
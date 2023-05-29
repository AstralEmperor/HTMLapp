
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

getKorisnici().then(korisnici =>{
    korisnici;
    console.log(korisnici)
    const tbody = document.querySelector('.korisnici__tbody');

    // fills table with data brought from JSON file
    info = '';
    for(korisnik of korisnici){
        info += '<tr>\
        <td class ="korisnik__name">' + korisnik.name + '</td>\
        <td>' + korisnik.email + '</td>\
        <td class="korisnik__allowance">' + korisnik.ogranicenje + '</td>\
        <td class="korisnik__status">' + korisnik.status + '</td>\
        <td><button class="main__korisnici-ActionBtn main__korisnici-Action--EditBtn"><img class="main__korisnici-Action" src="../Images/edit.png" alt="editIcon.png"></button><button class="main__korisnici-ActionBtn"><img class="main__korisnici-Action main__korisnici-Action--delete" src="../Images/delete.png" alt="deleteIcon.png"></button></td>\
        </tr>'
        
        sortItems(korisnik);
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

});
// Item sorter, from W3S guide https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_list_desc
// function sortItems(){
    
//     let switching, i, b, shouldSwitch, switchCount, dir = 0;

//     const list = document.querySelector('.main__searchUl');
//     switching = true;
// // Sets sorting direction to ascending
//     let direction = "asc";

//     while (switching){
//         switching = false;

//        const b = list.querySelectorAll('.korisnik__name');

//         for ( i = 0; i < b.length - 1; i++) {
//              //no switching at start:
//             shouldSwitch = false;
//             if(direction == "asc"){
//                 console.log('true');
//                      /* if next item is alphabetically lower than current item,
//                       mark as a switch and break the loop: */
//                 if(b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()){
//                     console.log('something')
//                     shouldSwitch = true;
//                     break;
//                 }
//             }else if (direction == "desc"){
//                 console.log('false');
//                 if(b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase())
//                 console.log('something-else')
//                 shouldSwitch = true;
//                 break;
//             }
//         }
//     }
//     if (shouldSwitch){
//         /* If a switch has been marked, make the switch
//         and mark that a switch has been done: */
//         b[i].parentNode.insertBefore(b[i + 1], b[i]);
//         switching = true;
//         // Each time a switch is done, increase switchcount by 1:
//         switchcount ++;
//     } else {
//          /* If no switching has been done AND the direction is "asc",
//          set the direction to "desc" and run the while loop again. */
//          if(switchCount == 0 && direction == "asc"){
//              console.log('else')
//              direction = "desc";
//              switching = true;
//          }
//     }
// }
const btnKorisnik = document.getElementById('th__korisnik');
// sort by name on btn click
btnKorisnik.addEventListener('click', e => {
        e.preventDefault();
         sortItems();
})
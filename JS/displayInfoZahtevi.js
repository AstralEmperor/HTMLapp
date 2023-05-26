const requestBody = document.querySelector('.zahtevi__body');

    fetch('../JS/zahteviData.json',{
        method:'GET',
        headers:{
            "Accept":"application.json"
        }
    })
    .then((response) => response.json())
    .then((zahteviData) => {
        // console.log(zahteviData)
        let tableBody = document.querySelector('#data-output');
        let out = [];

        for(let zahtev of zahteviData){
            // console.log(zahtev);
            out+='<tr>\
            <td>' + zahtev.status + '</td>\
            <td>' + zahtev.lokacija + '</td>\
            <td>' + zahtev.opservator + '</td>\
            <td>' + zahtev.vrstaOpservacije + '</td>\
            <td>' + zahtev.datumKreiranja + '</td>\
            <td>' + zahtev.datumOdgovora + '</td>\
            <td>' + zahtev.opservacija + '</td>\
            </tr>';
        }
        tableBody.innerHTML = out;
        
            let displayNum = document.getElementById("zahtevi__displayNumber");
            const rows = document.querySelectorAll('tbody tr');

            displayNum.textContent = "Prikaz " + 1 + " od " + rows.length + " od ukupno "+ rows.length +" elemenata";
        
    })
     .catch(error => console.log(error))


     
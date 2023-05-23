const requestBody = document.querySelector('.zahtevi__body');

    fetch('../JS/zahteviData.json',{
        method:'GET',
        headers:{
            "Accept":"application.json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        requestData = data;
        console.log(requestData)
    })
     .catch(error => console.log(error))

function displayData(){
    const requestRow = document.querySelector('.zahtevi__red');

    const zahteviStatus = document.querySelector('.zahtevi__data--status').value; 
    const zahteviLokacija = document.querySelector('.zahtevi__data--lokacija').value; 
    const zahteviOpservator = document.querySelector('.zahtevi__data--opservator').value; 
    const zahteviVrstaOpser = document.querySelector('.zahtevi__data--vrsta-opservacije').value; 
    const zahteviDatum1 = document.querySelector('.zahtevi__data--datum-slanja').value; 
    const zahteviDatum2 = document.querySelector('.zahtevi__data--datum-odgovora').value; 
    const zahteviOpservacija = document.querySelector('.zahtevi__data--opservacija').value; 



}
displayData();

let text = document.querySelector('#my-coords');
let button = document.querySelector('#submit-button');
let firstInput = document.querySelector('#first-input');
let secondInput = document.querySelector('#second-input');
let firstCoord;
let secondCoord;
let resetButton = document.querySelector('#reset-button');
let firstLat = document.querySelector('#first-lat');
let secondLat = document.querySelector('#second-lat');


button.addEventListener('click', async function(e){
    e.preventDefault();
        firstCoord = await geocode(firstInput.value);
        secondCoord = await geocode(secondInput.value);
        console.log(firstCoord, secondCoord);
        coordCompare();
        firstLat.innerText = "קו רוחב: "+firstCoord;
        secondLat.innerText ="קו רוחב: "+secondCoord;

});

resetButton.addEventListener('click', function(){
    location.reload();
    return false;
});

async function geocode(location){
    const key = 'AIzaSyDbmeWgXybiLCtV9zqe64CZNb7FA_fQ1js';
    console.log(location);
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json' ,{
        params:{
            address: location,
            key: key
        }
    })
    return response.data.results[0].geometry.location.lat;
}

function coordCompare(){
    
    if(firstCoord > secondCoord){
        console.log(firstCoord);
        firstInput.style.border = '2px solid #12EA83';
        firstInput.style.background = '#CFFFE8';
        secondInput.style.background = 'white';
        secondInput.style.border = '1px solid #b1b1b1';

    }else{
        console.log(secondCoord);
        secondInput.style.border = '2px solid #12EA83';
        secondInput.style.background = '#CFFFE8';
        firstInput.style.background = 'white';
        firstInput.style.border = '1px solid #b1b1b1';
    }
}


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
    const key = 'pk.eyJ1IjoidHp1ciIsImEiOiJja25leWQ1ZWQxdzVrMnhtcnl6aGp0YzVjIn0.6o1EExtf6USy-aQ80Ns0Rw';
    console.log(location);
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${key}` ,{
        // params:{
        //     location,
        //     access_token: key
        // }
    })
    return response.data.features[0].geometry.coordinates[1];
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

// function initAutocomplete(){
//     let autocomplete;
//     let secondAutocomplete;
//     autocomplete = new google.maps.places.Autocomplete(
//         firstInput,
//         {
//             types: ['geocode']
//         }
//     );
//     secondAutocomplete = new google.maps.places.Autocomplete(
//         secondInput,
//         {
//             types: ['geocode']
//         }
//     );

// }


document.querySelector(".logo-text").addEventListener("click", () => {
    console.log("Coucou, c'est le logo Tickethack qui nous ramene à la page d'acceuil")
});

document.querySelector(".card").addEventListener("click", () => {
    console.log("Coucou, c'est la rubrique card!")
});

document.querySelector(".bookings").addEventListener("click", () => {
    console.log("Coucou, c'est la rubrique booking!")
});

//document.querySelector(".purchase").addEventListener("click", () => {
    console.log("Coucou, c'est le bouton purchase!")
//});



document.querySelector("#btn-search").addEventListener("click", () => {
    const departure = document.querySelector("#departure").value
    const arrival = document.querySelector("#arrival").value
    const dates = document.querySelector("#dates").value

    console.log(departure, arrival, dates);
    fetch(`http://localhost:3000/trajets/liste/${departure}/${arrival}/${dates}`)
        .then(response => response.json())
        .then(data => {
console.log(data);
        })

});




document.querySelector('#btn-search').addEventListener('click', function ()
{let textToCompare = document.querySelector("#departure").value.toLowerCase();
console.log(document.querySelector("#departure").value.toLowerCase())
document.querySelector("#departure").value = "";

for (let i = 0; i < document.querySelectorAll('trips').length; i++) {
  if (document.querySelectorAll('trips')[i].textContent.toLowerCase().includes(textToCompare) === false) {
    const textToShow = document.querySelectorAll('trips')[i].parentNode.parentNode;
                textToShow.style.display = 'none'; }

                else {
                const textToHide = document.querySelectorAll('trips')[i].parentNode.parentNode;
                textToHide.style.display = 'flex';}
  ;
 }
}
);

document.addEventListener("DOMContentLoaded", function() {
    function randomDate(century) {
        let start = new Date(`1/1/${century}`);
    let end = new Date(`1/1/${(century + 100)}`);
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    const dayOfWeek = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    }

    let century = 1900
    let date = randomDate(century);
    let dateElem = document.querySelector('#date');
    let centuryElem = document.querySelector('#century');
    dateElem.innerHTML = date.toLocaleDateString();
    
    let dayElem = document.querySelector('#day');

    document.querySelector('#generate').addEventListener('click', ()=>{
        date = randomDate(century);
        dateElem.innerHTML = date.toLocaleDateString();
        dayElem.innerHTML = '';
    })

    document.querySelector('#answer').addEventListener('click', ()=>{
        dayElem.innerHTML = dayOfWeek[date.getDay()];
    })

    document.querySelector('#plus').addEventListener('click', ()=>{
        century = century + 100;
        centuryElem.innerHTML = century;
    })

    document.querySelector('#minus').addEventListener('click', ()=>{
        century = century - 100;
        centuryElem.innerHTML = century;
    })

    document.querySelector('#random').addEventListener('click', ()=>{
        century = Math.round(Math.random() * 10) * 100 + 1500; // between 1500 and 2500
        centuryElem.innerHTML = century;10
    })
});
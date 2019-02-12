let countryHolder;

const showCountries = data => {
    console.log(data);
    // #1 loop the data
    let countries = '';
    console.log(data[2]);
    for(const c of data){
        // #2 build an html-string for each country
        countries += `
            <article>
                <input id="${c.cioc}-${c.alpha2Code}" class="o-hide c-country-input" type="checkbox"/>
                <label for="${c.cioc}-${c.alpha2Code}" class="c-country js-country">
                    <div class="c-country-header">
                        <h2 class="c-country-header__name">${c.name}</h2>
                        <img class="c-country-header__flag" src="${c.flag}" alt="The flag of ${c.name}">
                    </div>
                    <p class="c-country__native-name">${c.nativeName}</p>
                </label>
            </article>
        `;
    }
    countryHolder.innerHTML = countries
    // #3 Adjust CSS -> screen.css
    // - Click on country :checked
    // - Flag correct height

}; 
const fetchCountries = region => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(r => r.json())
        .then(data => showCountries(data))
        .catch(err => console.error(`An error occured, ${err}`));
};

const enableListeners = () => {
    // #1 Get some buttons
    const regionButtons = document.querySelectorAll('.js-region-select');
    // #2 Listen to the clicks
    for(const button of regionButtons){
        button.addEventListener('click', function() {
            // #2.1 Look up the data property
            const region = this.getAttribute('data-region');

            // #2.2 Get data from the API
            fetchCountries(region);
        })
    }

     countryHolder = document.querySelector('.js-country-holder')
    // Always start with Europe = beginscherm
     fetchCountries('europe');
};



const init = () => {
    console.log('Init (dus de DOM is geladen) ...');
    enableListeners();
};

document.addEventListener('DOMContentLoaded', init);

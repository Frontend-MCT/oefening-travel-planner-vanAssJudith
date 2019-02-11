# Travel Planner
We gaan deze oefening samen maken tijdens de eerste twee lessen. De bedoeling is om:
- Werken met JS en de DOM te herhalen.
- JS op een correcte en nette manier te schrijven.
- HTML te herhalen.
- CSS te herhalen; variabelen, CSS-grid, ITCSS schrijven.
- Om SEO-vriendelijk te werk te gaan.

## Layout
Je bent vrij om de layout aan te passen en kleuren of fonts zelf te kiezen.
De opgave heeft als kleuren: #de4831, #e1decb en #221e21. De gutter is meestal 24px of eventueel een ander veelvoud van 8. Als font wordt [Sarabun](https://fonts.google.com/specimen/Sarabun) gebruikt.

## HTML
We gebruiken zoveel mogelijk de correcte semantische tags.
Denk aan; section, article, nav, aside, main, etc...

Voor het selecteren van landen gebruiken we een checkbox (die we verbergen). Aan de hand van deze checkbox stijlen we onze landen die in een label tag zitten. Let op een correct gebruik van het for- en id-attribuut!

## CSS
We werken voor deze layout met een grid op de parent. Daarin worden de sidebar en de main gedefineerd, de sidebar is 350px, rest vult de ruimte op.
Voor de content van de cards met de landen zelf is er ook een grid wat altijd de ruimte probeert op te vullen, met alle items op maximum 350px.
Een vlag krijgt als property ```max-height: 15px;``` en een ```border-radius: 4px;```.

## Script
We kunnen de werking van JS in deze oefening momenteel in drie onderdeel verdelen:
### 1 Data ophalen en tonen
- ```enableListeners``` Als de DOM geladen is, kan je listeners beginnen toevoegen.
- ```fetchData``` Deze functie zal de data ophalen van http://restcountries.eu aan de hand van het continent wat meegegeven wordt.
- ```fillCountries``` Verwerk de JSON data van de API en toon de landen.
- ```addEventListenersToCountries``` Als er nieuwe landen toegevoegd worden, moet je hier op kunnen klikken om de lokale landen bij te houden.

### 2 Werken met de localStorage
Schrijf functies voor alle basis acties bij het werken met de locale data voor onze landen-array:
- ```getLocalCountries```
- ```addLocalCountry```
- ```hasLocalCountry```
- ```removeLocalCountries```

Sommige van deze functies zullen de unieke key voor het huidige land meekrijgen.

### 3 Progress bijhouden en updaten
- ```updateCounter``` Een functie die de DOM zal aanpassen aan de hand van de huidige landen in localStorage. Deze functie zullen we vaak in de code aanroepen (na updates in de localStorage).

## Uitbreiding:
- Toon per continent het aantal bezochte landen.
- Voorzie een knop om alle progress te clearen.
- Hoe zou je SEO kunnen verbeteren op deze pagina(s)? Bespreek dit tijdens de les.
- Voorzie een melding bij het toevoegen of verwijderen van een bezocht land.
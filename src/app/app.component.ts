import { Component, computed, ContentChildren, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Country } from './models/country.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Continent } from './utils/country.utils';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  countries!: Country[];
  search = model('');

  filtredCountries = computed(()=> {
    return this.countries.filter(country => country.name.includes(this.search()));
  })
  constructor() {
    this.countries = [];
    const country1 = new Country();
    country1.name = "France";
    country1.image = "assets/flags/france.jpg";
    country1.type = Continent.EUROPE;
    country1.capital = "Paris";
    country1.continent = "Europe";
    country1.figureCaption = "France's flag";
    country1.language = "French";
    country1.nationalDish = "Pot on the Fire";
    this.countries.push(country1);

    const country2 = new Country();
    country2.name = "China";
    country2.image = "assets/flags/china.png";
    country2.type = Continent.ASIA;
    country2.capital = "Bijing";
    country2.continent = "Asia";
    country2.figureCaption = "China's flag";
    country2.language = "Mandarin Chinese";
    country2.nationalDish = "Peking Duck";
    
    this.countries.push(country2);
   

    const country3 = new Country();
    country3.name = "USA";
    country3.image = "assets/flags/usa.jpg";
    country3.type = Continent.AMERICA;
    country3.capital = "Washington D.C.";
    country3.continent = "America";
    country3.figureCaption = "USA's flag";
    country3.language = "English";
    country3.nationalDish = "Hamburger";
    this.countries.push(country3);

    const country4 = new Country();
    country4.name = "Brazil";
    country4.image = "assets/flags/brazil.jpg";
    country4.type = Continent.AMERICA;
    country4.capital = "Brasília";
    country4.continent = "America";
    country4.figureCaption = "Brazil's flag";
    country4.language = "Portuguese";
    country4.nationalDish = "Feijoada";
    this.countries.push(country4);

    const country5 = new Country();
    country5.name = "Egypt";
    country5.image = "assets/flags/egypt.jpg";
    country5.type = Continent.AFRICA;
    country5.capital = "Cairo";
    country5.continent = "Africa";
    country5.figureCaption = "Egypt's flag";
    country5.language = "Arabic";
    country5.nationalDish = "Koshari";
    this.countries.push(country5);

    const country6 = new Country();
    country6.name = "Australia";
    country6.image = "assets/flags/australia.jpg";
    country6.type = Continent.OCEANIA;
    country6.capital = "Canberra";
    country6.continent = "Oceania";
    country6.figureCaption = "Australia's flag";
    country6.language = "English";
    country6.nationalDish = "Meat Pie";
    this.countries.push(country6);

    const country7 = new Country();
    country7.name = "Antarctica";
    country7.image = "assets/flags/antarctica.gif";
    country7.type = Continent.ANTARCTICA;
    country7.capital = "N/A"; 
    country7.continent = "Antarctica";
    country7.figureCaption = "Antarctica's flag";
    country7.language = "Multiple (No official language)";
    country7.nationalDish = "Frozen Fish"; 
    this.countries.push(country7);


    const country8 = new Country();
    country8.name = "India";
    country8.image = "assets/flags/india.avif";
    country8.type = Continent.ASIA;
    country8.capital = "New Delhi";
    country8.continent = "Asia";
    country8.figureCaption = "India's flag";
    country8.language = "Hindi & English";
    country8.nationalDish = "Biryani";
    this.countries.push(country8);

    const country9 = new Country();
    country9.name = "Germany";
    country9.image = "assets/flags/german.webp";
    country9.type = Continent.EUROPE;
    country9.capital = "Berlin";
    country9.continent = "Europe";
    country9.figureCaption = "Germany's flag";
    country9.language = "German";
    country9.nationalDish = "Sauerbraten";
    this.countries.push(country9);

  }

}

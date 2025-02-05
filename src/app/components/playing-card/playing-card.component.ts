import { Component, computed, Input, input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryTypeProperties } from '../../utils/country.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  country = input(new Country());
  continentIcon = computed(() => {
    return CountryTypeProperties[this.country().type].imageUrl;
  })
  backgroundColor= computed(() => {
    return CountryTypeProperties[this.country().type].color;
  })
  
  }

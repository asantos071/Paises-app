import { Component } from '@angular/core';
import { Region } from '../../interfaces/region.interface';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [` 
    button {margin-right: 5px;
            margin-top: 5px}`
  ]
})
export class PorRegionComponent {

  regiones: Region[] = [{ codigo: 'EU', desc: 'European Union' },
                        { codigo: 'EFTA', desc: 'European Free Trade Association' },
                        { codigo: 'CARICOM', desc: 'Caribbean Community' },
                        { codigo: 'PA', desc: 'Pacific Alliance' },
                        { codigo: 'AU', desc: 'African Union' },
                        { codigo: 'USAN', desc: 'Union of South American Nations' },
                        { codigo: 'EEU', desc: 'Eurasian Economic Union' },
                        { codigo: 'AL', desc: 'Arab League' },
                        { codigo: 'ASEAN', desc: 'Association of Southeast Asian Nations' },
                        { codigo: 'CAIS', desc: 'Central American Integration System' },
                        { codigo: 'CEFTA', desc: 'Central European Free Trade Agreement' },
                        { codigo: 'NAFTA', desc: 'North American Free Trade Agreement' },
                        { codigo: 'SAARC', desc: 'Asian Association for Regional Cooperation' }
  ];

   regionActiva: Region = { codigo: '', desc: '' };
   paisesPorRegion: Country[]= [];  

  constructor(private paisService:PaisService) { }

   getClaseCCS(region: Region): string {
     return (region.codigo === this.regionActiva.codigo) ? 'btn btn-primary' : 'btn btn-outline-primary'
   }

    activarRegion(region: Region) {
      if (region === this.regionActiva){return}
      this.regionActiva  = region; 
      this.paisService.buscarRegion(region)
      .subscribe((respPaisesPorRegion) => {
      this.paisesPorRegion = respPaisesPorRegion;
    })
    
    }
 }

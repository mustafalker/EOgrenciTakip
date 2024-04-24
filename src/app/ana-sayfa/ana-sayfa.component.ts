import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

interface Menu {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ana-sayfa',
  templateUrl: './ana-sayfa.component.html',
  styleUrls: ['./ana-sayfa.component.css']
})
export class AnaSayfaComponent {

  constructor(private keycloak: KeycloakService, private router: Router) {}

  logout() {
    this.keycloak.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Çıkış işlemi başarısız:', error);
    });
  }
  
  menu: Menu[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  onAction(option: string) {
    // Implement your desired logic here based on the selected option
    console.log(`Option selected: ${option}`);
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppComponent } from './app.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './router.navigate';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { ProfilKayitComponent } from './profil-kayit/profil-kayit.component';
import { NgbDropdownModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDividerModule } from '@angular/material/divider';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AnaSayfaComponent,
    ToDoListComponent,
    ProfilKayitComponent,
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    keycloakService.init({
      config: {
        url: 'http://localhost:9090',
        realm: 'EOgrenciTakip',
        clientId: 'EOgrenciTakip',
      },
      initOptions: {
        onLoad: 'login-required',
      },
    });
  }
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ProfilKayitComponent } from './profil-kayit/profil-kayit.component';
import { OgrenciComponent } from './ogrenci/ogrenci.component';

const routes: Routes = [
  { path: '', redirectTo: '/ana-sayfa', pathMatch: 'full' },
  { path: 'ana-sayfa', component: AnaSayfaComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'to-do-list/:id', component: ToDoListComponent },
  { path: 'dersprogramlari', component: ProfilKayitComponent,},
  { path: 'ogrenci', component: OgrenciComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

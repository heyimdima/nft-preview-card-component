import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftPreviewCardComponent } from './components/nft-preview-card/nft-preview-card.component';

const routes: Routes = [
  {
    path: "",
    component: NftPreviewCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

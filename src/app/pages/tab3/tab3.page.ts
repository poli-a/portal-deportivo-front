import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(public storageService: StorageService, private router: Router) { }

  verNoticia(event) {
    this.router.navigate(["/tabs/noticia", event.id], { queryParams: { enFav: true }});
  }
}

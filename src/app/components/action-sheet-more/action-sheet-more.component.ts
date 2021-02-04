import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Noticia } from '../../interfaces/interfaces';
// Service p/ compartir en redes y wapp //
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// Service de localstorage//
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-action-sheet-more',
  templateUrl: './action-sheet-more.component.html',
  styleUrls: ['./action-sheet-more.component.scss'],
})
export class ActionSheetMoreComponent implements OnInit {

  @Input() noticia: Noticia;
  @Input() enFav;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private storageService: StorageService
  ) { }

  ngOnInit() {console.log(this.enFav);}

  async lanzarMenu() {

    let btnFavDel;
    if (this.enFav === 'true') {
      // p/ borrar de fav //
      btnFavDel = {
        text: 'Eliminar de favoritos',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar Favorito');
          this.storageService.borrarFavorito(this.noticia);
        }
      }
    } else {
      btnFavDel = {
        text: 'A Favoritos',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito');
          this.storageService.guardarFavorito(this.noticia);
        }
      }
    }
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticia.titulo,
            this.noticia.nombreCategoria,
            ''
          );
        }
      },
      btnFavDel,
      {
        cssClass: 'action-dark',
        text: 'Cancelar',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}

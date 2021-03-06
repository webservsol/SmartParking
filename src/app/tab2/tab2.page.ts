import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  buttonColor = '#000';
  constructor(public router: Router, public alertController: AlertController) {}

  OpenLogin() {
    this.buttonColor = '#000080';
    this.router.navigate(['login']);
  }

  async openProfile() {
    const alert = await this.alertController.create({
      header: 'French Pop-up',
      subHeader: 'Under Construction',
      message: 'This section will be up soon fam.',
      translucent: true,
      buttons: ['OK']
    });

    await alert.present();
  }
}

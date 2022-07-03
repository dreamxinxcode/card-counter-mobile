import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  settingsForm: FormGroup;

  constructor(
    private toastController: ToastController
  ) {
    this.settingsForm = new FormGroup({
      themeToggle: new FormControl(localStorage.getItem('dark_theme')),
    });
  }

  ngOnInit() {
  }
}

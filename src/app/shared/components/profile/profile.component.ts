import { Profile } from './profile.model';
import { Component, Input } from '@angular/core';
import { STATES, GENDERS, State, Gender } from '../../constants';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input()
  private profileInfo: Profile;

  private imagePath: any = '';
  private states: State[] = STATES;
  private gender: Gender[] = GENDERS;

  constructor() {}

  onFileInput(e: Event): void {
    const r = new FileReader();
    const file = (<HTMLInputElement>e.target).files[0];

    r.onload = (ev: any) => {
      this.imagePath = ev.target.result;
    };
    r.readAsDataURL(file);
  }
}

import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { AppService } from '../services/app.service';
@Component({
  selector: 'tt-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private socialAuthService: AuthService,
    private appService: AppService) {
  }

  ngOnInit() {

  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);

        this.display('Bearer ' + userData.idToken)
        // Now sign-in with userData
        // ...
      }
    );
  }

  public display(tokenId: string) {
    this.appService.display(tokenId);
  }
}

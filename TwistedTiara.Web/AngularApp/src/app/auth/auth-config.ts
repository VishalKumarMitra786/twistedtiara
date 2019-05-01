import { AuthServiceConfig } from 'angular-6-social-login';
import { GoogleLoginProvider } from 'angular-6-social-login';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '209215004498-2etv6gm9p0av98jtagdb1ujcsqjtmp9u.apps.googleusercontent.com')
      }
    ]);
  return config;
}

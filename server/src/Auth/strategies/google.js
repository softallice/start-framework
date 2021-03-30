import { OAuthStrategy } from '@feathersjs/authentication-oauth';
import { Params } from '@feathersjs/feathers';
import app from '../../app';

export class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile, existing, params) {
    const baseData = await super.getEntityData(profile, existing, params);

    return {
      ...baseData,
      email: profile.email,
      userName: profile.name,
      preferredLanguage: profile.locale,
      profileImage: { secure_url: profile.picture },
    };
  }

  async getRedirect(data) {
    if (Object.getPrototypeOf(data) === Error.prototype) {
      const err = data.message;
      return app.get('client') + '/callback' + `?error=${err}`;
    } else {
      const token = data.accessToken;
      return app.get('client') + '/callback' + `?token=${token}`;
    }
  }
}
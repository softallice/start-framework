const {
  AuthenticationService,
  JWTStrategy,
} = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth, OAuthStrategy } = require('@feathersjs/authentication-oauth');

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    console.log('Google profile', profile);
    const baseData = await super.getEntityData(profile);
    
    return {
      ...baseData,
      profilePicture: profile.picture,
      email: profile.email,
      name: profile.name,
      firstname: profile.given_name,
      lastname: profile.family_name,
    };
  }
}

class NaverStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    console.log('Naver profile.response', profile);
    const baseData = await super.getEntityData(profile.response);
    
    return {
      ...baseData,
      email: profile.response.email,
      firstname: profile.response.name,
      lastname: profile.response.name,
    };
  }
}

module.exports = (app) => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('google', new GoogleStrategy());
  authentication.register('naver', new NaverStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());

  app.on('login', (data) => {
    data.user['lastLoggedIn'] = new Date();
    app.service('users').patch(data.user._id, data.user);
  });
};
const {
  AuthenticationService,
  JWTStrategy,
} = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth , OAuthStrategy} = require('@feathersjs/authentication-oauth');
const { GeneralError } = require('@feathersjs/errors');

console.log('authenticate')

class GitHubStrategy extends OAuthStrategy {
  async getEntityData(profile) {
  
    // this will set 'googleId'
    const baseData = await super.getEntityData(profile);
    
    // this will grab the picture and email address of the Google profile
    return {
      ...baseData,
      email: profile.email
    };
  }
}

// class GoogleStrategy extends OAuthStrategy {

//   // getRedirect(data){
//   //   //console.log(` Redirect -> ${JSON.stringify(data.user,'',2)} `)
  
//   //     let url = config.authentication.oauth.redirect
//   //     let seperator = '#'
//   //     let accessToken = 'access_token='+data.accessToken
//   //     let user = '&id='+data.user.id
      
//   //     return url + seperator + accessToken + user
//   //   }


//   async getEntityQuery(query){
//     console.log('getEntityQuery')
//     return{
//       email:query.email,
//       active:true
//     };
//   }
  
//   async findEntity(username, params){
//     const entity = await super.findEntity(username, params);
//     console.log('findEntity')
//     if (!entity) {
//       throw new GeneralError('Invalid.');
//     }
//     return entity;
//   }

//   async getEntityData(profile) {
  
//     // this will set 'googleId'
//     const baseData = await super.getEntityData(profile);
    
//     // this will grab the picture and email address of the Google profile
//     return {
//       ...baseData,
//       profilePicture: profile.picture,
//       email: profile.email,
//       name: profile.name,
//       firstname: profile.given_name,
//       lastname: profile.family_name,
//     };
//   } 
// }
// console.log('authenticate-test')

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    console.log('profile', profile);
    const baseData = await super.getEntityData(profile);
    console.log('baseData', baseData);

    return {
      ...baseData,
      profilePicture: profile.picture,
      email: profile.email,
      name: profile.name,
      firstname: profile.given_name,
      lastname: profile.family_name,
      password: profile.email
    };
  }
}

module.exports = (app) => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('google', new GoogleStrategy());
  authentication.register('github', new GitHubStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
    
  app.on('login', (data) => {
    
    data.user['lastLoggedIn'] = new Date();
    app.service('users').patch(data.user._id, data.user);
  });
};

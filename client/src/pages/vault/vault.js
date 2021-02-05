// import vault from "node-vault";

const options = {
  apiVersion: 'v1', 
  endpoint: 'http://172.27.42.206:8200',
  token: 's.4IaPyKgBGr1Z4dvYQHRiia7e'
  // token: 's.gjjaM11M8DQMysCfVRJSNEgk' //root token
};

// get new instance of the client
const vault = require('node-vault')(options);


/*
approle login .....
*/
// const mountPoint = 'approle';
// const roleName = 'verifiable-credential';

// console.log('vault auth');

// vault.auths()
// .then((result) => {
//   if (result.hasOwnProperty('approle/')) return undefined;
//   return vault.enableAuth({
//     mount_point: mountPoint,
//     type: 'approle',
//     description: 'Approle auth',
//   });
// })
// .then(() => vault.addApproleRole({ role_name: roleName, policies: 'uservc' }))
// .then(() => Promise.all([vault.getApproleRoleId({ role_name: roleName }),
//   vault.getApproleRoleSecret({ role_name: roleName })])
// )
// .then((result) => {
//   const roleId = result[0].data.role_id;
//   const secretId = result[1].data.secret_id;
//   return vault.approleLogin({ role_id: roleId, secret_id: secretId });
// })
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => console.error(err.message));
/* */




// web ui > secret backends > new secret > get token
// vault.token = 's.4IaPyKgBGr1Z4dvYQHRiia7e'


export default {

  vaultDidWrite(path, payload) {
      return vault.write(path, payload).then(function (response) {
          console.log('write', response);
        })
        .catch(function (error) {
          console.log('write', error);
        });
    // return response
  },
  // vaultDidWrite() {
  //     vault.write('credential/data3', {"data": {"foo":"bar"}}).then(function (response) {
  //         console.log('write', response);
  //       })
  //       .catch(function (error) {
  //         console.log('write', error);
  //       });
  // },
  async vaultDidGet(path) {
        var vcs;
        await vault.read(path).then(function (response) {
          console.log('get >>>> ', response.data);
          vcs = response.data ;
        })
        .catch(function (error) {
          console.log('get', error);
        });
        return vcs;
  },
  vaultDidDelete(path) {
      return vault.read(path).then(function (response) {
          console.log('del', response);
        })
        .catch(function (error) {
          console.log('del', error);
        });
  }
  
}
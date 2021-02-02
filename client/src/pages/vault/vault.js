// import vault from "node-vault";

const options = {
    apiVersion: 'v1', 
    endpoint: 'http://172.27.42.206:8200',
  };
  
  // get new instance of the client
const vault = require('node-vault')(options);


// web ui > secret backends > new secret > get token
vault.token = 's.nQsg5v8Xq8ohp65yaHyNGrVS'

 
export default {
    vaultDidWrite(path, payload) {
        vault.write(path, payload).then(function (response) {
            console.log('write', response);
          })
          .catch(function (error) {
            console.log('write', error);
          });
    },
    // vaultDidWrite() {
    //     vault.write('credential/data3', {"data": {"foo":"bar"}}).then(function (response) {
    //         console.log('write', response);
    //       })
    //       .catch(function (error) {
    //         console.log('write', error);
    //       });
    // },
    vaultDidGet(path) {
        vault.read(path).then(function (response) {
            console.log('get', response);
          })
          .catch(function (error) {
            console.log('get', error);
          });
    },
    vaultDidDelete(path) {
        vault.read(path).then(function (response) {
            console.log('del', response);
          })
          .catch(function (error) {
            console.log('del', error);
          });
    }
    
}
// import vault from "node-vault";

const options = {
  apiVersion: 'v1', 
  endpoint: 'http://172.27.42.206:8200',
};

// get new instance of the client
const vault = require('node-vault')(options);


// web ui > secret backends > new secret > get token
vault.token = 's.TwzJ5b0sVE5lJ2pQoPQzEIGQ'


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
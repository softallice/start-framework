import Vue from "vue";
import axios from "axios";
import { LocalStorage, LoadingBar } from "quasar";

LoadingBar.setDefaults({
  color: "secondary",
  size: "15px",
  position: "top"
});

//Main Url Backend API
// const axiosInstance = axios.create({ baseURL: "http://172.27.42.206:3030" });
// const axiosInstance = axios.create({ baseURL: "https://server.softmagic.local" });
// const axiosInstance = axios.create({ baseURL: "http://server.softmagic.local:3030" });
const axiosInstance = axios.create({ baseURL: "http://172.27.42.206:3030" });

axiosInstance.defaults.withCredentials = true;

// token add
const token = LocalStorage.getItem("feathers-jwt");
if (token) {
  delete axiosInstance.defaults.headers.common.Authorization;
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

axiosInstance.interceptors.request.use(
  function(config) {
    LoadingBar.start();
    return config;
  },
  function(error) {
    LoadingBar.stop();

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function(response) {
    LoadingBar.stop();
    return response;
  },
  function(error) {
    LoadingBar.stop();
    return Promise.reject(error);
  }
);

Vue.prototype.$axiosInstance = axiosInstance;


// sub URL did create--------------------------------> start
const subAxiosInstance = axios.create({ 
  baseURL: "http://172.27.42.55:8067",
  headers:{'Authorization': 'Bearer vcs_holder_rw_token'}
});

// subAxiosInstance.defaults.withCredentials = true;

// token add
// const subToken = 'vcs_holder_rw_token';
// if (subToken) {
//   delete axiosInstance.defaults.headers.common.Authorization;
//   subAxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + subToken;
//   subAxiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
// }

Vue.prototype.$subAxiosInstance = {
  ...subAxiosInstance,
  didCreate(payload) {
    return subAxiosInstance.post('/holder/profile', payload)
  }
};

// sub URL did create--------------------------------> start
const issueAxiosInstance = axios.create({ 
  baseURL: "http://172.27.42.55:8070",
  headers:{'Authorization': 'Bearer vcs_issuer_rw_token'}
});

Vue.prototype.$issueAxiosInstance = {
  ...issueAxiosInstance,
  vcCreate(payload) {
    return issueAxiosInstance.post('/honeybloc-ed25519signature2018-ed25519/credentials/issueCredential', payload)
  }
};

// vault --> CORS Error
// token : s.nQsg5v8Xq8ohp65yaHyNGrVS

const vaultAxiosInstance = axios.create({ 
  baseURL: "http://127.0.0.1:8200",
  headers:{'X-Vault-Token': 's.nQsg5v8Xq8ohp65yaHyNGrVS'}
});

Vue.prototype.$vaultAxiosInstance = {
  ...vaultAxiosInstance,
  vaultDidCreate(payload) {
    return vaultAxiosInstance.post('/v1/credential', payload)
  }
};


// firebase --> CORS Error

// const fireAxiosInstance = axios.create({ 
//   baseURL: "https://fcm.googleapis.com/fcm/send"
// });

// Vue.prototype.$fireAxiosInstance = fireAxiosInstance;
 
export default axiosInstance;

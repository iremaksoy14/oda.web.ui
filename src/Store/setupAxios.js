
export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
      config => {
        const {
          auth: { authToken }
        } = store.getState();
        //console.log( "setupAxios.js")
        //console.log(authToken)
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
  
        return config;
      },
      err => Promise.reject(err)
    );
  }
  
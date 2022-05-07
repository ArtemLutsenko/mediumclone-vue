import axios from 'axios'
axios.defaults.baseURL = 'https://conduit.productionready.io/api/'
axios.interceptors.request.use((config) => {
  const token = localStorage.accessToken
  const authorizationToken = token ? `Token ${token}` : ''
  console.log(authorizationToken)
  config.headers.Authorization = authorizationToken
  return config
})

export default axios

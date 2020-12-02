import axios from 'axios'

/*const baseURL = process.env.ENV === 'development' ?
  'http://localhost:3000/auth' :
  '/auth'*/
let baseURL = 'http://localhost:3000/auth'

const authService = axios.create({
  baseURL,
  withCredentials: true
})


export const signupFn = userInfo =>
  authService.post('/signup', userInfo)

export const loginFn = userInfo =>
  authService.post('/login', userInfo)

export const currentUserFn = () =>
  authService.get('/current-user')

export const logoutFn = () =>
  authService.get('/logout')
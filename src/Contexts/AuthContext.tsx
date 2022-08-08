import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { API_login, API_isTokenAlive } from '../Services/API_FinalProject'
import { tpUser, tpSignInData, tpAuthContext } from './AuthContextTypes'
import { SessaoContext } from './SessaoContext'


// import { recoverUserInformation, signInRequest } from "../services/auth";
// import { api } from "../services/api";

export const AuthContext = createContext({} as tpAuthContext)


export function AuthProvider({ children }) {

  const { defineSessao } = useContext(SessaoContext)

  const _initialUser: tpUser = {
    token: '',
    userId: '',
    name: '',
    email: '',
    phone: ''
  }

  const [user, setUser] = useState<tpUser>(_initialUser)
  const [isAuth, setIsAuth] = useState<boolean>(false)


  useEffect(() => {    
    const { 'lojaonline.token': token } = parseCookies()
    const { 'lojaonline.userInfo': userInfo } = parseCookies()

    if (token) {
      if (userInfo) {
        setUser(JSON.parse(userInfo))
        setIsAuth(true)
      }
    }
  }, [])

  async function logoff()
  {
    destroyCookie(null, 'lojaonline.token')
    destroyCookie(null, 'lojaonline.userInfo')
  
    const _initialUser: tpUser = {
      token: '',
      userId: '',
      name: '',
      email: '',
      phone: ''
    }
  
    setUser(_initialUser)
    setIsAuth(false) 
    defineSessao('INIT')
    
  }

  async function isTokenAlive(token: string)
  {
    var isTokenOk = false;

    const x = await API_isTokenAlive(token)
   
    return x    
  }

  async function signIn({ email, password }: tpSignInData) {

    var isLoginOk = false;

    const x = await API_login({
      email,
      password,
    })
    .then(ret => {

      // alert('API: ' + JSON.stringify(ret));
      // console.log(JSON.stringify(ret, null, 2))
      // console.log(ret)

      const {name, token, phone, userId} = ret

      const _user: tpUser = {
        token,
        userId,
        name,
        email,
        phone
      }

      console.log(_user)

      if (token)
      {
        setCookie(undefined, 'lojaonline.token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })
  
        setCookie(undefined, 'lojaonline.userInfo', JSON.stringify(_user), {
          maxAge: 60 * 60 * 1, // 1 hour
        })
  
        // api.defaults.headers['Authorization'] = `Bearer ${token}`;
  
        isLoginOk = true;
  
        setUser(_user)
        setIsAuth(true)

      }
      else
      {
        isLoginOk = false;
      }
     

    })
    .catch(error => {
      console.log('Error in fetch from api: ' + error.message); 
    }); 
    
    return isLoginOk

  }

  return (
    <AuthContext.Provider value={{ user, isAuth, signIn, logoff, isTokenAlive }}>
      {children}
    </AuthContext.Provider>
  )
}
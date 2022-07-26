import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { API_doLogin } from '../Services/API.ts'
import { tpUser, tpSignInData, tpAuthContext } from './AuthContextTypes'

// import { recoverUserInformation, signInRequest } from "../services/auth";
// import { api } from "../services/api";

export const AuthContext = createContext({} as tpAuthContext)

export function AuthProvider({ children }) {

  const [user, setUser] = useState<tpUser | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {    
    const { 'lojaonline.token': token } = parseCookies()

    if (token) {
      // recoverUserInformation().then(response => {
      //   setUser(response.user)
      // })
    }
  }, [])

  async function signIn({ email, password }: tpSignInData) {

    // alert('signIn => email: ' + email + ' | password: ' + password)

    const x = await API_doLogin({
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

      setCookie(undefined, 'lojaonline.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })

      // api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(_user)

      // Router.push('/loja');      

  

    })
    .catch(error => {
        console.log('Error in fetch from api: ' + error.message); 
    }); 
    

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
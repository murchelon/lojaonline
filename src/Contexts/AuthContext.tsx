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

    const { token, user } = await API_doLogin({
      email,
      password,
    })

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    // api.defaults.headers['Authorization'] = `Bearer ${token}`;

    // setUser(user)

    Router.push('/loja');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
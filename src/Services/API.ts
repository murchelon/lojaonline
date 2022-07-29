import axios from "axios";
import { parseCookies } from "nookies";
import { tpUser, tpSignInData, tpAuthContext } from '../Contexts/AuthContextTypes'


  
export function get_ApiProject(ctx?: any) {
  const { 'lojaonline.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333'
  })

  api.interceptors.request.use(config => {
    console.log(config);
    return config;
  })
  
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}


async function getQuestionsFromAPI() 
{
    const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986");

    if (!res.ok) {
        const message = 'An error has occured: ' + res.status;
        throw new Error(message);
    }

    const data = await res.json()  ;   
    return data;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function API_doLogin(loginCredentials: tpSignInData)
{
    const res = await fetch('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },    
        body: new URLSearchParams(loginCredentials)
        // body: new URLSearchParams({
        //     'email': 'rm343601@fiap.com.br',
        //     'password': '123456'
        // })
    });


    if (!res.ok) {
        const message = 'An error has occured: ' + res.status;
        throw new Error(message);
    }

    const data = await res.json()  ;  

    return data;    
}

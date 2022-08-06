import { tpUser, tpSignInData, tpAuthContext } from '../Contexts/AuthContextTypes'



export async function API_login(loginCredentials: tpSignInData)
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


export async function API_isTokenAline(token: string)
{
  const res = await fetch('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/getFavProducts', {
      method: 'GET',
      headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + token
      }
  });

  if (!res.ok) {
    return false;
  }

  return true;    
}



export async function API_getAllProducts(token: string)
{
    const res = await fetch('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/?page=1&perPage=100', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
    });

    if (!res.ok) {
        const message = 'An error has occured: ' + res.status;
        throw new Error(message);
    }

    const data = await res.json()  ;  

    return data;     
}



export async function API_setFavorite(token: string, idProduct: string)
{
    const res = await fetch('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/manageFavorite', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        },
        body: new URLSearchParams({
            'productID': idProduct
        })        
    });

    if (!res.ok) {
        const message = 'An error has occured: ' + res.status;
        throw new Error(message);
    }

    const data = await res.json()  ;  

    return data;     
}

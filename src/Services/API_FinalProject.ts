import { tpSignInData, tpCreateUser } from '../Contexts/AuthContextTypes'



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


export async function API_isTokenAlive(token: string)
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



export async function API_getAllProducts(token: string, page: string)
{
    const res = await fetch('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/?page=' + page + '&perPage=6', {
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


export async function API_createNewUser(values: tpCreateUser)
{
    const res = await fetch('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/signup/', {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },    
        body: new URLSearchParams(values)
        // body: new URLSearchParams({
        //     'email': 'rm34360w1@fiap.com.br',
        //     'password': '123456',
        //     'name': 'murch1',
        //     'phone': '11976844447'
        // })
    });

    const data = await res.json() 

    let ret = '0'

    if (data.message === 'User created successfully')
    {
        ret = '1'
    }
    else if(data.message === 'Validation failed')
    {
        let campoNome = data.data[0].param
        let campoErro = data.data[0].msg
        let campoValor = data.data[0].value
        
        ret = 'Erro ao criar usuario: ' + campoNome + ' | ' + campoErro + ' | ' + campoValor
    }
    else
    {
        ret = data
    }

    // console.log('API_createNewUser: ' + ret)

    return ret;  
}
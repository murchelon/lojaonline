import React from 'react'
import { useContext, useEffect } from 'react'
import { parseCookies } from 'nookies'
import ProductsView from './ProductsView.tsx'
import { AuthContext } from '../../Contexts/AuthContext.tsx'
import { API_getAllProducts, API_isTokenAline } from '../../Services/API_FinalProject.ts'

const ProductsController = () =>  {

  const { isTokenAlive, user, isAuth, logoff } = useContext(AuthContext)


  useEffect(() => {    

    const tokenAntigo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJtMzQzNjAxQGZpYXAuY29tLmJyIiwidXNlcklEIjoiNjJjYjIyYjJiMWQ4OTk5OWFiNDljMWZjIiwiaWF0IjoxNjU5MzM0ODQ4LCJleHAiOjE2NTkzMzg0NDh9.k2JxWX5Ug51nZgcfHAdZadSsNQFXpFhQOHqFjk68Aag'
    const { ['lojaonline.token']: tokenAtual } = parseCookies()      
    const tokenToTest = tokenAtual

    let checkToken = new Promise(function(resolve, reject)
    {        
      isTokenAlive(tokenToTest)
        .then(
          (result) => { 

            if (result)
            {
              populateProducts(tokenToTest)
              resolve(result)
            }
            else
            {
              logoff()
              reject(false)
            }


          },
          (error) => { 
            console.log('erro: ' + error);
            reject(false)
          }
        )
    });    
    
    
  }, [])

  async function populateProducts(token: string)
  {
    const x = await API_getAllProducts(token).then(ret => {
      console.log(ret.products)
    })
  }
  



  
  return (
    <ProductsView />
  );
} 

export default ProductsController;
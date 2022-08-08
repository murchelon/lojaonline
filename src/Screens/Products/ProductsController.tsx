import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductsView from './ProductsView'
import { tpProduct } from '../../Contexts/AuthContextTypes'
import { AuthContext } from '../../Contexts/AuthContext'
import { API_getAllProducts, API_setFavorite } from '../../Services/API_FinalProject'



const ProductsController = () =>  {

  const { isTokenAlive, user, isAuth, logoff } = useContext(AuthContext)
  
  const [stPAGE_ACTIVE, set_stPAGE_ACTIVE] = React.useState(1);
  const [stPAGE_TOTALPROD, set_stPAGE_TOTALPROD] = React.useState(0);
  const [stPAGE_PERPAGE, set_stPAGE_PERPAGE] = React.useState(0);

  const [stProducts, set_stProducts] = React.useState(() => {        
    let ret: Array<tpProduct> = [];
    return ret;        
  });

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
              populateProducts(tokenToTest, stPAGE_ACTIVE.toString())
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

  async function populateProducts(token: string, page: string)
  {       
    const x = await API_getAllProducts(token, page).then(ret => {

      var _products: Array<tpProduct> = ret.products

      // console.log('populateProducts:')
      // console.log(ret.totalItems)
      set_stPAGE_TOTALPROD(ret.totalItems);
      set_stPAGE_PERPAGE(ret.perPage);
      set_stProducts(_products);
    })
  }

  
  async function setFavorite(token: string, idProduct: string)
  {       
    const x = await API_setFavorite(token, idProduct).then(ret => {

      populateProducts(token, stPAGE_ACTIVE.toString())

    })
  }
  

  function handleClickComprar(idProduct: string)
  {
    alert('TODO: Implementar Compra do produto!')
  }


  async function handleSetPage(page: number)
  {
    set_stPAGE_ACTIVE(page)


    const tokenAntigo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJtMzQzNjAxQGZpYXAuY29tLmJyIiwidXNlcklEIjoiNjJjYjIyYjJiMWQ4OTk5OWFiNDljMWZjIiwiaWF0IjoxNjU5MzM0ODQ4LCJleHAiOjE2NTkzMzg0NDh9.k2JxWX5Ug51nZgcfHAdZadSsNQFXpFhQOHqFjk68Aag'
    const { ['lojaonline.token']: tokenAtual } = parseCookies()      
    const tokenToTest = tokenAtual

    let checkToken = new Promise(function(resolve2, reject2)
    {        
      isTokenAlive(tokenToTest)
        .then(
          (result) => { 

            if (result)
            {
              populateProducts(tokenToTest, page.toString())              
            }
            else
            {
              logoff()
              reject2(false)
            }

          },
          (error) => { 
            console.log('erro: ' + error);
            reject2(false)
          }
        )
    }); 
    
    
    
  }

  

  
  async function handleClickFav(idProduct: string)
  {
    // alert('handleClickFav: ' + idProduct)
    

    const tokenAntigo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJtMzQzNjAxQGZpYXAuY29tLmJyIiwidXNlcklEIjoiNjJjYjIyYjJiMWQ4OTk5OWFiNDljMWZjIiwiaWF0IjoxNjU5MzM0ODQ4LCJleHAiOjE2NTkzMzg0NDh9.k2JxWX5Ug51nZgcfHAdZadSsNQFXpFhQOHqFjk68Aag'
    const { ['lojaonline.token']: tokenAtual } = parseCookies()      
    const tokenToTest = tokenAtual

    let checkToken = new Promise(function(resolve2, reject2)
    {        
      isTokenAlive(tokenToTest)
        .then(
          (result) => { 

            if (result)
            {

              let favPromisse = new Promise(function(resolve, reject)
              {        
                setFavorite(tokenToTest, idProduct)
                  .then(
                    (result) => { 
                      // console.log('sucesso: ' + result);
                      resolve2(true)
                    },
                    (error) => { 
                      console.log('erro: ' + error);  
                      reject('erro')
                    }
                  )
              });
              
            }
            else
            {
              logoff()
              reject2(false)
            }

          },
          (error) => { 
            console.log('erro: ' + error);
            reject2(false)
          }
        )
    }); 
    
    toast.promise(
      checkToken,
        {
          pending: 'Atualizando favoritos...',
          success: 'Favorito Atualizado! 👌',
          error: 'Ocorreu um erro ao atualizado o favorito! 🤯'
        }
    )

  }

  
  return (
    <>
      <ProductsView 
        products={stProducts}
        handleClickComprar={handleClickComprar}
        handleClickFav={handleClickFav}
        page={stPAGE_ACTIVE} 
        totalProd={stPAGE_TOTALPROD}
        perPage={stPAGE_PERPAGE}
        handleSetPage={handleSetPage}  
      />
      <ToastContainer />
    </>
  );
} 

export default ProductsController;
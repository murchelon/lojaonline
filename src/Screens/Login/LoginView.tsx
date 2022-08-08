import React from 'react'
import { useContext, useState } from 'react'
import { NextPage } from 'next'

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../Contexts/AuthContext'
import { SessaoContext } from '../../Contexts/SessaoContext'
import LoginStyles from './Login.module.css'

import Router from 'next/router'

// import { resolve } from 'path';
// import { resolveCaa } from 'dns/promises';


const LoginView: NextPage = () =>  {

  const { signIn, isTokenAlive } = useContext(AuthContext)

  const { defineSessao } = useContext(SessaoContext)

  const [isSubmiting, setIsSubmiting] = useState(false); 

  async function handleSignIn(data)
  {
    const ret = await signIn(data)    
    return ret;   
  }
  
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      email: process.env.NEXT_PUBLIC_USERNAME,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      setIsSubmiting(true)

      let loginPromisse = new Promise(function(resolve, reject)
      {        
        handleSignIn(values)
          .then(
            (result) => { 
              // console.log('sucesso: ' + result);

              if (result)
              {
                setIsSubmiting(false)
                defineSessao('LOJA')
                resolve('login sucesso')
                Router.push('/loja'); 
              }
              else
              {
                setIsSubmiting(false)
                reject('login incorreto')
              }
            },
            (error) => { 
              console.log('erro: ' + error);
              setIsSubmiting(false)
              reject('erro')
            }
          )
      });
      
      toast.promise(
          loginPromisse,
          {
            pending: 'Realizando login...',
            success: 'Login feito com sucesso! 👌',
            error: 'Usuario ou senha incorretos! 🤯'
          }
      )

    },
  });

  function showToastTest()
  {
    toast("Teste de toast")
  }
      
  async function handleBtnDebug()
  {
    // token ok:
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJtMzQzNjAxQGZpYXAuY29tLmJyIiwidXNlcklEIjoiNjJjYjIyYjJiMWQ4OTk5OWFiNDljMWZjIiwiaWF0IjoxNjU5MzM0ODQ4LCJleHAiOjE2NTkzMzg0NDh9.k2JxWX5Ug51nZgcfHAdZadSsNQFXpFhQOHqFjk68Aag'
    // let token = 'asascpXVCJ9.eyJlbWFpbCI6InJtMzQzNjAxQGZpYXAuY29tLmJyIiwidXNlcklEIjoiNjJjYjIyYjJiMWQ4OTk5OWFiNDljMWZjIiwiaWF0IjoxNjU5MzMwNzgxLCJleHAiOjE2NTkzMzQzODF9.aws7uo090E_ec4aoF39BoeUtPmtmR-GzaIIY0rKcKyM'
    // var ret = ''
    const ret = await isTokenAlive(token)    
    alert('ret = ' + ret)
  }

  function handleNewUser()
  {

    Router.push('/cadastrar'); 
  }

    
  return (
    
      <div className={LoginStyles.backContainer}>  

        <div className={LoginStyles.backPanel}>          
          <div>
            Digite os seus dados:
            <br />
            <br />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              disabled={!!isSubmiting} 
            />
            <br /><br />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Senha"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              disabled={!!isSubmiting} 

            />
            
            <br /><br />

            <Button color="primary" id="btnSubmit" disabled={!!isSubmiting} variant="contained" disableElevation fullWidth type="submit">
              Login
            </Button>

            <br /><br />

            <Button color="primary" type="button" disabled={!!isSubmiting} variant="contained" disableElevation fullWidth onClick={handleNewUser}>
              Cadastrar novo Usuário
            </Button>  

          </form>
         
          {/* <Button color="primary" variant="contained" disableElevation fullWidth onClick={handleBtnDebug}>
            isTokenAlive
          </Button>    */}
 
        </div>

        <ToastContainer />

      </div>

  );
} 

export default LoginView;




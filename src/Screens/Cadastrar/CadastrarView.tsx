import React from 'react'
import { NextPage } from 'next'
import { useContext, useState } from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from 'next/router'

import CadastrarStyles from './Cadastrar.module.css'
import { tpCreateUser } from '../../Contexts/AuthContextTypes'
import { AuthContext } from '../../Contexts/AuthContext'
import HeaderController from '../../Components/Header/HeaderController'
import { API_createNewUser } from '../../Services/API_FinalProject'


const CadastrarView: NextPage = () =>  {

  const { isTokenAlive } = useContext(AuthContext)

  const [isSubmiting, setIsSubmiting] = useState(false); 

  async function createNewUser(values: tpCreateUser) {

    var isCreateOk = '0';
  
    // console.log('createNewUser: ' + JSON.stringify(values))

    const x = await API_createNewUser(values)
      .then(ret => {
    
        
        // alert('API: ' + JSON.stringify(ret));
        // console.log(JSON.stringify(ret, null, 2))
        // console.log('ret from createNewUser: ' + ret)
        isCreateOk = ret;
    
      })
      .catch(error => {
        console.log('Error in fetch from api: ' + error.message); 
        isCreateOk = 'createNewUser: Error in fetch from api: ' + error.message
      }); 
    
    return isCreateOk;
  
  }
  


    
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, 'O nome precisa ter pelo menos 3 caracteres')
      .required('O nome é obrigatório'),    
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    phone: yup   
      .string()
      .matches(
        phoneRegExp,
        "Apenas números são permitidos"
      )
      .min(11, 'O telefone tem de ter de ter 11 caracteres (formato: xxxxxxxxxxx) (ddd + número)')
      .max(11, 'O telefone tem de ter de ter 11 caracteres (formato: xxxxxxxxxxx) (ddd + número)')
      .required('O telefone é obrigatório'),    
    password: yup
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
    password2: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.')   
  });

  const formik = useFormik({
    initialValues: {
      name: process.env.NEXT_PUBLIC_NAME,
      email: process.env.NEXT_PUBLIC_USERNAME,
      phone: process.env.NEXT_PUBLIC_PHONE,
      password: process.env.NEXT_PUBLIC_PASSWORD,
      password2: process.env.NEXT_PUBLIC_PASSWORD,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      const valuesClean: tpCreateUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone
      }

      // console.log('onSubmit: ' + JSON.stringify(valuesClean))

      setIsSubmiting(true)

      let loginPromisse = new Promise(function(resolve, reject)
      {        
        createNewUser(valuesClean)
          .then(
            (result) => { 
              // console.log('sucesso: ' + result);

              if (result === '1')
              {
                setIsSubmiting(false)
                resolve('1')
                // Router.push('/loja'); 
              }
              else
              {
                setIsSubmiting(false)
                reject(result)
              }
            },
            (error) => { 
              // console.log('createNewUser erro: ' + error);
              setIsSubmiting(false)
              reject('erro: ' + error)
            }
          )
      });
      
      toast.promise(
          loginPromisse,
          {
            pending: {
              render(){
                return "Cadastrando novo usuário..."
              },
              icon: true,
            },
            success: {
              render({data}){
                return `Cadastro realizado com sucesso ! Clique em voltar para logar`
              },
            },
            error: {
              render({data}){
                // When the promise reject, data will contains the error
                return `${data}`
              }
            }
          }         
      )

      
      // toast.promise(
      //   loginPromisse,
      //   {
      //     pending: 'Cadastrando novo usuário...',
      //     success:  'Usuário cadastrado com sucesso ! Clique em voltar para logar',
      //     error: (err) => `Ocorreu um erro ao caddastrar o usuário ${err.toString()}`,
      //   },
      //   {
      //     style: {
      //       minWidth: '250px',
      //     },
      //     success: {
      //       autoClose: 6000,
      //       closeOnClick: true,
      //       pauseOnHover: false,  
      //     },
      //   }          
      // )


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

  function handleVoltar()
  {
    Router.push('/'); 
  }

    
  return (
    <>
      <HeaderController  />

      <div className={CadastrarStyles.appContainer}>

        <div className={CadastrarStyles.backContainer}> 

          <div className={CadastrarStyles.backPanel}>          
            <div>
              Novo Usuário
              <br />
              <br />
            </div>
            <form onSubmit={formik.handleSubmit}>

              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                disabled={!!isSubmiting} 
              />
              <br /><br />

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
                id="phone"
                name="phone"
                label="Telefone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                disabled={!!isSubmiting} 
              />
              <br /><br />

              <TextField
                fullWidth
                id="password"
                name="password"
                label="Digite a Senha"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                disabled={!!isSubmiting}
              />
              <br /><br />

              <TextField
                fullWidth
                id="password2"
                name="password2"
                label="Redigite a Senha"
                type="password"
                value={formik.values.password2}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                disabled={!!isSubmiting}
              />

              <br /><br />
              <Button color="primary" id="btnSubmit" disabled={!!isSubmiting} variant="contained" disableElevation fullWidth type="submit">
                Cadastrar
              </Button>

              <br /><br />
              <Button color="primary" type="button" disabled={!!isSubmiting} variant="contained" disableElevation fullWidth onClick={handleVoltar}>
                Voltar
              </Button>  
          
            </form>
            
       

            {/* <Button color="primary" variant="contained" disableElevation fullWidth onClick={handleBtnDebug}>
              isTokenAlive
            </Button>    */}
  
          </div>

          <ToastContainer />

        </div>

      </div>
    </>
  );
} 

export default CadastrarView;

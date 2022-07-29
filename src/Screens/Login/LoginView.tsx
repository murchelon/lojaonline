import React from 'react'
import { useContext } from 'react'
import { NextPage } from 'next'
import LoginStyles from './Login.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { API_doLogin } from '../../Services/API.ts'
import { AuthContext } from '../../Contexts/AuthContext.tsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginView: NextPage = () =>  {

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {

    const ret = await signIn(data)

    if (ret)
    {
      toast.success('Oba!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        });
    }
    else
    {
      toast.error('Login ou senha incorretos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        });      
    }
   
  }
  
  const validationSchema = yup.object({
    email: yup
      .string('Digite o seu e-mail')
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string('Digite a sua senha')
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });


  const formik = useFormik({
    initialValues: {
      // email: 'nome@dominio.com',
      email: 'nome@dominio.com',
      // password: '',
      password: '123456',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      handleSignIn(values)

    },
  });

  function showToastTest()
  {
    toast("Teste de toast")
  }
    
  
    
  return (
    
      <div className={LoginStyles.backContainer}>  

        <div className={LoginStyles.backPanel}>          
      
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

            />
            <Button color="primary" variant="contained" disableElevation fullWidth type="submit">
              Submit
            </Button>
         
          </form>
          
          <Button color="primary" variant="contained" disableElevation fullWidth onClick={showToastTest}>
              Show Toast!
          </Button>   
 
        </div>

        <ToastContainer />

      </div>

  );
} 

export default LoginView;




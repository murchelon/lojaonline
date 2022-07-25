import React from 'react'
import { NextPage } from 'next'
import LoginStyles from './Login.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginView: NextPage = () =>  {

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
        email: 'nome@dominio.com',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    
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
           
        </div>

      </div>

    );
} 

export default LoginView;




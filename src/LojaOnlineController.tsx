import React from 'react'
import { useContext } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import LojaOnlineView from './LojaOnlineView.tsx'
import { AuthContext } from './Contexts/AuthContext.tsx'

const LojaOnlineController: NextPage = () => {

    const { isAuth, user } = useContext(AuthContext)

    console.log('LojOnlineController: isAuth: ' + isAuth)

    return (
        
        <LojaOnlineView 
            isAuth={isAuth}  
            user={user}              
        />  
     
    );
} 

export default LojaOnlineController;
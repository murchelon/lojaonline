import React from 'react'
import { useContext } from 'react'
import { NextPage } from 'next'
import LojaOnlineView from './LojaOnlineView'
import { AuthContext } from './Contexts/AuthContext'
import { SessaoContext } from './Contexts/SessaoContext'

const LojaOnlineController: NextPage = () => {

    const { isAuth, user } = useContext(AuthContext)
    const { sessao } = useContext(SessaoContext)


    // console.log('LojOnlineController: isAuth: ' + isAuth)

    return (
        
        <LojaOnlineView 
            isAuth={isAuth}  
            user={user}
            sessao={sessao}
        />  
     
    );
} 

export default LojaOnlineController;
import React from 'react'
import { NextPage } from 'next'
import LojaOnlineView from './LojaOnlineView.tsx'
import { useRouter } from 'next/router'

import { AuthProvider } from './Contexts/AuthContext.tsx'

const LojaOnlineController: NextPage = () => {
    return (
        <AuthProvider>
            <LojaOnlineView />  
        </AuthProvider>
    );
} 

export default LojaOnlineController;
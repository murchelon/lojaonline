import React from 'react'
import { NextPage } from 'next'
import LojaOnlineView from './LojaOnlineView.tsx'
import { useRouter } from 'next/router'

import { AuthProvider } from './Contexts/AuthContext.tsx'
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

const LojaOnlineController: NextPage = () => {
    return (
        <AuthProvider>
            <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
                <LojaOnlineView />        
            </SnackbarProvider>
        </AuthProvider>
    );
} 

export default LojaOnlineController;
import { createContext, useState } from 'react';
import { tpSessaoContext } from './SessaoContextTypes'

export const SessaoContext = createContext({} as tpSessaoContext)

export function SessaoProvider({ children }) {

    const [sessao, setSessao] = useState<string>('INIT');

    function defineSessao(sessao: string)
    {
        setSessao(sessao)
    }

    return (
        <SessaoContext.Provider value={{ sessao, defineSessao }}>
            {children}
        </SessaoContext.Provider>        
    );
}
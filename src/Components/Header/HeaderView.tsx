import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';
import HeaderStyles from './Header.module.css'


const HeaderView = (props: any) =>  {

    const isAuth: boolean = props.isAuth
    const handleLogoff = props.handleLogoff
    const handleMenuClick = props.handleMenuClick

    // console.log('HeaderView: isAuth = ' + isAuth)

    return (
      <>
        <nav className={HeaderStyles.sticky}>
          <div className={HeaderStyles.headerContainer}>
            <div className={HeaderStyles.logoContainer}>
              <div>
                <Image src="/LogoIcon.png" alt="Logotipo LojaOnline" width={50} height={50} />
              </div>
              <div className={HeaderStyles.logoTitle}>LojaOnline 1.0</div>
            </div>
            
            <div className={HeaderStyles.menuItensContainer}>
            
              <div className={HeaderStyles.menuItens}>

                {isAuth && (
                    <>
                      <div className={HeaderStyles.menuSingleItem} onClick={() => {handleMenuClick('LOJA')}}>Produtos</div>
                      <div className={HeaderStyles.menuSingleItem} onClick={() => {handleMenuClick('FAV')}}>Favoritos</div>
                      <div className={HeaderStyles.menuSingleItem} onClick={() => {handleMenuClick('NEWUSER')}}>Novo Usuario</div>        
                    </>
                )}

              </div>
            </div>
            <div className={HeaderStyles.headerLoginContainer}>
              <div className={HeaderStyles.headerLoginGreetingMsg}>
                {isAuth && props.name.toUpperCase()}
              </div>
              <div>

                {isAuth && <Button size="small" disableElevation={true} onClick={handleLogoff}>Logoff</Button>}
                
              </div>
            </div>
          </div>

          {/* <h1>Scroll Margin</h1>
          <ul class={HeaderStyles.listInline}>
            <li><a href="#a">Section A</a></li>
            <li><a href="#b">Section B</a></li>
            <li><a href="#c">Section C</a></li>
            <li><a href="#d">Section D</a></li>
          </ul> */}

        </nav>
      </>

    );
} 

export default HeaderView;
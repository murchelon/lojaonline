
export type tpUser = {
    token: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
}
  
export type tpSignInData = {
    email: string;
    password: string;
}
  
export type tpAuthContext = {
    isAuth: boolean;
    user: tpUser;
    signIn: (data: tpSignInData) => Promise<boolean>;
    logoff: () => Promise<void>;
    isTokenAlive: (token: string) => Promise<boolean>;
}
  

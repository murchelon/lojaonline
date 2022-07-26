
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
    isAuthenticated: boolean;
    user: tpUser;
    signIn: (data: tpSignInData) => Promise<void>
}
  

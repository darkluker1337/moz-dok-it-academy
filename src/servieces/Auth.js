import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { cloudServiece} from './Cloud'

export class AuthServiece{
    constructor(){
    this.auth = getAuth(cloudServiece.app)
    this._user = null
}
    
    set user(user){
        this._user = user
    }
    
    get user(){
        return this._user
    }
    
    init(){
        return new Promise((resolve, reject)=>{
        onAuthStateChanged(this.auth , (user)=>{
            resolve(user)
        },
            (error)=>{
            reject(error)
        })
        })
    
    }
    
    signUp(email,password){
    return createUserWithEmailAndPassword(this.auth, email, password)
    }
    
    signOut(){
    return signOut(this.auth)
    }
    
    signIn(email,password){
    return signInWithEmailAndPassword(this.auth, email, password)
    }
}
export const authServiece = new AuthServiece()
import {initializeApp} from'firebase/app'

export class CloudServiece{
    constructor(){
        this.config = {
            apiKey: process.env.API_KEY,
            authDomain: "mozyr-doc-7f41a.firebaseapp.com",
            projectId: "mozyr-doc-7f41a",
            storageBucket: "mozyr-doc-7f41a.appspot.com",
            messagingSenderId: "838241184940",
            appId: process.env.APP_ID,
        }
        this.app = initializeApp(this.config)
    }
}

export const cloudServiece = new CloudServiece
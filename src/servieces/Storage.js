import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { cloudServiece } from './Cloud'

class Storage {
    constructor(){
        this.storage = getStorage(cloudServiece.app)
    }

    upLoadPoster(file){
        const porstRef = ref(this.storage, `/posters/${file.name}`)
        return uploadBytes(porstRef, file)
    }

    upLoadNewsPoster(file){
        const porstRef = ref(this.storage, `/news/${file.name}`)
        return uploadBytes(porstRef, file)
    }


    getDownloadURL(ref) {
        return getDownloadURL(ref);
    }
}

export const storageService = new Storage();

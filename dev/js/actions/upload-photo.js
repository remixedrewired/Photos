import {  
    UPLOAD_PHOTO
} from '../constants/Photo'

export const uploadPhoto = (e) => {
    console.log(e.target.value);
    return {
        type: UPLOAD_PHOTO,
        payload:  e.target.value
    }
};



import {  
    DELETE_PHOTO
} from '../constants/Photo'

export const deletePhoto = (photo) => {
    return {
        type: DELETE_PHOTO,
        payload: photo
    }
};


import {  
    PHOTO_SELECTED
} from '../constants/Photo'

export const selectPhoto = (photo) => {
    return {
        type: PHOTO_SELECTED,
        payload: photo
    }
};



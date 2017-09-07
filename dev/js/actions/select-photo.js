import {  
    PHOTO_SELECTED
} from '../constants/Photo'

export const selectPhoto = (photo) => {
    console.log('You clicked on photo:', photo.id);
    return {
        type: PHOTO_SELECTED,
        payload: photo
    }
};



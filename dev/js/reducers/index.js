import {combineReducers} from 'redux';
import PhotosReduces from './reducer-photos';
import ActivePhotoReducer from './reducer-selected-photo';
import UploadNewPhoto from './reducer-new-photos';


const allReducers = combineReducers({
    photos: PhotosReduces,
    active: ActivePhotoReducer,
    uploadedPhoto: UploadNewPhoto,
   
});

export default allReducers;





import {combineReducers} from 'redux';
import PhotosReduces from './reducer-photos';
import ActivePhotoReducer from './reducer-selected-photo';



const allReducers = combineReducers({
    photos: PhotosReduces,
    active: ActivePhotoReducer,
});

export default allReducers;





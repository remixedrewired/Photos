import {  
    PHOTO_SELECTED,
    DELETE_PHOTO
} from '../constants/Photo'


export default function(state=null, action) {
    switch(action.type) {
        case PHOTO_SELECTED:
            return action.payload;
        break;  
        
    }    
    return state;
}


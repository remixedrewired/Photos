import {  
    UPLOAD_PHOTO
} from '../constants/Photo'

/*var initialState = {
    id: '',
    photo: ''
}*/
export default function(state=null, action) {
    switch(action.type) {
        case UPLOAD_PHOTO:
            return  {
                id: Math.ceil(Math.random()*10000),
                photo: action.payload
            };
        break;
    
    }    
    
    return state;   
}
    


import {  
    UPLOAD_PHOTO,
    DELETE_PHOTO
} from '../constants/Photo'

var initialState = [
    {
        id: 1,
        photo: 'https://www.yana.kiev.ua/img/countries/big/159/430744261.jpg'
    },
    {
        id: 2,
        photo: 'http://www.sunin.com.ua/useruploads/states_images/97243582067bb730e27dcab7aa5db676_a718b.jpg'
    },
    {
        id: 3,
        photo: 'https://images.jazztour.ru/images/geo/element/k3vl8a87xg.jpg'
    }
    
]
export default function(state=initialState, action) {
    var newId = state[state.length-1].id;
    switch(action.type) {
        case UPLOAD_PHOTO:
            return  [ ...state,
                 { id : ++newId,  photo : action.payload}
            ]; 
        break;
        
        default: 
            return state;
    }  
   return state;   
}
    

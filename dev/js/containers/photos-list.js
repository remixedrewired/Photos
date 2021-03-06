import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPhoto} from '../actions/select-photo';


class PhotosList extends Component {


    createListItems(){
       
            return this.props.photos.map((photo) => {
                
                return (
                    <img className = "photo_set" 
                        src={photo.photo}
                        key={photo.id} 
                        onClick={()=> this.props.selectPhoto(photo)}
                        width = '100'
                        height = '100'
                    >  
                    </img>
                );
            });
     }

    

    render() {     

        return (
          <div>
              {this.createListItems()}
          </div>  

        );
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({ selectPhoto: selectPhoto}, dispatch)
}
function mapStateToProps(state){
    return {
        photos: state.photos,                
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(PhotosList);
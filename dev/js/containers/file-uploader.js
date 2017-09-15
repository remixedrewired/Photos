import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {uploadPhoto} from '../actions/upload-photo';
import {deletePhoto} from '../actions/delete-photo';

class FileUploader extends Component {
    uploadPhoto(){
         return(
            <div>
                <input type="file" 
                       id="fileElem" 
                       onChange={event => this.props.uploadPhoto(event)}/>           
            </div>
        );
    }

    deletePhoto(){
        return(
            <div>
                <button>Delete</button>
            </div>    
        )
    }

   
  
    render(){
    
         return (
            <div>
              {this.uploadPhoto()}
              {this.deletePhoto()}
            </div>
            )
        }
}   


function mapStateToProps(state){
    return {
        photos: state.photos,
     };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({ 
        uploadPhoto: uploadPhoto, 
        deletePhoto: deletePhoto    
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FileUploader);

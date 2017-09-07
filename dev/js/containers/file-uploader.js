import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {uploadPhoto} from '../actions/upload-photo';

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

   
  
    render(){
        
       return (
            <div>
                {this.uploadPhoto()}
               
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        photos: state.photos,
        uploadedPhoto: state.uploadedPhoto
        
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({ 
        uploadPhoto: uploadPhoto,
           
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FileUploader);

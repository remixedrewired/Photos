import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class PhotoDetail extends Component {
    render() {
        if(!this.props.active_photo) {
            return (
                <h4>
                    Select photo  
                </h4>    
            );
        }
        return (
            <div>
                <img src={this.props.active_photo.photo} width='250' height='250' />       
            </div>

        );
    }
}

function mapStateToProps(state){
    return {
        active_photo: state.active
    };
}

export default connect(mapStateToProps)(PhotoDetail);

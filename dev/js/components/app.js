import React from 'react';
import PhotosList from '../containers/photos-list';
import PhotoDetail from '../containers/photo-detail';
import AddNewPhotos from '../containers/file-uploader';

require('../../scss/style.scss');


const App = () => (
    <div>
        <h2>Photos List: </h2>
        <PhotosList />
        <hr/>
        <AddNewPhotos />
        <hr/>
        <h2>Selected Photo: </h2>
        <PhotoDetail />
    </div>
);

export default App;
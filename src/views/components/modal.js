import React from 'react'

var Modal = props => {
    return (
        <div className="map-modal-wrap">
            <div className="map-modal-wrap-overlay" />
            <div className="map-modal-item">
                <div className="map-modal-container fl-wrap">
                    <div className="map-modal fl-wrap">
                        <div id="singleMap" data-latitude="40.7" data-longitude="-73.1" />
                    </div>
                    <h3>
                        <i className="fal fa-location-arrow" />
                        <a href="#">Hotel Title</a>
                    </h3>
                    <input
                        id="pac-input"
                        className="controls fl-wrap controls-mapwn"
                        type="text"
                        placeholder="What Nearby ?   Bar , Gym , Restaurant "
                    />
                    <div className="map-modal-close">
                        <i className="fal fa-times" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal

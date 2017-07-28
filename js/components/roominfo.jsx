import React from 'react';


class RoomInfo extends React.Component {
    
    render() {
        const display = (this.props.displayRoomInfo === true) ? {display: "block"} : {display: "none"};
        
        return (
                <div style={display} id='top'>
                    <div className="img-gallery">
                        <div className="choose-room__main-picture">
                            <img src="images/room/room-pic-1-1400-700.jpg" alt="Room picture" width="700" height="350" />
                        </div>
                        <div className="img-thumbnails">
                            <div className="thumbnail">
                                <a href="#">
                                    <img src="images/room/room-pic-1-1400-700.jpg" width="700" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail">
                                <a href="#">
                                    <img src="images/room/room-pic-2-1400-700.jpg" width="700" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail">
                                <a href="#">
                                    <img src="images/room/room-pic-3-1400-700.jpg" width="700" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail">
                                <a href="#">
                                    <img src="images/room/room-pic-4-1400-700.jpg" width="700" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail">
                                <a href="#">
                                    <img src="images/room/room-pic-5-1400-700.jpg" width="700" height="350" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <h1 className="section-title">Apartament {this.props.selectedRoom}</h1>
                    <p>
                        {this.props.roomDescription}
                    </p>
                </div>
            
        );
    }
};

export default RoomInfo;
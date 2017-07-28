import React from 'react';


class RoomInfo extends React.Component {
    
    render() {
        const display = (this.props.displayRoomInfo === true) ? {display: "block"} : {display: "none"};
        
        return (
                <div style={display}>
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
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>
            
        );
    }
};

export default RoomInfo;
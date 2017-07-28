import React from 'react';

class Room extends React.Component {
    
    chooseRoom = roomName => {
        if (typeof this.props.chooseRoom === 'function') {
            this.props.chooseRoom(roomName);
        }
    }
    render() {
        const classes = (this.props.room === this.props.selectedRoom) ? "room selected-room" : "room";
        
        return (
                <div>
                    <div className={classes}>
                        <div className="room-title">Apartament {this.props.room}</div>
                        <div className="room-price"><span>{this.props.price}</span>PLN/noc</div>
                        <button href="#" className="default-button" onClick={e => this.chooseRoom(this.props.room)}>Wybierz</button>
                    </div>
                    
                </div>
            
        );
    }
};

export default Room;
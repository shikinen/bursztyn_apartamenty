import React from 'react';
import SectionTemplate from './sectiontemplate.jsx'
import Room from './room.jsx';
import RoomInfo from './roominfo.jsx';


class ChooseRoom extends React.Component {


    render() { 
        return (
            <SectionTemplate styleclass="smaller-container section-choose-room" title="1. Wybierz pokój" text="Wybierz apartament z dostępnych poniżej w podanym terminie wyjazdu.">
                <div className="rooms">
                   <Room room="Plażowy" price="200" selectedRoom={this.props.selectedRoom} chooseRoom={this.props.chooseRoom} />

                   <Room room="Morski" price="250" selectedRoom={this.props.selectedRoom} chooseRoom={this.props.chooseRoom}/>

                   <Room room="Bursztynowy" price="179" selectedRoom={this.props.selectedRoom} chooseRoom={this.props.chooseRoom}/>
                </div>
                <RoomInfo displayRoomInfo={this.props.displayRoomInfo} selectedRoom={this.props.selectedRoom}/>
            </SectionTemplate>
        );
    }
};

export default ChooseRoom;
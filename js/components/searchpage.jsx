import React from 'react';
import MainForm from './mainform.jsx';
import ChosenDate from './chosendate.jsx';
import ChooseRoom from './chooseroom.jsx';
import PersonalData from './personaldata.jsx';


class SearchPage extends React.Component {
    render() {
            return (
                <div className="container">
                   <ChosenDate
                        onSubmitDate={this.props.onSubmitDate}
                        checkinDate={this.props.checkinDate}
                        checkoutDate={this.props.checkoutDate}
                        numberOfGuests={this.props.numberOfGuests}
                        handleBookingChange={this.props.handleBookingChange}
                        />

                   <ChooseRoom selectedRoom={this.props.selectedRoom} chooseRoom={this.props.chooseRoom}/>

                   <PersonalData name={this.props.name} email={this.props.email} handleBookingChange={this.props.handleBookingChange} />

                   <button href="#" className="default-button">Rezerwuj</button>
                </div>
            );
    }
};

export default SearchPage;
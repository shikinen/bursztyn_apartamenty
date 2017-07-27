import React from 'react';
import Header from './header.jsx';
import Hero from './hero.jsx';
import SearchPage from './searchpage.jsx';


class Amber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            checkinDate: "",
            checkoutDate: "",
            numberOfGuests: "2",
            selectedRoom: "",
            name: "",
            email: "",
        };
    }
    
    chooseRoom = roomName => {
        this.setState({
            selectedRoom: roomName,
        });
    }
    
    onSubmitDate = () => { 
        this.setState({
            display: true,
        });
    };

    handleBookingChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    };

    render() {
        if (this.state.display === false) {
            return (
                <div>
                    <Header />
                    <Hero
                        onSubmitDate={this.onSubmitDate}
                        checkinDate={this.state.checkinDate}
                        checkoutDate={this.state.checkoutDate}
                        numberOfGuests={this.state.numberOfGuests}
                        handleBookingChange={this.handleBookingChange}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <Header />
                    <SearchPage onSubmitDate={this.onSubmitDate}
                        checkinDate={this.state.checkinDate}
                        checkoutDate={this.state.checkoutDate}
                        numberOfGuests={this.state.numberOfGuests}
                        handleBookingChange={this.handleBookingChange}
                        selectedRoom={this.state.selectedRoom}
                        chooseRoom={this.chooseRoom}
                        name={this.state.name}
                        email={this.state.email}/>
                </div>
            );
        }
    }
};

export default Amber;
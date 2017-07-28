import React from 'react';
import Header from './header.jsx';
import Hero from './hero.jsx';
import SearchPage from './searchpage.jsx';


class Amber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayView: false,
            displayRoomInfo: false,
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
            displayRoomInfo: true,
        });
    }
    
    onSubmitDate = () => { 
        this.setState({
            displayView: true,
        });
    };

    handleBookingChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    };

    componentDidUpdate() {
        const elementTop = document.getElementById('top');
        const topPosition = elementTop.getBoundingClientRect().top + document.documentElement.scrollTop;
        console.log(topPosition);
        
        if (this.state.displayRoomInfo) {
            location.href = "#top";
        }
    }

    render() {
        if (this.state.displayView === false) {
            return (
                <div className="reveal">
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
                        email={this.state.email}
                        displayRoomInfo={this.state.displayRoomInfo}
                         />
                </div>
            );
        }
    }
};

export default Amber;
import React from 'react';
import MainForm from './mainform.jsx';

class Hero extends React.Component {
    render() { 
        return (
        <section className="hero-section">
            <div className="container">
                <MainForm
                    onSubmitDate={this.props.onSubmitDate}
                    checkinDate={this.props.checkinDate}
                    checkoutDate={this.props.checkoutDate}
                    numberOfGuests={this.props.numberOfGuests}
                    handleBookingChange={this.props.handleBookingChange}
                />
            </div>
        </section>
        );
    }
};

export default Hero;
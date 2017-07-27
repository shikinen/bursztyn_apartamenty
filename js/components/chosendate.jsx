import React from 'react';
import SectionTemplate from './sectiontemplate.jsx'
import MainForm from './mainform.jsx'

class ChosenDate extends React.Component {
    render() { 
        return (
            <SectionTemplate styleclass="main-search-section" title="Wybrana data">
                   <MainForm
                        onSubmitDate={this.props.onSubmitDate}
                        checkinDate={this.props.checkinDate}
                        checkoutDate={this.props.checkoutDate}
                        numberOfGuests={this.props.numberOfGuests}
                        handleBookingChange={this.props.handleBookingChange}
                    />
            </SectionTemplate>
        );
    }
};

export default ChosenDate;
import React from 'react';
import SectionTemplate from './sectiontemplate.jsx'


class PersonalData extends React.Component {
    
    handleBookingChange = (e, key) => {
        if (typeof this.props.handleBookingChange === 'function') {
            this.props.handleBookingChange(e, key);
        }
    };

    render() { 
        return (
            <SectionTemplate styleclass="smaller-container" title="2. Podaj dane kontaktowe" text="Wpisz poniżej swoje dane do kontaktu.">
                <form className="personal-data-form">
                    <div className="personal-data-inputs">
                    <input type="text" placeholder="Imię i nazwisko" value={this.props.name} onChange={e => this.handleBookingChange(e, 'name')} />
                    <input type="email" placeholder="Adres email" value={this.props.email} onChange={e => this.handleBookingChange(e, 'email')} />
                    </div>
                </form>
            </SectionTemplate>
        );
    }
};

export default PersonalData;
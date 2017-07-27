import React from 'react';

class MainForm extends React.Component {
    
    onSubmitDate = e => {
        e.preventDefault();
        if (typeof this.props.onSubmitDate === 'function') {
            this.props.onSubmitDate();
        }
    };
    
    handleBookingChange = (e, key) => {
        if (typeof this.props.handleBookingChange === 'function') {
            this.props.handleBookingChange(e, key);
        }
    };

    render() {
        return (
            <div className="main-form-container">
                <form className="main-form" onSubmit={this.onSubmitDate}>
                    <input type="date" value={this.props.checkinDate} onChange={e => this.handleBookingChange(e, 'checkinDate')} />
                    <input type="date" value={this.props.checkoutDate} onChange={e => this.handleBookingChange(e, 'checkoutDate')}/>
                    <select value={this.props.numberOfGuests} onChange={e => this.handleBookingChange(e, 'numberOfGuests')}>
                        <option value="1">1 Gość</option>
                        <option value="2">2 Gości</option>
                        <option value="3">3 Gości</option>
                        <option value="4">4 Gości</option>
                    </select>
                    <input type="submit" value="Szukaj" />
                </form>
            </div>
        );
    }
};

export default MainForm;
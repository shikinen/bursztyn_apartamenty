import React from 'react';

class SectionTemplate extends React.Component {
    render() {
        const classes = `section ${this.props.styleclass}`;
            return (
                <section className={classes}>
                    <h1 className="section-title">{this.props.title}</h1>
                    {this.props.text && <p className="section-text">{this.props.text}</p>}
                    {this.props.children}
                </section>
            );
    }
};

export default SectionTemplate;
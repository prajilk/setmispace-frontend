import React from 'react';

export default class ContactMap extends React.Component {
    render() {
        return (
            <>

                <section className="google-map">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15616.868821763004!2d75.3700404!3d11.8899583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d3e0b98e3ed%3A0xe97d9782d2748181!2sSoubhagya%20Complex!5e0!3m2!1sen!2sin!4v1708329080864!5m2!1sen!2sin"
                        className="google-map__one" allowfullscreen></iframe>
                </section>
            </>
        )
    }
}
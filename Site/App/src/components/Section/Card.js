import React, { Component } from 'react';
import Section from '../Section.js';
import '../../Styles/Card.css';
import LegoBrickBlack from '../../Images/LegoBrickBlack.png';

class Card extends Component {
    render() {
        return (
            <Section>
                <div id="Card">
                    <div>
                        <img src={LegoBrickBlack} alt="Lego Brick outline" />
                        <h1>Jason Dees</h1>
                        <div className="clear-both" />
                        <h3 id="PositionTitle">Software Developer</h3>
                        <h4 id="Tech">.NET &middot; Xamarin &middot; react</h4>
                    </div>
                    <div id="ContactInfo">
                        <span>jhdees@gmail.com</span>
                        <span>github.com/jhdees</span>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Card;

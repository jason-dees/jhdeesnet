import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import '../Styles/Jhdees.css';
import FacebookLogo from '../Images/facebook.png';
import Card from './Section/Card.js';
import Image from './Section/Image.js';
import Recipes from './Section/Recipe.js';
import {goToIndex, Pages} from '../Actions/siteactions.js'
import _ from 'underscore';
import '../bootstrap/css/bootstrap.min.css';

class Jhdees extends Component {
    static propTypes = {
        activePage: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { activePage, dispatch } = this.props;

        let sections = [<Card />,  <Image />, <Recipes />];

        return (
            <div className="Jhdees">
                <JhdeesMenu dispatch={dispatch} activePage={activePage} menuItems={Pages} />
                {sections[_.indexOf(Pages,activePage)]}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { activePage } = state.nav;

    return { activePage };
};

class JhdeesMenu extends Component{
    static propTypes = {
        activePage: PropTypes.string,
        menuItems: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    goTo(index){
        const {dispatch} = this.props;
        dispatch(goToIndex(index));
    }

    render() {
        const { menuItems, activePage} = this.props;
        return (
            <div>
                <div id="Header">
                    <div>
                        <a href="/">A Small Pile of Legos</a>
                    </div>
                </div>
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        {menuItems.map((item, index) =>
                           <li key={item} className={activePage === item ? "active": ""}>
                               <a onClick={this.goTo.bind(this, item)} href={"#" + item}>{item}</a>
                           </li>)
                        }
                        <li>
                            <a href="https://stuffonharold.azurewebsites.net">Stuff On Harold</a>
                        </li>
                        <li>
                            <a href="https://github.com/jason-dees/">GitHub</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav pull-right hide">
                        <li>
                            <img width="32" src={FacebookLogo} alt="Facebook Icon" />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Jhdees);

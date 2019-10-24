import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Navbar extends Component {

    static defaultProps = {
        title : 'Github Finder',
        icon : 'fab fa-github'
    };


    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };


    render() {
        return (
            <div className="navbar bg-primary">
               <h2><i className={this.props.icon}></i> {this.props.title}</h2>
            </div>
        );
    }
}

export default Navbar;
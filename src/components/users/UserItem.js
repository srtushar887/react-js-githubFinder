import React from 'react';
import PropTypes from 'prop-types';
const UserItem = ({user : {avatar_url,login,html_url}}) => {
        return (
            <div className="card text-center">
                <img src={avatar_url} className="round-img" alt="user Profile" style={{width : '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-sm btn-dark my-1">More</a>
                </div>
            </div>
        );
    };


UserItem.propTypes = {
  user : PropTypes.object.isRequired
};


export default UserItem;
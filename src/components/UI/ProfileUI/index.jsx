import React from 'react';
import { Link } from 'react-router-dom';

function ProfileUI() {
    return (
        <Link to='/orders'>
            <div className="header__UI__profile" style={{cursor: 'pointer'}}>
                <img src="/img/icons/profile.svg" alt="profile" />
            </div>
        </Link>
    );
}

export default ProfileUI;
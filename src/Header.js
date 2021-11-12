import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from "@material-ui/icons/Language"
import ExpandedMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className="header">

            <img
                className="header_icon"
                src="https://npr.brightspotcdn.com/dims4/default/ed2e48a/2147483647/strip/true/crop/329x329+0+0/resize/880x880!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwbfo%2Ffiles%2F201808%2Fairbnb-logo-png-logo-black-transparent-airbnb-329.png "
                alt="" />

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandedMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header

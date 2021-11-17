import React from 'react'
import './SearchResults.css'
import FavoriteButtonIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'


function SeacrhResults({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchResults">
            <img src={img} alt="" />
            <FavoriteButtonIcon className="searchResults_heart" />
            <div className="searchResults_info">
                <div className="searchResults_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResults_button">
                    <div className="searchResults_stars">
                        <StarIcon className="searchResults_star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                        <div className="searchResults_price">
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default SeacrhResults

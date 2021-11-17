import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from "./SeacrhResults"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p> 62 stays • 26 august to 30 august • 4 guest</p>
                <h1> Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexablilty
                </Button>
                <Button variant="outlined">Type of place
                </Button>
                <Button variant="outlined">Price
                </Button>
                <Button variant="outlined">Rooms and beds
                </Button>
                <Button variant="outlined">More filters
                </Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/450906f1-1777-4695-ba32-d9de8415b21f.jpg?im_w=320"
                location="Entire Castle in Bolton, New York"
                title="Retreat to a castle in the sky where majesty meets serenity"
                description="10• guests • 5 bedrooms • 6 beds • 4.5 baths
                "
                star={4.75}
                price="$1006 / night"
                total=" Total $4024 "

            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/76266ebb-01a2-454e-b7f9-7bee4b1477a9.jpg?im_w=320"
                location="Four Corners, Florida"
                title="A spa, a 2-level pool, and well-stocked arcade make family vacations into luxury experiences at this sleek Orlando estate."
                description="16• guests • 15 bedrooms • 17 beds • 13.5 baths
                "
                star={5}
                price="$4,250/ night"
                total="Total $17,000"

            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/db89fac3-5b7a-4886-8cd2-b1d2903b0a9c.jpg?im_w=720"
                location="Hilton Head Island, South Carolina"
                title="Lagoons lead into the forest and a path leads to the beach at this coastal-chic home on Hilton Head Island."
                description="12• guests • 5 bedrooms • 5 beds • 4.5 baths
                "
                star={5}
                price="$714/ night"
                total=" Total $2,856"

            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/c24a3656-7519-4d15-bdad-aa905d3bebc2.jpg?im_w=320"
                location="Rum Point, North Side, Cayman Islands"
                title="Retreat to a castle in the sky where majesty meets serenity"
                description="12• guests • 5 bedrooms • 5 beds • 4.5 baths
                "
                star={5}
                price="$1,400 / night"
                total=" Total $5,600 "

            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-51770572/original/fa8f65b5-ab41-4232-a074-7331ce2f5d93.jpeg?im_w=720"
                location="Miami, Floida"
                title="Hidden beneath a veil of lush foliage, this modern-contemporary oasis resides in the heart of Miami"
                description="14• guests • 6 bedrooms • 7 beds • 5.5 baths
                "
                star={5}
                price="$4818 / night"
                total=" Total $19,272 "

            />
        </div>
    )
}

export default SearchPage

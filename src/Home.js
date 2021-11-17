import React from 'react'
import "./Home.css"
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <h1> </h1>
            <Banner />

            <div className="home_section">
                <Card
                    src="https://a0.muscache.com/im/pictures/1a7925c9-5d8c-40dd-b474-267399aad074.jpg?im_w=720"
                    title="Outline Experiences"
                    description="Unique activities we can do together,led by a world of hosts" />
                <Card
                    src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-47114758/original/ddaf84b3-36da-4785-b2f2-119900115a67.jpeg?im_w=720"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep" />
                <Card
                    src="https://a0.muscache.com/im/pictures/ee7812fa-45dd-4ff6-9f5a-509c71286d5d.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family" />

            </div>

            <div className="home_section">
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-13549805/original/424920cd-5fed-4efd-9675-faedd39206bf.jpeg?im_w=720"
                    title="Castle in New York"
                    description="Retreat to a castle in the sky where majesty meets serenity… Highlands Castle!
                    "
                    price="$1,000/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-52121753/original/3edf148d-2d0d-4746-bdd0-61fbd171c56d.jpeg?im_w=720"
                    title="Chiswick Park Home, by Veeve"
                    description="A spacious 4 bedroom family home, with classic interiors, garden space, and access onto a tranquil private road. "
                    price="$100/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/debef745-d6db-4c28-a5ee-7ce4cd5f9456.jpg?im_w=720"
                    title="Entire loft in Columbia"
                    description="We have a new craft brewery just behind us in the recently remodeled Curtis Wright Airplane Hangar!"
                    price="$145/night"
                />

            </div>
        </div>
    )
}

export default Home

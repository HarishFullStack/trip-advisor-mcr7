import { useParams } from "react-router-dom";
import {data} from '../db/data';
import { useEffect, useState } from "react";

export function Details(){

    const {continentId, countryId, destinationId} = useParams();
    const [details, setDetails] = useState({});

    const getDetails = () => {
        const details = data.continents.find((x) => x.id === Number(continentId)).countries.find((y) => y.id === Number(countryId)).destinations.find((z) => z.id === Number(destinationId));
        setDetails(details);
    }

    useEffect(() => {
        getDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // description:
    //               "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in the Indian city of Agra.",
    //             image: "https://i.postimg.cc/Xq6RrjCL/tajMahal.jpg",
    //             ratings: 4.5,
    //             reviews: 250,
    //             location: "Agra, India",
    //             openingHours: "6:00 AM - 7:00 PM",
    //             ticketPrice: "$20",
    //             website: "https://example.com/taj_mahal",

    return(
        <div className="row">
            <h5>{details.name}</h5>
            <div className='col-md-4'>
                <img src={details.image} className="card-img-top" alt={details.name}/>
            </div>
            <div className="col-md-6 destination-details">
                <p><b>Description: </b>{details.description}</p>
                <p><b>Ratings: </b>{details.ratings}</p>
                <p><b>Reviews: </b>{details.reviews}</p>
                <p><b>Location: </b>{details.location}</p>
                <p><b>Opening Hours: </b>{details.openingHours}</p>
                <p><b>Ticket Price: </b>{details.ticketPrice}</p>
                <p><a href={details.website}>Website</a></p>
            </div>

        </div>
    )
}
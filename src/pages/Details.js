import { useParams } from "react-router-dom";
import {data} from '../db/data';

export function Details(){

    const {continentId, countryId, destinationId} = useParams();

    return(
        <div>
            <h5>{data.continents.find((x) => x.id === Number(continentId)).countries.find((y) => y.id === Number(countryId)).destinations.find((z) => z.id === Number(destinationId)).name}</h5>
            <div className='row'>
                {data.continents.find((x) => x.id === Number(continentId)).countries.find((y) => y.id === Number(countryId)).destinations.find((z) => z.id === Number(destinationId)).map((a) => {
                    return(
                        <div className="card" style={{width: "18rem"}}>
                            <img src={a.image} className="card-img-top" alt={a.name}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
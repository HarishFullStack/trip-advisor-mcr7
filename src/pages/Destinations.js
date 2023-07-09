import { useNavigate, useParams } from "react-router-dom";
import {data} from '../db/data';

export function Destination(){
    const {continentId, countryId} = useParams();
    const navigate = useNavigate();

    return(
        <div>
            <h5>Top Destinations in {data.continents.find((x) => x.id === Number(continentId)).countries.find((y) => y.id === Number(countryId)).name} for your next holiday</h5>
            <div className='d-flex'>
                {data.continents.find((x) => x.id === Number(continentId)).countries.find((y) => y.id === Number(countryId)).destinations.map((z) => {
                    return(
                        <div className='container'>
                            <div className="card" style={{width: "18rem"}} onClick={() => navigate(`/${Number(continentId)}/${Number(countryId)}/${z.id}`)}>
                                <img src={z.image} className="card-img-top" alt={z.name}/>
                            </div>
                            <div className='name'><i class="fa fa-map-marker" aria-hidden="true"></i> {z.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
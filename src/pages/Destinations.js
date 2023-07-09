import { useNavigate, useParams } from "react-router-dom";
import {data} from '../db/data';

export function Destination(){
    const {continentId, countryId} = useParams();
    const navigate = useNavigate();

    return(
        <div>
        {console.log(continentId)}
        {console.log(countryId)}

        {data.continents.find((x) => x.id === Number(continentId)).countries.find((y) => y.id === Number(countryId)).destinations.map((z) => {
            return(
                <div  key={z.id} onClick={() => navigate(`/${Number(continentId)}/${Number(countryId)}/${z.id}`)}>{z.name}</div>
            )
        })}
        </div>
    )
}
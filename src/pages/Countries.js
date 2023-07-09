import { useNavigate, useParams } from "react-router-dom";
import {data} from '../db/data';

export function Countries(){
    const {continentId} = useParams();
    const navigate = useNavigate();

    return(
        <div>
        {data.continents.find((x) => x.id === Number(continentId)).countries.map((y) => {
            return(
                <div key={y.id} onClick={() => navigate(`/${Number(continentId)}/${y.id}`)}>{y.name}</div>
            )
        })}
        </div>
    )
}
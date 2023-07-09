import { useNavigate } from 'react-router';
import {data} from '../db/data';

export function Continent(){

    const navigate = useNavigate();

    return(
        data.continents.map((x) => {
            return(
                <div key={x.id} onClick={() => navigate(`/${x.id}`)}>{x.name}</div>
            )
        })
    )
}
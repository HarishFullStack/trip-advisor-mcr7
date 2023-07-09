import { useNavigate, useParams } from "react-router-dom";
import {data} from '../db/data';

export function Countries(){
    const {continentId} = useParams();
    const navigate = useNavigate();

    return(
        <div>
            {/* {data.continents.find((x) => x.id === Number(continentId)).countries.map((y) => {
                return(
                    <div key={y.id} onClick={() => navigate(`/${Number(continentId)}/${y.id}`)}>{y.name}</div>
                )
            })} */}
            <h5>Top Countries in {data.continents.find((x) => x.id === Number(continentId)).name} for your next holiday</h5>
            <div className='row'>
                {data.continents.find((x) => x.id === Number(continentId)).countries.map((y) => {
                    return(
                        <div className="card" style={{width: "18rem"}} onClick={() => navigate(`/${Number(continentId)}/${y.id}`)}>
                            <img src={y.image} className="card-img-top" alt={y.name}/>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}
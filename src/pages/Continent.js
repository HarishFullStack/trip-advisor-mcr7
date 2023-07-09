import { useNavigate } from 'react-router';
import {data} from '../db/data';

export function Continent(){

    const navigate = useNavigate();

    return(
        
                <div className='continents'>
                    <h1>Welcome To Trip Advisor</h1>
                        <h5>Top Continents for your next holiday</h5>
                        <div className='d-flex'>
                            {data.continents.map((x) => {
                                return(
                                    <div className='container'>
                                        <div className="card" style={{width: "18rem"}} onClick={() => navigate(`/${x.id}`)}>
                                            <img src={x.image} className="card-img-top" alt={x.name}/>
                                        </div>
                                        <div className='name'><i class="fa fa-map-marker" aria-hidden="true"></i> {x.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            
    )
}
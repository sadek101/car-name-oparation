import { useEffect, useState } from "react";
import Card from "./Card";


const Service = () => {

const[service, setservice] = useState([]);

useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data =>setservice(data));
} ,[])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl text-orange-300">service</h3>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't 
                    look even slightly believable. </p>
            </div>
            <div>
                {
                    service.map(service => <Card key={service._id} service={service}></Card>)
                }
            </div>
        </div>
        
    );
};

export default Service;
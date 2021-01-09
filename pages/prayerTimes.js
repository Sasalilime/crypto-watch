import Link from "next/link";
import React, {useState, useEffect} from "react";
import * as result from "autoprefixer";
import useSWR from 'swr';


export default  function () {



    const [data, setData] = useState();
    const [city, setCity] = useState('paris');
    const [myCity, setMyCity] = useState('paris');
    const [day, setDay] = useState(9);

    useEffect(() => {
        fetch(`http://api.aladhan.com/v1/calendarByCity?city=${myCity}&country=France&method=12&day=8&month=1&year=2021`)
            .then(res => res.json())
            .then(result => {
                setData(result.data[day])
            })
        },[myCity])


    console.log(data);




    return (
        !city ? (<div>
            Veuillez entrer une ville
                <input type="text" onChange={event => setTimeout(setCity(event.target.value),3000) } name="city" id="city"
                     placeholder="ville"   value={city}/>
            <button onClick={setMyCity(city)}>Valider</button>
            </div>) :
        (<div>
            <div
                className="relative hover:shadow-md p-8 border-blue-300 rounded-3xl bg-blue-50 md:w-auto flex-1 mt-10 mx-10">
                <a className="rounded-md">
                    <h2 className="text-center text-2xl mb-6 uppercase tracking-wider">
                        <input type="text" name="city" id="city"
                               onChange={(event) => setCity(event.target.value)} value={city}/>
                        <button onClick={()=> setMyCity(city)}>Valider</button>
                        <br/>
                        {data?.date.readable}
                    </h2>
                    <h3 className="font-bold text-2xl mb-4">

                    </h3>
                    <p>Fajr : {data?.timings.Fajr.substring(0, 5)} </p>
                    <p>Shourouq - levé du soleil : {data?.timings.Sunrise.substring(0, 5)} </p>
                    <p>Dhuhr : {data?.timings.Dhuhr.substring(0, 5)}</p>
                    <p>Asr : {data?.timings.Asr.substring(0, 5)}</p>
                    <p>Maghreb : {data?.timings.Maghrib.substring(0, 5)}</p>
                    <p>Ishâ' : {data?.timings.Isha.substring(0, 5)}</p>
                    <p>Milieu de la nuit : {data?.timings.Midnight.substring(0, 5)}</p>


                </a>
            </div>
        </div>)
    )

};




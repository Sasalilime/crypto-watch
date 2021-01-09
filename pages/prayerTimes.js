import Link from "next/link";
import React, {useState, useEffect} from "react";
import * as res from "autoprefixer";
import * as result from "autoprefixer";
import useSWR from 'swr';


export default  function () {



    const [data, setData] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        fetch(`http://api.aladhan.com/v1/calendarByCity?city=lille&country=France&method=12&day=8&month=1&year=2021`)
            .then(res => res.json())
        },[]);




    console.log(res);
    console.log(city);
    return (
        <div>
            <div
                className="relative hover:shadow-md p-8 border-blue-300 rounded-3xl bg-blue-50 md:w-auto flex-1 mt-10 mx-10">
                <a className="rounded-md">
                    <h2 className="text-center text-2xl mb-6 uppercase tracking-wider">

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
        </div>
    )

};




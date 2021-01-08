import Link from "next/link";
import React, {useState} from "react";

let city='marseilles';


export default function ({res}) {


    console.log(res);
    console.log(city);
    return (
        <div>


            <div
                className="relative hover:shadow-md p-8 border-blue-300 rounded-3xl bg-blue-50 md:w-auto flex-1 mt-10 mx-10">
                <a className="rounded-md">
                    <h2 className="text-center text-2xl mb-6 uppercase tracking-wider">
                        <form className="mb-4">
                            <label htmlFor="text"> Horaires de prière pour {city} </label>
                            <br/>
                            <input type="city" name="city" id="city"
                                   onChange={(e) => city = (e.target.value)} value={city}/>
                        </form>
                        {res.date.readable}
                    </h2>
                    <h3 className="font-bold text-2xl mb-4">

                    </h3>
                    <p>Fajr : {res?.timings.Fajr.substring(0, 5)} </p>
                    <p>Shourouq - levé du soleil : {res?.timings.Sunrise.substring(0, 5)} </p>
                    <p>Dhuhr : {res?.timings.Dhuhr.substring(0, 5)}</p>
                    <p>Asr : {res?.timings.Asr.substring(0, 5)}</p>
                    <p>Maghreb : {res?.timings.Maghrib.substring(0, 5)}</p>
                    <p>Ishâ' : {res?.timings.Isha.substring(0, 5)}</p>
                    <p>Milieu de la nuit : {res?.timings.Midnight.substring(0, 5)}</p>


                </a>
            </div>
        </div>
    )

};


export async function getStaticProps() {
    try {
        const res = await fetch(`http://api.aladhan.com/v1/calendarByCity?city=${city}&country=France&method=12&day=8&month=1&year=2021`)

        const result = await res.json();

        return {
            props: {res: result.data[7]},
        };
    } catch (err) {
        console.error(err);
    }
}

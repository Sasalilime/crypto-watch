import Layout from "../components/Layout";
import Link from "next/link";


export default function Home({res}) {

    return (
        <Layout page={'Crypto Watch - Accueil'}>
            <ul className="flex justify-around py-10">
                {res.map((crypto, index) =>

                    <li key={index}
                        className="relative hover:shadow-md p-8 border-blue-300 rounded-3xl bg-blue-50 md:w-auto flex-1 mx-5">
                        <Link href={`/${crypto.id}`}>
                            <a className="rounded-md">
                                <div className="text-center">
                                    <img src={crypto.logo_url} alt={crypto.name} className="w-20 h-20 mx-auto mb-6"/>
                                </div>
                                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                                    {crypto.name}
                                </h2>
                                <h3 className="font-bold text-2xl mb-4">
                                    {parseFloat(crypto.price).toFixed(2)} €
                                </h3>
                                <p>
                                    1 jour : <span
                                    className="font-bold">{parseFloat(crypto['1d'].price_change_pct * 100).toFixed(2) + "%"}</span>
                                    <span>{crypto['1d'].price_change_pct < 0 ?
                                        (<span className="text-red-500">&#x2798;</span>)
                                        :
                                        (<span className="text-green-500">&#x279A;</span>)
                                    }</span>
                                </p>
                                <p>
                                    30 jours : <span
                                    className="font-bold">{parseFloat(crypto['30d'].price_change_pct * 100).toFixed(2) + "%"}</span>
                                    <span>{crypto['30d'].price_change_pct < 0 ?
                                        (<span className="text-red-500">&#x2798;</span>)
                                        :
                                        (<span className="text-green-500">&#x279A;</span>)
                                    }</span>
                                </p>
                                <p>
                                    365 jours : <span
                                    className="font-bold">{parseFloat(crypto['365d'].price_change_pct * 100).toFixed(2) + "%"}</span>
                                    <span>{crypto['365d'].price_change_pct < 0 ?
                                        (<span className="text-red-500">&#x2798;</span>)
                                        :
                                        (<span className="text-green-500">&#x279A;</span>)
                                    }</span>
                                </p>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </Layout>
    );
}

//server side rendering
export async function getStaticProps() {
    try {
        const res = await fetch('https://api.nomics.com/v1/currencies/ticker?key=bf98d6b1cc552f8bbe69c2204f9a3652&ids=BTC,ETH,XLM&interval=1d,30d,365d&convert=EUR')
            .then((res) => res.json());
        return {
            props: {res}

        }
    } catch (err) {
        console.err(err);
    }
}

import Layout from "../components/Layout";



export default function Currency({res}) {


    return (
        <Layout page={res.name}>
            <div
                className="relative hover:shadow md p-8 border border-blue-200 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
                <div className="text-center">
                    <img src={res.logo_url} alt={res.name} className="w-20 h-20 mx-auto mb-6"/>
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
                <p>{res.description}</p>
                <p className="pt-5 text-blue-500 ">
                    <a href={res.reddit_url} target="_blank">
                    <img src="/reddit.svg" alt="reddit" className="w-20 h-20 mt-4 mx-auto"/>
                    </a>
                </p>
            </div>
        </Layout>
    )
};


export async function getServerSideProps({query}) {

    try {
        const res = await fetch(`https://api.nomics.com/v1/currencies?key=bf98d6b1cc552f8bbe69c2204f9a3652&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`);

        const result = await res.json();

        return {
            props: {res: result[0]},
        };
    } catch (err) {
        console.error(err);
    }
}
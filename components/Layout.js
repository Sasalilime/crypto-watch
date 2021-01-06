import Head from "next/head";
import Link from "next/link";


export default function Layout({children, page}){
    return (
        <div className="bg-blue pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
            {children}
            <header className="container-lg">
                <h1 className="text-5xl mb-2"> Crypto Watch</h1>
                    <div className="inline-grid grid-cols-2 gap-x-10 p-4">
<Link href="/">
    <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
        Accueil
    </button>
</Link>
                    </div>
            </header>
        </div>
    )
}
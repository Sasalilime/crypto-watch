import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


export default function Layout({children, page}) {
    return (
        <div className="bg-blue pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
            <header className="container-lg">
                <h1 className="text-5xl mb-2"> Crypto Watch</h1>
                <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                    <Link href="/">
                        <button className="bg-blue-100 p-3 m-2 rounded-3xl hover:shadow-md ">
                            Accueil
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="bg-blue-100 p-3 m-2 rounded-3xl hover:shadow-md ">
                            A propos
                        </button>
                    </Link>
                </div>
                <div>
                    <Image src="/crypto.jpg" alt="footer-pic" width="400" height="25"
                           className="rounded-3xl object-cover"/>
                </div>
            </header>
            <main className="pt-4 mx-20">{children}</main>
            <footer className="p-10">
                <Image src="/crypto.jpg" alt="footer-pic" width="1000" height="30"
                       className="rounded-3xl object-cover"/>
                <ul className="pt-10 pb-4 flex justify-around">
                    <li>A propos</li>
                    <li>Qui sommes-nous</li>
                    <li>Suits Conception - 2020</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iste laboriosam quaerat ratione!
                    Consequuntur cum doloribus ducimus error esse et facilis fugiat hic illo impedit ipsam laborum
                    laudantium, modi, nisi nulla optio porro quae quasi repudiandae sint suscipit velit voluptas.</p>
            </footer>
        </div>
    )
}
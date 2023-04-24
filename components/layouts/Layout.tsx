import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"
import { useRouter } from "next/router"

interface LayoutProps {
    titulo?: string
}

const origin = (typeof window === 'undefined' )? '' : window.location.origin

export const Layout: FC<LayoutProps> = ({ children, titulo }) => {

   

    return (
        <>
            <Head>
                <title>{titulo || 'PokeNext'}</title>
                <meta name="author" content="Simao Pedro" />
                <meta name="description" content={`Informaçães sobre os pokemons ${titulo}`} />
            <meta name="keywords" content= {`${titulo}, Pokemon, pokedex`} />

                <meta property="og:title" content={`Informaçães sobre os pokemons ${titulo}`} />
                <meta property="og:description" content={`Essa é a pagina sobre ${titulo}`}/>
                <meta property="og:image" content={`${origin}/img/banner.png`}  />
            </Head>

            {<Navbar />}

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )

}
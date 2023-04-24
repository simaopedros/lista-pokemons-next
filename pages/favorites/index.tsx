import { Layout } from "@/components/layouts";
import { NoFavorites, TemFavoritos } from "@/components/ui";
import localFavorites from "@/utils/localFavorites";
import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";




export default function Favorites() {


    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons)
    }, [])


    return (
        <Layout titulo="Favoritos" >
            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                        <TemFavoritos favoritesPokemons={favoritesPokemons} />
                    )

            }

        </Layout>
    )
}
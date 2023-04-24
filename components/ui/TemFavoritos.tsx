import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoritosCardPokemon } from "./FavoritosCardPokemon"


interface  Props {
    favoritesPokemons: number[]
}


export const TemFavoritos: FC<Props> = ({favoritesPokemons}) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start" >
        {
            favoritesPokemons.map(id => (
                <><FavoritosCardPokemon id={id} /></>
            ))
}
    </Grid.Container>
    )
}
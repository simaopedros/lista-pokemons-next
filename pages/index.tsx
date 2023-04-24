import { PokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { PokemonCard } from '@/components/pokemon';
import { PokemonListReponse, SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import {NextPage ,GetStaticProps } from 'next';


interface Props {
  pokemons: SmallPokemon[]
}

const HomePage:NextPage<Props> =( {pokemons} )=> { 

  return (
  <Layout titulo='Lista de pokemons'>
    <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))
      }
    </Grid.Container>
  </Layout>
)
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg


export const getStaticProps:GetStaticProps = async (ctx) => {
  
  const {data} = await PokeApi.get<PokemonListReponse>('pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
})  )



  return {
    props:{
      pokemons
    }
  }
}


export default  HomePage
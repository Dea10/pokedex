import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    next: '',
    previous: ''
  },
  reducers: {
    updatePokemonList: (state, action) => {
      state.pokemons = action.payload
    },
    updateNext: (state, action) => {
      state.next = action.payload
    },
    updatePrev: (state, action) => {
      state.previous = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updatePokemonList, updateNext, updatePrev } = pokemonSlice.actions

// export default pokemonSlice.reducer
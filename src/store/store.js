import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from '../reducers/pokemonSlice'

export default configureStore({
  reducer: pokemonSlice.reducer,
})
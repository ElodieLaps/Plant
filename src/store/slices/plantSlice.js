import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const initialState = {
  loading: false,
  hasErrors: false,
  plants: {},
};

const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    getPlants: state => {
      state.loading = true;
    },
    getPlantsSuccess: (state, { payload }) => {
      state.plants = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPlantsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPlants, getPlantsSuccess, getPlantsFailure } = plantSlice.actions

export const plantsSelector = state => state.plant;

export default plantSlice.reducer;

export function fetchPlants() {
  return async dispatch => {
    dispatch(getPlants());

    await axios.get('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=E_3Wy2VspiI0ykCPxVnll0ha1x5XEBGbSavaOgaCwOI')
      .then(function (response) {
        const data =  response.data;
        dispatch(getPlantsSuccess(data));
      })
      .catch(function (error) {
        console.log(error)
        dispatch(getPlantsFailure());
      })
  }
}




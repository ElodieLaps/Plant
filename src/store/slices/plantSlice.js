import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const token = 'E_3Wy2VspiI0ykCPxVnll0ha1x5XEBGbSavaOgaCwOI';

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

export function fetchPlants(page) {
  return async dispatch => {
    dispatch(getPlants());

    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=${token}&page=${page}`
      )
        .then(response => {
          const data =  response.data;
          dispatch(getPlantsSuccess(data));
        })
      .catch(error => {
        console.log(error)
        dispatch(getPlantsFailure());
      })
  }
}




import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  plants: [],
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

    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=E_3Wy2VspiI0ykCPxVnll0ha1x5XEBGbSavaOgaCwOI');
      const data = await response.json();
      dispatch(getPlantsSuccess(data));

    } catch (error) {
      dispatch(getPlantsFailure());
    }
  }
}
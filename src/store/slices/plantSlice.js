import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const token = 'E_3Wy2VspiI0ykCPxVnll0ha1x5XEBGbSavaOgaCwOI';

export const initialState = {
  loading: false,
  hasErrors: false,
  plants: {},
  scrollPages: [],
  pageNumber: 0
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
    addPages: state => {
      state.scrollPages = [...state.scrollPages, state.plants];
    },
    incrementPageNumber: state => {
      state.pageNumber = state.pageNumber + 1;
    }
  },
});

export const { getPlants, getPlantsSuccess, getPlantsFailure, addPages, incrementPageNumber } = plantSlice.actions

export const plantsSelector = state => state.plant;

export default plantSlice.reducer;

export function fetchPlants(pageNumber) {
  return async dispatch => {
    dispatch(getPlants());

    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=${token}&page=${pageNumber}`
      )
        .then(response => {
          const data =  response.data;
          dispatch(getPlantsSuccess(data));
          dispatch(addPages(data));
          dispatch(incrementPageNumber());
        })
      .catch(error => {
        console.log(error)
        dispatch(getPlantsFailure());
      })
  }
}




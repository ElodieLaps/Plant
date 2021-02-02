import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants, plantsSelector } from './../../store/slices/plantSlice';
import styled from 'styled-components';
import PlantsGrid from './PlantsGrid';

const Plants = () => {
   const dispatch = useDispatch();	
   const { plants, scrollPages, loading, hasErrors } = useSelector(plantsSelector);
   const [ pageNumber, setPageNumber ] = useState(1);
   
   const getNextPage = () => {
      let nextPage = pageNumber + 1;
      return setPageNumber(nextPage);
   }
   
   useEffect(() => {
      dispatch(fetchPlants(pageNumber));
   }, [dispatch, pageNumber]);

   if (scrollPages) return (  
      <PrettyStyle className="plant-page">
         <button onClick={() => getNextPage()}>next</button>
         {scrollPages.map((page, index) =>
            <PlantsGrid key={index}
               id={index}
               pageNumber={pageNumber}
               plants={page}
               loading={loading}
               hasErrors={hasErrors}
            />
         )}
      </PrettyStyle>
   )
}

const PrettyStyle = styled.div`
   margin: 5%;
`


export default Plants;
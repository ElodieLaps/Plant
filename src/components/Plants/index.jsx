import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants, plantsSelector } from './../../store/slices/plantSlice';
import styled from 'styled-components';
import PlantsGrid from './PlantsGrid';

const Plants = () => {
   const dispatch = useDispatch();	
   const { scrollPages, loading, hasErrors } = useSelector(plantsSelector);
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
         {scrollPages.map((page, index) =>
            <PlantsGrid key={index}
               id={index}
               pageNumber={pageNumber}
               plants={page}
               loading={loading}
               hasErrors={hasErrors}
            />
         )}
         {loading && <p>Plants is loading</p>}
         {hasErrors && <p>Cannot display plants...</p>}
         <button onClick={() => getNextPage()}>next</button>
      </PrettyStyle>
   )
}

const PrettyStyle = styled.div`
   margin: 5%;
`


export default Plants;
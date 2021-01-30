import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPlants, plantsSelector } from './../../store/slices/plantSlice';
import Plant from './Plant';

const Plants = () => {
   const dispatch = useDispatch();	
   const { plants, loading, hasErrors } = useSelector(plantsSelector);
   useEffect(() => {
      dispatch(fetchPlants());
   }, [dispatch]);
   
   const renderPlants = () => {
      if (loading) return <p>Loading plants...</p>
      if (hasErrors) return <p>Cannot display plants...</p>
  
      if (plants.data) return plants.data.map((plant, index) =>
         <Plant key={plant.id}
            name={plant.common_name}
            picture={plant.image_url}
            gridNumber={index}
            slug={plant.slug}
         />
      )
   }
   
   return (  
      <PrettyStyle>
         {renderPlants()}
      </PrettyStyle>
   )
}

const PrettyStyle = styled.div`
   min-height: 100vh;
   display: grid;
   margin: 10%;
   grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
   grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
   gap: 2px 2px;
   grid-template-areas:
      "grid-0 grid-0 grid-0 grid-2 grid-2 grid-4 grid-4 grid-7 grid-7 grid-7"
      "grid-0 grid-0 grid-0 grid-2 grid-2 grid-4 grid-4 grid-7 grid-7 grid-7"
      "grid-0 grid-0 grid-0 grid-1 grid-1 grid-4 grid-4 grid-8 grid-8 grid-8"
      "grid-3 grid-3 grid-3 grid-1 grid-1 grid-5 grid-5 grid-8 grid-8 grid-8"
      "grid-3 grid-3 grid-3 grid-6 grid-6 grid-5 grid-5 grid-9 grid-9 grid-10"
      "grid-17 grid-17 grid-18 grid-6 grid-6 grid-11 grid-11 grid-9 grid-9 grid-10"
      "grid-17 grid-17 grid-18 grid-6 grid-6 grid-11 grid-11 grid-12 grid-12 grid-12"
      "grid-19 grid-19 grid-19 grid-6 grid-6 grid-13 grid-13 grid-12 grid-12 grid-12"
      "grid-19 grid-19 grid-19 grid-16 grid-16 grid-13 grid-13 grid-15 grid-14 grid-14"
      "grid-19 grid-19 grid-19 grid-16 grid-16 grid-13 grid-13 grid-15 grid-14 grid-14";
   .grid-0 { grid-area: grid-0; }
   .grid-1 { grid-area: grid-1; }
   .grid-2 { grid-area: grid-2; }
   .grid-3 { grid-area: grid-3; }
   .grid-4 { grid-area: grid-4; }
   .grid-5 { grid-area: grid-5; }
   .grid-6 { grid-area: grid-6; }
   .grid-7 { grid-area: grid-7; }
   .grid-8 { grid-area: grid-8; }
   .grid-9 { grid-area: grid-9; }
   .grid-10 { grid-area: grid-10; }
   .grid-11 { grid-area: grid-11; }
   .grid-12 { grid-area: grid-12; }
   .grid-13 { grid-area: grid-13; }
   .grid-14 { grid-area: grid-14; }
   .grid-15 { grid-area: grid-15; }
   .grid-16 { grid-area: grid-16; }
   .grid-17 { grid-area: grid-17; }
   .grid-18 { grid-area: grid-18; }
   .grid-19 { grid-area: grid-19; }
`

export default Plants;
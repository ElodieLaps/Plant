import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants, plantsSelector } from '../store/slices/plantSlice';

const App = () => {
  const dispatch = useDispatch();	
  const { plants, loading, hasErrors } = useSelector(plantsSelector);

  useEffect(() => {
    dispatch(fetchPlants())
  }, [dispatch]);

  const renderPlants = () => {
    if (loading) return <p>Loading recipes...</p>
    if (hasErrors) return <p>Cannot display recipes...</p>

    return plants.data.map(plant =>
      <div key={plant.id} className='tile'>
        <h2>{plant.common_name}</h2>
        <img src={plant.image_url} alt=''/>
      </div>
    )
  }

  return (
    <div className="App">
      <div>
        {renderPlants()}
      </div>
    </div>
  );
}

export default App;

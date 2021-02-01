import styled from 'styled-components';
//import Plants from '../components/Plants';
import ScrollPlants from '../components/Plants/ScrollPlants';

const App = () => {
  return (
    <div className="App">
      <h1>viridi</h1>
      <ScrollPlants/>
    </div>
  );
}

const PrettyStyle = styled.div`
  h1 {
    text-align: center;
    
  }
`

export default App;

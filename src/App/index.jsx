import styled from 'styled-components';
import Plants from '../components/Plants';

const App = () => {
  return (
    <div className="App">
      <h1>viridi</h1>
      <Plants/>
    </div>
  );
}

const PrettyStyle = styled.div`
  h1 {
    text-align: center;
    
  }
`

export default App;

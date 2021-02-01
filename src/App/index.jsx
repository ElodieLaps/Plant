import styled from 'styled-components';
import Plants from '../components/Plants';

const App = () => {
  return (
    <PrettyStyle className="App">
      <h1>viridi</h1>
      <Plants/>
    </PrettyStyle>
  );
}

const PrettyStyle = styled.div`
  h1 {
    text-align: center;
    
  }
`

export default App;

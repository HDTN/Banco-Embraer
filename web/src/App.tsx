import Router from './pages/Router';
import { TecladoContext } from './contexts/teclado';
import { VisorContext } from './contexts/visor';

function App() {
  return (
    <TecladoContext>
      <VisorContext>
        <Router />
      </VisorContext>
    </TecladoContext>
  );
}

export default App;

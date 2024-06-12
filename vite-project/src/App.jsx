import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title="Tienda Dale Play" />
    </ChakraProvider>
  );
}

export default App;
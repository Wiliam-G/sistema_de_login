import './App.css';
import Home from './pages/homePage';
import { Layout } from './styled';
import AppRoutes from './routes';


function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;


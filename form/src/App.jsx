import { Routes, Route } from 'react-router-dom';
import FormPage from './component/form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';

import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import Layout4 from './layouts/Layout4';
import Layout5 from './layouts/Layout5';
import Layout6 from './layouts/Layout6';

import Editor1 from './editors/Editor1';
import Editor2 from './editors/Editor2';
import Editor3 from './editors/Editor3';
import Editor4 from './editors/Editor4';
import Editor5 from './editors/Editor5';
import Editor6 from './editors/Editor6';

import Main from './Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route>
        <Route path='/layout1' element={<Layout1 />} />
        <Route path='/layout2' element={<Layout2 />} />
        <Route path='/layout3' element={<Layout3 />} />
        <Route path='/layout4' element={<Layout4 />} />
        <Route path='/layout5' element={<Layout5 />} />
        <Route path='/layout6' element={<Layout6 />} />
      </Route>
      <Route>
        <Route path='/editor1' element={<Editor1 />} />
        <Route path='/editor2' element={<Editor2 />} />
        <Route path='/editor3' element={<Editor3 />} />
        <Route path='/editor4' element={<Editor4 />} />
        <Route path='/editor5' element={<Editor5 />} />
        <Route path='/editor6' element={<Editor6 />} />
      </Route>
    </Routes>
  );
}

export default App;

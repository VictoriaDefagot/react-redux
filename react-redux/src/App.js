import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksForm from './components/tasksForm';
import TasksList from './components/tasksList';

function App() {

  return (

    <div className="bg-zinc-900 h-screen text-white">

      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksList />}></Route>
            <Route path='/create-task' element={<TasksForm />}></Route>
            <Route path='/edit-task/:id' element={<TasksForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;

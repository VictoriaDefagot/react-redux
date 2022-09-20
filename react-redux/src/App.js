import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksForm from './components/tasksForm';
import TasksList from './components/tasksList';

function App() {

  return (

    <div className="App">

      <h1>Tasks Planner</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList />}></Route>
          <Route path='/create-task' element={<TasksForm />}></Route>
          <Route path='/edit-task/:id' element={<TasksForm />}></Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;

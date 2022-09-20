import './App.css';
import TasksForm from './components/tasksForm';
import TasksList from './components/tasksList';

function App() {

  return (

    <div className="App">
      <h1>TASKS PLANNER</h1>
      <TasksForm />
      <TasksList />
    </div>

  );
}

export default App;

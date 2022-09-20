import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

function TasksList() {

    const tasks = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    const handlerDelete = (id) => {
        dispatch(deleteTask(id));
    };

    return(
        <>

        <header>
            <h3> Total tasks: {tasks.length}</h3>
            <Link to='/create-task'>
                Create new task
            </Link>
        </header>

        {tasks.map(task => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => handlerDelete(task.id)}>Delete</button>
            </div>
        ))}
        </>
    )
};

export default TasksList;
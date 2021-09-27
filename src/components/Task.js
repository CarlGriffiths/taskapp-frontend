import {FaTimes} from 'react-icons/fa'

const Task = ({taskToPass, onDelete, onToggle}) => {
    return (
        <div className={`task ${taskToPass.reminder ? `reminder` : ''}`} onDoubleClick={() => onToggle(taskToPass.id)}>
            <h3>{taskToPass.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(taskToPass.id, taskToPass.text)} />
            </h3>
            <p>{taskToPass.day}</p>
        </div>
    )
}

export default Task

import { MdCheckBoxOutlineBlank, MdCheckBox, MdDeleteForever   } from "react-icons/md";

import './Task.css'

const Task = ( {task, updateTask, deleteTask } ) => {

  const realizeUpdate = () => {
    updateTask(task.id)
  }

  const realizeDelete = () => {
    deleteTask(task.id)
  }

  return (

    <>
        <div className="taskList">

            <div className="task">
              {task.isCompleted ? <MdCheckBox onClick={realizeUpdate} className="checkedIcon" size={20} /> : <MdCheckBoxOutlineBlank onClick={realizeUpdate} className="uncheckedIcon" size={20} />}
              <p className='taskText' key={task.id}> {task.text}</p>
            </div>
            

            <div>
              <MdDeleteForever onClick={realizeDelete} className="deleteIcon" size={20}  style={{ color: 'red', marginRight: '1vw'}}/>
            </div>
            
            
              

            
            
          </div>
    </>
    
    
  )
}

export default Task
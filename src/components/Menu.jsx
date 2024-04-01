import { useEffect, useState } from "react";
import { SlPlus } from "react-icons/sl";
import { TiArrowDownThick } from "react-icons/ti";
import { MdRefresh } from "react-icons/md";


// style

import styles from './Menu.module.css'

const Menu = ({ tasks, addTask, markAll, unmarkAll }) => {

    const [ value, setValue] = useState("");
    const [isAllCompleted, setIsAllCompleted] = useState();
    

    useEffect(() => {

        const completed = tasks.every( e => e.isCompleted === true);

        setIsAllCompleted(completed)
        

        
        
    },[tasks])


    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        console.log(value)
        addTask(value);
        setValue("")
    }

    const markAllTasks = () => {
        markAll();
        setIsAllCompleted(true);
        
        
    }

    const unmarkAllTasks = () => {
        unmarkAll();
        setIsAllCompleted(false);
        
    }

    

    return (
       <>
            <div className={styles.insertTask}>
                <form className={styles.taskForm} onSubmit={handleSubmit}>
                    <input type="text" name="task" placeholder="Nova tarefa" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type="submit"><SlPlus type="submit" className={styles.addButton} style={{padding: '0.2em'}}/> </button>
                    
                </form>
            </div>    
            <div className={styles.icons}>
               {tasks.length > 0 && (
                !isAllCompleted ? (
                    < div onClick={markAllTasks}>  
                        < TiArrowDownThick className={styles.markTasks} size={15} style={{   marginLeft: '1vw', marginRight: '0.2vw' , alignContent: 'left'}}/>
                        <p> Completar todas</p>
                    </div>  
                ) : (
                   <div onClick={unmarkAllTasks}>
                    < MdRefresh className={styles.markTasks}  size={15} style={{  marginLeft: '1vw', marginRight: '0.2vw' , alignContent: 'left'}}/>
                        <p> Reiniciar </p>
                   </ div> 
                    
                )

                )}
                        
                         
            </div>
       </> 
        
    );

};

export default Menu;
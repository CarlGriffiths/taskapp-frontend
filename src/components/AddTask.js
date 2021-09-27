import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add alert')
            return
        }

        //pass object back
        onAdd({text, dateTime, dateTime})

        //reset values
        setText('')
        setDateTime('')
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>

            <div className='form-control'>
                <label>Day and time</label>
                <input type='text' placeholder='Add day and time' value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask

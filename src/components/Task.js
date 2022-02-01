const Task = ({task, onDelete, onToggle}) => {
	return (
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h3>{task.text}<i style={{color: "red"}} className="bi bi-calendar-x" onClick={() => onDelete(task.id)}></i></h3>
			<p>{task.day}</p>
		</div>
	)
}

export default Task
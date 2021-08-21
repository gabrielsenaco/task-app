import React from 'react'
import TaskItem from './TaskItem'
import './../styles/CompletedTaskList.css'

export default class TaskList extends React.Component {

  render () {
    const { tasks } = this.props
    let items = tasks.filter((task, index) => task.completed)
    if(items.length === 0) return null

    items = items.map((task, index) => 
    {
      return (
          <TaskItem
            index={index + 1}
            text={task.text}
            id={task.id}
            key={task.id}
          />
        )
    })

    return (
      <div id='completed-tasks-container'>
        <h2 className='title'>Completed Task List</h2>
        <ul className='tasks-list'>{items}</ul>
      </div>
    )
  }
}

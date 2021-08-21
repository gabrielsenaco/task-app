import React from 'react'
import TaskItem from './TaskItem'
import TaskItemEditor from './TaskItemEditor'
import './../styles/TaskList.css'

export default class TaskList extends React.Component {

  render () {
    const { tasks, onRemoveTask, onChangeTaskText, onCompleteTask } = this.props
    let items = tasks.filter((task)=>!task.completed)

    items = items.map((task, index) => {
      if (task.editor) {
        return (
          <TaskItemEditor
            index={index + 1}
            text={task.text}
            id={task.id}
            key={task.id}
            onChangeTaskText={onChangeTaskText}
          />
        )
      } else {
        return (
          <TaskItem
            index={index + 1}
            text={task.text}
            id={task.id}
            key={task.id}
            onRemoveTask={onRemoveTask}
            onEnableTaskEditor={this.props.defineTaskEditor}
            onCompleteTask={onCompleteTask}
            showActions={true}
          />
        )
      }
    })

    if(items.length === 0 ) {
      items.push((
        <p>Your tasks will be shown here. Add a new task.</p>
        ))
    }

    return (
      <div>
        <h2 className='title'>Task list</h2>
        <ul className='tasks-list'>{items}</ul>
      </div>
    )
  }
}

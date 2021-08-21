import React from 'react'
import './../styles/TaskItem.css'
import { IconTrash, IconPencil } from '@tabler/icons'
import CompleteTaskIcon from './CompleteTaskIcon'

export default class TaskItem extends React.Component {
  handleRemoveTask = () => {
    this.props.onRemoveTask(this.props.id)
  }

  handleEnableEditor = () => {
    this.props.onEnableTaskEditor(this.props.id, true)
  }

  handleCompleteTask = () => {
    this.props.onCompleteTask(this.props.id)
  }

  render () {
    const { text, index, showActions } = this.props
    return (
      <li className='task-item'>
        <span className='task-item-index'>{index}. </span>
        <p className='task-item-text'>{text}</p>
        {showActions &&
        <div className='task-item-actions'>
          <CompleteTaskIcon onClick={this.handleCompleteTask} />
          <IconPencil
            className='icon task-item-edit'
            onClick={this.handleEnableEditor}
          />
          <IconTrash
            className='icon task-item-remove'
            onClick={this.handleRemoveTask}
          />
        </div>}
        {!showActions &&
        <div className='fill-space'>
        </div>}
      </li>
    )
  }
}

import React from 'react'
import './../styles/FormStyle.css'

export default class TaskManager extends React.Component {
  render () {
    const { submitTaskHandler, inputChangeHandler } = this.props
    return (
      <form id='submit-task' className='form-task' onSubmit={submitTaskHandler}>
        <h2 className='title'>Add new task</h2>
        <label htmlFor='form-task-name'>Enter task</label>
        <input
          type='text'
          id='form-task-name'
          className='input-task-text'
          placeholder='Enter your new task'
          required
          onChange={inputChangeHandler}
        />
        <button type='submit' id='submit-task-btn' className='submit-btn btn'>
          Add Task
        </button>
      </form>
    )
  }
}

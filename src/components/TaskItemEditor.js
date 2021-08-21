import React from 'react'
import './../styles/FormStyle.css'

export default class TaskItemEditor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: this.props.text
    }
  }

  handleInputChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmitTask = event => {
    if (this.state.text.length === 0) return
    event.preventDefault()
    event.target.reset()
    this.props.onChangeTaskText(this.props.id, this.state.text)
  }

  render () {
    const { text, index } = this.props
    return (
      <form
        className='task-item task-item-editor form-task'
        onSubmit={this.handleSubmitTask}
      >
        <span className='task-item-index'>{index}. </span>
        <div className='container-editor'>
          <label htmlFor='task-text-editor'>Change your task</label>
          <input
            type='text'
            onChange={this.handleInputChange}
            defaultValue={text}
            className='input-task-text task-item-text'
            id='task-text-editor'
            name='task-text-editor'
            required
          />
          <button type='submit' className='submit-btn task-item-editor-submit'>
            Confirm changes
          </button>
        </div>
      </form>
    )
  }
}

import React from 'react'
import uniqid from 'uniqid'
import TaskList from './components/TaskList'
import CompletedTaskList from './components/CompletedTaskList'
import TaskManager from './components/TaskManager'
import Footer from './components/Footer'
import './styles/App.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: [],
      task: {
        text: '',
        id: uniqid()
      }
    }
  }

  handleInputChange = event => {
    this.setState(prevState => ({
      task: { text: event.target.value, id: prevState.task.id }
    }))
  }

  handleSubmitTask = event => {
    if (this.state.task.text.length === 0) return
    event.preventDefault()
    event.target.reset()
    this.addTask()
  }

  removeTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }))
  }

  addTask = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(prevState.task),
      task: {
        text: '',
        id: uniqid()
      }
    }))
  }

  defineTaskEditor = (id, isEditor) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.editor = isEditor
        }
        return task
      })
    }))
  }

  changeTaskText = (id, newText) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.text = newText
          task.editor = false
        }
        return task
      })
    }))
  }

  checkTask = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.completed = true
        }
        return task
      })
    }))
  }

  render () {
    return (
        <main>
        <h1 className='title'>Task App</h1>
        <TaskManager
          submitTaskHandler={this.handleSubmitTask}
          inputChangeHandler={this.handleInputChange}
        />
        <TaskList
          tasks={this.state.tasks}  
          onRemoveTask={this.removeTask}
          defineTaskEditor={this.defineTaskEditor}
          onChangeTaskText={this.changeTaskText}
          onCompleteTask={this.checkTask}
        />
        <CompletedTaskList
          tasks={this.state.tasks}
        />
        <Footer/>
      </main>
      
    )
  }
}

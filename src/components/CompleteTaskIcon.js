import React from 'react'
import { IconSquare, IconCheckbox } from '@tabler/icons';

// TO-DO CHECK LATER IF DOING THIS IS A GOOD IDEA. (PERFORMANCE)
export default class CompleteTaskIcon extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }
    
    this.checkboxIcon = <IconCheckbox onClick={this.props.onClick} className='icon task-checked' onMouseLeave={this.handlerMouseLeave}/>
    this.emptyIcon = <IconSquare className='icon task-not-checked' onMouseOver={this.handleMouseOver}/>
  }

  handleMouseOver = () => {
    this.setState({
      hovering: true
    })
  }

  handlerMouseLeave = () => {
    this.setState({
      hovering: false
    })
  }

  render() {
    return this.state.hovering ? this.checkboxIcon : this.emptyIcon
  }
}
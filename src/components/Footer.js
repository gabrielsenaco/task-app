import React from 'react'
import { IconBrandGithub } from '@tabler/icons';
import './../styles/Footer.css'

export default class Footer extends React.Component{

  render() {
   return (
    <footer>
      <a href='https://github.com/gabesenacom/task-app' rel="noreferrer" target='_blank'>
        <IconBrandGithub />
        See the Task App repository
      </a>
      <a href='https://github.com/gabesenacom' rel="noreferrer" target='_blank'>
        <IconBrandGithub />
        Author's github
      </a>
    </footer>
      )
  }
}
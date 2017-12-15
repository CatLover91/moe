import {EventEmitter} from 'events'
import Prompt from './Prompt.js'

export default class Core extends EventEmitter {
  constructor (options) {
    super()
    this.options = options
    this.prompt = new Prompt()
    this.buffer = ''
    this.on('cmd', (termChar) => this.handleCommand)
  }

  show () {
    console.log(this.prompt.get())
  }

  handleCommand (termChar) {
    console.log('handling: ' + this.buffer + ' for character ' + termChar.toString())
  }
}

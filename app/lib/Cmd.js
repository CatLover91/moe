import {exec} from 'child-process'

export default class Cmd {
  constructor(strCmd) {
    this.cmd = strCmd
  }

  exec() {
    exec(this.cmd, (err, stdout, stderr) => {
      console.log(stdout)
    })    
  }
}

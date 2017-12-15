import os from 'os'
import util from './util'
const packages = {
  core: {
    commands: ['gcc', 'make', 'git'],
    gcc: {
      commands: [],
      apt: 'gcc',
      pac: 'gcc'
    },
    make: {
      commands: [],
      apt: 'make',
      pac: 'make'
    },
    git: {
      commands: [],
      apt: 'git',
      pac: 'git'
    }
  },
  wm: {
    X11: {
      commands: ['openbox', 'awesome', 'i3', 'qtile', 'herbsluft', 'howm', 'bspwm', 'dwm', 'xmonad', 'fvwm'],
      apt: '',
      pac: '',
      openbox: {},
      awesome: {},
      i3: {
        i3gaps: {}
      },
      qtile: {},
      herbsluft: {},
      howm: {},
      bspwm: {
        commands: [],
        apt: 'libxcb-util0-dev libxcb-ewmh-dev libxcb-randr0-dev libxcb-icccm4-dev libxcb-keysyms1-dev libxcb-xinerama0-dev libasound2-dev libxcb-xtest0-dev',
        pac: 'bswpm sxhkd'
      },
      dwm: {},
      xmonad: {},
      fvwm: {}
    }
  },
  bar: {
    commands: [],
    candybar: {},
    dzen: {},
    lemonbar: {},
    tint: {},
    n30f: {},
    polybar: {}
  },
  launcher: {
    commands: [],
    bmenu: {},
    dmenu: {
      dmenu2: {}
    },
    lighthouse: {},
    interrobang: {},
    thinglaunch: {},
    rofi: {
      pac: 'rofi',
      apt: ''
    }
  },
  terminal: {
    commands: [],
    termite: {},
    urxvt: {
      urxvtperls: {}
    },
    st: {
      stpatches: {}
    },
    terminator: {},
    xfce4terminal: {},
    coolretroterm: {}
  },
  texteditor: {
    commands: [],
    vim: {
      pac: 'vim',
      apt: 'vim'
    }
  },
  util: {
    feh: {
      pac: 'feh',
      apt: ''
    },
    mpv: {
      pac: 'mpv',
      apt: ''
    },
    ranger: {
      pac: 'ranger',
      apt: ''
    },
    thunar: {
      pac: 'thunar',
      apt: ''
    },
    mpd: {
      pac: 'mpd',
      apt: '',
      ncmpcpp: {
        pac: 'ncmpcpp',
        apt: ''
      }
    },
    cmus: {},
    firefox: {
      pac: 'firefox',
      apt: 'firefox'
    },
    screenfetch: {
      neofetch: {}
    },
    weechat: {
      pac: 'weechat',
      apt: ''
    },
    irssi: {},
    scrot: {}
  }
}

export default (env, options) => {
  // check if right permissions

  // check what OS
  const platform = os.platform()
  const release = os.platform()

  // check if dotfiles are provided
  const conf = options.config ? options.config : util.defaultConfig

  // handle moerc

  // install package blocks
  
  // manually handle configs for block

  // handle dotfiles
}

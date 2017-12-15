#!/usr/bin/env node --harmony

import program from 'commander'

program
  .version('0.0.1')
  .description('Swiss Army knife for rice')
  .option('-c, --config <path>', 'set config path. defaults to ./.moerc')
  .option('-i, --interactive', 'run in interactive mode')

// check moerc

// check cache

// handle config

// define commands

// handle command
program.parse(process.argv)



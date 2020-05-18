#!/usr/bin/env node
const { mdlinks } = require('../API/mdlinks');
const { validateStats, validate, stats, onlyPath } = require('../CLI/cli_functions')
const chalk = require('chalk')

const path = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];
const arrOfTerminal = process.argv;

if (arrOfTerminal.length < 6) {
  if (path && option1 === '--validate' && option2 === '--stats' || option1 === '--stats' && option2 === '--validate') {
    mdlinks(path, { validate: true })
      .then((obj) => {
        validateStats(obj)
      })
  } else if (path && option1 === '--validate' && !option2) {
    mdlinks(path, { validate: true })
      .then((obj) => {
        validate(obj)
      })
      .catch((err) => console.log(err));
  } else if (path && option1 === '--stats' && !option2) {
    mdlinks(path)
      .then((obj) => {
        stats(obj)
      })
  } else if (path && !option1 && !option2) {
    mdlinks(path)
      .then((obj) => {
        onlyPath(obj)
      })
      .catch((err) => console.log(err));
  } else {
    console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Verificar opciones introducidas'))
  }
} else {
  console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Has colocado opciones de mas'))
}

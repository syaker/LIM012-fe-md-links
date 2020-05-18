const chalk = require('chalk')

const validateStats = (obj) => {
	let allLinks = [];
	let broken = 0;
	obj.forEach((link) => { allLinks.push(link.href); link.status != 200 ? broken += 1 : broken += 0 })
	const uniqueLinks = allLinks.filter((elem, index) => allLinks.indexOf(elem) === index)
	const texto = `
	${chalk.green("Total =" + " " + allLinks.length)}
	${chalk.blue("Unique =" + " " + uniqueLinks.length)}
	${chalk.yellow("Broken =" + " " + broken)}
			  `
	console.log(texto)
  }
  
  const validate = (obj) => {
	let show = ""
	obj.forEach((obj) => {
	  show += obj.link + " " + chalk.greenBright(obj.href) + " " + chalk.yellow(obj.statusText)
		+ " " + chalk.bgYellow.bold(chalk.gray(obj.status)) + " " + chalk.blue(obj.text) + '\n';
	})
	console.log(show)
  }
  
  const stats = (obj) => {
	let links = [];
	obj.forEach((link) => links.push(link.href))
	const uniqueLinks = links.filter((elem, index) => links.indexOf(elem) === index)
	const texto = `
	${chalk.green("Total =" + " " + links.length)}
	${chalk.blue("Unique =" + " " + uniqueLinks.length)}
			  `
	console.log(texto)
  }
  
  const onlyPath = (obj) => {
	let show = ""
	obj.forEach((obj) => {
	  show += obj.link + " " + chalk.greenBright(obj.href) + " " + chalk.blue(obj.text) + '\n';
	})
	console.log(show)
  }

  module.exports = {
	  validateStats,
	  validate,
	  onlyPath,
	  stats
  }
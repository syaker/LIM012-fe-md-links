#!/usr/bin/env node
const { mdlinks } = require('../API/mdlinks');
const chalk = require('chalk')


const path = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];
const arrOfTerminal = process.argv;

if (arrOfTerminal.length < 6) {
	if (path && option1 === '--validate' && option2 === '--stats' || option1 === '--stats' && option2 === '--validate') {

		mdlinks(path, { validate: true })
			.then((obj) => {
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
			})


	} else if (path && option1 === '--validate' && !option2) {

		mdlinks(path, option1)
			.then((obj) => {
				let show = ""
				obj.forEach((obj) => {
					show += obj.link + " " + chalk.greenBright(obj.href) + " " + chalk.yellow(obj.statusText)
						+ " " + chalk.bgYellow.bold(chalk.gray(obj.status)) + " " + chalk.blue(obj.text) + '\n';
				})
				console.log(show)
			})
			.catch((err) => console.log(err));

	} else if (path && option1 === '--stats' && !option2) {
		mdlinks(path)
			.then((obj) => {
				let links = [];
				obj.forEach((link) => links.push(link.href))
				const uniqueLinks = links.filter((elem, index) => links.indexOf(elem) === index)
				const texto = `
				${chalk.green("Total =" + " " + links.length)}
				${chalk.blue("Unique =" + " " + uniqueLinks.length)}
			`
				console.log(texto)
			})

	} else if (path && !option1 && !option2) {

		mdlinks(path)
			.then((obj) => {
				let show = ""
				obj.forEach((obj) => {
					show += obj.link + " " + chalk.greenBright(obj.href) + " " + chalk.blue(obj.text) + '\n';
				})
				console.log(show)
			})
			.catch((err) => console.log(err));

	} else {

		console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Verificar opciones introducidas'))

	}
} else {

	console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Has colocado opciones de mas'))

}

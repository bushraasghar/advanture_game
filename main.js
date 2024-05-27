#! /usr/bin/env node
//lets create advanture game
import inquirer from 'inquirer';
import chalk from 'chalk';
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = 100;
    }
}
class palyer2 {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = 100;
    }
}
;
let quite = await inquirer.prompt([{
        name: 'quite',
        message: 'Do You want to quite',
        type: 'list',
        choices: ['Yes', 'No']
    }]);
if (quite.quite == 'Yes') {
    console.log(chalk.italic.yellow("Exiting..."));
}
else {
    let players = await inquirer.prompt([{
            name: 'name',
            message: 'Enter player1 name:',
            type: 'input'
        },
        {
            name: 'select',
            message: 'Select against player2:',
            type: 'list',
            choices: ['Zombies', 'Spiders', 'Skeleton']
        },
    ]);
    let p1 = new player(players.name);
    let p2 = new palyer2(players.select);
    if (players.select) {
        console.log(`${chalk.blue.bold(p1.name)} VS ${chalk.red.bold(p2.name)}`);
        let ask = await inquirer.prompt([{
                name: 'action',
                message: 'Select action against enemy:',
                type: 'list',
                choices: ['Fire', 'Drink portion', 'Run', 'Attack']
            }]);
        if (ask.action == 'Fire') {
            console.log(chalk.green.italic("Fire Fire Fire"));
        }
        if (ask.action == 'Drink portion') {
            console.log(`${chalk.green.italic(p1.fuel)} fuel charged`);
        }
        if (ask.action == 'Run') {
            console.log(chalk.green.italic("Runnig..."));
            console.log(chalk.red.italic.bold("You Looose! Better Luck Next Time."));
        }
        if (ask.action == 'Attack') {
            console.log(chalk.green.italic("Attacking..."));
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num == 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} your remaining fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(p2.name)} your remaining fuel is ${p2.fuel}`);
            }
            else {
                p2.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} your remaining fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(p2.name)} your remaining fuel is ${p2.fuel}`);
            }
        }
    }
}

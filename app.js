#!/usr/bin/env node
import yargs from "yargs";
import {hideBin} from 'yargs/helpers'
import {fibDecoder, fibEncoder} from "./src/utils.js";

const handleOption = (options) => {

    if (!options) throw new Error("Somthing went wrong");

    if (options.t && options.b) throw new Error("Bad usage");

    if (options.t) {
        console.log(fibEncoder(options.t));
        return;
    }

    if (options.b) {
        console.log(fibDecoder(options.b));
        return;
    }
    throw new Error("No argument");
}


const options = yargs(hideBin(process.argv))
    .usage("Usage: -t <Text>")
    .option("t", {
        alias: "text",
        describe: "Write a text to convert binary fire ice",
        type: "string",
        demandOption: false
    })
    .option("b", {alias: "binary", describe: "Write a fib binary to decode", type: "string", demandOption: false})
    .argv;


handleOption(options);


// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";

// Configures the Alchemy SDK
const config = {
  apiKey: "tsmkdgEPJSBtYoif4BLkqlCA7WBgUZvy", // Replace with your API key
  network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {

const fs = require('fs')
const ethers = require('ethers')
require('colors')

const addresses = fs
    .readFileSync('hits.txt', 'utf8')
    .split('\n')
    .map((val) => {
        return val.split(',')
    })


;(async () => {
    for (let i = 0; i < addresses.length; i++) {
        const address = addresses[i][0]
        const balance = await provider.getBalance(address)

        if (balance.gt(0)) {
            console.log(address.bgGreen.black, balance.toString().bgGreen.black)
            console.log('Private Key: '.yellow, addresses[i][1])
        } else {
            console.log(address, 0)
              }

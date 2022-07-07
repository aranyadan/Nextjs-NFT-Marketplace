/* import moralis */
const Moralis = require("moralis/node")
resuire("dotenv").config()
const contractAddresses = require("./constants/networkMapping.json")

/* Moralis init code */
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const appId = process.env.NEXT_PUBLIC_APP_ID
const masterKey = process.env.masterKey
let chainId = process.env.chainId || 31337

const contractAddress = contractAddresses[chainId]["NftMarketplace"][0]

async function main() {
    await Moralis.start({ serverUrl, appId, masterKey })
    console.log(
        `Working with contract address ${contractAddress} on chinId ${chainId}`
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })

const { network } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, lod } = deployments
    const { deployer } = await getNamedAccounts()
}

const raffle = await deploy("Raffle", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
})

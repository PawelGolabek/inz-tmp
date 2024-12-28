import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-coverage'


// npx hardhat coverage [command-options]

const config: HardhatUserConfig = {
  solidity: "0.8.27",
};

export default config;
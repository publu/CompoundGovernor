export default {
  "contractName": "EthBondingCurve",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "scale",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "core",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "pcvDeposits",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ratios",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "duration",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "incentive",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_caller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Allocate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "_pcvDeposits",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "_ratios",
          "type": "uint256[]"
        }
      ],
      "name": "AllocationUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_buffer",
          "type": "uint256"
        }
      ],
      "name": "BufferUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_core",
          "type": "address"
        }
      ],
      "name": "CoreUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_oracle",
          "type": "address"
        }
      ],
      "name": "OracleUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amountOut",
          "type": "uint256"
        }
      ],
      "name": "Purchase",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_scale",
          "type": "uint256"
        }
      ],
      "name": "ScaleUpdate",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ALLOCATION_GRANULARITY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BUFFER_GRANULARITY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "allocate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "atScale",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "buffer",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_pcvDeposits",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_ratios",
          "type": "uint256[]"
        }
      ],
      "name": "checkAllocation",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "core",
      "outputs": [
        {
          "internalType": "contract ICore",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "duration",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fei",
      "outputs": [
        {
          "internalType": "contract IFei",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feiBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllocation",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "name": "getAmountOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "name": "getAveragePrice",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct Decimal.D256",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentPrice",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct Decimal.D256",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "incentiveAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct Decimal.D256",
          "name": "price",
          "type": "tuple"
        }
      ],
      "name": "invert",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct Decimal.D256",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isTimeEnded",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "oracle",
      "outputs": [
        {
          "internalType": "contract IOracle",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "peg",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct Decimal.D256",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "remainingTime",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "scale",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "allocations",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ratios",
          "type": "uint256[]"
        }
      ],
      "name": "setAllocation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_buffer",
          "type": "uint256"
        }
      ],
      "name": "setBuffer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "core",
          "type": "address"
        }
      ],
      "name": "setCore",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_oracle",
          "type": "address"
        }
      ],
      "name": "setOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_scale",
          "type": "uint256"
        }
      ],
      "name": "setScale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startTime",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "timestamp",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalPurchased",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tribe",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tribeBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "updateOracle",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "name": "purchase",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalPCVHeld",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"scale\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"core\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"pcvDeposits\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ratios\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"oracle\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"duration\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"incentive\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_caller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Allocate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"_pcvDeposits\",\"type\":\"address[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_ratios\",\"type\":\"uint256[]\"}],\"name\":\"AllocationUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_buffer\",\"type\":\"uint256\"}],\"name\":\"BufferUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_core\",\"type\":\"address\"}],\"name\":\"CoreUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_oracle\",\"type\":\"address\"}],\"name\":\"OracleUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"}],\"name\":\"Purchase\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_scale\",\"type\":\"uint256\"}],\"name\":\"ScaleUpdate\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATION_GRANULARITY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"BUFFER_GRANULARITY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"allocate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"atScale\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buffer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_pcvDeposits\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_ratios\",\"type\":\"uint256[]\"}],\"name\":\"checkAllocation\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"core\",\"outputs\":[{\"internalType\":\"contract ICore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"duration\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fei\",\"outputs\":[{\"internalType\":\"contract IFei\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feiBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllocation\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"}],\"name\":\"getAmountOut\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"}],\"name\":\"getAveragePrice\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentPrice\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPCVHeld\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"incentiveAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"price\",\"type\":\"tuple\"}],\"name\":\"invert\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTimeEnded\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"oracle\",\"outputs\":[{\"internalType\":\"contract IOracle\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"peg\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"}],\"name\":\"purchase\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"remainingTime\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"scale\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"allocations\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ratios\",\"type\":\"uint256[]\"}],\"name\":\"setAllocation\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_buffer\",\"type\":\"uint256\"}],\"name\":\"setBuffer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"core\",\"type\":\"address\"}],\"name\":\"setCore\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_oracle\",\"type\":\"address\"}],\"name\":\"setOracle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_scale\",\"type\":\"uint256\"}],\"name\":\"setScale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startTime\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"timestamp\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalPurchased\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tribe\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tribeBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"updateOracle\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Fei Protocol\",\"methods\":{\"checkAllocation(address[],uint256[])\":{\"params\":{\"_pcvDeposits\":\"new list of pcv deposits to send to\",\"_ratios\":\"new ratios corresponding to the PCV deposits\"},\"returns\":{\"_0\":\"true if it is a valid allocation\"}},\"timestamp()\":{\"details\":\"will be less than or equal to duration\",\"returns\":{\"_0\":\"timestamp\"}}},\"title\":\"a square root growth bonding curve for purchasing FEI with ETH\"},\"userdoc\":{\"methods\":{\"checkAllocation(address[],uint256[])\":{\"notice\":\"make sure an allocation has matching lengths and totals the ALLOCATION_GRANULARITY\"},\"getAllocation()\":{\"notice\":\"gets the pcvDeposits and ratios of the splitter\"},\"isTimeEnded()\":{\"notice\":\"return true if time period has ended\"},\"remainingTime()\":{\"notice\":\"number of seconds remaining until time is up\"},\"timestamp()\":{\"notice\":\"number of seconds since contract was initialized\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/EthBondingCurve.sol\":\"EthBondingCurve\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/BondingCurve.sol\":{\"keccak256\":\"0x0b1dfa886a78606229c0e42daa64258f2c69f5cc610cd4d28c9af7c6bb51507e\",\"urls\":[\"bzz-raw://a80027827571b4ffc42969374808230455d4414c086b98d1ea86a6caacff19cd\",\"dweb:/ipfs/QmYR3HeCSoi8Y3vkDXEiEFj596Ld8W55UBQmHocheCFJag\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/EthBondingCurve.sol\":{\"keccak256\":\"0x3fe3d0cb6a85d550793d59ab3bf9a7ffe7c8aa88633ea11835645a42bfcb4bf7\",\"urls\":[\"bzz-raw://b1dac4f648161174458db3bc630c42cefd655c360268940c50ab4407b8e35e60\",\"dweb:/ipfs/QmZusLo16B9ucL3zQoCMigt7WjkYPfymMCzyPLSodKcHeR\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/IBondingCurve.sol\":{\"keccak256\":\"0xeee0f0196282f6dc6ed2921fda9b7b9964b461dfaba3e85b34f0890c732aed60\",\"urls\":[\"bzz-raw://227fdb46c421c42d572903798aa5f08e25ceb6d242115dc37dafa172b6e0f53b\",\"dweb:/ipfs/QmY9ycoPd4beovzjgokAggyVdLBeMVDiWWjr9srcP1Ds1D\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/core/ICore.sol\":{\"keccak256\":\"0x90c6550e567bfc16c4157cf7ed4623591006e92e53ac85146768244330047414\",\"urls\":[\"bzz-raw://b27f5b037d514fb716dcf7e0b8bf14bf5c9c8a982850f4fa166412b06b8a1830\",\"dweb:/ipfs/QmWR8sNVi9Z8yrCoWAAYtd9buasZTkF4SR4YoVLk9CZaop\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/core/IPermissions.sol\":{\"keccak256\":\"0x9066e46117e9c034706b2c3ca88f575df8bfa1d64eef2237f650c86f06dc0bb4\",\"urls\":[\"bzz-raw://dab3c13839f1669491aa4917f36b1e5dba50aa01206b1e1e761fd588dac0a6e0\",\"dweb:/ipfs/QmNvEWcPKpwXjekxqF1ELkkn4ntcTWZzMW59ZW9Htwf37o\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/external/Decimal.sol\":{\"keccak256\":\"0xd0fafdcf5aaf455e00b85be878fb0626965ef0db811ce2e5f44322b2fc9baf13\",\"urls\":[\"bzz-raw://126981de1b71d981620792bdfa74a0fa666017e9a2c790d19c468b9dacc5ad14\",\"dweb:/ipfs/QmNfDU73Pp4JupbMSBtvGjdp4L7MuGRQwYiBfRn5SYSZTj\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/external/SafeMathCopy.sol\":{\"keccak256\":\"0x133c0905757178a6ee08d49ab7f3901a7f5508f428211a98067fe114aa80196d\",\"urls\":[\"bzz-raw://aa3ed0ffdf818fdead31217f1748955480b34a01d9475daaea13f658efa4546b\",\"dweb:/ipfs/QmYpxW47YgMXp2EAoQUs8QoaNtCUfAQW9UNgA3MANmfykY\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/oracle/IOracle.sol\":{\"keccak256\":\"0xc24570159fbfa6764cbdc2bc527b6cd83a7865c338553c121fbcc8055c1e3f26\",\"urls\":[\"bzz-raw://199cb02d6e2777659eaedd75d113daae85f62f34dd3ae06ed067c4d18c1294c1\",\"dweb:/ipfs/QmX4e2Tz7DkxFDzJyfKyjqJM25xu66CZoqykwQscJCNHfG\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/pcv/IPCVDeposit.sol\":{\"keccak256\":\"0xb8ee77fad017ce237175519b548eb1b34dafb464bdfb5d3d6a63badcd9f9972f\",\"urls\":[\"bzz-raw://c10d1f1b7bced4a001066dd7d66d3d7d645c566d3d9736f4379f783a437abfd7\",\"dweb:/ipfs/QmSJ7YGnhiXmGSfB5PfT7k8ASiDs4fSPQZHTpDnTvG8hFW\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/pcv/PCVSplitter.sol\":{\"keccak256\":\"0x9777a1a17a971adfe951a4333e16e41944340cd806f5ef1762727872d66bdfb7\",\"urls\":[\"bzz-raw://a987ff2593e7bc951f4e0e5150fb938b9c1736cd9f5178676cfd8ac80ff98a52\",\"dweb:/ipfs/QmcCL3qRLSghQGPwq3UcCPmb2K1J4GCW3UrwTDoiznc7ad\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/refs/CoreRef.sol\":{\"keccak256\":\"0x4dda78a426d7fa86623d3a84406150ce35a9520ae84bdff29c7d83f1df800d63\",\"urls\":[\"bzz-raw://02185e717fb22e10c20830720a65511c89be25e1f4f7a873b98c318c2872e156\",\"dweb:/ipfs/QmSBZogBbUEayxzuD4YbeTnzjbkpV8Cqct7ACUYXtURAzh\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/refs/ICoreRef.sol\":{\"keccak256\":\"0xa50838e91fac1721f4607a132642e140fc30d7e3287c9675362e9976c7174fd3\",\"urls\":[\"bzz-raw://110770be5844c7c6df9554cea637e2a36e52df1f924326d306176e14f94acb65\",\"dweb:/ipfs/QmRguhk7omRurj4MEo5E9wYSGJT8NDdNS8rpiTPg8ZRDbZ\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/refs/IOracleRef.sol\":{\"keccak256\":\"0x0a42f91d129d3aa6ded4f8c448dccb3542e812bec61bea3a7fcceacde1cdb632\",\"urls\":[\"bzz-raw://eeb97843f2f80ed5989055656de6d375672c2dbed1733c771fe56c6b30a47f8d\",\"dweb:/ipfs/QmVmV18mLsavbVmyixReR4TdLTXU1ZWigQ7wVJvBPQFeaj\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/refs/OracleRef.sol\":{\"keccak256\":\"0x63ccbbe6b2118541a72355738ac719f58349f8b619f73277f4194733e24b0f27\",\"urls\":[\"bzz-raw://e3ebda2499b1377875e4e5b678feb8a21aa75878d2bd8237769cd926d0507ac9\",\"dweb:/ipfs/QmaGwQL6FEWFCnrzkEsBxpQwhfGxD8rf6iWPU3QULp9KJT\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/token/IFei.sol\":{\"keccak256\":\"0x4b1551958abb467f2b976ec856d545affbb0fa9bfbc056434411221fddf6f9a6\",\"urls\":[\"bzz-raw://ad8d3a4b3a1aba9e73ba9b38111cdb28d2413dbb6b2737e58fab3094e905dce7\",\"dweb:/ipfs/QmZqNNDTYkSFLRvStWVqvQcqVUJiKaXEyjkeFobrSpPyfz\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/utils/Roots.sol\":{\"keccak256\":\"0xce7d0822258a2c6c49b80ef054a79fcc2038bd957783b3eb70bbde7323ae6f17\",\"urls\":[\"bzz-raw://1f7ce664f75b4d572d196ec6fcf954f33ef64148de6bacb3e317e496d1746166\",\"dweb:/ipfs/QmdCHkdnFKkNiSuTtMDZ7oaGDfxtXkkMG7oCeEhJGDE5Qn\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/utils/SafeMath32.sol\":{\"keccak256\":\"0x44377be85d93c7a7d8214ce590d966244ee716fede5fac1157fc264bf67fda44\",\"urls\":[\"bzz-raw://9141e5b187319a76034b195fd6b3c1161e5f0fac7bcf0d6eb38f075d04ac460c\",\"dweb:/ipfs/QmbAgdaUu2uZcTNGHM6CgMkTLKgXT5u6sVZznMAqkTNoRp\"]},\"/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/utils/Timed.sol\":{\"keccak256\":\"0x95fcd7a3983b4818cf65ebd22bd7fad88fe8bf327fdacaa2936c458869072c35\",\"urls\":[\"bzz-raw://f9c2f11e046ae4aa03cf9846c9579f8dd991001fe484c307ec2e15402eb13250\",\"dweb:/ipfs/QmXkPwdgNbLCjqwF52XLnhQAHiUUhaQxqamN3ToeFakEv7\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x92f7900d382761c7faefeaced81c6b4f1aae909ed0551803bfe8f27101956360\",\"urls\":[\"bzz-raw://407c0864143968542e5cf5aa7556916d2cf292b201e3dadb65662e9a3aa24187\",\"dweb:/ipfs/QmSnXzYAUaGLGr7uofRbgQraTJvatbjQLBPhyYiMd18oUJ\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xf5fa8cbdffa5ef8be49b246b5628facc30b71707e78a45d80d93b64eff3fe390\",\"urls\":[\"bzz-raw://774e78a9ff32792cc95db4d2ceaf3a7965bb7f0bea5e6cb7cff182b450d44b37\",\"dweb:/ipfs/QmRRMC4uj7eAcLW7chynA3sNEYULMFazdLwQHKHQPyzAbA\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xb2a11b236f073662f5a196995863f51c11d006bf7c3de158b316dfa1506c4b79\",\"urls\":[\"bzz-raw://8651649cf0b9efa18c3b01c030276fa320d41adbdc286833417e7f36e357b2f3\",\"dweb:/ipfs/QmafhM2Nd1aP43QVB1eRRZaqRXQKswNfQcWi8U8xjrxCfN\"]},\"@openzeppelin/contracts/utils/SafeCast.sol\":{\"keccak256\":\"0xf06035c6398edfcb048e31e6cb7f485c203230a037e21b4aad337abd8ee896a3\",\"urls\":[\"bzz-raw://7c362ed1fe31b6c0a037407a2e6de45c7975cce38be040dc1d2e1d514ae54844\",\"dweb:/ipfs/QmR6niBfojxeRFavDRzvJG9c2b4HqqBAcYAbwxkx5ng1Mf\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xad37a774ad6a438432acb1a475b71b2991a41ba98f1cd814c6d78f9109370a38\",\"urls\":[\"bzz-raw://0f1fbfda71c124ef0436d4e0fe1d0ee9440e2d169ba5ecb890d3d5089ccdd185\",\"dweb:/ipfs/QmXvHC7AfnhNoXEi2tCDRVgHcWuADfHToyCUYZ2tG5Pgen\"]}},\"version\":1}",
  "bytecode": "0x60a060405260646007553480156200001657600080fd5b506040516200273f3803806200273f8339810160408190526200003991620003c2565b600080546001600160a01b0319166001600160a01b0388161790558686868686868681858588866200006b81620000e5565b5062000083905082826001600160e01b036200010716565b50506004805463ffffffff9092166401000000000263ffffffff60201b19909216919091179055620000be876001600160e01b036200018816565b60085550600394508b9350620000d392505050565b04608052506200066195505050505050565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6200011c82826001600160e01b036200018d16565b5081516200013290600390602085019062000222565b508051620001489060029060208401906200028c565b507fbef57aa97c9fb646a566800652d67ee461974b0a5f4b40f8be3f875d44638a4f82826040516200017c929190620004f1565b60405180910390a15050565b600555565b60008151835114620001bc5760405162461bcd60e51b8152600401620001b390620005bd565b60405180910390fd5b6000805b8351811015620001f157838181518110620001d757fe5b6020026020010151820191508080600101915050620001c0565b506127108114620002165760405162461bcd60e51b8152600401620001b39062000578565b60019150505b92915050565b8280548282559060005260206000209081019282156200027a579160200282015b828111156200027a57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000243565b5062000288929150620002d8565b5090565b828054828255906000526020600020908101928215620002ca579160200282015b82811115620002ca578251825591602001919060010190620002ad565b506200028892915062000302565b620002ff91905b80821115620002885780546001600160a01b0319168155600101620002df565b90565b620002ff91905b8082111562000288576000815560010162000309565b80516001600160a01b03811681146200021c57600080fd5b600082601f83011262000348578081fd5b81516200035f620003598262000641565b6200061a565b8181529150602080830190848101818402860182018710156200038157600080fd5b60005b84811015620003a25781518452928201929082019060010162000384565b505050505092915050565b805163ffffffff811681146200021c57600080fd5b600080600080600080600060e0888a031215620003dd578283fd5b87519650620003f08960208a016200031f565b60408901519096506001600160401b03808211156200040d578485fd5b818a018b601f8201126200041f578586fd5b8051925062000432620003598462000641565b80848252602082019150602083018e6020808802860101111562000454578889fd5b8893505b8584101562000483576200046d8f826200031f565b8352600193909301926020928301920162000458565b5060608d015190995093505050808211156200049d578485fd5b50620004ac8a828b0162000337565b945050620004be8960808a016200031f565b9250620004cf8960a08a01620003ad565b915060c0880151905092959891949750929550565b6001600160a01b03169052565b604080825283519082018190526000906020906060840190828701845b82811015620005355762000524848351620004e4565b92840192908401906001016200050e565b50505083810382850152845180825285830191830190845b818110156200056b578351835292840192918401916001016200054d565b5090979650505050505050565b60208082526025908201527f50435653706c69747465723a20726174696f7320646f206e6f7420746f74616c604082015264203130302560d81b606082015260800190565b6020808252603a908201527f50435653706c69747465723a20504356204465706f7369747320616e6420726160408201527f74696f732061726520646966666572656e74206c656e67746873000000000000606082015260800190565b6040518181016001600160401b03811182821017156200063957600080fd5b604052919050565b60006001600160401b0382111562000657578081fd5b5060209081020190565b6080516120c36200067c600039806115ca52506120c36000f3fe6080604052600436106101f95760003560e01c80638de932221161010d578063b80777ea116100a0578063e632c2f31161006f578063e632c2f314610505578063eb91d37e1461051a578063edaafe201461052f578063f2f4eb2614610544578063f51e181a14610559576101f9565b8063b80777ea146104b1578063b86677fe146104c6578063cae5d73b146104db578063d6f124f0146104f0576101f9565b8063acc4bd08116100dc578063acc4bd0814610452578063adc7ea3714610467578063ae951b2e14610487578063b49058971461049c576101f9565b80638de93222146104005780639a9ba4da14610413578063a36832a514610428578063abaa99161461043d576101f9565b80634ec1d6611161019057806378e979251161015f57806378e979251461035c5780637adbf973146103715780637dc0d1d01461039157806380009630146103b357806386b117b1146103d3576101f9565b80634ec1d661146101fe5780635c195217146103075780636b6dff0a146103275780636e791c831461033c576101f9565b80633102b21a116101cc5780633102b21a146102905780633c7237ba146102b25780633edc3519146102d257806345f4db28146102f2576101f9565b806306caac7f146101fe5780630c9e1e8e146102295780630fb5a6b41461024c5780631f1cb62b1461026e575b600080fd5b34801561020a57600080fd5b5061021361056e565b6040516102209190611ff8565b60405180910390f35b34801561023557600080fd5b5061023e610574565b604051610220929190611c61565b34801561025857600080fd5b50610261610631565b604051610220919061200f565b34801561027a57600080fd5b50610283610645565b6040516102209190611fee565b34801561029c57600080fd5b506102b06102ab366004611a23565b6106ff565b005b3480156102be57600080fd5b506102836102cd366004611bf7565b61080e565b3480156102de57600080fd5b506102b06102ed366004611bf7565b610844565b3480156102fe57600080fd5b50610213610923565b34801561031357600080fd5b50610213610322366004611bf7565b610927565b34801561033357600080fd5b50610213610963565b34801561034857600080fd5b50610283610357366004611b87565b6109ed565b34801561036857600080fd5b50610261610a13565b34801561037d57600080fd5b506102b061038c3660046119dc565b610a1f565b34801561039d57600080fd5b506103a6610afb565b6040516102209190611c34565b3480156103bf57600080fd5b506102b06103ce3660046119dc565b610b0a565b3480156103df57600080fd5b506103f36103ee366004611a8c565b610bee565b6040516102209190611ce2565b61021361040e3660046119f8565b610c6f565b34801561041f57600080fd5b506103a6610d3b565b34801561043457600080fd5b506103f3610dc2565b34801561044957600080fd5b506102b0610dcd565b34801561045e57600080fd5b50610261610e4b565b34801561047357600080fd5b506102b0610482366004611bf7565b610e73565b34801561049357600080fd5b506103f3610f65565b3480156104a857600080fd5b50610213610f7b565b3480156104bd57600080fd5b50610261610f85565b3480156104d257600080fd5b506103a6610fda565b3480156104e757600080fd5b50610213611029565b3480156104fc57600080fd5b506103f361102f565b34801561051157600080fd5b506102136110ad565b34801561052657600080fd5b506102836110b3565b34801561053b57600080fd5b50610213611101565b34801561055057600080fd5b506103a6611107565b34801561056557600080fd5b50610213611116565b61271081565b60608060036002818054806020026020016040519081016040528092919081815260200182805480156105d057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105b2575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561062257602002820191906000526020600020905b81548152602001906001019080831161060e575b50505050509050915091509091565b600454640100000000900463ffffffff1681565b61064d61182c565b61065561182c565b600154604080516315f789a960e21b815281516000936001600160a01b0316926357de26a49260048082019391829003018186803b15801561069657600080fd5b505afa1580156106aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ce9190611bac565b91509150806106f85760405162461bcd60e51b81526004016106ef90611e44565b60405180910390fd5b5090505b90565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b89061072f903390600401611c34565b60206040518083038186803b15801561074757600080fd5b505afa15801561075b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077f9190611b4f565b61079b5760405162461bcd60e51b81526004016106ef90611f50565b6108088484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080880282810182019093528782529093508792508691829185019084908082843760009201919091525061111c92505050565b50505050565b61081661182c565b60006108218361118c565b9050600061082e84610927565b905061083a82826111ae565b925050505b919050565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610874903390600401611c34565b60206040518083038186803b15801561088c57600080fd5b505afa1580156108a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c49190611b4f565b6108e05760405162461bcd60e51b81526004016106ef90611f50565b6108e9816111dd565b7faceab8a6989ecc545e5a14983924930ea43e5eb96f4d7cd5fda33468b83d9bc5816040516109189190611ff8565b60405180910390a150565b4790565b6000806109338361118c565b905061093d610dc2565b156109535761094b816111e2565b91505061083f565b61095c816111f3565b9392505050565b600061096d610fda565b6001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016109989190611c34565b60206040518083038186803b1580156109b057600080fd5b505afa1580156109c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190611c0f565b905090565b6109f561182c565b610a0d82610a01611246565b9063ffffffff61126816565b92915050565b60045463ffffffff1681565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610a4f903390600401611c34565b60206040518083038186803b158015610a6757600080fd5b505afa158015610a7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9f9190611b4f565b610abb5760405162461bcd60e51b81526004016106ef90611f50565b610ac481611296565b6040516001600160a01b038216907fc17757c327b55fd7741523e1dd00ff52d2a125e38254b540926d1de3a3c9bfa990600090a250565b6001546001600160a01b031681565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610b3a903390600401611c34565b60206040518083038186803b158015610b5257600080fd5b505afa158015610b66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8a9190611b4f565b610ba65760405162461bcd60e51b81526004016106ef90611f50565b600080546001600160a01b0319166001600160a01b038316908117825560405190917fad9400e618eb1344fde53db22397a1b82c765527ecbba3a5c86bcac15090828b91a250565b60008151835114610c115760405162461bcd60e51b81526004016106ef90611f91565b6000805b8351811015610c4357838181518110610c2a57fe5b6020026020010151820191508080600101915050610c15565b506127108114610c655760405162461bcd60e51b81526004016106ef90611d75565b5060019392505050565b60008060009054906101000a90046001600160a01b03166001600160a01b0316639711ac346040518163ffffffff1660e01b815260040160206040518083038186803b158015610cbe57600080fd5b505afa158015610cd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf69190611b4f565b610d125760405162461bcd60e51b81526004016106ef90611d40565b813414610d315760405162461bcd60e51b81526004016106ef90611ebc565b61095c82846112b8565b60008060009054906101000a90046001600160a01b03166001600160a01b0316639a9ba4da6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d8a57600080fd5b505afa158015610d9e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190611b6b565b600554600654101590565b6000610dd7610923565b905080610df65760405162461bcd60e51b81526004016106ef90611dba565b610dff81611387565b610e076113f7565b336001600160a01b03167f249d8eb76d5a22983620d741de2470148d1a9a26ab923aec4262770690d11ebc82604051610e409190611ff8565b60405180910390a250565b60006109e8610e58610f85565b60045463ffffffff6401000000009091048116919061147316565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610ea3903390600401611c34565b60206040518083038186803b158015610ebb57600080fd5b505afa158015610ecf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef39190611b4f565b610f0f5760405162461bcd60e51b81526004016106ef90611f50565b6127108110610f305760405162461bcd60e51b81526004016106ef90611df1565b60078190556040517fd97e0c56536b665b7cc4a52c4b58182120a828b6b662698e2775b2b7214c64f890610918908390611ff8565b6000610f6f610e4b565b63ffffffff1615905090565b600061096d610d3b565b60045460009063ffffffff64010000000082048116918391610fbf9116610fab426114b5565b63ffffffff1661147390919063ffffffff16565b90508163ffffffff168163ffffffff16116106f85792915050565b60008060009054906101000a90046001600160a01b03166001600160a01b031663b86677fe6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d8a57600080fd5b60085481565b6001546040805163a2e6204560e01b815290516000926001600160a01b03169163a2e6204591600480830192602092919082900301818787803b15801561107557600080fd5b505af1158015611089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190611b4f565b60065481565b6110bb61182c565b6110c3610dc2565b156110ee576110e76110d36114df565b6110db610645565b9063ffffffff61150016565b90506106fc565b6109e86110f961152e565b610a01610645565b60075481565b6000546001600160a01b031690565b60055481565b6111268282610bee565b50815161113a90600390602085019061183f565b50805161114e9060029060208401906118a0565b507fbef57aa97c9fb646a566800652d67ee461974b0a5f4b40f8be3f875d44638a4f8282604051611180929190611c61565b60405180910390a15050565b6000610a0d6111a98361119d610645565b9063ffffffff61155a16565b611581565b6111b661182c565b60405180602001604052806111d485670de0b6b3a76400008661159e565b90529392505050565b600555565b6000610a0d6111a98361119d6114df565b6000806112016006546115c8565b9050600061120e826115ed565b600261122361121e6005546115c8565b611601565b86600302028161122f57fe5b040190508161123d8261160c565b03949350505050565b61124e61182c565b506040805160208101909152670de0b6b3a7640000815290565b61127061182c565b60405180602001604052806111d48560000151670de0b6b3a7640000866000015161159e565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60006112c261102f565b506112cc83610927565b90506112d781611619565b6112df610d3b565b6001600160a01b03166340c10f1983836040518363ffffffff1660e01b815260040161130c929190611c48565b600060405180830381600087803b15801561132657600080fd5b505af115801561133a573d6000803e3d6000fd5b50505050816001600160a01b03167f12cb4648cf3058b17ceeb33e579f8b0bc269fe0843f3900b8e24b6c54871703c8483604051611379929190612001565b60405180910390a292915050565b61271060005b6002548110156113f257600082600283815481106113a757fe5b90600052602060002001548502816113bb57fe5b0490506113e981600384815481106113cf57fe5b6000918252602090912001546001600160a01b0316611624565b5060010161138d565b505050565b6113ff610f65565b156114715761140c611688565b611414610d3b565b6001600160a01b03166340c10f19336008546040518363ffffffff1660e01b8152600401611443929190611c48565b600060405180830381600087803b15801561145d57600080fd5b505af1158015610808573d6000803e3d6000fd5b565b600061095c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116ad565b600064010000000082106114db5760405162461bcd60e51b81526004016106ef90611f0a565b5090565b6114e761182c565b600754612710906114fa908203826111ae565b91505090565b61150861182c565b60405180602001604052806111d485600001518560000151670de0b6b3a764000061159e565b61153661182c565b6109e861154761121e6006546115c8565b61155561121e6005546115c8565b6111ae565b61156261182c565b6040805160208101909152835181906111d4908563ffffffff6116e616565b8051600090610a0d90670de0b6b3a764000063ffffffff61172016565b60006115c0826115b4868663ffffffff6116e616565b9063ffffffff61172016565b949350505050565b7f00000000000000000000000000000000000000000000000000000000000000000190565b600060036115fa83611601565b0a92915050565b6000610a0d82611762565b600060026115fa836117b3565b600680549091019055565b60405163b6b55f2560e01b81526001600160a01b0382169063b6b55f25908490611652908290600401611ff8565b6000604051808303818588803b15801561166b57600080fd5b505af115801561167f573d6000803e3d6000fd5b50505050505050565b611691426114b5565b6004805463ffffffff191663ffffffff92909216919091179055565b60008363ffffffff168363ffffffff16111582906116de5760405162461bcd60e51b81526004016106ef9190611ced565b505050900390565b6000826116f557506000610a0d565b8282028284828161170257fe5b041461095c5760405162461bcd60e51b81526004016106ef90611e7b565b600061095c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506117f5565b600060038211156117a5575080600160028204015b8181101561179f5780915060028182858161178e57fe5b04018161179757fe5b049050611777565b5061083f565b811561083f57506001919050565b600060078211156117a5575080600160038204015b8181101561179f5780915060038160020282830285816117e457fe5b0401816117ed57fe5b0490506117c8565b600081836118165760405162461bcd60e51b81526004016106ef9190611ced565b50600083858161182257fe5b0495945050505050565b6040518060200160405280600081525090565b828054828255906000526020600020908101928215611894579160200282015b8281111561189457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061185f565b506114db9291506118e7565b8280548282559060005260206000209081019282156118db579160200282015b828111156118db5782518255916020019190600101906118c0565b506114db92915061190b565b6106fc91905b808211156114db5780546001600160a01b03191681556001016118ed565b6106fc91905b808211156114db5760008155600101611911565b60008083601f840112611936578182fd5b50813567ffffffffffffffff81111561194d578182fd5b602083019150836020808302850101111561196757600080fd5b9250929050565b600082601f83011261197e578081fd5b813561199161198c82612047565b612020565b8181529150602080830190848101818402860182018710156119b257600080fd5b60005b848110156119d1578135845292820192908201906001016119b5565b505050505092915050565b6000602082840312156119ed578081fd5b813561095c81612067565b60008060408385031215611a0a578081fd5b8235611a1581612067565b946020939093013593505050565b60008060008060408587031215611a38578182fd5b843567ffffffffffffffff80821115611a4f578384fd5b611a5b88838901611925565b90965094506020870135915080821115611a73578384fd5b50611a8087828801611925565b95989497509550505050565b60008060408385031215611a9e578182fd5b823567ffffffffffffffff80821115611ab5578384fd5b81850186601f820112611ac6578485fd5b80359250611ad661198c84612047565b80848252602080830192508084018a828389028701011115611af6578889fd5b8894505b86851015611b21578035611b0d81612067565b845260019490940193928101928101611afa565b509096508701359350505080821115611b38578283fd5b50611b458582860161196e565b9150509250929050565b600060208284031215611b60578081fd5b815161095c8161207f565b600060208284031215611b7c578081fd5b815161095c81612067565b600060208284031215611b98578081fd5b611ba26020612020565b9135825250919050565b6000808284036040811215611bbf578283fd5b6020811215611bcc578283fd5b50611bd76020612020565b835181526020840151909250611bec8161207f565b809150509250929050565b600060208284031215611c08578081fd5b5035919050565b600060208284031215611c20578081fd5b5051919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b604080825283519082018190526000906020906060840190828701845b82811015611ca157611c91848351611c27565b9284019290840190600101611c7e565b50505083810382850152845180825285830191830190845b81811015611cd557835183529284019291840191600101611cb9565b5090979650505050505050565b901515815260200190565b6000602080835283518082850152825b81811015611d1957858101830151858201604001528201611cfd565b81811115611d2a5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f436f72655265663a205374696c6c20696e2047656e6573697320506572696f64604082015260600190565b60208082526025908201527f50435653706c69747465723a20726174696f7320646f206e6f7420746f74616c604082015264203130302560d81b606082015260800190565b60208082526019908201527f426f6e64696e6743757276653a204e6f205043562068656c6400000000000000604082015260600190565b60208082526033908201527f426f6e64696e6743757276653a204275666665722065786365656473206f72206040820152726d617463686573206772616e756c617269747960681b606082015260800190565b60208082526019908201527f4f7261636c655265663a206f7261636c6520696e76616c696400000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f426f6e64696e672043757276653a2053656e742076616c756520646f6573206e60408201526d1bdd08195c5d585b081a5b9c1d5d60921b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360408201526532206269747360d01b606082015260800190565b60208082526021908201527f436f72655265663a2043616c6c6572206973206e6f74206120676f7665726e6f6040820152603960f91b606082015260800190565b6020808252603a908201527f50435653706c69747465723a20504356204465706f7369747320616e6420726160408201527f74696f732061726520646966666572656e74206c656e67746873000000000000606082015260800190565b9051815260200190565b90815260200190565b918252602082015260400190565b63ffffffff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561203f57600080fd5b604052919050565b600067ffffffffffffffff82111561205d578081fd5b5060209081020190565b6001600160a01b038116811461207c57600080fd5b50565b801515811461207c57600080fdfea2646970667358221220cfab7201aed3cc446b0121421538eacb10ce39dbfe9d96d30ff9b82e2198ba4c64736f6c63430006060033",
  "deployedBytecode": "0x6080604052600436106101f95760003560e01c80638de932221161010d578063b80777ea116100a0578063e632c2f31161006f578063e632c2f314610505578063eb91d37e1461051a578063edaafe201461052f578063f2f4eb2614610544578063f51e181a14610559576101f9565b8063b80777ea146104b1578063b86677fe146104c6578063cae5d73b146104db578063d6f124f0146104f0576101f9565b8063acc4bd08116100dc578063acc4bd0814610452578063adc7ea3714610467578063ae951b2e14610487578063b49058971461049c576101f9565b80638de93222146104005780639a9ba4da14610413578063a36832a514610428578063abaa99161461043d576101f9565b80634ec1d6611161019057806378e979251161015f57806378e979251461035c5780637adbf973146103715780637dc0d1d01461039157806380009630146103b357806386b117b1146103d3576101f9565b80634ec1d661146101fe5780635c195217146103075780636b6dff0a146103275780636e791c831461033c576101f9565b80633102b21a116101cc5780633102b21a146102905780633c7237ba146102b25780633edc3519146102d257806345f4db28146102f2576101f9565b806306caac7f146101fe5780630c9e1e8e146102295780630fb5a6b41461024c5780631f1cb62b1461026e575b600080fd5b34801561020a57600080fd5b5061021361056e565b6040516102209190611ff8565b60405180910390f35b34801561023557600080fd5b5061023e610574565b604051610220929190611c61565b34801561025857600080fd5b50610261610631565b604051610220919061200f565b34801561027a57600080fd5b50610283610645565b6040516102209190611fee565b34801561029c57600080fd5b506102b06102ab366004611a23565b6106ff565b005b3480156102be57600080fd5b506102836102cd366004611bf7565b61080e565b3480156102de57600080fd5b506102b06102ed366004611bf7565b610844565b3480156102fe57600080fd5b50610213610923565b34801561031357600080fd5b50610213610322366004611bf7565b610927565b34801561033357600080fd5b50610213610963565b34801561034857600080fd5b50610283610357366004611b87565b6109ed565b34801561036857600080fd5b50610261610a13565b34801561037d57600080fd5b506102b061038c3660046119dc565b610a1f565b34801561039d57600080fd5b506103a6610afb565b6040516102209190611c34565b3480156103bf57600080fd5b506102b06103ce3660046119dc565b610b0a565b3480156103df57600080fd5b506103f36103ee366004611a8c565b610bee565b6040516102209190611ce2565b61021361040e3660046119f8565b610c6f565b34801561041f57600080fd5b506103a6610d3b565b34801561043457600080fd5b506103f3610dc2565b34801561044957600080fd5b506102b0610dcd565b34801561045e57600080fd5b50610261610e4b565b34801561047357600080fd5b506102b0610482366004611bf7565b610e73565b34801561049357600080fd5b506103f3610f65565b3480156104a857600080fd5b50610213610f7b565b3480156104bd57600080fd5b50610261610f85565b3480156104d257600080fd5b506103a6610fda565b3480156104e757600080fd5b50610213611029565b3480156104fc57600080fd5b506103f361102f565b34801561051157600080fd5b506102136110ad565b34801561052657600080fd5b506102836110b3565b34801561053b57600080fd5b50610213611101565b34801561055057600080fd5b506103a6611107565b34801561056557600080fd5b50610213611116565b61271081565b60608060036002818054806020026020016040519081016040528092919081815260200182805480156105d057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105b2575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561062257602002820191906000526020600020905b81548152602001906001019080831161060e575b50505050509050915091509091565b600454640100000000900463ffffffff1681565b61064d61182c565b61065561182c565b600154604080516315f789a960e21b815281516000936001600160a01b0316926357de26a49260048082019391829003018186803b15801561069657600080fd5b505afa1580156106aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ce9190611bac565b91509150806106f85760405162461bcd60e51b81526004016106ef90611e44565b60405180910390fd5b5090505b90565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b89061072f903390600401611c34565b60206040518083038186803b15801561074757600080fd5b505afa15801561075b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077f9190611b4f565b61079b5760405162461bcd60e51b81526004016106ef90611f50565b6108088484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080880282810182019093528782529093508792508691829185019084908082843760009201919091525061111c92505050565b50505050565b61081661182c565b60006108218361118c565b9050600061082e84610927565b905061083a82826111ae565b925050505b919050565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610874903390600401611c34565b60206040518083038186803b15801561088c57600080fd5b505afa1580156108a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c49190611b4f565b6108e05760405162461bcd60e51b81526004016106ef90611f50565b6108e9816111dd565b7faceab8a6989ecc545e5a14983924930ea43e5eb96f4d7cd5fda33468b83d9bc5816040516109189190611ff8565b60405180910390a150565b4790565b6000806109338361118c565b905061093d610dc2565b156109535761094b816111e2565b91505061083f565b61095c816111f3565b9392505050565b600061096d610fda565b6001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016109989190611c34565b60206040518083038186803b1580156109b057600080fd5b505afa1580156109c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190611c0f565b905090565b6109f561182c565b610a0d82610a01611246565b9063ffffffff61126816565b92915050565b60045463ffffffff1681565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610a4f903390600401611c34565b60206040518083038186803b158015610a6757600080fd5b505afa158015610a7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9f9190611b4f565b610abb5760405162461bcd60e51b81526004016106ef90611f50565b610ac481611296565b6040516001600160a01b038216907fc17757c327b55fd7741523e1dd00ff52d2a125e38254b540926d1de3a3c9bfa990600090a250565b6001546001600160a01b031681565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610b3a903390600401611c34565b60206040518083038186803b158015610b5257600080fd5b505afa158015610b66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8a9190611b4f565b610ba65760405162461bcd60e51b81526004016106ef90611f50565b600080546001600160a01b0319166001600160a01b038316908117825560405190917fad9400e618eb1344fde53db22397a1b82c765527ecbba3a5c86bcac15090828b91a250565b60008151835114610c115760405162461bcd60e51b81526004016106ef90611f91565b6000805b8351811015610c4357838181518110610c2a57fe5b6020026020010151820191508080600101915050610c15565b506127108114610c655760405162461bcd60e51b81526004016106ef90611d75565b5060019392505050565b60008060009054906101000a90046001600160a01b03166001600160a01b0316639711ac346040518163ffffffff1660e01b815260040160206040518083038186803b158015610cbe57600080fd5b505afa158015610cd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf69190611b4f565b610d125760405162461bcd60e51b81526004016106ef90611d40565b813414610d315760405162461bcd60e51b81526004016106ef90611ebc565b61095c82846112b8565b60008060009054906101000a90046001600160a01b03166001600160a01b0316639a9ba4da6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d8a57600080fd5b505afa158015610d9e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190611b6b565b600554600654101590565b6000610dd7610923565b905080610df65760405162461bcd60e51b81526004016106ef90611dba565b610dff81611387565b610e076113f7565b336001600160a01b03167f249d8eb76d5a22983620d741de2470148d1a9a26ab923aec4262770690d11ebc82604051610e409190611ff8565b60405180910390a250565b60006109e8610e58610f85565b60045463ffffffff6401000000009091048116919061147316565b600054604051631c86b03760e31b81526001600160a01b039091169063e43581b890610ea3903390600401611c34565b60206040518083038186803b158015610ebb57600080fd5b505afa158015610ecf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef39190611b4f565b610f0f5760405162461bcd60e51b81526004016106ef90611f50565b6127108110610f305760405162461bcd60e51b81526004016106ef90611df1565b60078190556040517fd97e0c56536b665b7cc4a52c4b58182120a828b6b662698e2775b2b7214c64f890610918908390611ff8565b6000610f6f610e4b565b63ffffffff1615905090565b600061096d610d3b565b60045460009063ffffffff64010000000082048116918391610fbf9116610fab426114b5565b63ffffffff1661147390919063ffffffff16565b90508163ffffffff168163ffffffff16116106f85792915050565b60008060009054906101000a90046001600160a01b03166001600160a01b031663b86677fe6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d8a57600080fd5b60085481565b6001546040805163a2e6204560e01b815290516000926001600160a01b03169163a2e6204591600480830192602092919082900301818787803b15801561107557600080fd5b505af1158015611089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190611b4f565b60065481565b6110bb61182c565b6110c3610dc2565b156110ee576110e76110d36114df565b6110db610645565b9063ffffffff61150016565b90506106fc565b6109e86110f961152e565b610a01610645565b60075481565b6000546001600160a01b031690565b60055481565b6111268282610bee565b50815161113a90600390602085019061183f565b50805161114e9060029060208401906118a0565b507fbef57aa97c9fb646a566800652d67ee461974b0a5f4b40f8be3f875d44638a4f8282604051611180929190611c61565b60405180910390a15050565b6000610a0d6111a98361119d610645565b9063ffffffff61155a16565b611581565b6111b661182c565b60405180602001604052806111d485670de0b6b3a76400008661159e565b90529392505050565b600555565b6000610a0d6111a98361119d6114df565b6000806112016006546115c8565b9050600061120e826115ed565b600261122361121e6005546115c8565b611601565b86600302028161122f57fe5b040190508161123d8261160c565b03949350505050565b61124e61182c565b506040805160208101909152670de0b6b3a7640000815290565b61127061182c565b60405180602001604052806111d48560000151670de0b6b3a7640000866000015161159e565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60006112c261102f565b506112cc83610927565b90506112d781611619565b6112df610d3b565b6001600160a01b03166340c10f1983836040518363ffffffff1660e01b815260040161130c929190611c48565b600060405180830381600087803b15801561132657600080fd5b505af115801561133a573d6000803e3d6000fd5b50505050816001600160a01b03167f12cb4648cf3058b17ceeb33e579f8b0bc269fe0843f3900b8e24b6c54871703c8483604051611379929190612001565b60405180910390a292915050565b61271060005b6002548110156113f257600082600283815481106113a757fe5b90600052602060002001548502816113bb57fe5b0490506113e981600384815481106113cf57fe5b6000918252602090912001546001600160a01b0316611624565b5060010161138d565b505050565b6113ff610f65565b156114715761140c611688565b611414610d3b565b6001600160a01b03166340c10f19336008546040518363ffffffff1660e01b8152600401611443929190611c48565b600060405180830381600087803b15801561145d57600080fd5b505af1158015610808573d6000803e3d6000fd5b565b600061095c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116ad565b600064010000000082106114db5760405162461bcd60e51b81526004016106ef90611f0a565b5090565b6114e761182c565b600754612710906114fa908203826111ae565b91505090565b61150861182c565b60405180602001604052806111d485600001518560000151670de0b6b3a764000061159e565b61153661182c565b6109e861154761121e6006546115c8565b61155561121e6005546115c8565b6111ae565b61156261182c565b6040805160208101909152835181906111d4908563ffffffff6116e616565b8051600090610a0d90670de0b6b3a764000063ffffffff61172016565b60006115c0826115b4868663ffffffff6116e616565b9063ffffffff61172016565b949350505050565b7f00000000000000000000000000000000000000000000000000000000000000000190565b600060036115fa83611601565b0a92915050565b6000610a0d82611762565b600060026115fa836117b3565b600680549091019055565b60405163b6b55f2560e01b81526001600160a01b0382169063b6b55f25908490611652908290600401611ff8565b6000604051808303818588803b15801561166b57600080fd5b505af115801561167f573d6000803e3d6000fd5b50505050505050565b611691426114b5565b6004805463ffffffff191663ffffffff92909216919091179055565b60008363ffffffff168363ffffffff16111582906116de5760405162461bcd60e51b81526004016106ef9190611ced565b505050900390565b6000826116f557506000610a0d565b8282028284828161170257fe5b041461095c5760405162461bcd60e51b81526004016106ef90611e7b565b600061095c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506117f5565b600060038211156117a5575080600160028204015b8181101561179f5780915060028182858161178e57fe5b04018161179757fe5b049050611777565b5061083f565b811561083f57506001919050565b600060078211156117a5575080600160038204015b8181101561179f5780915060038160020282830285816117e457fe5b0401816117ed57fe5b0490506117c8565b600081836118165760405162461bcd60e51b81526004016106ef9190611ced565b50600083858161182257fe5b0495945050505050565b6040518060200160405280600081525090565b828054828255906000526020600020908101928215611894579160200282015b8281111561189457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061185f565b506114db9291506118e7565b8280548282559060005260206000209081019282156118db579160200282015b828111156118db5782518255916020019190600101906118c0565b506114db92915061190b565b6106fc91905b808211156114db5780546001600160a01b03191681556001016118ed565b6106fc91905b808211156114db5760008155600101611911565b60008083601f840112611936578182fd5b50813567ffffffffffffffff81111561194d578182fd5b602083019150836020808302850101111561196757600080fd5b9250929050565b600082601f83011261197e578081fd5b813561199161198c82612047565b612020565b8181529150602080830190848101818402860182018710156119b257600080fd5b60005b848110156119d1578135845292820192908201906001016119b5565b505050505092915050565b6000602082840312156119ed578081fd5b813561095c81612067565b60008060408385031215611a0a578081fd5b8235611a1581612067565b946020939093013593505050565b60008060008060408587031215611a38578182fd5b843567ffffffffffffffff80821115611a4f578384fd5b611a5b88838901611925565b90965094506020870135915080821115611a73578384fd5b50611a8087828801611925565b95989497509550505050565b60008060408385031215611a9e578182fd5b823567ffffffffffffffff80821115611ab5578384fd5b81850186601f820112611ac6578485fd5b80359250611ad661198c84612047565b80848252602080830192508084018a828389028701011115611af6578889fd5b8894505b86851015611b21578035611b0d81612067565b845260019490940193928101928101611afa565b509096508701359350505080821115611b38578283fd5b50611b458582860161196e565b9150509250929050565b600060208284031215611b60578081fd5b815161095c8161207f565b600060208284031215611b7c578081fd5b815161095c81612067565b600060208284031215611b98578081fd5b611ba26020612020565b9135825250919050565b6000808284036040811215611bbf578283fd5b6020811215611bcc578283fd5b50611bd76020612020565b835181526020840151909250611bec8161207f565b809150509250929050565b600060208284031215611c08578081fd5b5035919050565b600060208284031215611c20578081fd5b5051919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b604080825283519082018190526000906020906060840190828701845b82811015611ca157611c91848351611c27565b9284019290840190600101611c7e565b50505083810382850152845180825285830191830190845b81811015611cd557835183529284019291840191600101611cb9565b5090979650505050505050565b901515815260200190565b6000602080835283518082850152825b81811015611d1957858101830151858201604001528201611cfd565b81811115611d2a5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f436f72655265663a205374696c6c20696e2047656e6573697320506572696f64604082015260600190565b60208082526025908201527f50435653706c69747465723a20726174696f7320646f206e6f7420746f74616c604082015264203130302560d81b606082015260800190565b60208082526019908201527f426f6e64696e6743757276653a204e6f205043562068656c6400000000000000604082015260600190565b60208082526033908201527f426f6e64696e6743757276653a204275666665722065786365656473206f72206040820152726d617463686573206772616e756c617269747960681b606082015260800190565b60208082526019908201527f4f7261636c655265663a206f7261636c6520696e76616c696400000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f426f6e64696e672043757276653a2053656e742076616c756520646f6573206e60408201526d1bdd08195c5d585b081a5b9c1d5d60921b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360408201526532206269747360d01b606082015260800190565b60208082526021908201527f436f72655265663a2043616c6c6572206973206e6f74206120676f7665726e6f6040820152603960f91b606082015260800190565b6020808252603a908201527f50435653706c69747465723a20504356204465706f7369747320616e6420726160408201527f74696f732061726520646966666572656e74206c656e67746873000000000000606082015260800190565b9051815260200190565b90815260200190565b918252602082015260400190565b63ffffffff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561203f57600080fd5b604052919050565b600067ffffffffffffffff82111561205d578081fd5b5060209081020190565b6001600160a01b038116811461207c57600080fd5b50565b801515811461207c57600080fdfea2646970667358221220cfab7201aed3cc446b0121421538eacb10ce39dbfe9d96d30ff9b82e2198ba4c64736f6c63430006060033",
  "immutableReferences": {
    "447": [
      {
        "length": 32,
        "start": 5578
      }
    ]
  },
  "sourceMap": "221:1628:2:-:0;;;620:3:1;590:33;;310:357:2;5:9:-1;2:2;;;27:1;24;17:12;2:2;310:357:2;;;;;;;;;;;;;;;;;;;;;330:5:62;:19;;-1:-1:-1;;;;;;330:19:62;-1:-1:-1;;;;;330:19:62;;;;;494:5:2;330:19:62;515:11:2;532:6;544;556:8;569:9;556:8;515:11;532:6;330:19:62;544:6:2;498:19:66::1;544:6:2::0;498:10:66::1;:19::i;:::-;-1:-1:-1::0;720:37:57;;-1:-1:-1;735:12:57;749:7;720:14;:37::i;:::-;-1:-1:-1;;512:8:81;:20;;;;;;;;;-1:-1:-1;;512:20:81;;;;;;;;;1405:17:1::3;1415:6:::0;1405:9:::3;:17::i;:::-;1426:15;:28:::0;-1:-1:-1;602:1:2::1;::::0;-1:-1:-1;594:5:2;;-1:-1:-1;594:9:2::1;::::0;-1:-1:-1;;;594:9:2;::::1;;586:17;::::0;-1:-1:-1;221:1628:2;;-1:-1:-1;;;;;;221:1628:2;1110:85:66;1163:6;:25;;-1:-1:-1;;;;;;1163:25:66;-1:-1:-1;;;;;1163:25:66;;;;;;;;;;1110:85::o;2066:233:57:-;2157:38;2173:12;2187:7;2157:15;:38::i;:::-;-1:-1:-1;2200:26:57;;;;:11;;:26;;;;;:::i;:::-;-1:-1:-1;2230:16:57;;;;:6;;:16;;;;;:::i;:::-;;2256:39;2273:12;2287:7;2256:39;;;;;;;;;;;;;;;;2066:233;;:::o;3536:63:1:-;3581:5;:14;3536:63::o;1032:411:57:-;1132:4;1173:7;:14;1150:12;:19;:37;1142:108;;;;-1:-1:-1;;;1142:108:57;;;;;;;;;;;;;;;;;1255:10;1274:6;1269:67;1286:7;:14;1282:1;:18;1269:67;;;1321:7;1329:1;1321:10;;;;;;;;;;;;;;1312:19;;;;1302:3;;;;;;;1269:67;;;;349:6;1348:5;:31;1340:81;;;;-1:-1:-1;;;1340:81:57;;;;;;;;;1435:4;1428:11;;;1032:411;;;;;:::o;221:1628:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;221:1628:2;-1:-1:-1;;;;;221:1628:2;;;;;;;;;;;-1:-1:-1;221:1628:2;;;;;;;-1:-1:-1;221:1628:2;;;-1:-1:-1;221:1628:2;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;221:1628:2;;;-1:-1:-1;221:1628:2;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;;221:1628:2;;;-1:-1:-1;221:1628:2;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;5:134:-1;83:13;;-1:-1;;;;;9977:54;;10276:35;;10266:2;;10325:1;;10315:12;912:722;;1040:3;1033:4;1025:6;1021:17;1017:27;1007:2;;-1:-1;;1048:12;1007:2;1088:6;1082:13;1110:80;1125:64;1182:6;1125:64;;;1110:80;;;1218:21;;;1101:89;-1:-1;1262:4;1275:14;;;;1250:17;;;1364;;;1355:27;;;;1352:36;-1:-1;1349:2;;;1401:1;;1391:12;1349:2;1426:1;1411:217;1436:6;1433:1;1430:13;1411:217;;;1720:13;;1504:61;;1579:14;;;;1607;;;;1458:1;1451:9;1411:217;;;1415:14;;;;;1000:634;;;;;1783:132;1860:13;;10194:10;10183:22;;10523:34;;10513:2;;10571:1;;10561:12;1922:1339;;;;;;;;2188:3;2176:9;2167:7;2163:23;2159:33;2156:2;;;-1:-1;;2195:12;2156:2;2289:22;1720:13;2247:74;;2376:64;2432:7;2358:2;2412:9;2408:22;2376:64;;;2498:2;2483:18;;2477:25;2366:74;;-1:-1;;2511:30;;;2508:2;;;-1:-1;;2544:12;2508:2;2646:6;2635:9;2631:22;292:3;285:4;277:6;273:17;269:27;259:2;;-1:-1;;300:12;259:2;340:6;334:13;320:27;;362:80;377:64;434:6;377:64;;362:80;448:16;484:6;477:5;470:21;2358:2;531:3;527:14;520:21;;2358:2;506:6;502:17;636:3;2358:2;;620:6;616:17;506:6;607:27;;604:36;601:2;;;-1:-1;;643:12;601:2;-1:-1;669:10;;663:217;688:6;685:1;682:13;663:217;;;768:48;812:3;800:10;768:48;;;756:61;;710:1;703:9;;;;;2358:2;831:14;;;;859;663:217;;;-1:-1;2721:2;2706:18;;2700:25;2564:99;;-1:-1;2700:25;-1:-1;;;2734:30;;;2731:2;;;-1:-1;;2767:12;2731:2;;2797:89;2878:7;2869:6;2858:9;2854:22;2797:89;;;2787:99;;;2942:64;2998:7;2923:3;2978:9;2974:22;2942:64;;;2932:74;;3062:63;3117:7;3043:3;3097:9;3093:22;3062:63;;;3052:73;;3162:3;3217:9;3213:22;1720:13;3171:74;;2150:1111;;;;;;;;;;;3632:103;-1:-1;;;;;9977:54;3693:37;;3687:48;6097:620;6343:2;6357:47;;;8856:12;;6328:18;;;9390:19;;;6097:620;;9439:4;;9430:14;;;;8552;;;6097:620;4181:260;4206:6;4203:1;4200:13;4181:260;;;3356:46;3398:3;4273:6;4267:13;3356:46;;;3422:14;;;;9130;;;;4228:1;4221:9;4181:260;;;-1:-1;;;6564:20;;;6544:18;;;6537:48;8856:12;;9390:19;;;8552:14;;;;9430;;;-1:-1;4910:260;4935:6;4932:1;4929:13;4910:260;;;4996:13;;6048:37;;9130:14;;;;3604;;;;4228:1;4950:9;4910:260;;;-1:-1;6591:116;;6314:403;-1:-1;;;;;;;6314:403;6724:407;6915:2;6929:47;;;5425:2;6900:18;;;9390:19;5461:34;9430:14;;;5441:55;-1:-1;;;5516:12;;;5509:29;5557:12;;;6886:245;7138:407;7329:2;7343:47;;;5808:2;7314:18;;;9390:19;5844:34;9430:14;;;5824:55;5913:28;5899:12;;;5892:50;5961:12;;;7300:245;7552:256;7614:2;7608:9;7640:17;;;7736:22;;;-1:-1;7700:34;;7697:62;7694:2;;;7772:1;;7762:12;7694:2;7614;7781:22;7592:216;;-1:-1;7592:216;7815:304;;-1:-1;7963:30;;7960:2;;;-1:-1;;7996:12;7960:2;-1:-1;8041:4;8029:17;;;8094:15;;7897:222;;221:1628:2;;;;;;;;;",
  "deployedSourceMap": "221:1628:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;626:48:1;;5:9:-1;2:2;;;27:1;24;17:12;2:2;626:48:1;;;:::i;:::-;;;;;;;;;;;;;;;;1508:115:57;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1508:115:57;;;:::i;:::-;;;;;;;;;436:22:81;;5:9:-1;2:2;;;27:1;24;17:12;2:2;436:22:81;;;:::i;:::-;;;;;;;;903:201:66;;5:9:-1;2:2;;;27:1;24;17:12;2:2;903:201:66;;;:::i;:::-;;;;;;;;1796:153:1;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;1796:153:1;;;;;;;;:::i;:::-;;2728:242;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;2728:242:1;;;;;;;;:::i;1461:115::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;1461:115:1;;;;;;;;:::i;903:98:2:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;903:98:2;;;:::i;2458:267:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;2458:267:1;;;;;;;;:::i;1783:107:62:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1783:107:62;;;:::i;663:138:66:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;663:138:66;;;;;;;;:::i;360:23:81:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;360:23:81;;;:::i;527:130:66:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;527:130:66;;;;;;;;:::i;273:30::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;273:30:66;;;:::i;:::-;;;;;;;;1320:114:62;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;1320:114:62;;;;;;;;:::i;1032:411:57:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;1032:411:57;;;;;;;;:::i;:::-;;;;;;;;670:230:2;;;;;;;;;:::i;1513:76:62:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1513:76:62;;;:::i;2165:93:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;2165:93:1;;;:::i;1952:210::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1952:210:1;;;:::i;785:103:81:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;785:103:81;;;:::i;1579:214:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;1579:214:1;;;;;;;;:::i;598:94:81:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;598:94:81;;;:::i;1677:103:62:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1677:103:62;;;:::i;1037:196:81:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1037:196:81;;;:::i;1592:82:62:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1592:82:62;;;:::i;678:36:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;678:36:1;;;:::i;807:90:66:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;807:90:66;;;:::i;527:35:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;527:35:1;;;:::i;2261:194::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;2261:194:1;;;:::i;590:33::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;590:33:1;;;:::i;1438:72:62:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1438:72:62;;;:::i;498:26:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;498:26:1;;;:::i;626:48::-;668:6;626:48;:::o;1508:115:57:-;1554:16;1572:13;1599:11;1612:6;1591:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1591:28:57;;;-1:-1:-1;1591:28:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1508:115;;:::o;436:22:81:-;;;;;;;;;:::o;903:201:66:-;947:19;;:::i;:::-;976:24;;:::i;:::-;1016:6;;:13;;;-1:-1:-1;;;1016:13:66;;;;1002:10;;-1:-1:-1;;;;;1016:6:66;;:11;;:13;;;;;;;;;;;:6;:13;;;2:2:-1;;;;27:1;24;17:12;2:2;1016:13:66;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1016:13:66;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1016:13:66;;;;;;;;;975:54;;;;1044:5;1036:43;;;;-1:-1:-1;;;1036:43:66;;;;;;;;;;;;;;;;;-1:-1:-1;1093:4:66;-1:-1:-1;903:201:66;;:::o;1796:153:1:-;898:5:62;;:28;;-1:-1:-1;;;898:28:62;;-1:-1:-1;;;;;898:5:62;;;;:16;;:28;;915:10;;898:28;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;898:28:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;898:28:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;898:28:62;;;;;;;;;890:74;;;;-1:-1:-1;;;890:74:62;;;;;;;;;1910:35:1::1;1925:11;;1910:35;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16:::0;::::1;74:27:::0;;;;-1:-1;;1910:35:1::1;::::0;;::::1;::::0;;::::1;::::0;;;;;;;;;;;;;-1:-1:-1;1938:6:1;;-1:-1:-1;1938:6:1;;;;1910:35;::::1;::::0;1938:6;;1910:35;1938:6;1910:35;1:33:-1::1;99:1;81:16:::0;::::1;74:27:::0;;;;-1:-1;1910:14:1::1;::::0;-1:-1:-1;;;1910:35:1:i:1;:::-;1796:153:::0;;;;:::o;2728:242::-;2798:19;;:::i;:::-;2823;2845:27;2863:8;2845:17;:27::i;:::-;2823:49;;2876:14;2893:22;2906:8;2893:12;:22::i;:::-;2876:39;;2926:40;2940:14;2956:9;2926:13;:40::i;:::-;2919:47;;;;2728:242;;;;:::o;1461:115::-;898:5:62;;:28;;-1:-1:-1;;;898:28:62;;-1:-1:-1;;;;;898:5:62;;;;:16;;:28;;915:10;;898:28;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;898:28:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;898:28:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;898:28:62;;;;;;;;;890:74;;;;-1:-1:-1;;;890:74:62;;;;;;;;;1527:17:1::1;1537:6;1527:9;:17::i;:::-;1553:19;1565:6;1553:19;;;;;;;;;;;;;;;1461:115:::0;:::o;903:98:2:-;976:21;903:98;:::o;2458:267:1:-;2525:14;2545:19;2567:27;2585:8;2567:17;:27::i;:::-;2545:49;;2602:9;:7;:9::i;:::-;2598:72;;;2625:40;2650:14;2625:24;:40::i;:::-;2618:47;;;;;2598:72;2680:41;2706:14;2680:25;:41::i;:::-;2673:48;2458:267;-1:-1:-1;;;2458:267:1:o;1783:107:62:-;1837:4;1854:7;:5;:7::i;:::-;:32;;-1:-1:-1;;;1854:32:62;;-1:-1:-1;;;;;1854:17:62;;;;;;;:32;;1880:4;;1854:32;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1854:32:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1854:32:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1854:32:62;;;;;;;;;1847:39;;1783:107;:::o;663:138:66:-;735:19;;:::i;:::-;770:24;788:5;770:13;:11;:13::i;:::-;:17;:24;:17;:24;:::i;:::-;763:31;663:138;-1:-1:-1;;663:138:66:o;360:23:81:-;;;;;;:::o;527:130:66:-;898:5:62;;:28;;-1:-1:-1;;;898:28:62;;-1:-1:-1;;;;;898:5:62;;;;:16;;:28;;915:10;;898:28;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;898:28:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;898:28:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;898:28:62;;;;;;;;;890:74;;;;-1:-1:-1;;;890:74:62;;;;;;;;;598:19:66::1;609:7;598:10;:19::i;:::-;632:21;::::0;-1:-1:-1;;;;;632:21:66;::::1;::::0;::::1;::::0;;;::::1;527:130:::0;:::o;273:30::-;;;-1:-1:-1;;;;;273:30:66;;:::o;1320:114:62:-;898:5;;:28;;-1:-1:-1;;;898:28:62;;-1:-1:-1;;;;;898:5:62;;;;:16;;:28;;915:10;;898:28;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;898:28:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;898:28:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;898:28:62;;;;;;;;;890:74;;;;-1:-1:-1;;;890:74:62;;;;;;;;;1386:5:::1;:19:::0;;-1:-1:-1;;;;;;1386:19:62::1;-1:-1:-1::0;;;;;1386:19:62;::::1;::::0;;::::1;::::0;;1414:16:::1;::::0;1386:19;;1414:16:::1;::::0;::::1;1320:114:::0;:::o;1032:411:57:-;1132:4;1173:7;:14;1150:12;:19;:37;1142:108;;;;-1:-1:-1;;;1142:108:57;;;;;;;;;1255:10;1274:6;1269:67;1286:7;:14;1282:1;:18;1269:67;;;1321:7;1329:1;1321:10;;;;;;;;;;;;;;1312:19;;;;1302:3;;;;;;;1269:67;;;;349:6;1348:5;:31;1340:81;;;;-1:-1:-1;;;1340:81:57;;;;;;;;;-1:-1:-1;1435:4:57;;1032:411;-1:-1:-1;;;1032:411:57:o;670:230:2:-;762:14;1239:5:62;;:32;;;-1:-1:-1;;;1239:32:62;;;;-1:-1:-1;;;;;1239:5:62;;;;:30;;:32;;;;;;;;;;;;;;;:5;:32;;;2:2:-1;;;;27:1;24;17:12;2:2;1239:32:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1239:32:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1239:32:62;;;;;;;;;1231:77;;;;-1:-1:-1;;;1231:77:62;;;;;;;;;803:8:2::1;790:9;:21;782:80;;;::::0;-1:-1:-1;;;782:80:2;;::::1;::::0;::::1;;;;;873:23;883:8;893:2;873:9;:23::i;1513:76:62:-:0;1557:4;1574:5;;:11;;;-1:-1:-1;;;1574:11:62;;;;-1:-1:-1;;;;;1574:5:62;;;;:9;;:11;;;;;;;;;;;;;;;:5;:11;;;2:2:-1;;;;27:1;24;17:12;2:2;1574:11:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1574:11:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1574:11:62;;;;;;;;2165:93:1;2249:5;;2231:14;;:23;;2165:93;:::o;1952:210::-;1994:11;2008:17;:15;:17::i;:::-;1994:31;-1:-1:-1;2037:11:1;2029:49;;;;-1:-1:-1;;;2029:49:1;;;;;;;;;2083:17;2093:6;2083:9;:17::i;:::-;2104:14;:12;:14::i;:::-;2130:28;;2139:10;;2130:28;;;;2151:6;;2130:28;;;;;;;;;;1952:210;:::o;785:103:81:-;831:6;856:25;869:11;:9;:11::i;:::-;856:8;;;;;;;;;;:25;:12;:25;:::i;1579:214:1:-;898:5:62;;:28;;-1:-1:-1;;;898:28:62;;-1:-1:-1;;;;;898:5:62;;;;:16;;:28;;915:10;;898:28;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;898:28:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;898:28:62;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;898:28:62;;;;;;;;;890:74;;;;-1:-1:-1;;;890:74:62;;;;;;;;;668:6:1::1;1655:7;:28;1647:92;;;::::0;-1:-1:-1;;;1647:92:1;;::::1;::::0;::::1;;;;;1743:6;:16:::0;;;1768:21:::1;::::0;::::1;::::0;::::1;::::0;1752:7;;1768:21:::1;;598:94:81::0;642:4;665:15;:13;:15::i;:::-;:20;;;;-1:-1:-1;598:94:81;:::o;1677:103:62:-;1729:4;1746:5;:3;:5::i;1037:196:81:-;1102:8;;1079:6;;1102:8;;;;;;;1079:6;;1173:29;;1192:9;1173:14;:3;:12;:14::i;:::-;:18;;;;:29;;;;:::i;:::-;1162:40;;1217:1;1213:5;;:1;:5;;;:13;;1225:1;1037:196;-1:-1:-1;;1037:196:81:o;1592:82:62:-;1638:6;1657:5;;:13;;;-1:-1:-1;;;1657:13:62;;;;-1:-1:-1;;;;;1657:5:62;;;;:11;;:13;;;;;;;;;;;;;;;:5;:13;;;2:2:-1;;;;27:1;24;17:12;678:36:1;;;;:::o;807:90:66:-;875:6;;:15;;;-1:-1:-1;;;875:15:66;;;;855:4;;-1:-1:-1;;;;;875:6:66;;-1:-1:-1;;875:15:66;;;;;;;;;;;;;;855:4;875:6;:15;;;2:2:-1;;;;27:1;24;17:12;2:2;875:15:66;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;875:15:66;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;875:15:66;;;;;;;;527:35:1;;;;:::o;2261:194::-;2317:19;;:::i;:::-;2346:9;:7;:9::i;:::-;2342:55;;;2369:23;2379:12;:10;:12::i;:::-;2369:5;:3;:5::i;:::-;:9;:23;:9;:23;:::i;:::-;2362:30;;;;2342:55;2407:44;2417:33;:31;:33::i;:::-;2407:5;:3;:5::i;590:33::-;;;;:::o;1438:72:62:-;1483:5;1501;-1:-1:-1;;;;;1501:5:62;;1438:72::o;498:26:1:-;;;;:::o;2066:233:57:-;2157:38;2173:12;2187:7;2157:15;:38::i;:::-;-1:-1:-1;2200:26:57;;;;:11;;:26;;;;;:::i;:::-;-1:-1:-1;2230:16:57;;;;:6;;:16;;;;;:::i;:::-;;2256:39;2273:12;2287:7;2256:39;;;;;;;;;;;;;;;;2066:233;;:::o;2973:117:1:-;3038:4;3055:31;:19;3065:8;3055:5;:3;:5::i;:::-;:9;:19;:9;:19;:::i;:::-;:29;:31::i;1540:174:14:-;1634:11;;:::i;:::-;1668:39;;;;;;;;1682:22;1693:1;1002:6;1702:1;1682:10;:22::i;:::-;1668:39;;1661:46;1540:174;-1:-1:-1;;;1540:174:14:o;3536:63:1:-;3581:5;:14;3536:63::o;4105:130::-;4176:4;4193:38;:26;4210:8;4193:12;:10;:12::i;1117:330:2:-;1207:14;1227:15;1245:22;1252:14;;1245:6;:22::i;:::-;1227:40;;1280:13;1348:27;:10;:25;:27::i;:::-;1343:1;1320:20;:13;1327:5;;1320:6;:13::i;:::-;:18;:20::i;:::-;1301:16;1297:1;:20;:43;:47;;;;;;1296:79;1280:95;;1413:10;1386:24;:8;:22;:24::i;:::-;:37;;1117:330;-1:-1:-1;;;;1117:330:2:o;1273:112:14:-;1323:11;;:::i;:::-;-1:-1:-1;1357:21:14;;;;;;;;;1002:6;1357:21;;1273:112;:::o;3905:198::-;4008:11;;:::i;:::-;4042:54;;;;;;;;4056:37;4067:4;:10;;;1002:6;4085:1;:7;;;4056:10;:37::i;1110:85:66:-;1163:6;:25;;-1:-1:-1;;;;;;1163:25:66;-1:-1:-1;;;;;1163:25:66;;;;;;;;;;1110:85::o;3166:277:1:-;3230:14;3251;:12;:14::i;:::-;;3285:22;3298:8;3285:12;:22::i;:::-;3273:34;;3312;3336:9;3312:23;:34::i;:::-;3350:5;:3;:5::i;:::-;:25;;-1:-1:-1;;;3350:25:1;;-1:-1:-1;;;;;3350:10:1;;;;;;;:25;;3361:2;;3365:9;;3350:25;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3350:25:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;3385:33:1;;-1:-1:-1;;;;;3385:33:1;;;-1:-1:-1;3385:33:1;;-1:-1:-1;3385:33:1;;3398:8;;3408:9;;3385:33;;;;;;;;;;3166:277;;;;:::o;2425:228:57:-;349:6;2469:16;2514:136;2531:6;:13;2527:17;;2514:136;;;2556:11;2590;2578:6;2585:1;2578:9;;;;;;;;;;;;;;;;2570:5;:17;:31;;;;;;2556:45;;2606:39;2622:6;2630:11;2642:1;2630:14;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2630:14:57;2606:15;:39::i;:::-;-1:-1:-1;2546:3:57;;2514:136;;;;2425:228;;:::o;3602:133:1:-;3651:13;:11;:13::i;:::-;3647:85;;;3671:12;:10;:12::i;:::-;3688:5;:3;:5::i;:::-;3711:15;;3688:39;;-1:-1:-1;;;3688:39:1;;-1:-1:-1;;;;;3688:10:1;;;;;;;:39;;3699:10;;3711:15;3688:39;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3688:39:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;3647:85:1;3602:133::o;1386:131:80:-;1442:6;1467:43;1471:1;1474;1467:43;;;;;;;;;;;;;;;;;:3;:43::i;2009:176:92:-;2065:6;2099:5;2091;:13;2083:65;;;;-1:-1:-1;;;2083:65:92;;;;;;;;;-1:-1:-1;2172:5:92;2009:176::o;3932:169:1:-;3976:19;;:::i;:::-;4077:6;;668;;4049:48;;4063:20;;668:6;4049:13;:48::i;:::-;4042:55;;;3932:169;:::o;3701:198:14:-;3804:11;;:::i;:::-;3838:54;;;;;;;;3852:37;3863:4;:10;;;3875:1;:7;;;1002:6;3852:10;:37::i;1450:176:2:-;1524:19;;:::i;:::-;1556:66;1570:29;:22;1577:14;;1570:6;:22::i;:29::-;1601:20;:13;1608:5;;1601:6;:13::i;:20::-;1556:13;:66::i;2377:174:14:-;2476:11;;:::i;:::-;2510:34;;;;;;;;;2524:10;;2510:34;;2524:17;;2539:1;2524:17;:14;:17;:::i;4900:113::-;4986:10;;4960:7;;4986:20;;1002:6;4986:20;:14;:20;:::i;5066:215::-;5206:7;5236:38;5262:11;5236:21;:6;5247:9;5236:21;:10;:21;:::i;:::-;:25;:38;:25;:38;:::i;:::-;5229:45;5066:215;-1:-1:-1;;;;5066:215:14:o;1771:76:2:-;1834:5;:9;;1771:76::o;515:97:78:-;570:4;604:1;593:7;598:1;593:4;:7::i;:::-;:12;;515:97;-1:-1:-1;;515:97:78:o;740:93::-;785:4;808:18;824:1;808:15;:18::i;634:100::-;688:4;726:1;711:11;720:1;711:8;:11::i;3446:87:1:-;3505:14;:24;;;;;;;3446:87::o;1629:139:2:-;1709:55;;-1:-1:-1;;;1709:55:2;;-1:-1:-1;;;;;1709:31:2;;;-1:-1:-1;;1749:6:2;;1709:55;;1749:6;;1709:55;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1709:55:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1709:55:2;;;;;1629:139;;:::o;1239:128:81:-;1346:14;:3;:12;:14::i;:::-;1334:9;:26;;-1:-1:-1;;1334:26:81;;;;;;;;;;;;1239:128::o;1808:183:80:-;1892:6;1923:1;1918:6;;:1;:6;;;;1926:12;1910:29;;;;;-1:-1:-1;;;1910:29:80;;;;;;;;;;-1:-1:-1;;;1960:5:80;;;1808:183::o;2267:459:15:-;2325:7;2566:6;2562:45;;-1:-1:-1;2595:1:15;2588:8;;2562:45;2629:5;;;2633:1;2629;:5;:1;2652:5;;;;;:10;2644:56;;;;-1:-1:-1;;;2644:56:15;;;;;;;;3188:130;3246:7;3272:39;3276:1;3279;3272:39;;;;;;;;;;;;;;;;;:3;:39::i;235:314:93:-;280:6;306:1;302;:5;298:223;;;-1:-1:-1;327:1:93;359;355;351:5;;:9;374:89;385:1;381;:5;374:89;;;410:1;406:5;;447:1;442;438;434;:5;;;;;;:9;433:15;;;;;;429:19;;374:89;;;298:223;;;;483:6;;479:42;;-1:-1:-1;509:1:93;235:314;;;:::o;185:308:78:-;234:6;260:1;256;:5;252:235;;;-1:-1:-1;281:1:78;313;309;305:5;;:9;328:101;339:1;335;:5;328:101;;;364:1;360:5;;413:1;407;403;:5;397:1;393;:5;388:1;:11;;;;;;:21;387:27;;;;;;383:31;;328:101;;3800:272:15;3886:7;3920:12;3913:5;3905:28;;;;-1:-1:-1;;;3905:28:15;;;;;;;;;;;3943:9;3959:1;3955;:5;;;;;;;3800:272;-1:-1:-1;;;;;3800:272:15:o;221:1628:2:-;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;221:1628:2;-1:-1:-1;;;;;221:1628:2;;;;;;;;;;;-1:-1:-1;221:1628:2;;;;;;;-1:-1:-1;221:1628:2;;;-1:-1:-1;221:1628:2;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;221:1628:2;;;-1:-1:-1;221:1628:2;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;;221:1628:2;;;-1:-1:-1;221:1628:2;;;;;;;;;;;;;;;;;;;;;160:352:-1;;;290:3;283:4;275:6;271:17;267:27;257:2;;-1:-1;;298:12;257:2;-1:-1;328:20;;368:18;357:30;;354:2;;;-1:-1;;390:12;354:2;434:4;426:6;422:17;410:29;;485:3;434:4;;469:6;465:17;426:6;451:32;;448:41;445:2;;;502:1;;492:12;445:2;250:262;;;;;;1649:707;;1766:3;1759:4;1751:6;1747:17;1743:27;1733:2;;-1:-1;;1774:12;1733:2;1821:6;1808:20;1843:80;1858:64;1915:6;1858:64;;;1843:80;;;1951:21;;;1834:89;-1:-1;1995:4;2008:14;;;;1983:17;;;2097;;;2088:27;;;;2085:36;-1:-1;2082:2;;;2134:1;;2124:12;2082:2;2159:1;2144:206;2169:6;2166:1;2163:13;2144:206;;;3638:20;;2237:50;;2301:14;;;;2329;;;;2191:1;2184:9;2144:206;;;2148:14;;;;;1726:630;;;;;3849:241;;3953:2;3941:9;3932:7;3928:23;3924:32;3921:2;;;-1:-1;;3959:12;3921:2;85:6;72:20;97:33;124:5;97:33;;4097:366;;;4218:2;4206:9;4197:7;4193:23;4189:32;4186:2;;;-1:-1;;4224:12;4186:2;85:6;72:20;97:33;124:5;97:33;;;4276:63;4376:2;4415:22;;;;3638:20;;-1:-1;;;4180:283;4470:678;;;;;4661:2;4649:9;4640:7;4636:23;4632:32;4629:2;;;-1:-1;;4667:12;4629:2;4725:17;4712:31;4763:18;;4755:6;4752:30;4749:2;;;-1:-1;;4785:12;4749:2;4823:80;4895:7;4886:6;4875:9;4871:22;4823:80;;;4813:90;;-1:-1;4813:90;-1:-1;4968:2;4953:18;;4940:32;;-1:-1;4981:30;;;4978:2;;;-1:-1;;5014:12;4978:2;;5052:80;5124:7;5115:6;5104:9;5100:22;5052:80;;;4623:525;;;;-1:-1;5042:90;-1:-1;;;;4623:525;5155:638;;;5326:2;5314:9;5305:7;5301:23;5297:32;5294:2;;;-1:-1;;5332:12;5294:2;5390:17;5377:31;5428:18;;5420:6;5417:30;5414:2;;;-1:-1;;5450:12;5414:2;5541:6;5530:9;5526:22;655:3;648:4;640:6;636:17;632:27;622:2;;-1:-1;;663:12;622:2;710:6;697:20;683:34;;732:80;747:64;804:6;747:64;;732:80;818:16;854:6;847:5;840:21;884:4;;901:3;897:14;890:21;;884:4;876:6;872:17;1006:3;884:4;;990:6;986:17;876:6;977:27;;974:36;971:2;;;-1:-1;;1013:12;971:2;-1:-1;1039:10;;1033:206;1058:6;1055:1;1052:13;1033:206;;;85:6;72:20;97:33;124:5;97:33;;;1126:50;;1080:1;1073:9;;;;;1190:14;;;;1218;;1033:206;;;-1:-1;5470:88;;-1:-1;5608:18;;5595:32;;-1:-1;;;5636:30;;;5633:2;;;-1:-1;;5669:12;5633:2;;5699:78;5769:7;5760:6;5749:9;5745:22;5699:78;;;5689:88;;;5288:505;;;;;;5800:257;;5912:2;5900:9;5891:7;5887:23;5883:32;5880:2;;;-1:-1;;5918:12;5880:2;2445:6;2439:13;2457:30;2481:5;2457:30;;6064:295;;6195:2;6183:9;6174:7;6170:23;6166:32;6163:2;;;-1:-1;;6201:12;6163:2;2599:6;2593:13;2611:49;2654:5;2611:49;;6664:285;;6790:2;6778:9;6769:7;6765:23;6761:32;6758:2;;;-1:-1;;6796:12;6758:2;3014:20;6790:2;3014:20;;;3638;;3092:75;;-1:-1;3099:16;6752:197;-1:-1;6752:197;6956:437;;;7095:9;7086:7;7082:23;7107:2;7082:23;7078:32;7075:2;;;-1:-1;;7113:12;7075:2;3343:4;3322:19;3318:30;3315:2;;;-1:-1;;3351:12;3315:2;;3379:20;3343:4;3379:20;;;3786:13;;3457:86;;3343:4;7345:22;;2439:13;3464:16;;-1:-1;2457:30;2439:13;2457:30;;;7306:71;;;;7069:324;;;;;;7400:241;;7504:2;7492:9;7483:7;7479:23;7475:32;7472:2;;;-1:-1;;7510:12;7472:2;-1:-1;3638:20;;7466:175;-1:-1;7466:175;7648:263;;7763:2;7751:9;7742:7;7738:23;7734:32;7731:2;;;-1:-1;;7769:12;7731:2;-1:-1;3786:13;;7725:186;-1:-1;7725:186;8431:103;-1:-1;;;;;27043:54;8492:37;;8486:48;15681:213;-1:-1;;;;;27043:54;;;;8492:37;;15799:2;15784:18;;15770:124;16137:340;-1:-1;;;;;27043:54;;;;8361:58;;16463:2;16448:18;;15395:37;16291:2;16276:18;;16262:215;16815:620;17061:2;17075:47;;;25475:12;;17046:18;;;26138:19;;;16815:620;;26187:4;;26178:14;;;;25171;;;16815:620;9100:260;9125:6;9122:1;9119:13;9100:260;;;8006:46;8048:3;9192:6;9186:13;8006:46;;;8072:14;;;;25878;;;;9147:1;9140:9;9100:260;;;-1:-1;;;17282:20;;;17262:18;;;17255:48;25475:12;;26138:19;;;25171:14;;;;26178;;;-1:-1;9829:260;9854:6;9851:1;9848:13;9829:260;;;9915:13;;15395:37;;25878:14;;;;8254;;;;9147:1;9869:9;9829:260;;;-1:-1;17309:116;;17032:403;-1:-1;;;;;;;17032:403;17442:201;26729:13;;26722:21;10184:34;;17554:2;17539:18;;17525:118;18648:301;;18786:2;;18807:17;18800:47;11025:5;25475:12;26150:6;18786:2;18775:9;18771:18;26138:19;-1:-1;28884:101;28898:6;28895:1;28892:13;28884:101;;;28965:11;;;;;28959:18;28946:11;;;26178:14;28946:11;28939:39;28913:10;;28884:101;;;29000:6;28997:1;28994:13;28991:2;;;-1:-1;26178:14;29056:6;18775:9;29047:16;;29040:27;28991:2;-1:-1;29172:7;29156:14;-1:-1;;29152:28;11183:39;;;;26178:14;11183:39;;18757:192;-1:-1;;;18757:192;18956:407;19147:2;19161:47;;;19132:18;;;26138:19;11495:34;26178:14;;;11475:55;11549:12;;;19118:245;19370:407;19561:2;19575:47;;;11800:2;19546:18;;;26138:19;11836:34;26178:14;;;11816:55;-1:-1;;;11891:12;;;11884:29;11932:12;;;19532:245;19784:407;19975:2;19989:47;;;12183:2;19960:18;;;26138:19;12219:27;26178:14;;;12199:48;12266:12;;;19946:245;20198:407;20389:2;20403:47;;;12517:2;20374:18;;;26138:19;12553:34;26178:14;;;12533:55;-1:-1;;;12608:12;;;12601:43;12663:12;;;20360:245;20612:407;20803:2;20817:47;;;12914:2;20788:18;;;26138:19;12950:27;26178:14;;;12930:48;12997:12;;;20774:245;21026:407;21217:2;21231:47;;;13248:2;21202:18;;;26138:19;13284:34;26178:14;;;13264:55;-1:-1;;;13339:12;;;13332:25;13376:12;;;21188:245;21440:407;21631:2;21645:47;;;13627:2;21616:18;;;26138:19;13663:34;26178:14;;;13643:55;-1:-1;;;13718:12;;;13711:38;13768:12;;;21602:245;21854:407;22045:2;22059:47;;;14019:2;22030:18;;;26138:19;14055:34;26178:14;;;14035:55;-1:-1;;;14110:12;;;14103:30;14152:12;;;22016:245;22268:407;22459:2;22473:47;;;14403:2;22444:18;;;26138:19;14439:34;26178:14;;;14419:55;-1:-1;;;14494:12;;;14487:25;14531:12;;;22430:245;22682:407;22873:2;22887:47;;;14782:2;22858:18;;;26138:19;14818:34;26178:14;;;14798:55;14887:28;14873:12;;;14866:50;14935:12;;;22844:245;23096:301;15214:23;;15395:37;;23258:2;23243:18;;23229:168;23404:213;15395:37;;;23522:2;23507:18;;23493:124;23624:324;15395:37;;;23934:2;23919:18;;15395:37;23770:2;23755:18;;23741:207;23955:209;27260:10;27249:22;;;;15633:36;;24071:2;24056:18;;24042:122;24171:256;24233:2;24227:9;24259:17;;;24334:18;24319:34;;24355:22;;;24316:62;24313:2;;;24391:1;;24381:12;24313:2;24233;24400:22;24211:216;;-1:-1;24211:216;24434:304;;24593:18;24585:6;24582:30;24579:2;;;-1:-1;;24615:12;24579:2;-1:-1;24660:4;24648:17;;;24713:15;;24516:222;29193:117;-1:-1;;;;;27043:54;;29252:35;;29242:2;;29301:1;;29291:12;29242:2;29236:74;;29317:111;29398:5;26729:13;26722:21;29376:5;29373:32;29363:2;;29419:1;;29409:12",
  "source": "pragma solidity ^0.6.0;\npragma experimental ABIEncoderV2;\n\nimport \"./BondingCurve.sol\";\nimport \"../pcv/IPCVDeposit.sol\";\n\n/// @title a square root growth bonding curve for purchasing FEI with ETH\n/// @author Fei Protocol\ncontract EthBondingCurve is BondingCurve {\n\n\tuint internal immutable SHIFT; // k shift\n\n\tconstructor(\n\t\tuint scale, \n\t\taddress core, \n\t\taddress[] memory pcvDeposits, \n\t\tuint[] memory ratios, \n\t\taddress oracle,\n\t\tuint32 duration,\n\t\tuint incentive\n\t) public BondingCurve(\n\t\t\tscale, \n\t\t\tcore, \n\t\t\tpcvDeposits, \n\t\t\tratios, \n\t\t\toracle, \n\t\t\tduration,\n\t\t\tincentive\n\t) {\n\t\tSHIFT = scale / 3; // Enforces a .50c starting price per bonding curve formula\n\t}\n\n\tfunction purchase(address to, uint amountIn) external override payable postGenesis returns (uint amountOut) {\n\t\trequire(msg.value == amountIn, \"Bonding Curve: Sent value does not equal input\");\n\t\treturn _purchase(amountIn, to);\n\t}\n\n\tfunction getTotalPCVHeld() public view override returns(uint) {\n\t\treturn address(this).balance;\n\t}\n\n\t// Represents the integral solved for upper bound of P(x) = ((k+X)/(k+S))^1/2 * O. Subtracting starting point C\n\tfunction _getBondingCurveAmountOut(uint adjustedAmountIn) internal view override returns (uint amountOut) {\n\t\tuint shiftTotal = _shift(totalPurchased); // k + C\n\t\tuint radicand = (3 * adjustedAmountIn * _shift(scale).sqrt() / 2) + shiftTotal.threeHalfsRoot();\n\t\treturn radicand.twoThirdsRoot() - shiftTotal; // result - (k + C)\n\t}\n\n\tfunction _getBondingCurvePriceMultiplier() internal view override returns(Decimal.D256 memory) {\n\t\treturn Decimal.ratio(_shift(totalPurchased).sqrt(), _shift(scale).sqrt());\n\t}\n\n\tfunction _allocateSingle(uint amount, address pcvDeposit) internal override {\n\t\tIPCVDeposit(pcvDeposit).deposit{value : amount}(amount);\n\t}\n\n\tfunction _shift(uint x) internal view returns(uint) {\n\t\treturn SHIFT + x;\n\t}\n}\n\n",
  "sourcePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/EthBondingCurve.sol",
  "ast": {
    "absolutePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/EthBondingCurve.sol",
    "exportedSymbols": {
      "EthBondingCurve": [
        613
      ]
    },
    "id": 614,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 439,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "id": 440,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "24:33:2"
      },
      {
        "absolutePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/BondingCurve.sol",
        "file": "./BondingCurve.sol",
        "id": 441,
        "nodeType": "ImportDirective",
        "scope": 614,
        "sourceUnit": 438,
        "src": "59:28:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/pcv/IPCVDeposit.sol",
        "file": "../pcv/IPCVDeposit.sol",
        "id": 442,
        "nodeType": "ImportDirective",
        "scope": 614,
        "sourceUnit": 11486,
        "src": "88:32:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 444,
              "name": "BondingCurve",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 437,
              "src": "249:12:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BondingCurve_$437",
                "typeString": "contract BondingCurve"
              }
            },
            "id": 445,
            "nodeType": "InheritanceSpecifier",
            "src": "249:12:2"
          }
        ],
        "contractDependencies": [
          437,
          734,
          11740,
          13101,
          13149,
          13192,
          13356,
          16610
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 443,
          "nodeType": "StructuredDocumentation",
          "src": "122:99:2",
          "text": "@title a square root growth bonding curve for purchasing FEI with ETH\n @author Fei Protocol"
        },
        "fullyImplemented": true,
        "id": 613,
        "linearizedBaseContracts": [
          613,
          437,
          16610,
          11740,
          13356,
          13101,
          13149,
          13192,
          734
        ],
        "name": "EthBondingCurve",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 447,
            "mutability": "immutable",
            "name": "SHIFT",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 613,
            "src": "266:29:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 446,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "266:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 481,
              "nodeType": "Block",
              "src": "582:85:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 475,
                      "name": "SHIFT",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 447,
                      "src": "586:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 476,
                        "name": "scale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 449,
                        "src": "594:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "602:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "594:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "586:17:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "586:17:2"
                }
              ]
            },
            "documentation": null,
            "id": 482,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 466,
                    "name": "scale",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 449,
                    "src": "494:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 467,
                    "name": "core",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 451,
                    "src": "505:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 468,
                    "name": "pcvDeposits",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 454,
                    "src": "515:11:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 469,
                    "name": "ratios",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 457,
                    "src": "532:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 470,
                    "name": "oracle",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 459,
                    "src": "544:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 471,
                    "name": "duration",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 461,
                    "src": "556:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 472,
                    "name": "incentive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 463,
                    "src": "569:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 473,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 465,
                  "name": "BondingCurve",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 437,
                  "src": "477:12:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_BondingCurve_$437_$",
                    "typeString": "type(contract BondingCurve)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "477:104:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 449,
                  "mutability": "mutable",
                  "name": "scale",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "325:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 448,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 451,
                  "mutability": "mutable",
                  "name": "core",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "340:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 454,
                  "mutability": "mutable",
                  "name": "pcvDeposits",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "357:28:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 452,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "357:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 453,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "357:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 457,
                  "mutability": "mutable",
                  "name": "ratios",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "390:20:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 455,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "390:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 456,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "390:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 459,
                  "mutability": "mutable",
                  "name": "oracle",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "415:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 458,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 461,
                  "mutability": "mutable",
                  "name": "duration",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "433:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 460,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 463,
                  "mutability": "mutable",
                  "name": "incentive",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "452:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 462,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "321:148:2"
            },
            "returnParameters": {
              "id": 474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "582:0:2"
            },
            "scope": 613,
            "src": "310:357:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              649
            ],
            "body": {
              "id": 507,
              "nodeType": "Block",
              "src": "778:122:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 495,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "790:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "790:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 497,
                          "name": "amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "803:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "790:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "426f6e64696e672043757276653a2053656e742076616c756520646f6573206e6f7420657175616c20696e707574",
                        "id": 499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "813:48:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ae6f84c6340aeb633ca7ebc241de8a77742e20883e83e782a0c7722da3237621",
                          "typeString": "literal_string \"Bonding Curve: Sent value does not equal input\""
                        },
                        "value": "Bonding Curve: Sent value does not equal input"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ae6f84c6340aeb633ca7ebc241de8a77742e20883e83e782a0c7722da3237621",
                          "typeString": "literal_string \"Bonding Curve: Sent value does not equal input\""
                        }
                      ],
                      "id": 494,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "782:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "782:80:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 501,
                  "nodeType": "ExpressionStatement",
                  "src": "782:80:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 503,
                        "name": "amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "883:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 504,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 484,
                        "src": "893:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 502,
                      "name": "_purchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 351,
                      "src": "873:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "873:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 493,
                  "id": 506,
                  "nodeType": "Return",
                  "src": "866:30:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8de93222",
            "id": 508,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 490,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 489,
                  "name": "postGenesis",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 12991,
                  "src": "741:11:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "741:11:2"
              }
            ],
            "name": "purchase",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 488,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "724:8:2"
            },
            "parameters": {
              "id": 487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 484,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 508,
                  "src": "688:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 483,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "688:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 486,
                  "mutability": "mutable",
                  "name": "amountIn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 508,
                  "src": "700:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 485,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "700:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "687:27:2"
            },
            "returnParameters": {
              "id": 493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 492,
                  "mutability": "mutable",
                  "name": "amountOut",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 508,
                  "src": "762:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 491,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "762:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "761:16:2"
            },
            "scope": 613,
            "src": "670:230:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              313
            ],
            "body": {
              "id": 520,
              "nodeType": "Block",
              "src": "965:36:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 516,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "984:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_EthBondingCurve_$613",
                            "typeString": "contract EthBondingCurve"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_EthBondingCurve_$613",
                            "typeString": "contract EthBondingCurve"
                          }
                        ],
                        "id": 515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "976:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 514,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "976:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "976:13:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "976:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 513,
                  "id": 519,
                  "nodeType": "Return",
                  "src": "969:28:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "45f4db28",
            "id": 521,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalPCVHeld",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 510,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "942:8:2"
            },
            "parameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "927:2:2"
            },
            "returnParameters": {
              "id": 513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 512,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 521,
                  "src": "959:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 511,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "958:6:2"
            },
            "scope": 613,
            "src": "903:98:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              402
            ],
            "body": {
              "id": 560,
              "nodeType": "Block",
              "src": "1223:224:2",
              "statements": [
                {
                  "assignments": [
                    530
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 530,
                      "mutability": "mutable",
                      "name": "shiftTotal",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 560,
                      "src": "1227:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 529,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1227:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 534,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 532,
                        "name": "totalPurchased",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62,
                        "src": "1252:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 531,
                      "name": "_shift",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 612,
                      "src": "1245:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1245:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1227:40:2"
                },
                {
                  "assignments": [
                    536
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 536,
                      "mutability": "mutable",
                      "name": "radicand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 560,
                      "src": "1280:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 535,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1280:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 553,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 547,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 539,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "hexValue": "33",
                                "id": 537,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1297:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 538,
                                "name": "adjustedAmountIn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 523,
                                "src": "1301:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1297:20:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 541,
                                      "name": "scale",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 59,
                                      "src": "1327:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 540,
                                    "name": "_shift",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 612,
                                    "src": "1320:6:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                      "typeString": "function (uint256) view returns (uint256)"
                                    }
                                  },
                                  "id": 542,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1320:13:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 543,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sqrt",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 16290,
                                "src": "1320:18:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 544,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1320:20:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1297:43:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 546,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1343:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "1297:47:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 548,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1296:49:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 549,
                          "name": "shiftTotal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 530,
                          "src": "1348:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "threeHalfsRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 16263,
                        "src": "1348:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint256)"
                        }
                      },
                      "id": 551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1348:27:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1296:79:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1280:95:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 554,
                          "name": "radicand",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "1386:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "twoThirdsRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 16277,
                        "src": "1386:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint256)"
                        }
                      },
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1386:24:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 557,
                      "name": "shiftTotal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 530,
                      "src": "1413:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1386:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 528,
                  "id": 559,
                  "nodeType": "Return",
                  "src": "1379:44:2"
                }
              ]
            },
            "documentation": null,
            "id": 561,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getBondingCurveAmountOut",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 525,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1189:8:2"
            },
            "parameters": {
              "id": 524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 523,
                  "mutability": "mutable",
                  "name": "adjustedAmountIn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 561,
                  "src": "1152:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 522,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1152:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1151:23:2"
            },
            "returnParameters": {
              "id": 528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 527,
                  "mutability": "mutable",
                  "name": "amountOut",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 561,
                  "src": "1207:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 526,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1206:16:2"
            },
            "scope": 613,
            "src": "1117:330:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              395
            ],
            "body": {
              "id": 581,
              "nodeType": "Block",
              "src": "1545:81:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 570,
                                "name": "totalPurchased",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62,
                                "src": "1577:14:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 569,
                              "name": "_shift",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 612,
                              "src": "1570:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 571,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1570:22:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 572,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sqrt",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16290,
                          "src": "1570:27:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1570:29:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 575,
                                "name": "scale",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59,
                                "src": "1608:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 574,
                              "name": "_shift",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 612,
                              "src": "1601:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 576,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1601:13:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 577,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sqrt",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16290,
                          "src": "1601:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1601:20:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 567,
                        "name": "Decimal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5411,
                        "src": "1556:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Decimal_$5411_$",
                          "typeString": "type(library Decimal)"
                        }
                      },
                      "id": 568,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "ratio",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5002,
                      "src": "1556:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_struct$_D256_$4949_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (struct Decimal.D256 memory)"
                      }
                    },
                    "id": 579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1556:66:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_D256_$4949_memory_ptr",
                      "typeString": "struct Decimal.D256 memory"
                    }
                  },
                  "functionReturnParameters": 566,
                  "id": 580,
                  "nodeType": "Return",
                  "src": "1549:73:2"
                }
              ]
            },
            "documentation": null,
            "id": 582,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getBondingCurvePriceMultiplier",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 563,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1507:8:2"
            },
            "parameters": {
              "id": 562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1490:2:2"
            },
            "returnParameters": {
              "id": 566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 565,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 582,
                  "src": "1524:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_D256_$4949_memory_ptr",
                    "typeString": "struct Decimal.D256"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 564,
                    "name": "Decimal.D256",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4949,
                    "src": "1524:12:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_D256_$4949_storage_ptr",
                      "typeString": "struct Decimal.D256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1523:21:2"
            },
            "scope": 613,
            "src": "1450:176:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              11670
            ],
            "body": {
              "id": 599,
              "nodeType": "Block",
              "src": "1705:63:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 596,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 584,
                        "src": "1757:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 591,
                              "name": "pcvDeposit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 586,
                              "src": "1721:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 590,
                            "name": "IPCVDeposit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11485,
                            "src": "1709:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IPCVDeposit_$11485_$",
                              "typeString": "type(contract IPCVDeposit)"
                            }
                          },
                          "id": 592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1709:23:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IPCVDeposit_$11485",
                            "typeString": "contract IPCVDeposit"
                          }
                        },
                        "id": 593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "deposit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11470,
                        "src": "1709:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) payable external"
                        }
                      },
                      "id": 595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "argumentTypes": null,
                          "id": 594,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 584,
                          "src": "1749:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "1709:47:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$returns$__$value",
                        "typeString": "function (uint256) payable external"
                      }
                    },
                    "id": 597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1709:55:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 598,
                  "nodeType": "ExpressionStatement",
                  "src": "1709:55:2"
                }
              ]
            },
            "documentation": null,
            "id": 600,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_allocateSingle",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 588,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1696:8:2"
            },
            "parameters": {
              "id": 587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 584,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "1654:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 583,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1654:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 586,
                  "mutability": "mutable",
                  "name": "pcvDeposit",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "1667:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 585,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1667:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1653:33:2"
            },
            "returnParameters": {
              "id": 589,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1705:0:2"
            },
            "scope": 613,
            "src": "1629:139:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 611,
              "nodeType": "Block",
              "src": "1823:24:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 607,
                      "name": "SHIFT",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 447,
                      "src": "1834:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 608,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 602,
                      "src": "1842:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1834:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 606,
                  "id": 610,
                  "nodeType": "Return",
                  "src": "1827:16:2"
                }
              ]
            },
            "documentation": null,
            "id": 612,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_shift",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 602,
                  "mutability": "mutable",
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1787:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 601,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1787:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1786:8:2"
            },
            "returnParameters": {
              "id": 606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 605,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1817:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 604,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1817:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1816:6:2"
            },
            "scope": 613,
            "src": "1771:76:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 614,
        "src": "221:1628:2"
      }
    ],
    "src": "0:1851:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/EthBondingCurve.sol",
    "exportedSymbols": {
      "EthBondingCurve": [
        613
      ]
    },
    "id": 614,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 439,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "id": 440,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "24:33:2"
      },
      {
        "absolutePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/bondingcurve/BondingCurve.sol",
        "file": "./BondingCurve.sol",
        "id": 441,
        "nodeType": "ImportDirective",
        "scope": 614,
        "sourceUnit": 438,
        "src": "59:28:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/joeysantoro/Desktop/fei-dev/Fei-Protocol/contracts/pcv/IPCVDeposit.sol",
        "file": "../pcv/IPCVDeposit.sol",
        "id": 442,
        "nodeType": "ImportDirective",
        "scope": 614,
        "sourceUnit": 11486,
        "src": "88:32:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 444,
              "name": "BondingCurve",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 437,
              "src": "249:12:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BondingCurve_$437",
                "typeString": "contract BondingCurve"
              }
            },
            "id": 445,
            "nodeType": "InheritanceSpecifier",
            "src": "249:12:2"
          }
        ],
        "contractDependencies": [
          437,
          734,
          11740,
          13101,
          13149,
          13192,
          13356,
          16610
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 443,
          "nodeType": "StructuredDocumentation",
          "src": "122:99:2",
          "text": "@title a square root growth bonding curve for purchasing FEI with ETH\n @author Fei Protocol"
        },
        "fullyImplemented": true,
        "id": 613,
        "linearizedBaseContracts": [
          613,
          437,
          16610,
          11740,
          13356,
          13101,
          13149,
          13192,
          734
        ],
        "name": "EthBondingCurve",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 447,
            "mutability": "immutable",
            "name": "SHIFT",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 613,
            "src": "266:29:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 446,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "266:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 481,
              "nodeType": "Block",
              "src": "582:85:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 475,
                      "name": "SHIFT",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 447,
                      "src": "586:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 476,
                        "name": "scale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 449,
                        "src": "594:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "602:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "594:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "586:17:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "586:17:2"
                }
              ]
            },
            "documentation": null,
            "id": 482,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 466,
                    "name": "scale",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 449,
                    "src": "494:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 467,
                    "name": "core",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 451,
                    "src": "505:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 468,
                    "name": "pcvDeposits",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 454,
                    "src": "515:11:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 469,
                    "name": "ratios",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 457,
                    "src": "532:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 470,
                    "name": "oracle",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 459,
                    "src": "544:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 471,
                    "name": "duration",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 461,
                    "src": "556:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 472,
                    "name": "incentive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 463,
                    "src": "569:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 473,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 465,
                  "name": "BondingCurve",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 437,
                  "src": "477:12:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_BondingCurve_$437_$",
                    "typeString": "type(contract BondingCurve)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "477:104:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 449,
                  "mutability": "mutable",
                  "name": "scale",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "325:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 448,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 451,
                  "mutability": "mutable",
                  "name": "core",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "340:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 454,
                  "mutability": "mutable",
                  "name": "pcvDeposits",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "357:28:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 452,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "357:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 453,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "357:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 457,
                  "mutability": "mutable",
                  "name": "ratios",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "390:20:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 455,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "390:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 456,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "390:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 459,
                  "mutability": "mutable",
                  "name": "oracle",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "415:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 458,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 461,
                  "mutability": "mutable",
                  "name": "duration",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "433:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 460,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 463,
                  "mutability": "mutable",
                  "name": "incentive",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 482,
                  "src": "452:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 462,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "321:148:2"
            },
            "returnParameters": {
              "id": 474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "582:0:2"
            },
            "scope": 613,
            "src": "310:357:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              649
            ],
            "body": {
              "id": 507,
              "nodeType": "Block",
              "src": "778:122:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 495,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "790:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "790:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 497,
                          "name": "amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "803:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "790:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "426f6e64696e672043757276653a2053656e742076616c756520646f6573206e6f7420657175616c20696e707574",
                        "id": 499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "813:48:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ae6f84c6340aeb633ca7ebc241de8a77742e20883e83e782a0c7722da3237621",
                          "typeString": "literal_string \"Bonding Curve: Sent value does not equal input\""
                        },
                        "value": "Bonding Curve: Sent value does not equal input"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ae6f84c6340aeb633ca7ebc241de8a77742e20883e83e782a0c7722da3237621",
                          "typeString": "literal_string \"Bonding Curve: Sent value does not equal input\""
                        }
                      ],
                      "id": 494,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "782:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "782:80:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 501,
                  "nodeType": "ExpressionStatement",
                  "src": "782:80:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 503,
                        "name": "amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "883:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 504,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 484,
                        "src": "893:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 502,
                      "name": "_purchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 351,
                      "src": "873:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "873:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 493,
                  "id": 506,
                  "nodeType": "Return",
                  "src": "866:30:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8de93222",
            "id": 508,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 490,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 489,
                  "name": "postGenesis",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 12991,
                  "src": "741:11:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "741:11:2"
              }
            ],
            "name": "purchase",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 488,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "724:8:2"
            },
            "parameters": {
              "id": 487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 484,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 508,
                  "src": "688:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 483,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "688:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 486,
                  "mutability": "mutable",
                  "name": "amountIn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 508,
                  "src": "700:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 485,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "700:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "687:27:2"
            },
            "returnParameters": {
              "id": 493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 492,
                  "mutability": "mutable",
                  "name": "amountOut",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 508,
                  "src": "762:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 491,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "762:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "761:16:2"
            },
            "scope": 613,
            "src": "670:230:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              313
            ],
            "body": {
              "id": 520,
              "nodeType": "Block",
              "src": "965:36:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 516,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "984:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_EthBondingCurve_$613",
                            "typeString": "contract EthBondingCurve"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_EthBondingCurve_$613",
                            "typeString": "contract EthBondingCurve"
                          }
                        ],
                        "id": 515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "976:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 514,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "976:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "976:13:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "976:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 513,
                  "id": 519,
                  "nodeType": "Return",
                  "src": "969:28:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "45f4db28",
            "id": 521,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalPCVHeld",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 510,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "942:8:2"
            },
            "parameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "927:2:2"
            },
            "returnParameters": {
              "id": 513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 512,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 521,
                  "src": "959:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 511,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "958:6:2"
            },
            "scope": 613,
            "src": "903:98:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              402
            ],
            "body": {
              "id": 560,
              "nodeType": "Block",
              "src": "1223:224:2",
              "statements": [
                {
                  "assignments": [
                    530
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 530,
                      "mutability": "mutable",
                      "name": "shiftTotal",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 560,
                      "src": "1227:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 529,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1227:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 534,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 532,
                        "name": "totalPurchased",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62,
                        "src": "1252:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 531,
                      "name": "_shift",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 612,
                      "src": "1245:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1245:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1227:40:2"
                },
                {
                  "assignments": [
                    536
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 536,
                      "mutability": "mutable",
                      "name": "radicand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 560,
                      "src": "1280:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 535,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1280:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 553,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 547,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 539,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "hexValue": "33",
                                "id": 537,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1297:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 538,
                                "name": "adjustedAmountIn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 523,
                                "src": "1301:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1297:20:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 541,
                                      "name": "scale",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 59,
                                      "src": "1327:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 540,
                                    "name": "_shift",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 612,
                                    "src": "1320:6:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                      "typeString": "function (uint256) view returns (uint256)"
                                    }
                                  },
                                  "id": 542,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1320:13:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 543,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sqrt",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 16290,
                                "src": "1320:18:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 544,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1320:20:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1297:43:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 546,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1343:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "1297:47:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 548,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1296:49:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 549,
                          "name": "shiftTotal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 530,
                          "src": "1348:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "threeHalfsRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 16263,
                        "src": "1348:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint256)"
                        }
                      },
                      "id": 551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1348:27:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1296:79:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1280:95:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 554,
                          "name": "radicand",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "1386:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "twoThirdsRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 16277,
                        "src": "1386:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint256)"
                        }
                      },
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1386:24:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 557,
                      "name": "shiftTotal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 530,
                      "src": "1413:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1386:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 528,
                  "id": 559,
                  "nodeType": "Return",
                  "src": "1379:44:2"
                }
              ]
            },
            "documentation": null,
            "id": 561,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getBondingCurveAmountOut",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 525,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1189:8:2"
            },
            "parameters": {
              "id": 524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 523,
                  "mutability": "mutable",
                  "name": "adjustedAmountIn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 561,
                  "src": "1152:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 522,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1152:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1151:23:2"
            },
            "returnParameters": {
              "id": 528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 527,
                  "mutability": "mutable",
                  "name": "amountOut",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 561,
                  "src": "1207:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 526,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1206:16:2"
            },
            "scope": 613,
            "src": "1117:330:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              395
            ],
            "body": {
              "id": 581,
              "nodeType": "Block",
              "src": "1545:81:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 570,
                                "name": "totalPurchased",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62,
                                "src": "1577:14:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 569,
                              "name": "_shift",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 612,
                              "src": "1570:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 571,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1570:22:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 572,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sqrt",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16290,
                          "src": "1570:27:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1570:29:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 575,
                                "name": "scale",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59,
                                "src": "1608:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 574,
                              "name": "_shift",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 612,
                              "src": "1601:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 576,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1601:13:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 577,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sqrt",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16290,
                          "src": "1601:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1601:20:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 567,
                        "name": "Decimal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5411,
                        "src": "1556:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Decimal_$5411_$",
                          "typeString": "type(library Decimal)"
                        }
                      },
                      "id": 568,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "ratio",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5002,
                      "src": "1556:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_struct$_D256_$4949_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (struct Decimal.D256 memory)"
                      }
                    },
                    "id": 579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1556:66:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_D256_$4949_memory_ptr",
                      "typeString": "struct Decimal.D256 memory"
                    }
                  },
                  "functionReturnParameters": 566,
                  "id": 580,
                  "nodeType": "Return",
                  "src": "1549:73:2"
                }
              ]
            },
            "documentation": null,
            "id": 582,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getBondingCurvePriceMultiplier",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 563,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1507:8:2"
            },
            "parameters": {
              "id": 562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1490:2:2"
            },
            "returnParameters": {
              "id": 566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 565,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 582,
                  "src": "1524:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_D256_$4949_memory_ptr",
                    "typeString": "struct Decimal.D256"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 564,
                    "name": "Decimal.D256",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 4949,
                    "src": "1524:12:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_D256_$4949_storage_ptr",
                      "typeString": "struct Decimal.D256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1523:21:2"
            },
            "scope": 613,
            "src": "1450:176:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              11670
            ],
            "body": {
              "id": 599,
              "nodeType": "Block",
              "src": "1705:63:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 596,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 584,
                        "src": "1757:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 591,
                              "name": "pcvDeposit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 586,
                              "src": "1721:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 590,
                            "name": "IPCVDeposit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11485,
                            "src": "1709:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IPCVDeposit_$11485_$",
                              "typeString": "type(contract IPCVDeposit)"
                            }
                          },
                          "id": 592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1709:23:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IPCVDeposit_$11485",
                            "typeString": "contract IPCVDeposit"
                          }
                        },
                        "id": 593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "deposit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11470,
                        "src": "1709:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) payable external"
                        }
                      },
                      "id": 595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "argumentTypes": null,
                          "id": 594,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 584,
                          "src": "1749:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "1709:47:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$returns$__$value",
                        "typeString": "function (uint256) payable external"
                      }
                    },
                    "id": 597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1709:55:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 598,
                  "nodeType": "ExpressionStatement",
                  "src": "1709:55:2"
                }
              ]
            },
            "documentation": null,
            "id": 600,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_allocateSingle",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 588,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1696:8:2"
            },
            "parameters": {
              "id": 587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 584,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "1654:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 583,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1654:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 586,
                  "mutability": "mutable",
                  "name": "pcvDeposit",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "1667:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 585,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1667:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1653:33:2"
            },
            "returnParameters": {
              "id": 589,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1705:0:2"
            },
            "scope": 613,
            "src": "1629:139:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 611,
              "nodeType": "Block",
              "src": "1823:24:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 607,
                      "name": "SHIFT",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 447,
                      "src": "1834:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 608,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 602,
                      "src": "1842:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1834:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 606,
                  "id": 610,
                  "nodeType": "Return",
                  "src": "1827:16:2"
                }
              ]
            },
            "documentation": null,
            "id": 612,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_shift",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 602,
                  "mutability": "mutable",
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1787:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 601,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1787:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1786:8:2"
            },
            "returnParameters": {
              "id": 606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 605,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1817:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 604,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1817:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1816:6:2"
            },
            "scope": 613,
            "src": "1771:76:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 614,
        "src": "221:1628:2"
      }
    ],
    "src": "0:1851:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.6+commit.6c089d02.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.2",
  "updatedAt": "2021-02-03T23:26:41.615Z",
  "devdoc": {
    "author": "Fei Protocol",
    "methods": {
      "checkAllocation(address[],uint256[])": {
        "params": {
          "_pcvDeposits": "new list of pcv deposits to send to",
          "_ratios": "new ratios corresponding to the PCV deposits"
        },
        "returns": {
          "_0": "true if it is a valid allocation"
        }
      },
      "timestamp()": {
        "details": "will be less than or equal to duration",
        "returns": {
          "_0": "timestamp"
        }
      }
    },
    "title": "a square root growth bonding curve for purchasing FEI with ETH"
  },
  "userdoc": {
    "methods": {
      "checkAllocation(address[],uint256[])": {
        "notice": "make sure an allocation has matching lengths and totals the ALLOCATION_GRANULARITY"
      },
      "getAllocation()": {
        "notice": "gets the pcvDeposits and ratios of the splitter"
      },
      "isTimeEnded()": {
        "notice": "return true if time period has ended"
      },
      "remainingTime()": {
        "notice": "number of seconds remaining until time is up"
      },
      "timestamp()": {
        "notice": "number of seconds since contract was initialized"
      }
    }
  }
}
import React from "react";
import { useState } from "react";

import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Button, Header, Image, Link } from "./components";
import logo from "./ethereumLogo.png";
import useWeb3Modal from "./hooks/useWeb3Modal";

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import EthBondingCurveAbi from "./contracts/EthBondingCurve";
import governanceAbi from "./contracts/governance";


const TARGETS = [
  {
    name: "EthBondingCurve",
    address: "0xEfd311deD7aCD57aF6c153F931618aAa96a799E0",
    abi: EthBondingCurveAbi,
  },
];

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  const [title, setTitle] = useState("");

  const [selectedAction, setSelectedAction] = useState({});
  const [actionInputs, setActionInputs] = useState([]);

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  React.useEffect(() => {
    setActionInputs([]);
  }, [selectedAction]);

  const updateActionInput = (newInput, index) => {
    let newActionInputs = [...actionInputs];
    newActionInputs[index] = newInput;
    setActionInputs(newActionInputs);
  };

  const submitProposal = async () => {
    try {
      const governanceAddress = '0x6756F985C772f73Ef708316E4D212052F446e30f';

      const signer = provider.getSigner();

      const gov = new Contract(governanceAddress, governanceAbi).connect(signer);

      const functionTypes = selectedAction.inputs.map((input) => input.type);
      const functionValues = selectedAction.inputs.map((input, index) =>  {
        if (input.type.endsWith("[]")) {
          return Array.from(JSON.parse(actionInputs[index]));
        } else {
          return actionInputs[index];
        }
      });
      console.log(functionTypes, functionValues);

      // const tx = await gov.functions.propose(encodedParams, "");
      const targets = [TARGETS[0].address];
      const values = ["0"];
      const signatures = [`${selectedAction.name}(${selectedAction.inputs.map(input => input.type)})`]// ["getBalanceOf(address)"];
      const callDatas = [ethers.utils.defaultAbiCoder.encode(functionTypes, functionValues)];

      console.log("targets: ", targets);
      console.log("values: ", values);
      console.log("signatures: ", signatures);
      console.log("callDatas: ", callDatas);

      const tx = await gov.functions.propose(targets, values, signatures, callDatas, "do nothing");
    } catch(e) {
      console.error(e);
      alert(e.message);
    }
  };

  return (
    <div>
      <Header>
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
      </Header>
      <Body>
        <h1>
          Create proposal
        </h1>
        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              Title
          </label>
          <div className="mt-1">
            <input type="text" onChange={e => setTitle(e.target.value)} id="about" name="about" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-32" placeholder="I'm a title" value={title}></input>
            Target
            <select onChange={e => setSelectedAction(TARGETS[0].abi.abi.find(action => action.name === e.target.value))}>
              {
                TARGETS[0].abi.abi.filter(fn => fn.name).map((fn) => (
                  <option value={fn.name}>
                    {
                      fn.name
                    }
                  </option>
                ))
              }
            </select>
            {
              selectedAction && (
                <div>
                  {
                    TARGETS[0].abi.abi.filter(fn => selectedAction.name === fn.name).map((fn) => (
                      <>
                      {
                        fn.inputs.map((input, inputIndex) => (
                          <label>
                            { input.name } ({ input.type }) 
                            <input 
                              type="text"
                              onChange={e => updateActionInput(e.target.value, inputIndex)}
                              value={actionInputs[inputIndex]}
                            />
                          </label>
                        ))
                      }
                      </>
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
        <div>
          {
            console.log(provider)
          }
          <button 
              onClick={submitProposal}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white border-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit Proposal
          </button>
        </div>
      </Body>
    </div>
  );
}

export default App;

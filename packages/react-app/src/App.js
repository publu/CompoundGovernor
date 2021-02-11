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
import BasicContractAbi from "./contracts/basicContract";

import governanceAbi from "./contracts/governance";


const TARGETS = [
  {
    name: "Eth Bonding Curve",
    address: "0xEfd311deD7aCD57aF6c153F931618aAa96a799E0",
    abi: EthBondingCurveAbi,
  },
  {
    name: "Basic Contract (doesn't exist tho)",
    address: "0xEfd311deD7aCD57aF6c153F931618aAa96a799E0",
    abi: BasicContractAbi,
  }
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

  const [selectedTarget, setSelectedTarget] = useState(0);
  const [selectedAction, setSelectedAction] = useState({});
  const [actionInputs, setActionInputs] = useState([]);

  const [actions, setActions] = useState([]);

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
      const governanceAddress = '0xE71e9d5Fc25394dA3C49Abde76164E9548EbB4DA';

      const signer = provider.getSigner();

      const gov = new Contract(governanceAddress, governanceAbi).connect(signer);

      // const tx = await gov.functions.propose(encodedParams, "");
      //const targets = [TARGETS[0].address];
      const targets = actions.map((action) => TARGETS[action.target].address);
      //const values = ["0"];
      const values = actions.map(() => "0");
      // const signatures = [`${selectedAction.name}(${selectedAction.inputs.map(input => input.type)})`]// ["getBalanceOf(address)"];
      const signatures = actions.map(action => `${action.action.name}(${action.action.inputs.map(input => input.type)})`);

      const callDatas = actions.map(action => {
        const functionTypes = action.action.inputs.map((input) => input.type);
        const functionValues = action.action.inputs.map((input, index) =>  {
          if (input.type.endsWith("[]")) {
            return Array.from(JSON.parse(action.inputs[index]));
          } else {
            return action.inputs[index];
          }
        });
        return ethers.utils.defaultAbiCoder.encode(functionTypes, functionValues);
      })

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

  const addAction = () => {
    let newActions = [...actions, {
      target: selectedTarget,
      action: selectedAction,
      inputs: actionInputs,
    }];
    setActions(newActions);
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
          {
            actions.map((action) => (
              <div>
                {
                  action.target.abi.abi.filter(fn => action.action.name === fn.name).map((fn) => (
                    <>
                    {
                      action.target.name 
                    }
                    :
                    {
                      fn.inputs.map((input, inputIndex) => (
                        <label>
                          { input.name } ({ input.type }) 
                          <input 
                            disabled
                            type="text"
                            value={action.inputs[inputIndex]}
                          />
                        </label>
                      ))
                    }
                    </>
                  ))
                }
                <hr />
              </div>
            ))
          }

          <div className="mt-1">
            Target
            <select onChange={e => setSelectedTarget(TARGETS.find(action => action.name === e.target.value))}>
                <option value="null">
                    Select a target
                </option>
              {
                TARGETS.filter(fn => fn.name).map((fn) => (
                  <option value={fn.name}>
                    {
                      fn.name
                    }
                  </option>
                ))
              }
              </select>
            {
              !!selectedTarget && (
              <select onChange={e => setSelectedAction(selectedTarget.abi.abi.find(action => action.name === e.target.value))}>
              {
                selectedTarget.abi.abi.filter(fn => fn.name).map((fn) => (
                  <option value={fn.name}>
                    {
                      fn.name
                    }
                  </option>
                ))
              }
              </select>
              )
            }
            {
              !!selectedTarget && !!selectedAction && (
                <div>
                  {
                    selectedTarget.abi.abi.filter(fn => selectedAction.name === fn.name).map((fn) => (
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
          <button 
              onClick={addAction}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white border-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Action
          </button>
          </div>
        </div>
        <div>
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

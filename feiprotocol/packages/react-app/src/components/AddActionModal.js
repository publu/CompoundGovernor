import React, { useEffect, useState } from "react";
import Select from "react-select";

import EthBondingCurveAbi from "../contracts/EthBondingCurve";

const TARGETS = [
  {
    name: "EthBondingCurve",
    address: "0xEfd311deD7aCD57aF6c153F931618aAa96a799E0",
    abi: EthBondingCurveAbi,
  },
];

const options = TARGETS.map((target, index) => ({ value: index, label: target.name }));
export default function ({ onClose, onSave, action, index }) {

  const [selectedTarget, setSelectedTarget] = useState();
  const [confirmedTarget, setConfirmedTarget] = useState();
  const [hasConfirmedTarget, setHasConfirmedTarget] = useState(false);

  const [selectedAction, setSelectedAction] = useState(action ? action.action : {});
  const [actionInputs, setActionInputs] = useState(action ? action.inputs : []);

  useEffect(() => {
    if (!confirmedTarget && action) {
      setConfirmedTarget(action.target)
    }
  }, [])

  const confirmSelectedTarget = () => {
    setConfirmedTarget(selectedTarget);
    setHasConfirmedTarget(true);
  };

  const updateActionInput = (newInput, index) => {
    let newActionInputs = [...actionInputs];
    newActionInputs[index] = newInput;
    setActionInputs(newActionInputs);
  };

  const saveAction = () => {
    onSave({
      target: confirmedTarget,
      action: selectedAction,
      inputs: actionInputs,
    }, action ? index : undefined);
  };

  return (
    <div>
      {
        !hasConfirmedTarget ? (
          <div>
            <Select 
              options={options}
              onChange={({ value }) => setSelectedTarget(value)}
            />
            <button onClick={confirmSelectedTarget}>
              Confirm
            </button>
          </div>
        ) : (
          <div>
            Action
            <Select 
              isOptionSelected={option => TARGETS[confirmedTarget].abi.abi.find(action => action.name === option.value)}
              options={
                TARGETS[confirmedTarget].abi.abi.filter(fn => fn.name).map((fn) => (
                  { value: fn.name, label: fn.name }
                ))
              }
            />
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
            <button onClick={saveAction}>Save action</button>
          </div>
        )
      }
    </div>
  );
}
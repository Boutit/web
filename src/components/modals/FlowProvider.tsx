import { useCallback, useMemo } from 'react';
import { useWebFlowStackNavigatorContext } from './WebFlowStackNavigator';
import { flowsComponents } from './flowsComponents';

export type FlowStep = {
  input: any;
  output: any;
};

type FlowData = Record<string, unknown>;

type FlowSuccess = {
  status: 'success';
  data?: unknown;
};

type FlowFailure = {
  status: 'failure';
  error: Error;
};

type FlowCancelled = {
  status: 'cancelled';
};

type FlowResult = FlowSuccess | FlowFailure | FlowCancelled;

type Flow = {
  result: FlowResult;
  steps: Record<string, FlowStep>;
};

type FlowControls = {
  enterFlow: (flow: string, step: FlowStep, data: FlowData) => void;
};

export function useFlowControls() {
  const { stack, setStack } = useWebFlowStackNavigatorContext();

  const enterFlow = useCallback<FlowControls['enterFlow']>(
    (flow, step, data) => {
      setStack(prevStack => {
        const newStack = {
          flow,
          data,
          step,
        };
        return [...prevStack, newStack];
      });
    },
    [setStack],
  );

  return useMemo(
    () => ({
      enterFlow,
    }),
    [enterFlow],
  );
}

export function useFlowEntryPointNavigator(flow: keyof typeof flowsComponents) {
  const { enterFlow } = useFlowControls();
  return useCallback(
    (step: FlowStep, data: FlowData) => {
      enterFlow(flow, step, data);
    },
    [enterFlow, flow],
  );
}

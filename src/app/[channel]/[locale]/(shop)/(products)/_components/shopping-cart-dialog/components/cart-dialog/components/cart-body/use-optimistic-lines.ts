import React from 'react';

import type {CartBody_CheckoutFragmentFragment} from '@/graphql/generated/graphql';

type Lines = CartBody_CheckoutFragmentFragment['lines'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Temporary workaround for React type mismatch
const useOptimistic = (React as any)
  .experimental_useOptimistic as typeof React.useOptimistic;

export function useOptimisticLines(lines: Lines) {
  const [optimisticLines, deleteOptimisticLine] = useOptimistic<Lines, string>(
    lines,
    (state, id) => state.filter((line) => line.id !== id),
  );

  return {
    optimisticLines,
    deleteOptimisticLine,
  };
}

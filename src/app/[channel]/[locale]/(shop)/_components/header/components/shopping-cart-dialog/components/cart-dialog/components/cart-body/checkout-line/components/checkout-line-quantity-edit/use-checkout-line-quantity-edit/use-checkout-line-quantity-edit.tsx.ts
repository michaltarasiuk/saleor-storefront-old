import {
  experimental_useOptimistic as useOptimistic,
  useCallback,
  useMemo,
} from 'react';

import {checkoutLineQuantityEditAction} from './checkout-line-quantity-edit-action';

export function useCheckoutLineQuantityEdit(lineId: string, value: number) {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(value);

  const updateQuantity = useCallback(
    async (quantity: number) => {
      setOptimisticQuantity(quantity);

      try {
        await checkoutLineQuantityEditAction({
          lineId,
          quantity,
        });
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [lineId, setOptimisticQuantity],
  );

  return {
    optimisticQuantity,
    ...useMemo(
      () => ({
        increaseQuantity: () => updateQuantity(optimisticQuantity + 1),
        decreaseQuantity: () => updateQuantity(optimisticQuantity - 1),
      }),
      [optimisticQuantity, updateQuantity],
    ),
  };
}

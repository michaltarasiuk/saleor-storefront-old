'use client';

import {cn} from '@/lib/tools/cn';

import {EditQuantityButton} from './EditQuantityButton.tsx';
import {useCheckoutLineQuantityEdit} from './use-checkout-line-quantity-edit/index.ts';

interface Props {
  readonly lineId: string;
  readonly value: number;
}

export function CheckoutLineQuantityEdit({lineId, value}: Props) {
  const {optimisticQuantity, decreaseQuantity, increaseQuantity} =
    useCheckoutLineQuantityEdit(lineId, value);

  return (
    <form
      className={cn(
        'flex min-w-min items-center justify-between rounded-full border border-input',
      )}>
      <EditQuantityButton type="decrease" formAction={decreaseQuantity} />
      <p className={cn('px-2 text-sm')}>{optimisticQuantity}</p>
      <EditQuantityButton type="increase" formAction={increaseQuantity} />
    </form>
  );
}

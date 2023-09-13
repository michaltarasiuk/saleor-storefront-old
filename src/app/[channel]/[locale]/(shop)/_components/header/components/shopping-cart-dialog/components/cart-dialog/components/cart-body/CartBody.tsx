'use client';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import {cn} from '@/lib/tools/cn';

import {CheckoutLine} from './checkout-line';
import {useOptimisticLines} from './use-optimistic-lines';

const CartBody_CheckoutFragment = graphql(/* GraphQL */ `
  fragment CartBody_CheckoutFragment on Checkout {
    lines {
      id
      ...CheckoutLine_CheckoutLineFragment
    }
    ...CheckoutLine_CheckoutFragment
  }
`);

interface Props {
  readonly checkout: FragmentType<typeof CartBody_CheckoutFragment>;
}

export function CartBody({checkout}: Props) {
  const {lines, ...checkoutFragment} = getFragment(
    CartBody_CheckoutFragment,
    checkout,
  );

  const {optimisticLines, removeOptimisticLine} = useOptimisticLines(lines);

  return (
    <ul className={cn('overflow-scroll py-4')}>
      {optimisticLines.map((checkoutLine) => (
        <li key={checkoutLine.id}>
          <CheckoutLine
            checkout={checkoutFragment}
            checkoutLine={checkoutLine}
            onRemove={removeOptimisticLine}
          />
        </li>
      ))}
    </ul>
  );
}

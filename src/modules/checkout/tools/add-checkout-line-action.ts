'use server';

import {graphql} from '@/graphql/generated';
import type {
  AddCheckoutLineMutationMutationVariables,
  CreateCheckoutMutationMutationVariables,
} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

import {getCheckoutId} from './cookies';
import {createCheckoutAction} from './create-checkout';

const AddCheckoutLineMutation = graphql(/* GraphQL */ `
  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {
    checkoutLinesAdd(id: $id, lines: [$line]) {
      errors {
        field
        code
      }
    }
  }
`);

type Variables = Omit<AddCheckoutLineMutationMutationVariables, 'id'> &
  Pick<CreateCheckoutMutationMutationVariables, 'channel' | 'languageCode'>;

export async function addCheckoutLineAction({
  line,
  channel,
  languageCode,
}: Variables) {
  const id = getCheckoutId();

  if (id) {
    return fetchMutationData(
      AddCheckoutLineMutation,
      {
        id,
        line,
      },
      {
        fetchOptions: {
          cache: 'no-cache',
        },
      },
    );
  } else {
    return createCheckoutAction({
      channel,
      lines: [line],
      languageCode,
    });
  }
}

import {useCallback, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {logInAction} from '../../_tools/log-in-action';
import type {LoginFormSchema} from './use-login-form-schema';

export function useLoginSubmit(form: UseFormReturn<LoginFormSchema>) {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();
  const intl = useIntl();

  return {
    routeIsPending,
    loginSubmit: useCallback(
      async ({email, password}: LoginFormSchema) => {
        try {
          const {type, result} = await logInAction({email, password});

          if (type === 'error') {
            // TODO: display server error
            return;
          }
          localStorage.setItem(result.name, result.value);

          form.reset();

          toast.default({
            title: intl.formatMessage({
              defaultMessage: 'Success',
              id: 'xrKHS6',
            }),
            description: intl.formatMessage({
              defaultMessage: 'Successfuly logged in.',
              id: 'r/rQ02',
            }),
          });
          startTransition(() => {
            intlRouter.push(formatPathname(...APP_ROUTES.ROOT));
          });
        } catch (error) {
          // TODO: display server error
          console.error(error);
        }
      },
      [form, intl, intlRouter],
    ),
  };
}

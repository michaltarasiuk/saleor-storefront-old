'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/FormField/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormFieldLabel} from '@/lib/components/form/FormFieldLabel';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {Label} from '@/lib/components/ui/Label';
import {TextField} from '@/lib/components/ui/TextField';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {deferInputFocus} from '@/lib/tools/defer-input-focus';

import {Form, FormFieldDescriptionText, FormItem} from '../../_components/Form';
import {SubmitButton} from '../../_components/SubmitButton';
import {FIELDS} from '../_consts';
import type {RequestPasswordResetSchema} from '../_hooks/use-request-password-reset-schema';
import {useRequestPasswordResetSchema} from '../_hooks/use-request-password-reset-schema';
import {useRequestPasswordResetSubmit} from '../_hooks/use-request-password-reset-submit';

export function RequestPasswordResetForm() {
  const requestPasswordResetSchema = useRequestPasswordResetSchema();

  const form = useForm<RequestPasswordResetSchema>({
    resolver: zodResolver(requestPasswordResetSchema),
  });

  const requestPasswordResetSubmit = useRequestPasswordResetSubmit(form);

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  return (
    <Form form={form} onSubmit={form.handleSubmit(requestPasswordResetSubmit)}>
      <FormField
        name={FIELDS.EMAIL}
        control={form.control}
        render={({field: {value, ref, ...restField}}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage defaultMessage="Email:" id="xpTPb3" />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                value={value}
                required
                ref={refMountCallback(ref, deferInputFocus)}
                {...restField}
              />
            </FormFieldControl>
            <div>
              <FormFieldDescription>
                <FormFieldDescriptionText>
                  <FormattedMessage
                    defaultMessage="Email description"
                    id="RVxG/0"
                  />
                </FormFieldDescriptionText>
              </FormFieldDescription>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </div>
          </FormItem>
        )}
      />
      <SubmitButton loading={form.formState.isSubmitting}>
        <FormattedMessage defaultMessage="Send reset link" id="DkQ5Q8" />
      </SubmitButton>
    </Form>
  );
}

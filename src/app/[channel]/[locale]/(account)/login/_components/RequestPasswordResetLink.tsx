import {IntlLink} from '@/i18n/components/IntlLink';
import {FormattedMessage} from '@/i18n/react-intl';
import {ROUTE} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

export function RequestPasswordResetLink() {
  return (
    <IntlLink
      href={formatPathname([ROUTE.REQUEST_PASSWORD_RESET])}
      className={cn(
        'self-start text-sm text-grey hover:text-inherit hover:underline',
      )}>
      <FormattedMessage defaultMessage="Request password reset" id="Wtffln" />
    </IntlLink>
  );
}

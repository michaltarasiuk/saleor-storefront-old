import {X} from 'lucide-react';

import {FormattedMessage} from '@/i18n/react-intl';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

interface Props {
  readonly onClick: () => void;
}

export function RemoveCheckoutLine({onClick}: Props) {
  return (
    <IconButton
      label={<FormattedMessage defaultMessage="Remove cart item" id="+Ey1vz" />}
      variant="neutral"
      className={cn('h-[17px] w-[17px] rounded-full')}
      onClick={onClick}>
      <X width={13} height={13} />
    </IconButton>
  );
}

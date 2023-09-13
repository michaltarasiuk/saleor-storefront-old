import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';
import {FormattedMessage} from '@/i18n/react-intl';
import {cn} from '@/lib/tools/cn';

const DeliveryDays_ShippingMethod = graphql(/* GraphQL */ `
  fragment DeliveryDays_ShippingMethod on ShippingMethod {
    ...Message_ShippingMethod
  }
`);

interface DeliveryDaysProps {
  readonly shippingMethod: FragmentType<typeof DeliveryDays_ShippingMethod>;
}

export function DeliveryDays({shippingMethod}: DeliveryDaysProps) {
  return (
    <p className={cn('text-sm text-grey-light')}>
      <Message
        shippingMethod={getFragment(
          DeliveryDays_ShippingMethod,
          shippingMethod,
        )}
      />
    </p>
  );
}

const Message_ShippingMethod = graphql(/* GraphQL */ `
  fragment Message_ShippingMethod on ShippingMethod {
    minimumDeliveryDays
    maximumDeliveryDays
  }
`);

interface MessageProps {
  readonly shippingMethod: FragmentType<typeof Message_ShippingMethod>;
}

function Message({shippingMethod}: MessageProps) {
  const {minimumDeliveryDays, maximumDeliveryDays} = getFragment(
    Message_ShippingMethod,
    shippingMethod,
  );

  if (minimumDeliveryDays && maximumDeliveryDays) {
    return (
      <FormattedMessage
        defaultMessage="{minimumDeliveryDays} to {maximumDeliveryDays} business days"
        values={{
          minimumDeliveryDays,
          maximumDeliveryDays,
        }}
        id="bHEjjM"
      />
    );
  } else if (minimumDeliveryDays) {
    return (
      <FormattedMessage
        defaultMessage="minimum {minimumDeliveryDays} business days"
        values={{
          minimumDeliveryDays,
        }}
        id="tgJ/Sx"
      />
    );
  } else if (maximumDeliveryDays) {
    return (
      <FormattedMessage
        defaultMessage="maximum {minimumDeliveryDays} business days"
        values={{
          maximumDeliveryDays,
        }}
        id="8lgC6D"
      />
    );
  }
  return (
    <FormattedMessage defaultMessage="unknown business days" id="/Zn5+8" />
  );
}

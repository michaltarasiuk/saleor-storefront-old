import type {
  Address,
  ChoiceValue,
  CountryCode,
  Node,
  ObjectWithMetadata,
} from '@/graphql/generated/graphql';
import {capitalize} from '@/lib/tools/capitalize';

import type {AddressFieldsSchema} from '../_hooks/use-address-fields-schema';

type DefaultAddressValues = Partial<AddressFieldsSchema>;

interface Input {
  readonly addressValues: Partial<
    Omit<Address, keyof Node | keyof ObjectWithMetadata>
  >;
  readonly countryCode: CountryCode;
  readonly cityChoices: ReadonlyArray<ChoiceValue>;
  readonly countryAreaChoices: ReadonlyArray<ChoiceValue>;
}

export function getDefaultAddressValues({
  addressValues,
  countryCode,
  cityChoices,
  countryAreaChoices,
}: Input): DefaultAddressValues {
  const city = cityChoices.at(0)?.raw;
  const countryArea = countryAreaChoices.at(0)?.raw;

  return {
    ...addressValues,
    ...(countryCode && {country: countryCode}),
    ...(addressValues?.city && {city: capitalize(addressValues.city)}),
    ...(city && {city}),
    ...(countryArea && {countryArea}),
  };
}

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {areDefined} from '@/lib/tools/is-defined';

type Checkout = Partial<{
  readonly shippingAddress: unknown;
  readonly deliveryMethod: unknown;
  readonly billingAddress: unknown;
}>;

export function getRedirectUrl(
  {shippingAddress, deliveryMethod, billingAddress}: Checkout,
  requestedRoute: string,
) {
  const routes = {
    [formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)]: {},
    [formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)]: {
      shippingAddress,
    },
    [formatPathname(...APP_ROUTES.CHECKOUT.BILLING)]: {
      shippingAddress,
      deliveryMethod,
    },
    [formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT)]: {
      shippingAddress,
      deliveryMethod,
      billingAddress,
    },
  };

  const routeRequirements = routes[requestedRoute];
  if (!routeRequirements) return null;

  if (areDefined(...Object.values(routeRequirements))) return null;

  for (const [redirectUrl, routeRequirements] of Object.entries(
    routes,
  ).toReversed()) {
    if (areDefined(...Object.values(routeRequirements))) return redirectUrl;
  }
  return null;
}

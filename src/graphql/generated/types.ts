export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: unknown; output: unknown; }
  Day: { input: unknown; output: unknown; }
  Decimal: { input: unknown; output: unknown; }
  GenericScalar: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
  JSONString: { input: string; output: string; }
  Metadata: { input: unknown; output: unknown; }
  Minute: { input: unknown; output: unknown; }
  PositiveDecimal: { input: unknown; output: unknown; }
  UUID: { input: unknown; output: unknown; }
  Upload: { input: unknown; output: unknown; }
  WeightScalar: { input: unknown; output: unknown; }
  _Any: { input: unknown; output: unknown; }
};

/**
 * Create a new address for the customer.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountAddressCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly address?: Maybe<Address>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance for which the address was created. */
  readonly user?: Maybe<User>;
};

/** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly address?: Maybe<Address>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance for which the address was deleted. */
  readonly user?: Maybe<User>;
};

/** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly address?: Maybe<Address>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user object for which the address was edited. */
  readonly user?: Maybe<User>;
};

/**
 * Remove user account.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  readonly user?: Maybe<User>;
};

/** Represents errors in account mutations. */
export type AccountError = {
  /** A type of address that causes the error. */
  readonly addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  readonly code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum AccountErrorCode {
  AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  ChannelInactive = 'CHANNEL_INACTIVE',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidPassword = 'INVALID_PASSWORD',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  NotFound = 'NOT_FOUND',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordResetAlreadyRequested = 'PASSWORD_RESET_ALREADY_REQUESTED',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Fields required to update the user. */
export type AccountInput = {
  /** Billing address of the customer. */
  readonly defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  readonly defaultShippingAddress?: InputMaybe<AddressInput>;
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  readonly languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
};

/** Register a new user. */
export type AccountRegister = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** Informs whether users need to confirm their email address. */
  readonly requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  readonly user?: Maybe<User>;
};

/** Fields required to create a user. */
export type AccountRegisterInput = {
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the user. */
  readonly email: Scalars['String']['input'];
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  readonly languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /** User public metadata. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Password. */
  readonly password: Scalars['String']['input'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  readonly redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Sends an email with the account removal link for the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountRequestDeletion = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
};

/**
 * Sets a default address for the authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountSetDefaultAddress = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** An updated user instance. */
  readonly user?: Maybe<User>;
};

/**
 * Updates the account of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  readonly user?: Maybe<User>;
};

/** Represents user address data. */
export type Address = Node & ObjectWithMetadata & {
  readonly city: Scalars['String']['output'];
  readonly cityArea: Scalars['String']['output'];
  readonly companyName: Scalars['String']['output'];
  /** Shop's default country. */
  readonly country: CountryDisplay;
  readonly countryArea: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  /** Address is user's default billing address. */
  readonly isDefaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Address is user's default shipping address. */
  readonly isDefaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  readonly lastName: Scalars['String']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly postalCode: Scalars['String']['output'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly streetAddress1: Scalars['String']['output'];
  readonly streetAddress2: Scalars['String']['output'];
};


/** Represents user address data. */
export type AddressMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user address data. */
export type AddressMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents user address data. */
export type AddressPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user address data. */
export type AddressPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Creates user address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly address?: Maybe<Address>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance for which the address was created. */
  readonly user?: Maybe<User>;
};

/**
 * Event sent when new address is created.
 *
 * Added in Saleor 3.5.
 */
export type AddressCreated = Event & {
  /** The address the event relates to. */
  readonly address?: Maybe<Address>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly address?: Maybe<Address>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance for which the address was deleted. */
  readonly user?: Maybe<User>;
};

/**
 * Event sent when address is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AddressDeleted = Event & {
  /** The address the event relates to. */
  readonly address?: Maybe<Address>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  /** City. */
  readonly city?: InputMaybe<Scalars['String']['input']>;
  /** District. */
  readonly cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Company or organization. */
  readonly companyName?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  readonly country?: InputMaybe<CountryCode>;
  /** State or province. */
  readonly countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  readonly postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  readonly streetAddress1?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Sets a default address for the given user.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressSetDefault = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** An updated user instance. */
  readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum AddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING'
}

/**
 * Updates an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly address?: Maybe<Address>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user object for which the address was edited. */
  readonly user?: Maybe<User>;
};

/**
 * Event sent when address is updated.
 *
 * Added in Saleor 3.5.
 */
export type AddressUpdated = Event & {
  /** The address the event relates to. */
  readonly address?: Maybe<Address>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents address validation rules for a country. */
export type AddressValidationData = {
  readonly addressFormat: Scalars['String']['output'];
  readonly addressLatinFormat: Scalars['String']['output'];
  readonly allowedFields: ReadonlyArray<Scalars['String']['output']>;
  readonly cityAreaChoices: ReadonlyArray<ChoiceValue>;
  readonly cityAreaType: Scalars['String']['output'];
  readonly cityChoices: ReadonlyArray<ChoiceValue>;
  readonly cityType: Scalars['String']['output'];
  readonly countryAreaChoices: ReadonlyArray<ChoiceValue>;
  readonly countryAreaType: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly postalCodeExamples: ReadonlyArray<Scalars['String']['output']>;
  readonly postalCodeMatchers: ReadonlyArray<Scalars['String']['output']>;
  readonly postalCodePrefix: Scalars['String']['output'];
  readonly postalCodeType: Scalars['String']['output'];
  readonly requiredFields: ReadonlyArray<Scalars['String']['output']>;
  readonly upperFields: ReadonlyArray<Scalars['String']['output']>;
};

/** Represents allocation. */
export type Allocation = Node & {
  readonly id: Scalars['ID']['output'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly quantity: Scalars['Int']['output'];
  /**
   * The warehouse were items were allocated.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly warehouse: Warehouse;
};

/**
 * Determine the allocation strategy for the channel.
 *
 *     PRIORITIZE_SORTING_ORDER - allocate stocks according to the warehouses' order
 *     within the channel
 *
 *     PRIORITIZE_HIGH_STOCK - allocate stock in a warehouse with the most stock
 *
 */
export enum AllocationStrategyEnum {
  PrioritizeHighStock = 'PRIORITIZE_HIGH_STOCK',
  PrioritizeSortingOrder = 'PRIORITIZE_SORTING_ORDER'
}

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  /** Description of this app. */
  readonly aboutApp?: Maybe<Scalars['String']['output']>;
  /** JWT token used to authenticate by thridparty app. */
  readonly accessToken?: Maybe<Scalars['String']['output']>;
  /** URL to iframe with the app. */
  readonly appUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly author?: Maybe<Scalars['String']['output']>;
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly brand?: Maybe<AppBrand>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  readonly configurationUrl?: Maybe<Scalars['String']['output']>;
  /** The date and time when the app was created. */
  readonly created?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  readonly dataPrivacy?: Maybe<Scalars['String']['output']>;
  /** URL to details about the privacy policy on the app owner page. */
  readonly dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  /**
   * App's dashboard extensions.
   *
   * Added in Saleor 3.1.
   */
  readonly extensions: ReadonlyArray<AppExtension>;
  /** Homepage of the app. */
  readonly homepageUrl?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Determine if app will be set active or not. */
  readonly isActive?: Maybe<Scalars['Boolean']['output']>;
  /**
   * URL to manifest used during app's installation.
   *
   * Added in Saleor 3.5.
   */
  readonly manifestUrl?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the app. */
  readonly name?: Maybe<Scalars['String']['output']>;
  /** List of the app's permissions. */
  readonly permissions?: Maybe<ReadonlyArray<Permission>>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Support page for the app. */
  readonly supportUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Last 4 characters of the tokens.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  readonly tokens?: Maybe<ReadonlyArray<AppToken>>;
  /** Type of the app. */
  readonly type?: Maybe<AppTypeEnum>;
  /** Version number of the app. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /**
   * List of webhooks assigned to this app.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  readonly webhooks?: Maybe<ReadonlyArray<Webhook>>;
};


/** Represents app data. */
export type AppMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents app data. */
export type AppMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents app data. */
export type AppPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents app data. */
export type AppPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Activate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppActivate = {
  readonly app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Represents the app's brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppBrand = {
  /**
   * App's logos details.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly logo: AppBrandLogo;
};

/**
 * Represents the app's brand logo data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppBrandLogo = {
  /**
   * URL to the default logo image.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly default: Scalars['String']['output'];
};


/**
 * Represents the app's brand logo data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppBrandLogoDefaultArgs = {
  format?: InputMaybe<IconThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AppCountableConnection = {
  readonly edges: ReadonlyArray<AppCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: App;
};

/** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppCreate = {
  readonly app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  /** The newly created authentication token. */
  readonly authToken?: Maybe<Scalars['String']['output']>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Deactivate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeactivate = {
  readonly app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Deletes an app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDelete = {
  readonly app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Delete failed installation.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeleteFailedInstallation = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly appInstallation?: Maybe<AppInstallation>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Event sent when app is deleted.
 *
 * Added in Saleor 3.4.
 */
export type AppDeleted = Event & {
  /** The application the event relates to. */
  readonly app?: Maybe<App>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type AppError = {
  /** The error code. */
  readonly code: AppErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  readonly permissions?: Maybe<ReadonlyArray<PermissionEnum>>;
};

/** An enumeration. */
export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidCustomHeaders = 'INVALID_CUSTOM_HEADERS',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidStatus = 'INVALID_STATUS',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedSaleorVersion = 'UNSUPPORTED_SALEOR_VERSION'
}

/** Represents app data. */
export type AppExtension = Node & {
  /** JWT token used to authenticate by thridparty app extension. */
  readonly accessToken?: Maybe<Scalars['String']['output']>;
  readonly app: App;
  readonly id: Scalars['ID']['output'];
  /** Label of the extension to show in the dashboard. */
  readonly label: Scalars['String']['output'];
  /** Place where given extension will be mounted. */
  readonly mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  readonly permissions: ReadonlyArray<Permission>;
  /** Type of way how app extension will be opened. */
  readonly target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  readonly url: Scalars['String']['output'];
};

export type AppExtensionCountableConnection = {
  readonly edges: ReadonlyArray<AppExtensionCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppExtensionCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: AppExtension;
};

export type AppExtensionFilterInput = {
  readonly mount?: InputMaybe<ReadonlyArray<AppExtensionMountEnum>>;
  readonly target?: InputMaybe<AppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export enum AppExtensionMountEnum {
  CustomerDetailsMoreActions = 'CUSTOMER_DETAILS_MORE_ACTIONS',
  CustomerOverviewCreate = 'CUSTOMER_OVERVIEW_CREATE',
  CustomerOverviewMoreActions = 'CUSTOMER_OVERVIEW_MORE_ACTIONS',
  NavigationCatalog = 'NAVIGATION_CATALOG',
  NavigationCustomers = 'NAVIGATION_CUSTOMERS',
  NavigationDiscounts = 'NAVIGATION_DISCOUNTS',
  NavigationOrders = 'NAVIGATION_ORDERS',
  NavigationPages = 'NAVIGATION_PAGES',
  NavigationTranslations = 'NAVIGATION_TRANSLATIONS',
  OrderDetailsMoreActions = 'ORDER_DETAILS_MORE_ACTIONS',
  OrderOverviewCreate = 'ORDER_OVERVIEW_CREATE',
  OrderOverviewMoreActions = 'ORDER_OVERVIEW_MORE_ACTIONS',
  ProductDetailsMoreActions = 'PRODUCT_DETAILS_MORE_ACTIONS',
  ProductOverviewCreate = 'PRODUCT_OVERVIEW_CREATE',
  ProductOverviewMoreActions = 'PRODUCT_OVERVIEW_MORE_ACTIONS'
}

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
export enum AppExtensionTargetEnum {
  AppPage = 'APP_PAGE',
  Popup = 'POPUP'
}

/**
 * Fetch and validate manifest.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppFetchManifest = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly errors: ReadonlyArray<AppError>;
  readonly manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
  /** Name of the app. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  readonly permissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppInstall = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly appInstallation?: Maybe<AppInstallation>;
  readonly errors: ReadonlyArray<AppError>;
};

export type AppInstallInput = {
  /** Determine if app will be set active or not. */
  readonly activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the app to install. */
  readonly appName?: InputMaybe<Scalars['String']['input']>;
  /** Url to app's manifest in JSON format. */
  readonly manifestUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  readonly permissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Job & Node & {
  readonly appName: Scalars['String']['output'];
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly brand?: Maybe<AppBrand>;
  /** Created date time of job in ISO 8601 format. */
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly manifestUrl: Scalars['String']['output'];
  /** Job message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  readonly status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  readonly updatedAt: Scalars['DateTime']['output'];
};

/**
 * Event sent when new app is installed.
 *
 * Added in Saleor 3.4.
 */
export type AppInstalled = Event & {
  /** The application the event relates to. */
  readonly app?: Maybe<App>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppManifestBrand = {
  /**
   * App's logos details.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly logo: AppManifestBrandLogo;
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppManifestBrandLogo = {
  /**
   * Data URL with a base64 encoded logo image.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly default: Scalars['String']['output'];
};


/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppManifestBrandLogoDefaultArgs = {
  format?: InputMaybe<IconThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AppManifestExtension = {
  /** Label of the extension to show in the dashboard. */
  readonly label: Scalars['String']['output'];
  /** Place where given extension will be mounted. */
  readonly mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  readonly permissions: ReadonlyArray<Permission>;
  /** Type of way how app extension will be opened. */
  readonly target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  readonly url: Scalars['String']['output'];
};

export type AppManifestRequiredSaleorVersion = {
  /**
   * Required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly constraint: Scalars['String']['output'];
  /**
   * Informs if the Saleor version matches the required one.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly satisfied: Scalars['Boolean']['output'];
};

export type AppManifestWebhook = {
  /** The asynchronous events that webhook wants to subscribe. */
  readonly asyncEvents?: Maybe<ReadonlyArray<WebhookEventTypeAsyncEnum>>;
  /** The name of the webhook. */
  readonly name: Scalars['String']['output'];
  /** Subscription query of a webhook */
  readonly query: Scalars['String']['output'];
  /** The synchronous events that webhook wants to subscribe. */
  readonly syncEvents?: Maybe<ReadonlyArray<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  readonly targetUrl: Scalars['String']['output'];
};

/**
 * Retry failed installation of new app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppRetryInstall = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly appInstallation?: Maybe<AppInstallation>;
  readonly errors: ReadonlyArray<AppError>;
};

export enum AppSortField {
  /** Sort apps by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort apps by name. */
  Name = 'NAME'
}

export type AppSortingInput = {
  /** Specifies the direction in which to sort apps. */
  readonly direction: OrderDirection;
  /** Sort apps by the selected field. */
  readonly field: AppSortField;
};

/**
 * Event sent when app status has changed.
 *
 * Added in Saleor 3.4.
 */
export type AppStatusChanged = Event & {
  /** The application the event relates to. */
  readonly app?: Maybe<App>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents token data. */
export type AppToken = Node & {
  /** Last 4 characters of the token. */
  readonly authToken?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Name of the authenticated token. */
  readonly name?: Maybe<Scalars['String']['output']>;
};

/**
 * Creates a new token.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly appToken?: Maybe<AppToken>;
  /** The newly created authentication token. */
  readonly authToken?: Maybe<Scalars['String']['output']>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Deletes an authentication token assigned to app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly appToken?: Maybe<AppToken>;
  readonly errors: ReadonlyArray<AppError>;
};

export type AppTokenInput = {
  /** ID of app. */
  readonly app: Scalars['ID']['input'];
  /** Name of the token. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

/** Verify provided app token. */
export type AppTokenVerify = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly errors: ReadonlyArray<AppError>;
  /** Determine if token is valid or not. */
  readonly valid: Scalars['Boolean']['output'];
};

/** Enum determining type of your App. */
export enum AppTypeEnum {
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  Local = 'LOCAL',
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  Thirdparty = 'THIRDPARTY'
}

/**
 * Updates an existing app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppUpdate = {
  readonly app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly appErrors: ReadonlyArray<AppError>;
  readonly errors: ReadonlyArray<AppError>;
};

/**
 * Event sent when app is updated.
 *
 * Added in Saleor 3.4.
 */
export type AppUpdated = Event & {
  /** The application the event relates to. */
  readonly app?: Maybe<App>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum AreaUnitsEnum {
  SqCm = 'SQ_CM',
  SqFt = 'SQ_FT',
  SqInch = 'SQ_INCH',
  SqKm = 'SQ_KM',
  SqM = 'SQ_M',
  SqYd = 'SQ_YD'
}

/**
 * Assigns storefront's navigation menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
 */
export type AssignNavigation = {
  readonly errors: ReadonlyArray<MenuError>;
  /** Assigned navigation menu. */
  readonly menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

/**
 * Represents assigned attribute to variant with variant selection attached.
 *
 * Added in Saleor 3.1.
 */
export type AssignedVariantAttribute = {
  /** Attribute assigned to variant. */
  readonly attribute: Attribute;
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  readonly variantSelection: Scalars['Boolean']['output'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  /**
   * Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly availableInGrid: Scalars['Boolean']['output'];
  /** List of attribute's values. */
  readonly choices?: Maybe<AttributeValueCountableConnection>;
  /** The entity type which can be used as a reference. */
  readonly entityType?: Maybe<AttributeEntityTypeEnum>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  /** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  readonly filterableInDashboard: Scalars['Boolean']['output'];
  /**
   * Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly filterableInStorefront: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  readonly inputType?: Maybe<AttributeInputTypeEnum>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of an attribute displayed in the interface. */
  readonly name?: Maybe<Scalars['String']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly productTypes: ProductTypeCountableConnection;
  readonly productVariantTypes: ProductTypeCountableConnection;
  /** Internal representation of an attribute name. */
  readonly slug?: Maybe<Scalars['String']['output']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly storefrontSearchPosition: Scalars['Int']['output'];
  /** Returns translated attribute fields for the given language code. */
  readonly translation?: Maybe<AttributeTranslation>;
  /** The attribute type. */
  readonly type?: Maybe<AttributeTypeEnum>;
  /** The unit of attribute values. */
  readonly unit?: Maybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  readonly valueRequired: Scalars['Boolean']['output'];
  /** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  readonly visibleInStorefront: Scalars['Boolean']['output'];
  /** Flag indicating that attribute has predefined choices. */
  readonly withChoices: Scalars['Boolean']['output'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeValueFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<AttributeError>;
};

/**
 * Creates/updates translations for attributes.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeBulkTranslate = {
  /** Returns how many translations were created/updated. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<AttributeBulkTranslateError>;
  /** List of the translations. */
  readonly results: ReadonlyArray<AttributeBulkTranslateResult>;
};

export type AttributeBulkTranslateError = {
  /** The error code. */
  readonly code: AttributeTranslateErrorCode;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly path?: Maybe<Scalars['String']['output']>;
};

export type AttributeBulkTranslateInput = {
  /** External reference of an attribute. */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Attribute ID. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** Translation language code. */
  readonly languageCode: LanguageCodeEnum;
  /** Translation fields. */
  readonly translationFields: NameTranslationInput;
};

export type AttributeBulkTranslateResult = {
  /** List of errors occurred on translation attempt. */
  readonly errors?: Maybe<ReadonlyArray<AttributeBulkTranslateError>>;
  /** Attribute translation data. */
  readonly translation?: Maybe<AttributeTranslation>;
};

export enum AttributeChoicesSortField {
  /** Sort attribute choice by name. */
  Name = 'NAME',
  /** Sort attribute choice by slug. */
  Slug = 'SLUG'
}

export type AttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort attribute choices. */
  readonly direction: OrderDirection;
  /** Sort attribute choices by the selected field. */
  readonly field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  readonly edges: ReadonlyArray<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Attribute;
};

/** Creates an attribute. */
export type AttributeCreate = {
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeCreateInput = {
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /** The entity type which can be used as a reference. */
  readonly entityType?: InputMaybe<AttributeEntityTypeEnum>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input type to use for entering attribute values in the dashboard. */
  readonly inputType?: InputMaybe<AttributeInputTypeEnum>;
  /** Whether the attribute is for variants only. */
  readonly isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  readonly name: Scalars['String']['input'];
  /** Internal representation of an attribute name. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** The attribute type. */
  readonly type: AttributeTypeEnum;
  /** The unit of attribute values. */
  readonly unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  readonly valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attribute's values. */
  readonly values?: InputMaybe<ReadonlyArray<AttributeValueCreateInput>>;
  /** Whether the attribute should be visible or not in storefront. */
  readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when new attribute is created.
 *
 * Added in Saleor 3.5.
 */
export type AttributeCreated = Event & {
  /** The attribute the event relates to. */
  readonly attribute?: Maybe<Attribute>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeDelete = {
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly errors: ReadonlyArray<AttributeError>;
};

/**
 * Event sent when attribute is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AttributeDeleted = Event & {
  /** The attribute the event relates to. */
  readonly attribute?: Maybe<Attribute>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum AttributeEntityTypeEnum {
  Page = 'PAGE',
  Product = 'PRODUCT',
  ProductVariant = 'PRODUCT_VARIANT'
}

export type AttributeEntityTypeEnumFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<AttributeEntityTypeEnum>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<AttributeEntityTypeEnum>>;
};

export type AttributeError = {
  /** The error code. */
  readonly code: AttributeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum AttributeErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AttributeFilterInput = {
  readonly availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  readonly filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly inCategory?: InputMaybe<Scalars['ID']['input']>;
  readonly inCollection?: InputMaybe<Scalars['ID']['input']>;
  readonly isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly type?: InputMaybe<AttributeTypeEnum>;
  readonly valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeInput = {
  /** The boolean value of the attribute. */
  readonly boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
  readonly date?: InputMaybe<DateRangeInput>;
  /** The date/time range that the returned values should be in. */
  readonly dateTime?: InputMaybe<DateTimeRangeInput>;
  /** Internal representation of an attribute name. */
  readonly slug: Scalars['String']['input'];
  /** Internal representation of a value (unique per attribute). */
  readonly values?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** The range that the returned values should be in. */
  readonly valuesRange?: InputMaybe<IntRangeInput>;
};

/** An enumeration. */
export enum AttributeInputTypeEnum {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Dropdown = 'DROPDOWN',
  File = 'FILE',
  Multiselect = 'MULTISELECT',
  Numeric = 'NUMERIC',
  PlainText = 'PLAIN_TEXT',
  Reference = 'REFERENCE',
  RichText = 'RICH_TEXT',
  Swatch = 'SWATCH'
}

export type AttributeInputTypeEnumFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<AttributeInputTypeEnum>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<AttributeInputTypeEnum>>;
};

/**
 * Reorder the values of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeReorderValues = {
  /** Attribute from which values are reordered. */
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly errors: ReadonlyArray<AttributeError>;
};

export enum AttributeSortField {
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AvailableInGrid = 'AVAILABLE_IN_GRID',
  /** Sort attributes by the filterable in dashboard flag */
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  /** Sort attributes by the filterable in storefront flag */
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  /** Sort attributes by the variant only flag */
  IsVariantOnly = 'IS_VARIANT_ONLY',
  /** Sort attributes by name */
  Name = 'NAME',
  /** Sort attributes by slug */
  Slug = 'SLUG',
  /** Sort attributes by their position in storefront */
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  /** Sort attributes by the value required flag */
  ValueRequired = 'VALUE_REQUIRED',
  /** Sort attributes by visibility in the storefront */
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT'
}

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort attributes. */
  readonly direction: OrderDirection;
  /** Sort attributes by the selected field. */
  readonly field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly attribute?: Maybe<Attribute>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /** Returns translated attribute fields for the given language code. */
  readonly translation?: Maybe<AttributeTranslation>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeTranslate = {
  readonly attribute?: Maybe<Attribute>;
  readonly errors: ReadonlyArray<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

/** An enumeration. */
export enum AttributeTranslateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type AttributeTranslation = Node & {
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name: Scalars['String']['output'];
};

/** An enumeration. */
export enum AttributeTypeEnum {
  PageType = 'PAGE_TYPE',
  ProductType = 'PRODUCT_TYPE'
}

export type AttributeTypeEnumFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<AttributeTypeEnum>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<AttributeTypeEnum>>;
};

/**
 * Updates attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeUpdate = {
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeUpdateInput = {
  /** New values to be created for this attribute. */
  readonly addValues?: InputMaybe<ReadonlyArray<AttributeValueUpdateInput>>;
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute is for variants only. */
  readonly isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** IDs of values to be removed from this attribute. */
  readonly removeValues?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Internal representation of an attribute name. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** The unit of attribute values. */
  readonly unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  readonly valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute should be visible or not in storefront. */
  readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when attribute is updated.
 *
 * Added in Saleor 3.5.
 */
export type AttributeUpdated = Event & {
  /** The attribute the event relates to. */
  readonly attribute?: Maybe<Attribute>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  /** Represents the boolean value of the attribute value. */
  readonly boolean?: Maybe<Scalars['Boolean']['output']>;
  /** Represents the date value of the attribute value. */
  readonly date?: Maybe<Scalars['Date']['output']>;
  /** Represents the date/time value of the attribute value. */
  readonly dateTime?: Maybe<Scalars['DateTime']['output']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  /** Represents file URL and content type (if attribute value is a file). */
  readonly file?: Maybe<File>;
  readonly id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  readonly inputType?: Maybe<AttributeInputTypeEnum>;
  /** Name of a value displayed in the interface. */
  readonly name?: Maybe<Scalars['String']['output']>;
  /** Represents the text of the attribute value, plain text without formating. */
  readonly plainText?: Maybe<Scalars['String']['output']>;
  /** The ID of the attribute reference. */
  readonly reference?: Maybe<Scalars['ID']['output']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly richText?: Maybe<Scalars['JSONString']['output']>;
  /** Internal representation of a value (unique per attribute). */
  readonly slug?: Maybe<Scalars['String']['output']>;
  /** Returns translated attribute value fields for the given language code. */
  readonly translation?: Maybe<AttributeValueTranslation>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  readonly value?: Maybe<Scalars['String']['output']>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes values of attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<AttributeError>;
};

/**
 * Creates/updates translations for attributes values.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueBulkTranslate = {
  /** Returns how many translations were created/updated. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<AttributeValueBulkTranslateError>;
  /** List of the translations. */
  readonly results: ReadonlyArray<AttributeValueBulkTranslateResult>;
};

export type AttributeValueBulkTranslateError = {
  /** The error code. */
  readonly code: AttributeValueTranslateErrorCode;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly path?: Maybe<Scalars['String']['output']>;
};

export type AttributeValueBulkTranslateInput = {
  /** External reference of an attribute value. */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Attribute value ID. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** Translation language code. */
  readonly languageCode: LanguageCodeEnum;
  /** Translation fields. */
  readonly translationFields: AttributeValueTranslationInput;
};

export type AttributeValueBulkTranslateResult = {
  /** List of errors occurred on translation attempt. */
  readonly errors?: Maybe<ReadonlyArray<AttributeValueBulkTranslateError>>;
  /** Attribute value translation data. */
  readonly translation?: Maybe<AttributeValueTranslation>;
};

export type AttributeValueCountableConnection = {
  readonly edges: ReadonlyArray<AttributeValueCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeValueCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: AttributeValue;
};

/**
 * Creates a value for an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type AttributeValueCreate = {
  /** The updated attribute. */
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly attributeValue?: Maybe<AttributeValue>;
  readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeValueCreateInput = {
  /** File content type. */
  readonly contentType?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  readonly fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  readonly name: Scalars['String']['input'];
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  readonly plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  readonly richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  readonly value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new attribute value is created.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueCreated = Event & {
  /** The attribute value the event relates to. */
  readonly attributeValue?: Maybe<AttributeValue>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueDelete = {
  /** The updated attribute. */
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly attributeValue?: Maybe<AttributeValue>;
  readonly errors: ReadonlyArray<AttributeError>;
};

/**
 * Event sent when attribute value is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueDeleted = Event & {
  /** The attribute value the event relates to. */
  readonly attributeValue?: Maybe<AttributeValue>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type AttributeValueFilterInput = {
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueInput = {
  /** Represents the boolean value of the attribute value. */
  readonly boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** File content type. */
  readonly contentType?: InputMaybe<Scalars['String']['input']>;
  /** Represents the date value of the attribute value. */
  readonly date?: InputMaybe<Scalars['Date']['input']>;
  /** Represents the date/time value of the attribute value. */
  readonly dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Attribute value ID or external reference.
   *
   * Added in Saleor 3.9.
   */
  readonly dropdown?: InputMaybe<AttributeValueSelectableTypeInput>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.14.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  readonly file?: InputMaybe<Scalars['String']['input']>;
  /** ID of the selected attribute. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * List of attribute value IDs or external references.
   *
   * Added in Saleor 3.9.
   */
  readonly multiselect?: InputMaybe<ReadonlyArray<AttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.9.
   */
  readonly numeric?: InputMaybe<Scalars['String']['input']>;
  /** Plain text content. */
  readonly plainText?: InputMaybe<Scalars['String']['input']>;
  /** List of entity IDs that will be used as references. */
  readonly references?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Text content in JSON format. */
  readonly richText?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * Attribute value ID or external reference.
   *
   * Added in Saleor 3.9.
   */
  readonly swatch?: InputMaybe<AttributeValueSelectableTypeInput>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. This field will be removed in Saleor 4.0. */
  readonly values?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Represents attribute value.
 * 1. If ID is provided, then attribute value will be resolved by ID.
 * 2. If externalReference is provided, then attribute value will be resolved by external reference.
 * 3. If value is provided, then attribute value will be resolved by value. If this attribute value doesn't exist, then it will be created.
 * 4. If externalReference and value is provided then new attribute value will be created.
 *
 * Added in Saleor 3.9.
 */
export type AttributeValueSelectableTypeInput = {
  /**
   * External reference of an attribute value.
   *
   * Added in Saleor 3.14.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** ID of an attribute value. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  readonly value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueTranslatableContent = Node & {
  /**
   * Associated attribute that can be translated.
   *
   * Added in Saleor 3.9.
   */
  readonly attribute?: Maybe<AttributeTranslatableContent>;
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly attributeValue?: Maybe<AttributeValue>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /** Attribute plain text value. */
  readonly plainText?: Maybe<Scalars['String']['output']>;
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly richText?: Maybe<Scalars['JSONString']['output']>;
  /** Returns translated attribute value fields for the given language code. */
  readonly translation?: Maybe<AttributeValueTranslation>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute value.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueTranslate = {
  readonly attributeValue?: Maybe<AttributeValue>;
  readonly errors: ReadonlyArray<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

/** An enumeration. */
export enum AttributeValueTranslateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type AttributeValueTranslation = Node & {
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name: Scalars['String']['output'];
  /** Attribute plain text value. */
  readonly plainText?: Maybe<Scalars['String']['output']>;
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly richText?: Maybe<Scalars['JSONString']['output']>;
};

export type AttributeValueTranslationInput = {
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Translated text. */
  readonly plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Translated text.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly richText?: InputMaybe<Scalars['JSONString']['input']>;
};

/**
 * Updates value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueUpdate = {
  /** The updated attribute. */
  readonly attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly attributeErrors: ReadonlyArray<AttributeError>;
  readonly attributeValue?: Maybe<AttributeValue>;
  readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeValueUpdateInput = {
  /** File content type. */
  readonly contentType?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  readonly fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  readonly plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  readonly richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  readonly value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when attribute value is updated.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueUpdated = Event & {
  /** The attribute value the event relates to. */
  readonly attributeValue?: Maybe<AttributeValue>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Where filtering options.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AttributeWhereInput = {
  /** List of conditions that must be met. */
  readonly AND?: InputMaybe<ReadonlyArray<AttributeWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  readonly OR?: InputMaybe<ReadonlyArray<AttributeWhereInput>>;
  readonly entityType?: InputMaybe<AttributeEntityTypeEnumFilterInput>;
  readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly inCategory?: InputMaybe<Scalars['ID']['input']>;
  readonly inCollection?: InputMaybe<Scalars['ID']['input']>;
  readonly inputType?: InputMaybe<AttributeInputTypeEnumFilterInput>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly slug?: InputMaybe<StringFilterInput>;
  readonly type?: InputMaybe<AttributeTypeEnumFilterInput>;
  readonly unit?: InputMaybe<MeasurementUnitsEnumFilterInput>;
  readonly valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  readonly withChoices?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BulkAttributeValueInput = {
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  readonly boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * File content type.
   *
   * Added in Saleor 3.12.
   */
  readonly contentType?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the date value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  readonly date?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Represents the date/time value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  readonly dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  readonly dropdown?: InputMaybe<AttributeValueSelectableTypeInput>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.14.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * URL of the file attribute. Every time, a new value is created.
   *
   * Added in Saleor 3.12.
   */
  readonly file?: InputMaybe<Scalars['String']['input']>;
  /** ID of the selected attribute. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * List of attribute value IDs.
   *
   * Added in Saleor 3.12.
   */
  readonly multiselect?: InputMaybe<ReadonlyArray<AttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.12.
   */
  readonly numeric?: InputMaybe<Scalars['String']['input']>;
  /**
   * Plain text content.
   *
   * Added in Saleor 3.12.
   */
  readonly plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of entity IDs that will be used as references.
   *
   * Added in Saleor 3.12.
   */
  readonly references?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Text content in JSON format.
   *
   * Added in Saleor 3.12.
   */
  readonly richText?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  readonly swatch?: InputMaybe<AttributeValueSelectableTypeInput>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.This field will be removed in Saleor 4.0. */
  readonly values?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type BulkProductError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of channel IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  readonly index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

export type BulkStockError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  readonly index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/**
 * Synchronous webhook for calculating checkout/order taxes.
 *
 * Added in Saleor 3.7.
 */
export type CalculateTaxes = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  readonly taxBase: TaxableObject;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type CardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  readonly code: Scalars['String']['input'];
  /** Card security code. */
  readonly cvc?: InputMaybe<Scalars['String']['input']>;
  /** Information about currency and amount. */
  readonly money: MoneyInput;
};

export type CatalogueInput = {
  /** Categories related to the discount. */
  readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Products related to the discount. */
  readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Product variant related to the discount.
   *
   * Added in Saleor 3.1.
   */
  readonly variants?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  /** List of ancestors of the category. */
  readonly ancestors?: Maybe<CategoryCountableConnection>;
  readonly backgroundImage?: Maybe<Image>;
  /** List of children of the category. */
  readonly children?: Maybe<CategoryCountableConnection>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly level: Scalars['Int']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  readonly parent?: Maybe<Category>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly products?: Maybe<ProductCountableConnection>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  /** Returns translated category fields for the given language code. */
  readonly translation?: Maybe<CategoryTranslation>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes categories.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type CategoryCountableConnection = {
  readonly edges: ReadonlyArray<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CategoryCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Category;
};

/**
 * Creates a new category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryCreate = {
  readonly category?: Maybe<Category>;
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Event sent when new category is created.
 *
 * Added in Saleor 3.2.
 */
export type CategoryCreated = Event & {
  /** The category the event relates to. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryDelete = {
  readonly category?: Maybe<Category>;
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Event sent when category is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CategoryDeleted = Event & {
  /** The category the event relates to. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilterInput = {
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type CategoryInput = {
  /** Background image file. */
  readonly backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for a product media. */
  readonly backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Category description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * Fields required to update the category metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Category name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the category private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Category slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

export enum CategorySortField {
  /** Sort categories by name. */
  Name = 'NAME',
  /** Sort categories by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort categories by subcategory count. */
  SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export type CategorySortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort categories. */
  readonly direction: OrderDirection;
  /** Sort categories by the selected field. */
  readonly field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly category?: Maybe<Category>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated category fields for the given language code. */
  readonly translation?: Maybe<CategoryTranslation>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a category.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CategoryTranslate = {
  readonly category?: Maybe<Category>;
  readonly errors: ReadonlyArray<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type CategoryTranslation = Node & {
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryUpdate = {
  readonly category?: Maybe<Category>;
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Event sent when category is updated.
 *
 * Added in Saleor 3.2.
 */
export type CategoryUpdated = Event & {
  /** The category the event relates to. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents channel. */
export type Channel = Node & {
  /**
   * Shipping methods that are available for the channel.
   *
   * Added in Saleor 3.6.
   */
  readonly availableShippingMethodsPerCountry?: Maybe<ReadonlyArray<ShippingMethodsPerCountry>>;
  /**
   * List of shippable countries for the channel.
   *
   * Added in Saleor 3.6.
   */
  readonly countries?: Maybe<ReadonlyArray<CountryDisplay>>;
  /**
   * A currency that is assigned to the channel.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly currencyCode: Scalars['String']['output'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly defaultCountry: CountryDisplay;
  /**
   * Whether a channel has associated orders.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  readonly hasOrders: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  /**
   * Whether the channel is active.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly isActive: Scalars['Boolean']['output'];
  /**
   * Name of the channel.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly name: Scalars['String']['output'];
  /**
   * Channel-specific order settings.
   *
   * Added in Saleor 3.12.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_ORDERS.
   */
  readonly orderSettings: OrderSettings;
  /** Slug of the channel. */
  readonly slug: Scalars['String']['output'];
  /**
   * Define the stock setting for this channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly stockSettings: StockSettings;
  /**
   * List of warehouses assigned to this channel.
   *
   * Added in Saleor 3.5.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly warehouses: ReadonlyArray<Warehouse>;
};


/** Represents channel. */
export type ChannelAvailableShippingMethodsPerCountryArgs = {
  countries?: InputMaybe<ReadonlyArray<CountryCode>>;
};

/**
 * Activate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelActivate = {
  /** Activated channel. */
  readonly channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly channelErrors: ReadonlyArray<ChannelError>;
  readonly errors: ReadonlyArray<ChannelError>;
};

/**
 * Creates new channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelCreate = {
  readonly channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly channelErrors: ReadonlyArray<ChannelError>;
  readonly errors: ReadonlyArray<ChannelError>;
};

export type ChannelCreateInput = {
  /** List of shipping zones to assign to the channel. */
  readonly addShippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  readonly addWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Currency of the channel. */
  readonly currencyCode: Scalars['String']['input'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  readonly defaultCountry: CountryCode;
  /** isActive flag. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the channel. */
  readonly name: Scalars['String']['input'];
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  readonly orderSettings?: InputMaybe<OrderSettingsInput>;
  /** Slug of the channel. */
  readonly slug: Scalars['String']['input'];
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  readonly stockSettings?: InputMaybe<StockSettingsInput>;
};

/**
 * Event sent when new channel is created.
 *
 * Added in Saleor 3.2.
 */
export type ChannelCreated = Event & {
  /** The channel the event relates to. */
  readonly channel?: Maybe<Channel>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deactivate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDeactivate = {
  /** Deactivated channel. */
  readonly channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly channelErrors: ReadonlyArray<ChannelError>;
  readonly errors: ReadonlyArray<ChannelError>;
};

/**
 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDelete = {
  readonly channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly channelErrors: ReadonlyArray<ChannelError>;
  readonly errors: ReadonlyArray<ChannelError>;
};

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  readonly channelId: Scalars['ID']['input'];
};

/**
 * Event sent when channel is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ChannelDeleted = Event & {
  /** The channel the event relates to. */
  readonly channel?: Maybe<Channel>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type ChannelError = {
  /** The error code. */
  readonly code: ChannelErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of shipping zone IDs which causes the error. */
  readonly shippingZones?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of warehouses IDs which causes the error. */
  readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum ChannelErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
  ChannelWithOrders = 'CHANNEL_WITH_ORDERS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ChannelListingUpdateInput = {
  /** ID of a channel listing. */
  readonly channelListing: Scalars['ID']['input'];
  /** Cost price of the variant in channel. */
  readonly costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The threshold for preorder variant in channel. */
  readonly preorderThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Price of the particular variant in channel. */
  readonly price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

/**
 * Reorder the warehouses of a channel.
 *
 * Added in Saleor 3.7.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelReorderWarehouses = {
  /** Channel within the warehouses are reordered. */
  readonly channel?: Maybe<Channel>;
  readonly errors: ReadonlyArray<ChannelError>;
};

/**
 * Event sent when channel status has changed.
 *
 * Added in Saleor 3.2.
 */
export type ChannelStatusChanged = Event & {
  /** The channel the event relates to. */
  readonly channel?: Maybe<Channel>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Update a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 * Requires one of the following permissions when updating only orderSettings field: MANAGE_CHANNELS, MANAGE_ORDERS.
 */
export type ChannelUpdate = {
  readonly channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly channelErrors: ReadonlyArray<ChannelError>;
  readonly errors: ReadonlyArray<ChannelError>;
};

export type ChannelUpdateInput = {
  /** List of shipping zones to assign to the channel. */
  readonly addShippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  readonly addWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  readonly defaultCountry?: InputMaybe<CountryCode>;
  /** isActive flag. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the channel. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  readonly orderSettings?: InputMaybe<OrderSettingsInput>;
  /** List of shipping zones to unassign from the channel. */
  readonly removeShippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * List of warehouses to unassign from the channel.
   *
   * Added in Saleor 3.5.
   */
  readonly removeWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Slug of the channel. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  readonly stockSettings?: InputMaybe<StockSettingsInput>;
};

/**
 * Event sent when channel is updated.
 *
 * Added in Saleor 3.2.
 */
export type ChannelUpdated = Event & {
  /** The channel the event relates to. */
  readonly channel?: Maybe<Channel>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  /**
   * The authorize status of the checkout.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly authorizeStatus: CheckoutAuthorizeStatusEnum;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   */
  readonly availableCollectionPoints: ReadonlyArray<Warehouse>;
  /** List of available payment gateways. */
  readonly availablePaymentGateways: ReadonlyArray<PaymentGateway>;
  /**
   * Shipping methods that can be used with this checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
   */
  readonly availableShippingMethods: ReadonlyArray<ShippingMethod>;
  readonly billingAddress?: Maybe<Address>;
  readonly channel: Channel;
  /**
   * The charge status of the checkout.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly chargeStatus: CheckoutChargeStatusEnum;
  readonly created: Scalars['DateTime']['output'];
  /**
   * The delivery method selected for this checkout.
   *
   * Added in Saleor 3.1.
   */
  readonly deliveryMethod?: Maybe<DeliveryMethod>;
  readonly discount?: Maybe<Money>;
  readonly discountName?: Maybe<Scalars['String']['output']>;
  /**
   * Determines whether checkout prices should include taxes when displayed in a storefront.
   *
   * Added in Saleor 3.9.
   */
  readonly displayGrossPrices: Scalars['Boolean']['output'];
  /** Email of a customer. */
  readonly email?: Maybe<Scalars['String']['output']>;
  /** List of gift cards associated with this checkout. */
  readonly giftCards: ReadonlyArray<GiftCard>;
  readonly id: Scalars['ID']['output'];
  /** Returns True, if checkout requires shipping. */
  readonly isShippingRequired: Scalars['Boolean']['output'];
  /** Checkout language code. */
  readonly languageCode: LanguageCodeEnum;
  /** @deprecated This field will be removed in Saleor 4.0. Use `updatedAt` instead. */
  readonly lastChange: Scalars['DateTime']['output'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  readonly lines: ReadonlyArray<CheckoutLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly note: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The number of items purchased. */
  readonly quantity: Scalars['Int']['output'];
  readonly shippingAddress?: Maybe<Address>;
  /**
   * The shipping method related with checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  readonly shippingMethod?: Maybe<ShippingMethod>;
  /** Shipping methods that can be used with this checkout. */
  readonly shippingMethods: ReadonlyArray<ShippingMethod>;
  /** The price of the shipping, with all the taxes included. */
  readonly shippingPrice: TaxedMoney;
  /**
   * Date when oldest stock reservation for this checkout expires or null if no stock is reserved.
   *
   * Added in Saleor 3.1.
   */
  readonly stockReservationExpires?: Maybe<Scalars['DateTime']['output']>;
  /** The price of the checkout before shipping, with taxes included. */
  readonly subtotalPrice: TaxedMoney;
  /**
   * Returns True if checkout has to be exempt from taxes.
   *
   * Added in Saleor 3.8.
   */
  readonly taxExemption: Scalars['Boolean']['output'];
  /** The checkout's token. */
  readonly token: Scalars['UUID']['output'];
  /**
   * The difference between the paid and the checkout total amount.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly totalBalance: Money;
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  readonly totalPrice: TaxedMoney;
  /**
   * List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly transactions?: Maybe<ReadonlyArray<TransactionItem>>;
  readonly translatedDiscountName?: Maybe<Scalars['String']['output']>;
  /**
   * Time of last modification of the given checkout.
   *
   * Added in Saleor 3.13.
   */
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly user?: Maybe<User>;
  readonly voucherCode?: Maybe<Scalars['String']['output']>;
};


/** Checkout object. */
export type CheckoutMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Checkout object. */
export type CheckoutMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Checkout object. */
export type CheckoutPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Checkout object. */
export type CheckoutPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  /** The checkout with the added gift card or voucher. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

export type CheckoutAddressValidationRules = {
  /** Determines if an error should be raised when the provided address doesn't match the expected format. Example: using letters for postal code when the numbers are expected. */
  readonly checkFieldsFormat?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if an error should be raised when the provided address doesn't have all the required fields. The list of required fields is dynamic and depends on the country code (use the `addressValidationRules` query to fetch them). Note: country code is mandatory for all addresses regardless of the rules provided in this input. */
  readonly checkRequiredFields?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if Saleor should apply normalization on address fields. Example: converting city field to uppercase letters. */
  readonly enableFieldsNormalization?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Determine a current authorize status for checkout.
 *
 *     We treat the checkout as fully authorized when the sum of authorized and charged
 *     funds cover the checkout.total.
 *     We treat the checkout as partially authorized when the sum of authorized and charged
 *     funds covers only part of the checkout.total
 *     We treat the checkout as not authorized when the sum of authorized and charged funds
 *     is 0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the cover funds don't cover fully the checkout's total
 *     FULL - the cover funds covers the checkout's total
 *
 */
export enum CheckoutAuthorizeStatusEnum {
  Full = 'FULL',
  None = 'NONE',
  Partial = 'PARTIAL'
}

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Determine the current charge status for the checkout.
 *
 *     The checkout is considered overcharged when the sum of the transactionItem's charge
 *     amounts exceeds the value of `checkout.total`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `checkout.total`, we consider the checkout to be fully charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `checkout.total`, we treat the checkout as partially charged.
 *
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the checkout's total
 *     FULL - the funds that are charged fully cover the checkout's total
 *     OVERCHARGED - the charged funds are bigger than checkout's total
 *
 */
export enum CheckoutChargeStatusEnum {
  Full = 'FULL',
  None = 'NONE',
  Overcharged = 'OVERCHARGED',
  Partial = 'PARTIAL'
}

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  /** Confirmation data used to process additional authorization steps. */
  readonly confirmationData?: Maybe<Scalars['JSONString']['output']>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  readonly confirmationNeeded: Scalars['Boolean']['output'];
  readonly errors: ReadonlyArray<CheckoutError>;
  /** Placed order. */
  readonly order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
  readonly edges: ReadonlyArray<CheckoutCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Checkout;
};

/** Create a new checkout. */
export type CheckoutCreate = {
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
   */
  readonly created?: Maybe<Scalars['Boolean']['output']>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Create new checkout from existing order.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutCreateFromOrder = {
  /** Created checkout. */
  readonly checkout?: Maybe<Checkout>;
  readonly errors: ReadonlyArray<CheckoutCreateFromOrderError>;
  /** Variants that were not attached to the checkout. */
  readonly unavailableVariants?: Maybe<ReadonlyArray<CheckoutCreateFromOrderUnavailableVariant>>;
};

export type CheckoutCreateFromOrderError = {
  /** The error code. */
  readonly code: CheckoutCreateFromOrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum CheckoutCreateFromOrderErrorCode {
  ChannelInactive = 'CHANNEL_INACTIVE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  OrderNotFound = 'ORDER_NOT_FOUND',
  TaxError = 'TAX_ERROR'
}

export type CheckoutCreateFromOrderUnavailableVariant = {
  /** The error code. */
  readonly code: CheckoutCreateFromOrderUnavailableVariantErrorCode;
  /** Order line ID that is unavailable. */
  readonly lineId: Scalars['ID']['output'];
  /** The error message. */
  readonly message: Scalars['String']['output'];
  /** Variant ID that is unavailable. */
  readonly variantId: Scalars['ID']['output'];
};

/** An enumeration. */
export enum CheckoutCreateFromOrderUnavailableVariantErrorCode {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotFound = 'NOT_FOUND',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL'
}

export type CheckoutCreateInput = {
  /** Billing address of the customer. */
  readonly billingAddress?: InputMaybe<AddressInput>;
  /** Slug of a channel in which to create a checkout. */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /** Checkout language code. */
  readonly languageCode?: InputMaybe<LanguageCodeEnum>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  readonly lines: ReadonlyArray<CheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  readonly shippingAddress?: InputMaybe<AddressInput>;
  /**
   * The checkout validation rules that can be changed.
   *
   * Added in Saleor 3.5.
   */
  readonly validationRules?: InputMaybe<CheckoutValidationRules>;
};

/**
 * Event sent when new checkout is created.
 *
 * Added in Saleor 3.2.
 */
export type CheckoutCreated = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Sets the customer as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerAttach = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Removes the user assigned as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerDetach = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Updates the delivery method (shipping method or pick up point) of the checkout.
 *
 * Added in Saleor 3.1.
 */
export type CheckoutDeliveryMethodUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

export type CheckoutError = {
  /** A type of address that causes the error. */
  readonly addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  readonly code: CheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** List of line Ids which cause the error. */
  readonly lines?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of varint IDs which causes the error. */
  readonly variants?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  DeliveryMethodNotApplicable = 'DELIVERY_METHOD_NOT_APPLICABLE',
  EmailNotSet = 'EMAIL_NOT_SET',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  GraphqlError = 'GRAPHQL_ERROR',
  InactivePayment = 'INACTIVE_PAYMENT',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  NotFound = 'NOT_FOUND',
  NoLines = 'NO_LINES',
  PaymentError = 'PAYMENT_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type CheckoutFilterInput = {
  readonly authorizeStatus?: InputMaybe<ReadonlyArray<CheckoutAuthorizeStatusEnum>>;
  readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly chargeStatus?: InputMaybe<ReadonlyArray<CheckoutChargeStatusEnum>>;
  readonly created?: InputMaybe<DateRangeInput>;
  readonly customer?: InputMaybe<Scalars['String']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<DateRangeInput>;
};

/**
 * Filter shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type CheckoutFilterShippingMethods = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  readonly shippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when checkout is fully paid with transactions.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutFullyPaid = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Update language code in the existing checkout. */
export type CheckoutLanguageCodeUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & ObjectWithMetadata & {
  readonly id: Scalars['ID']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly quantity: Scalars['Int']['output'];
  /** Indicates whether the item need to be delivered. */
  readonly requiresShipping: Scalars['Boolean']['output'];
  /** The sum of the checkout line price, taxes and discounts. */
  readonly totalPrice: TaxedMoney;
  /** The sum of the checkout line price, without discounts. */
  readonly undiscountedTotalPrice: Money;
  /** The unit price of the checkout line, without discounts. */
  readonly undiscountedUnitPrice: Money;
  /** The unit price of the checkout line, with taxes and discounts. */
  readonly unitPrice: TaxedMoney;
  readonly variant: ProductVariant;
};


/** Represents an item in the checkout. */
export type CheckoutLineMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an item in the checkout. */
export type CheckoutLineMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents an item in the checkout. */
export type CheckoutLinePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an item in the checkout. */
export type CheckoutLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type CheckoutLineCountableConnection = {
  readonly edges: ReadonlyArray<CheckoutLineCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutLineCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: CheckoutLine;
};

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

export type CheckoutLineInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  readonly forceNewLine?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fields required to update the object's metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  readonly price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The number of items purchased. */
  readonly quantity: Scalars['Int']['input'];
  /** ID of the product variant. */
  readonly variantId: Scalars['ID']['input'];
};

export type CheckoutLineUpdateInput = {
  /**
   * ID of the line.
   *
   * Added in Saleor 3.6.
   */
  readonly lineId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  readonly price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  /**
   * ID of the product variant.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `lineId` instead.
   */
  readonly variantId?: InputMaybe<Scalars['ID']['input']>;
};

/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
export type CheckoutLinesAdd = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/** Deletes checkout lines. */
export type CheckoutLinesDelete = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Event sent when checkout metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CheckoutMetadataUpdated = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  /** Related checkout object. */
  readonly checkout?: Maybe<Checkout>;
  readonly errors: ReadonlyArray<PaymentError>;
  /** A newly created payment. */
  readonly payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  /** The checkout with the removed gift card or voucher. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

/** Updates the shipping method of the checkout. */
export type CheckoutShippingMethodUpdate = {
  /** An updated checkout. */
  readonly checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly checkoutErrors: ReadonlyArray<CheckoutError>;
  readonly errors: ReadonlyArray<CheckoutError>;
};

export enum CheckoutSortField {
  /** Sort checkouts by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort checkouts by customer. */
  Customer = 'CUSTOMER',
  /** Sort checkouts by payment. */
  Payment = 'PAYMENT'
}

export type CheckoutSortingInput = {
  /** Specifies the direction in which to sort checkouts. */
  readonly direction: OrderDirection;
  /** Sort checkouts by the selected field. */
  readonly field: CheckoutSortField;
};

/**
 * Event sent when checkout is updated.
 *
 * Added in Saleor 3.2.
 */
export type CheckoutUpdated = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type CheckoutValidationRules = {
  /** The validation rules that can be applied to provided billing address data. */
  readonly billingAddress?: InputMaybe<CheckoutAddressValidationRules>;
  /** The validation rules that can be applied to provided shipping address data. */
  readonly shippingAddress?: InputMaybe<CheckoutAddressValidationRules>;
};

export type ChoiceValue = {
  readonly raw?: Maybe<Scalars['String']['output']>;
  readonly verbose?: Maybe<Scalars['String']['output']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  readonly backgroundImage?: Maybe<Image>;
  /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
  readonly channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of channels in which the collection is available.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly channelListings?: Maybe<ReadonlyArray<CollectionChannelListing>>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of products in this collection. */
  readonly products?: Maybe<ProductCountableConnection>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  /** Returns translated collection fields for the given language code. */
  readonly translation?: Maybe<CollectionTranslation>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Adds products to a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionAddProducts = {
  /** Collection to which products will be added. */
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  readonly errors: ReadonlyArray<CollectionError>;
};

/**
 * Deletes collections.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<CollectionError>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  readonly channel: Channel;
  readonly id: Scalars['ID']['output'];
  readonly isPublished: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  readonly publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The collection publication date.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CollectionChannelListingError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/**
 * Manage collection's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionChannelListingUpdate = {
  /** An updated collection instance. */
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionChannelListingErrors: ReadonlyArray<CollectionChannelListingError>;
  readonly errors: ReadonlyArray<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  readonly addChannels?: InputMaybe<ReadonlyArray<PublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

export type CollectionCountableConnection = {
  readonly edges: ReadonlyArray<CollectionCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CollectionCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Collection;
};

/**
 * Creates a new collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionCreate = {
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  readonly errors: ReadonlyArray<CollectionError>;
};

export type CollectionCreateInput = {
  /** Background image file. */
  readonly backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  readonly backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Name of the collection. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** List of products to be added to the collection. */
  readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type CollectionCreated = Event & {
  /** The collection the event relates to. */
  readonly collection?: Maybe<Collection>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type CollectionCreatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionDelete = {
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  readonly errors: ReadonlyArray<CollectionError>;
};

/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CollectionDeleted = Event & {
  /** The collection the event relates to. */
  readonly collection?: Maybe<Collection>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CollectionDeletedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionError = {
  /** The error code. */
  readonly code: CollectionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of products IDs which causes the error. */
  readonly products?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum CollectionErrorCode {
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type CollectionFilterInput = {
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly published?: InputMaybe<CollectionPublished>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type CollectionInput = {
  /** Background image file. */
  readonly backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  readonly backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Name of the collection. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CollectionMetadataUpdated = Event & {
  /** The collection the event relates to. */
  readonly collection?: Maybe<Collection>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CollectionMetadataUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export enum CollectionPublished {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

/**
 * Remove products from a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionRemoveProducts = {
  /** Collection from which products will be removed. */
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  readonly errors: ReadonlyArray<CollectionError>;
};

/**
 * Reorder the products of a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionReorderProducts = {
  /** Collection from which products are reordered. */
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  readonly errors: ReadonlyArray<CollectionError>;
};

export enum CollectionSortField {
  /**
   * Sort collections by availability.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Availability = 'AVAILABILITY',
  /** Sort collections by name. */
  Name = 'NAME',
  /** Sort collections by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  PublicationDate = 'PUBLICATION_DATE',
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  PublishedAt = 'PUBLISHED_AT'
}

export type CollectionSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort collections. */
  readonly direction: OrderDirection;
  /** Sort collections by the selected field. */
  readonly field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly collection?: Maybe<Collection>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated collection fields for the given language code. */
  readonly translation?: Maybe<CollectionTranslation>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a collection.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CollectionTranslate = {
  readonly collection?: Maybe<Collection>;
  readonly errors: ReadonlyArray<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type CollectionTranslation = Node & {
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionUpdate = {
  readonly collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly collectionErrors: ReadonlyArray<CollectionError>;
  readonly errors: ReadonlyArray<CollectionError>;
};

/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type CollectionUpdated = Event & {
  /** The collection the event relates to. */
  readonly collection?: Maybe<Collection>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type CollectionUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  /** Help text for the field. */
  readonly helpText?: Maybe<Scalars['String']['output']>;
  /** Label for the field. */
  readonly label?: Maybe<Scalars['String']['output']>;
  /** Name of the field. */
  readonly name: Scalars['String']['output'];
  /** Type of the field. */
  readonly type?: Maybe<ConfigurationTypeFieldEnum>;
  /** Current value of the field. */
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  readonly name: Scalars['String']['input'];
  /** Value of the given field to update. */
  readonly value?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
  Boolean = 'BOOLEAN',
  Multiline = 'MULTILINE',
  Output = 'OUTPUT',
  Password = 'PASSWORD',
  Secret = 'SECRET',
  Secretmultiline = 'SECRETMULTILINE',
  String = 'STRING'
}

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** An activated user account. */
  readonly user?: Maybe<User>;
};

/**
 * Confirm the email change of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type ConfirmEmailChange = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance with a new email. */
  readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CountryDisplay = {
  /** Country code. */
  readonly code: Scalars['String']['output'];
  /** Country name. */
  readonly country: Scalars['String']['output'];
  /**
   * Country tax.
   * @deprecated This field will be removed in Saleor 4.0. Use `TaxClassCountryRate` type to manage tax rates per country.
   */
  readonly vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
  /** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
  readonly attachedToShippingZones?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CountryRateInput = {
  /** Country in which this rate applies. */
  readonly countryCode: CountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. */
  readonly rate: Scalars['Float']['input'];
};

export type CountryRateUpdateInput = {
  /** Country in which this rate applies. */
  readonly countryCode: CountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. Provide `null` to remove the particular rate. */
  readonly rate?: InputMaybe<Scalars['Float']['input']>;
};

/** Create JWT token. */
export type CreateToken = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** CSRF token required to re-generate access token. */
  readonly csrfToken?: Maybe<Scalars['String']['output']>;
  readonly errors: ReadonlyArray<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  readonly refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  readonly token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  readonly user?: Maybe<User>;
};

export type CreditCard = {
  /** Card brand. */
  readonly brand: Scalars['String']['output'];
  /** Two-digit number representing the card’s expiration month. */
  readonly expMonth?: Maybe<Scalars['Int']['output']>;
  /** Four-digit number representing the card’s expiration year. */
  readonly expYear?: Maybe<Scalars['Int']['output']>;
  /** First 4 digits of the card number. */
  readonly firstDigits?: Maybe<Scalars['String']['output']>;
  /** Last 4 digits of the card number. */
  readonly lastDigits: Scalars['String']['output'];
};

/**
 * Deletes customers.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<AccountError>;
};

export type CustomerBulkResult = {
  /** Customer data. */
  readonly customer?: Maybe<User>;
  /** List of errors that occurred during the update attempt. */
  readonly errors?: Maybe<ReadonlyArray<CustomerBulkUpdateError>>;
};

/**
 * Updates customers.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerBulkUpdate = {
  /** Returns how many objects were created. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<CustomerBulkUpdateError>;
  /** List of the updated customers. */
  readonly results: ReadonlyArray<CustomerBulkResult>;
};

export type CustomerBulkUpdateError = {
  /** The error code. */
  readonly code: CustomerBulkUpdateErrorCode;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly path?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum CustomerBulkUpdateErrorCode {
  Blank = 'BLANK',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLength = 'MAX_LENGTH',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type CustomerBulkUpdateInput = {
  /** External ID of a customer to update. */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** ID of a customer to update. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** Fields required to update a customer. */
  readonly input: CustomerInput;
};

/**
 * Creates a new customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  readonly user?: Maybe<User>;
};

/**
 * Event sent when new customer user is created.
 *
 * Added in Saleor 3.2.
 */
export type CustomerCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The user the event relates to. */
  readonly user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  readonly user?: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  /** App that performed the action. */
  readonly app?: Maybe<App>;
  /** Number of objects concerned by the event. */
  readonly count?: Maybe<Scalars['Int']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  readonly date?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Content of the event. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** The concerned order. */
  readonly order?: Maybe<Order>;
  /** The concerned order line. */
  readonly orderLine?: Maybe<OrderLine>;
  /** Customer event type. */
  readonly type?: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum CustomerEventsEnum {
  AccountActivated = 'ACCOUNT_ACTIVATED',
  AccountCreated = 'ACCOUNT_CREATED',
  AccountDeactivated = 'ACCOUNT_DEACTIVATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  EmailChanged = 'EMAIL_CHANGED',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  NameAssigned = 'NAME_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  PasswordChanged = 'PASSWORD_CHANGED',
  PasswordReset = 'PASSWORD_RESET',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PlacedOrder = 'PLACED_ORDER'
}

export type CustomerFilterInput = {
  readonly dateJoined?: InputMaybe<DateRangeInput>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly numberOfOrders?: InputMaybe<IntRangeInput>;
  readonly placedOrders?: InputMaybe<DateRangeInput>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  readonly defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  readonly defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User language code. */
  readonly languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** A note about the user. */
  readonly note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
};

/**
 * Event sent when customer user metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CustomerMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The user the event relates to. */
  readonly user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an existing customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  readonly user?: Maybe<User>;
};

/**
 * Event sent when customer user is updated.
 *
 * Added in Saleor 3.2.
 */
export type CustomerUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The user the event relates to. */
  readonly user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type DateRangeInput = {
  /** Start date. */
  readonly gte?: InputMaybe<Scalars['Date']['input']>;
  /** End date. */
  readonly lte?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeRangeInput = {
  /** Start date. */
  readonly gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** End date. */
  readonly lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Deactivate all JWT tokens of the currently authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type DeactivateAllUserTokens = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
};

/**
 * Define the filtering options for decimal fields.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type DecimalFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<Scalars['Decimal']['input']>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<Scalars['Decimal']['input']>>;
  /** The value in range. */
  readonly range?: InputMaybe<DecimalRangeInput>;
};

export type DecimalRangeInput = {
  /** Decimal value greater than or equal to. */
  readonly gte?: InputMaybe<Scalars['Decimal']['input']>;
  /** Decimal value less than or equal to. */
  readonly lte?: InputMaybe<Scalars['Decimal']['input']>;
};

/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type DeleteMetadata = {
  readonly errors: ReadonlyArray<MetadataError>;
  readonly item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly metadataErrors: ReadonlyArray<MetadataError>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type DeletePrivateMetadata = {
  readonly errors: ReadonlyArray<MetadataError>;
  readonly item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly metadataErrors: ReadonlyArray<MetadataError>;
};

/**
 * Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.
 *
 * Added in Saleor 3.1.
 */
export type DeliveryMethod = ShippingMethod | Warehouse;

export type DigitalContent = Node & ObjectWithMetadata & {
  readonly automaticFulfillment: Scalars['Boolean']['output'];
  readonly contentFile: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly maxDownloads?: Maybe<Scalars['Int']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Product variant assigned to digital content. */
  readonly productVariant: ProductVariant;
  readonly urlValidDays?: Maybe<Scalars['Int']['output']>;
  /** List of URLs for the digital variant. */
  readonly urls?: Maybe<ReadonlyArray<DigitalContentUrl>>;
  readonly useDefaultSettings: Scalars['Boolean']['output'];
};


export type DigitalContentMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type DigitalContentMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


export type DigitalContentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type DigitalContentPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type DigitalContentCountableConnection = {
  readonly edges: ReadonlyArray<DigitalContentCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DigitalContentCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: DigitalContent;
};

/**
 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentCreate = {
  readonly content?: Maybe<DigitalContent>;
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly variant?: Maybe<ProductVariant>;
};

/**
 * Remove digital content assigned to given variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentDelete = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  readonly automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines how many times a download link can be accessed by a customer. */
  readonly maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Determines for how many days a download link is active since it was generated. */
  readonly urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  readonly useDefaultSettings: Scalars['Boolean']['input'];
};

/**
 * Update digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUpdate = {
  readonly content?: Maybe<DigitalContent>;
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  readonly automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Represents an file in a multipart request. */
  readonly contentFile: Scalars['Upload']['input'];
  /** Determines how many times a download link can be accessed by a customer. */
  readonly maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Determines for how many days a download link is active since it was generated. */
  readonly urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  readonly useDefaultSettings: Scalars['Boolean']['input'];
};

export type DigitalContentUrl = Node & {
  readonly content: DigitalContent;
  readonly created: Scalars['DateTime']['output'];
  readonly downloadNum: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** UUID of digital content. */
  readonly token: Scalars['UUID']['output'];
  /** URL for digital content. */
  readonly url?: Maybe<Scalars['String']['output']>;
};

/**
 * Generate new URL to digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUrlCreate = {
  readonly digitalContentUrl?: Maybe<DigitalContentUrl>;
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  readonly content: Scalars['ID']['input'];
};

export type DiscountError = {
  /** List of channels IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: DiscountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of products IDs which causes the error. */
  readonly products?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

export enum DiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/** An enumeration. */
export enum DistanceUnitsEnum {
  Cm = 'CM',
  Ft = 'FT',
  Inch = 'INCH',
  Km = 'KM',
  M = 'M',
  Yd = 'YD'
}

/** Represents shop's domain. */
export type Domain = {
  /** The host name of the domain. */
  readonly host: Scalars['String']['output'];
  /** Inform if SSL is enabled. */
  readonly sslEnabled: Scalars['Boolean']['output'];
  /** Shop's absolute URL. */
  readonly url: Scalars['String']['output'];
};

/**
 * Deletes draft orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Completes creating an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderComplete = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Completed order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Creates a new draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderCreate = {
  readonly errors: ReadonlyArray<OrderError>;
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  readonly billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  readonly channelId?: InputMaybe<Scalars['ID']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  readonly customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  readonly discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  readonly lines?: InputMaybe<ReadonlyArray<OrderLineCreateInput>>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  readonly redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  readonly shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  readonly shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Customer associated with the draft order. */
  readonly user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  readonly userEmail?: InputMaybe<Scalars['String']['input']>;
  /** ID of the voucher associated with the order. */
  readonly voucher?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when new draft order is created.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderDelete = {
  readonly errors: ReadonlyArray<OrderError>;
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Event sent when draft order is deleted.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  readonly billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  readonly channelId?: InputMaybe<Scalars['ID']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  readonly customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  readonly discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  readonly redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  readonly shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  readonly shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Customer associated with the draft order. */
  readonly user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  readonly userEmail?: InputMaybe<Scalars['String']['input']>;
  /** ID of the voucher associated with the order. */
  readonly voucher?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Deletes order lines.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderLinesBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Updates a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderUpdate = {
  readonly errors: ReadonlyArray<OrderError>;
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Event sent when draft order is updated.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export enum ErrorPolicyEnum {
  /** Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part. */
  IgnoreFailed = 'IGNORE_FAILED',
  /** Reject all rows if there is at least one error in any of them. */
  RejectEverything = 'REJECT_EVERYTHING',
  /** Reject rows with errors. */
  RejectFailedRows = 'REJECT_FAILED_ROWS'
}

export type Event = {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Event delivery. */
export type EventDelivery = Node & {
  /** Event delivery attempts. */
  readonly attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
  readonly createdAt: Scalars['DateTime']['output'];
  /** Webhook event type. */
  readonly eventType: WebhookEventTypeEnum;
  readonly id: Scalars['ID']['output'];
  /** Event payload. */
  readonly payload?: Maybe<Scalars['String']['output']>;
  /** Event delivery status. */
  readonly status: EventDeliveryStatusEnum;
};


/** Event delivery. */
export type EventDeliveryAttemptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
};

/** Event delivery attempts. */
export type EventDeliveryAttempt = Node & {
  /** Event delivery creation date and time. */
  readonly createdAt: Scalars['DateTime']['output'];
  /** Delivery attempt duration. */
  readonly duration?: Maybe<Scalars['Float']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Request headers for delivery attempt. */
  readonly requestHeaders?: Maybe<Scalars['String']['output']>;
  /** Delivery attempt response content. */
  readonly response?: Maybe<Scalars['String']['output']>;
  /** Response headers for delivery attempt. */
  readonly responseHeaders?: Maybe<Scalars['String']['output']>;
  /** Delivery attempt response status code. */
  readonly responseStatusCode?: Maybe<Scalars['Int']['output']>;
  /** Event delivery status. */
  readonly status: EventDeliveryStatusEnum;
  /** Task id for delivery attempt. */
  readonly taskId?: Maybe<Scalars['String']['output']>;
};

export type EventDeliveryAttemptCountableConnection = {
  readonly edges: ReadonlyArray<EventDeliveryAttemptCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventDeliveryAttemptCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: EventDeliveryAttempt;
};

export enum EventDeliveryAttemptSortField {
  /** Sort event delivery attempts by created at. */
  CreatedAt = 'CREATED_AT'
}

export type EventDeliveryAttemptSortingInput = {
  /** Specifies the direction in which to sort attempts. */
  readonly direction: OrderDirection;
  /** Sort attempts by the selected field. */
  readonly field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
  readonly edges: ReadonlyArray<EventDeliveryCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventDeliveryCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: EventDelivery;
};

export type EventDeliveryFilterInput = {
  readonly eventType?: InputMaybe<WebhookEventTypeEnum>;
  readonly status?: InputMaybe<EventDeliveryStatusEnum>;
};

/**
 * Retries event delivery.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type EventDeliveryRetry = {
  /** Event delivery. */
  readonly delivery?: Maybe<EventDelivery>;
  readonly errors: ReadonlyArray<WebhookError>;
};

export enum EventDeliverySortField {
  /** Sort event deliveries by created at. */
  CreatedAt = 'CREATED_AT'
}

export type EventDeliverySortingInput = {
  /** Specifies the direction in which to sort deliveries. */
  readonly direction: OrderDirection;
  /** Sort deliveries by the selected field. */
  readonly field: EventDeliverySortField;
};

export enum EventDeliveryStatusEnum {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type ExportError = {
  /** The error code. */
  readonly code: ExportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum ExportErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** History log of export file. */
export type ExportEvent = Node & {
  /** App which performed the action. Requires one of the following permissions: OWNER, MANAGE_APPS. */
  readonly app?: Maybe<App>;
  /** Date when event happened at in ISO 8601 format. */
  readonly date: Scalars['DateTime']['output'];
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  /** Content of the event. */
  readonly message: Scalars['String']['output'];
  /** Export event type. */
  readonly type: ExportEventsEnum;
  /** User who performed the action. Requires one of the following permissions: OWNER, MANAGE_STAFF. */
  readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum ExportEventsEnum {
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  ExportDeleted = 'EXPORT_DELETED',
  ExportFailed = 'EXPORT_FAILED',
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
  ExportPending = 'EXPORT_PENDING',
  ExportSuccess = 'EXPORT_SUCCESS'
}

/** Represents a job data of exported file. */
export type ExportFile = Job & Node & {
  readonly app?: Maybe<App>;
  /** Created date time of job in ISO 8601 format. */
  readonly createdAt: Scalars['DateTime']['output'];
  /** List of events associated with the export. */
  readonly events?: Maybe<ReadonlyArray<ExportEvent>>;
  readonly id: Scalars['ID']['output'];
  /** Job message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  readonly status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  readonly updatedAt: Scalars['DateTime']['output'];
  /** The URL of field to download. */
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly user?: Maybe<User>;
};

export type ExportFileCountableConnection = {
  readonly edges: ReadonlyArray<ExportFileCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ExportFileCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: ExportFile;
};

export type ExportFileFilterInput = {
  readonly app?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<DateTimeRangeInput>;
  readonly status?: InputMaybe<JobStatusEnum>;
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
  readonly user?: InputMaybe<Scalars['String']['input']>;
};

export enum ExportFileSortField {
  CreatedAt = 'CREATED_AT',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort export file. */
  readonly direction: OrderDirection;
  /** Sort export file by the selected field. */
  readonly field: ExportFileSortField;
};

/**
 * Export gift cards to csv file.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type ExportGiftCards = {
  readonly errors: ReadonlyArray<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  readonly exportFile?: Maybe<ExportFile>;
};

export type ExportGiftCardsInput = {
  /** Type of exported file. */
  readonly fileType: FileTypesEnum;
  /** Filtering options for gift cards. */
  readonly filter?: InputMaybe<GiftCardFilterInput>;
  /** List of gift cards IDs to export. */
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Determine which gift cards should be exported. */
  readonly scope: ExportScope;
};

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  readonly attributes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of channels ids which should be exported. */
  readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of product fields witch should be exported. */
  readonly fields?: InputMaybe<ReadonlyArray<ProductFieldEnum>>;
  /** List of warehouse ids witch should be exported. */
  readonly warehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Export products to csv file.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ExportProducts = {
  readonly errors: ReadonlyArray<ExportError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly exportErrors: ReadonlyArray<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  readonly exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
  /** Input with info about fields which should be exported. */
  readonly exportInfo?: InputMaybe<ExportInfoInput>;
  /** Type of exported file. */
  readonly fileType: FileTypesEnum;
  /** Filtering options for products. */
  readonly filter?: InputMaybe<ProductFilterInput>;
  /** List of products IDs to export. */
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Determine which products should be exported. */
  readonly scope: ExportScope;
};

export enum ExportScope {
  /** Export all products. */
  All = 'ALL',
  /** Export the filtered products. */
  Filter = 'FILTER',
  /** Export products with given ids. */
  Ids = 'IDS'
}

export type ExternalAuthentication = {
  /** ID of external authentication plugin. */
  readonly id: Scalars['String']['output'];
  /** Name of external authentication plugin. */
  readonly name?: Maybe<Scalars['String']['output']>;
};

/** Prepare external authentication URL for user by custom plugin. */
export type ExternalAuthenticationUrl = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** The data returned by authentication plugin. */
  readonly authenticationData?: Maybe<Scalars['JSONString']['output']>;
  readonly errors: ReadonlyArray<AccountError>;
};

/** Logout user by custom plugin. */
export type ExternalLogout = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** The data returned by authentication plugin. */
  readonly logoutData?: Maybe<Scalars['JSONString']['output']>;
};

export type ExternalNotificationError = {
  /** The error code. */
  readonly code: ExternalNotificationErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum ExternalNotificationErrorCodes {
  ChannelInactive = 'CHANNEL_INACTIVE',
  InvalidModelType = 'INVALID_MODEL_TYPE',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/**
 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
 *
 * Added in Saleor 3.1.
 */
export type ExternalNotificationTrigger = {
  readonly errors: ReadonlyArray<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
  /** External event type. This field is passed to a plugin as an event type. */
  readonly externalEventType: Scalars['String']['input'];
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  readonly extraPayload?: InputMaybe<Scalars['JSONString']['input']>;
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  readonly ids: ReadonlyArray<Scalars['ID']['input']>;
};

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** CSRF token required to re-generate external access token. */
  readonly csrfToken?: Maybe<Scalars['String']['output']>;
  readonly errors: ReadonlyArray<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  readonly refreshToken?: Maybe<Scalars['String']['output']>;
  /** The token, required to authenticate. */
  readonly token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  readonly user?: Maybe<User>;
};

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** CSRF token required to re-generate external access token. */
  readonly csrfToken?: Maybe<Scalars['String']['output']>;
  readonly errors: ReadonlyArray<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  readonly refreshToken?: Maybe<Scalars['String']['output']>;
  /** The token, required to authenticate. */
  readonly token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  readonly user?: Maybe<User>;
};

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** Determine if authentication data is valid or not. */
  readonly isValid: Scalars['Boolean']['output'];
  /** User assigned to data. */
  readonly user?: Maybe<User>;
  /** External data. */
  readonly verifyData?: Maybe<Scalars['JSONString']['output']>;
};

export type File = {
  /** Content type of the file. */
  readonly contentType?: Maybe<Scalars['String']['output']>;
  /** The URL of the file. */
  readonly url: Scalars['String']['output'];
};

/** An enumeration. */
export enum FileTypesEnum {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

/**
 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
 */
export type FileUpload = {
  readonly errors: ReadonlyArray<UploadError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly uploadErrors: ReadonlyArray<UploadError>;
  readonly uploadedFile?: Maybe<File>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  readonly created: Scalars['DateTime']['output'];
  readonly fulfillmentOrder: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** List of lines for the fulfillment. */
  readonly lines?: Maybe<ReadonlyArray<FulfillmentLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly status: FulfillmentStatus;
  /** User-friendly fulfillment status. */
  readonly statusDisplay?: Maybe<Scalars['String']['output']>;
  readonly trackingNumber: Scalars['String']['output'];
  /** Warehouse from fulfillment was fulfilled. */
  readonly warehouse?: Maybe<Warehouse>;
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Approve existing fulfillment.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentApprove = {
  readonly errors: ReadonlyArray<OrderError>;
  /** An approved fulfillment. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was approved. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Event sent when fulfillment is approved.
 *
 * Added in Saleor 3.7.
 */
export type FulfillmentApproved = Event & {
  /** The fulfillment the event relates to. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Cancels existing fulfillment and optionally restocks items.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentCancel = {
  readonly errors: ReadonlyArray<OrderError>;
  /** A canceled fulfillment. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  readonly warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when fulfillment is canceled.
 *
 * Added in Saleor 3.4.
 */
export type FulfillmentCanceled = Event & {
  /** The fulfillment the event relates to. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when new fulfillment is created.
 *
 * Added in Saleor 3.4.
 */
export type FulfillmentCreated = Event & {
  /** The fulfillment the event relates to. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  readonly id: Scalars['ID']['output'];
  readonly orderLine?: Maybe<OrderLine>;
  readonly quantity: Scalars['Int']['output'];
};

/**
 * Event sent when fulfillment metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type FulfillmentMetadataUpdated = Event & {
  /** The fulfillment the event relates to. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Refund products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentRefundProducts = {
  readonly errors: ReadonlyArray<OrderError>;
  /** A refunded fulfillment. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was refunded. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Return products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentReturnProducts = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order which fulfillment was returned. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
  /** A replace fulfillment. */
  readonly replaceFulfillment?: Maybe<Fulfillment>;
  /** A draft order which was created for products with replace flag. */
  readonly replaceOrder?: Maybe<Order>;
  /** A return fulfillment. */
  readonly returnFulfillment?: Maybe<Fulfillment>;
};

/** An enumeration. */
export enum FulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Refunded = 'REFUNDED',
  RefundedAndReturned = 'REFUNDED_AND_RETURNED',
  Replaced = 'REPLACED',
  Returned = 'RETURNED',
  WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

/**
 * Updates a fulfillment for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentUpdateTracking = {
  readonly errors: ReadonlyArray<OrderError>;
  /** A fulfillment with updated tracking. */
  readonly fulfillment?: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** If true, send an email notification to the customer. */
  readonly notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fulfillment tracking number. */
  readonly trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  /** Gateway config key. */
  readonly field: Scalars['String']['output'];
  /** Gateway config value for key. */
  readonly value?: Maybe<Scalars['String']['output']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & ObjectWithMetadata & {
  /**
   * App which created the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  readonly app?: Maybe<App>;
  /**
   * Slug of the channel where the gift card was bought.
   *
   * Added in Saleor 3.1.
   */
  readonly boughtInChannel?: Maybe<Scalars['String']['output']>;
  /** Gift card code. Can be fetched by a staff member with MANAGE_GIFT_CARD when gift card wasn't yet used and by the gift card owner. */
  readonly code: Scalars['String']['output'];
  readonly created: Scalars['DateTime']['output'];
  /**
   * The user who bought or issued a gift card.
   *
   * Added in Saleor 3.1.
   */
  readonly createdBy?: Maybe<User>;
  /**
   * Email address of the user who bought or issued gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  readonly createdByEmail?: Maybe<Scalars['String']['output']>;
  readonly currentBalance: Money;
  /** Code in format which allows displaying in a user interface. */
  readonly displayCode: Scalars['String']['output'];
  /**
   * End date of gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
   */
  readonly endDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * List of events associated with the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly events: ReadonlyArray<GiftCardEvent>;
  readonly expiryDate?: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly initialBalance: Money;
  readonly isActive: Scalars['Boolean']['output'];
  /** Last 4 characters of gift card code. */
  readonly last4CodeChars: Scalars['String']['output'];
  readonly lastUsedOn?: Maybe<Scalars['DateTime']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Related gift card product.
   *
   * Added in Saleor 3.1.
   */
  readonly product?: Maybe<Product>;
  /**
   * Start date of gift card.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly startDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The gift card tag.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly tags: ReadonlyArray<GiftCardTag>;
  /**
   * The customer who used a gift card.
   *
   * Added in Saleor 3.1.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly usedBy?: Maybe<User>;
  /**
   * Email address of the customer who used a gift card.
   *
   * Added in Saleor 3.1.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly usedByEmail?: Maybe<Scalars['String']['output']>;
  /**
   * The customer who bought a gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
   */
  readonly user?: Maybe<User>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardEventsArgs = {
  filter?: InputMaybe<GiftCardEventFilterInput>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Activate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardActivate = {
  readonly errors: ReadonlyArray<GiftCardError>;
  /** Activated gift card. */
  readonly giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

/**
 * Adds note to the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardAddNote = {
  readonly errors: ReadonlyArray<GiftCardError>;
  /** Gift card note created. */
  readonly event?: Maybe<GiftCardEvent>;
  /** Gift card with the note added. */
  readonly giftCard?: Maybe<GiftCard>;
};

export type GiftCardAddNoteInput = {
  /** Note message. */
  readonly message: Scalars['String']['input'];
};

/**
 * Activate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkActivate = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<GiftCardError>;
};

/**
 * Create gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkCreate = {
  /** Returns how many objects were created. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<GiftCardError>;
  /** List of created gift cards. */
  readonly giftCards: ReadonlyArray<GiftCard>;
};

export type GiftCardBulkCreateInput = {
  /** Balance of the gift card. */
  readonly balance: PriceInput;
  /** The number of cards to issue. */
  readonly count: Scalars['Int']['input'];
  /** The gift card expiry date. */
  readonly expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /** Determine if gift card is active. */
  readonly isActive: Scalars['Boolean']['input'];
  /** The gift card tags. */
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Deactivate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDeactivate = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<GiftCardError>;
};

/**
 * Delete gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<GiftCardError>;
};

export type GiftCardCountableConnection = {
  readonly edges: ReadonlyArray<GiftCardCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: GiftCard;
};

/**
 * Creates a new gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardCreate = {
  readonly errors: ReadonlyArray<GiftCardError>;
  readonly giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

export type GiftCardCreateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  readonly addTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** Balance of the gift card. */
  readonly balance: PriceInput;
  /**
   * Slug of a channel from which the email should be sent.
   *
   * Added in Saleor 3.1.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  readonly code?: InputMaybe<Scalars['String']['input']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  readonly endDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  readonly expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Determine if gift card is active.
   *
   * Added in Saleor 3.1.
   */
  readonly isActive: Scalars['Boolean']['input'];
  /**
   * The gift card note from the staff member.
   *
   * Added in Saleor 3.1.
   */
  readonly note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly startDate?: InputMaybe<Scalars['Date']['input']>;
  /** Email of the customer to whom gift card will be sent. */
  readonly userEmail?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new gift card is created.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardCreated = Event & {
  /** The gift card the event relates to. */
  readonly giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deactivate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDeactivate = {
  readonly errors: ReadonlyArray<GiftCardError>;
  /** Deactivated gift card. */
  readonly giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

/**
 * Delete gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDelete = {
  readonly errors: ReadonlyArray<GiftCardError>;
  readonly giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

/**
 * Event sent when gift card is deleted.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardDeleted = Event & {
  /** The gift card the event relates to. */
  readonly giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type GiftCardError = {
  /** The error code. */
  readonly code: GiftCardErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of tag values that cause the error. */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

/** An enumeration. */
export enum GiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  ExpiredGiftCard = 'EXPIRED_GIFT_CARD',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/**
 * History log of the gift card.
 *
 * Added in Saleor 3.1.
 */
export type GiftCardEvent = Node & {
  /** App that performed the action. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  readonly app?: Maybe<App>;
  /** The gift card balance. */
  readonly balance?: Maybe<GiftCardEventBalance>;
  /** Date when event happened at in ISO 8601 format. */
  readonly date?: Maybe<Scalars['DateTime']['output']>;
  /** Email of the customer. */
  readonly email?: Maybe<Scalars['String']['output']>;
  /** The gift card expiry date. */
  readonly expiryDate?: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Content of the event. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Previous gift card expiry date. */
  readonly oldExpiryDate?: Maybe<Scalars['Date']['output']>;
  /** The list of old gift card tags. */
  readonly oldTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /** The order ID where gift card was used or bought. */
  readonly orderId?: Maybe<Scalars['ID']['output']>;
  /** User-friendly number of an order where gift card was used or bought. */
  readonly orderNumber?: Maybe<Scalars['String']['output']>;
  /** The list of gift card tags. */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /** Gift card event type. */
  readonly type?: Maybe<GiftCardEventsEnum>;
  /** User who performed the action. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  readonly user?: Maybe<User>;
};

export type GiftCardEventBalance = {
  /** Current balance of the gift card. */
  readonly currentBalance: Money;
  /** Initial balance of the gift card. */
  readonly initialBalance?: Maybe<Money>;
  /** Previous current balance of the gift card. */
  readonly oldCurrentBalance?: Maybe<Money>;
  /** Previous initial balance of the gift card. */
  readonly oldInitialBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
  readonly orders?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly type?: InputMaybe<GiftCardEventsEnum>;
};

/** An enumeration. */
export enum GiftCardEventsEnum {
  Activated = 'ACTIVATED',
  BalanceReset = 'BALANCE_RESET',
  Bought = 'BOUGHT',
  Deactivated = 'DEACTIVATED',
  ExpiryDateUpdated = 'EXPIRY_DATE_UPDATED',
  Issued = 'ISSUED',
  NoteAdded = 'NOTE_ADDED',
  Resent = 'RESENT',
  SentToCustomer = 'SENT_TO_CUSTOMER',
  TagsUpdated = 'TAGS_UPDATED',
  Updated = 'UPDATED',
  UsedInOrder = 'USED_IN_ORDER'
}

export type GiftCardFilterInput = {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly currency?: InputMaybe<Scalars['String']['input']>;
  readonly currentBalance?: InputMaybe<PriceRangeInput>;
  readonly initialBalance?: InputMaybe<PriceRangeInput>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly used?: InputMaybe<Scalars['Boolean']['input']>;
  readonly usedBy?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Event sent when gift card metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type GiftCardMetadataUpdated = Event & {
  /** The gift card the event relates to. */
  readonly giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Resend a gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardResend = {
  readonly errors: ReadonlyArray<GiftCardError>;
  /** Gift card which has been sent. */
  readonly giftCard?: Maybe<GiftCard>;
};

export type GiftCardResendInput = {
  /** Slug of a channel from which the email should be sent. */
  readonly channel: Scalars['String']['input'];
  /** Email to which gift card should be send. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /** ID of a gift card to resend. */
  readonly id: Scalars['ID']['input'];
};

/**
 * Event sent when gift card is e-mailed.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardSent = Event & {
  /** Slug of a channel for which this gift card email was sent. */
  readonly channel?: Maybe<Scalars['String']['output']>;
  /** The gift card the event relates to. */
  readonly giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** E-mail address to which gift card was sent. */
  readonly sentToEmail?: Maybe<Scalars['String']['output']>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
  /** The gift card expiry period settings. */
  readonly expiryPeriod?: Maybe<TimePeriod>;
  /** The gift card expiry type settings. */
  readonly expiryType: GiftCardSettingsExpiryTypeEnum;
};

export type GiftCardSettingsError = {
  /** The error code. */
  readonly code: GiftCardSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum GiftCardSettingsErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  Required = 'REQUIRED'
}

/** An enumeration. */
export enum GiftCardSettingsExpiryTypeEnum {
  ExpiryPeriod = 'EXPIRY_PERIOD',
  NeverExpire = 'NEVER_EXPIRE'
}

/**
 * Update gift card settings.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardSettingsUpdate = {
  readonly errors: ReadonlyArray<GiftCardSettingsError>;
  /** Gift card settings. */
  readonly giftCardSettings?: Maybe<GiftCardSettings>;
};

export type GiftCardSettingsUpdateInput = {
  /** Defines gift card expiry period. */
  readonly expiryPeriod?: InputMaybe<TimePeriodInputType>;
  /** Defines gift card default expiry settings. */
  readonly expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
};

export enum GiftCardSortField {
  /**
   * Sort gift cards by created at.
   *
   * Added in Saleor 3.8.
   */
  CreatedAt = 'CREATED_AT',
  /** Sort gift cards by current balance. */
  CurrentBalance = 'CURRENT_BALANCE',
  /** Sort gift cards by product. */
  Product = 'PRODUCT',
  /** Sort gift cards by used by. */
  UsedBy = 'USED_BY'
}

export type GiftCardSortingInput = {
  /** Specifies the direction in which to sort gift cards. */
  readonly direction: OrderDirection;
  /** Sort gift cards by the selected field. */
  readonly field: GiftCardSortField;
};

/**
 * Event sent when gift card status has changed.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardStatusChanged = Event & {
  /** The gift card the event relates to. */
  readonly giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * The gift card tag.
 *
 * Added in Saleor 3.1.
 */
export type GiftCardTag = Node & {
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type GiftCardTagCountableConnection = {
  readonly edges: ReadonlyArray<GiftCardTagCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardTagCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: GiftCardTag;
};

export type GiftCardTagFilterInput = {
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Update a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardUpdate = {
  readonly errors: ReadonlyArray<GiftCardError>;
  readonly giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

export type GiftCardUpdateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  readonly addTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /**
   * The gift card balance amount.
   *
   * Added in Saleor 3.1.
   */
  readonly balanceAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  readonly endDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  readonly expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card tags to remove.
   *
   * Added in Saleor 3.1.
   */
  readonly removeTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  readonly startDate?: InputMaybe<Scalars['Date']['input']>;
};

/**
 * Event sent when gift card is updated.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardUpdated = Event & {
  /** The gift card the event relates to. */
  readonly giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Define the filtering options for foreign key fields.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GlobalIdFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<Scalars['ID']['input']>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/** Represents permission group data. */
export type Group = Node & {
  /**
   * List of channels the group has access to.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly accessibleChannels?: Maybe<ReadonlyArray<Channel>>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /** List of group permissions */
  readonly permissions?: Maybe<ReadonlyArray<Permission>>;
  /**
   * Determine if the group have restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly restrictedAccessToChannels: Scalars['Boolean']['output'];
  /** True, if the currently authenticated user has rights to manage a group. */
  readonly userCanManage: Scalars['Boolean']['output'];
  /**
   * List of group users
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly users?: Maybe<ReadonlyArray<User>>;
};

export type GroupCountableConnection = {
  readonly edges: ReadonlyArray<GroupCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GroupCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Group;
};

/** Thumbnail formats for icon images. */
export enum IconThumbnailFormatEnum {
  Original = 'ORIGINAL',
  Webp = 'WEBP'
}

/** Represents an image. */
export type Image = {
  /** Alt text for an image. */
  readonly alt?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  readonly url: Scalars['String']['output'];
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  /** Value less than or equal to. */
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an Invoice. */
export type Invoice = Job & Node & ObjectWithMetadata & {
  readonly createdAt: Scalars['DateTime']['output'];
  readonly externalUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly number?: Maybe<Scalars['String']['output']>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  readonly order?: Maybe<Order>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Job status. */
  readonly status: JobStatusEnum;
  readonly updatedAt: Scalars['DateTime']['output'];
  /** URL to download an invoice. */
  readonly url?: Maybe<Scalars['String']['output']>;
};


/** Represents an Invoice. */
export type InvoiceMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an Invoice. */
export type InvoiceMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Creates a ready to send invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceCreate = {
  readonly errors: ReadonlyArray<InvoiceError>;
  readonly invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type InvoiceCreateInput = {
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Invoice number. */
  readonly number: Scalars['String']['input'];
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of an invoice to download. */
  readonly url: Scalars['String']['input'];
};

/**
 * Deletes an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceDelete = {
  readonly errors: ReadonlyArray<InvoiceError>;
  readonly invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

/**
 * Event sent when invoice is deleted.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceDeleted = Event & {
  /** The invoice the event relates to. */
  readonly invoice?: Maybe<Invoice>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type InvoiceError = {
  /** The error code. */
  readonly code: InvoiceErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum InvoiceErrorCode {
  EmailNotSet = 'EMAIL_NOT_SET',
  InvalidStatus = 'INVALID_STATUS',
  NotFound = 'NOT_FOUND',
  NotReady = 'NOT_READY',
  NoInvoicePlugin = 'NO_INVOICE_PLUGIN',
  NumberNotSet = 'NUMBER_NOT_SET',
  Required = 'REQUIRED',
  UrlNotSet = 'URL_NOT_SET'
}

/**
 * Request an invoice for the order using plugin.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequest = {
  readonly errors: ReadonlyArray<InvoiceError>;
  readonly invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly invoiceErrors: ReadonlyArray<InvoiceError>;
  /** Order related to an invoice. */
  readonly order?: Maybe<Order>;
};

/**
 * Requests deletion of an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequestDelete = {
  readonly errors: ReadonlyArray<InvoiceError>;
  readonly invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

/**
 * Event sent when invoice is requested.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceRequested = Event & {
  /** The invoice the event relates to. */
  readonly invoice?: Maybe<Invoice>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  readonly order: Order;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Send an invoice notification to the customer.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceSendNotification = {
  readonly errors: ReadonlyArray<InvoiceError>;
  readonly invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

/**
 * Event sent when invoice is sent.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceSent = Event & {
  /** The invoice the event relates to. */
  readonly invoice?: Maybe<Invoice>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceUpdate = {
  readonly errors: ReadonlyArray<InvoiceError>;
  readonly invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type IssuingPrincipal = App | User;

export type Job = {
  /** Created date time of job in ISO 8601 format. */
  readonly createdAt: Scalars['DateTime']['output'];
  /** Job message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  readonly status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  readonly updatedAt: Scalars['DateTime']['output'];
};

/** An enumeration. */
export enum JobStatusEnum {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** An enumeration. */
export enum LanguageCodeEnum {
  Af = 'AF',
  AfNa = 'AF_NA',
  AfZa = 'AF_ZA',
  Agq = 'AGQ',
  AgqCm = 'AGQ_CM',
  Ak = 'AK',
  AkGh = 'AK_GH',
  Am = 'AM',
  AmEt = 'AM_ET',
  Ar = 'AR',
  ArAe = 'AR_AE',
  ArBh = 'AR_BH',
  ArDj = 'AR_DJ',
  ArDz = 'AR_DZ',
  ArEg = 'AR_EG',
  ArEh = 'AR_EH',
  ArEr = 'AR_ER',
  ArIl = 'AR_IL',
  ArIq = 'AR_IQ',
  ArJo = 'AR_JO',
  ArKm = 'AR_KM',
  ArKw = 'AR_KW',
  ArLb = 'AR_LB',
  ArLy = 'AR_LY',
  ArMa = 'AR_MA',
  ArMr = 'AR_MR',
  ArOm = 'AR_OM',
  ArPs = 'AR_PS',
  ArQa = 'AR_QA',
  ArSa = 'AR_SA',
  ArSd = 'AR_SD',
  ArSo = 'AR_SO',
  ArSs = 'AR_SS',
  ArSy = 'AR_SY',
  ArTd = 'AR_TD',
  ArTn = 'AR_TN',
  ArYe = 'AR_YE',
  As = 'AS',
  Asa = 'ASA',
  AsaTz = 'ASA_TZ',
  Ast = 'AST',
  AstEs = 'AST_ES',
  AsIn = 'AS_IN',
  Az = 'AZ',
  AzCyrl = 'AZ_CYRL',
  AzCyrlAz = 'AZ_CYRL_AZ',
  AzLatn = 'AZ_LATN',
  AzLatnAz = 'AZ_LATN_AZ',
  Bas = 'BAS',
  BasCm = 'BAS_CM',
  Be = 'BE',
  Bem = 'BEM',
  BemZm = 'BEM_ZM',
  Bez = 'BEZ',
  BezTz = 'BEZ_TZ',
  BeBy = 'BE_BY',
  Bg = 'BG',
  BgBg = 'BG_BG',
  Bm = 'BM',
  BmMl = 'BM_ML',
  Bn = 'BN',
  BnBd = 'BN_BD',
  BnIn = 'BN_IN',
  Bo = 'BO',
  BoCn = 'BO_CN',
  BoIn = 'BO_IN',
  Br = 'BR',
  Brx = 'BRX',
  BrxIn = 'BRX_IN',
  BrFr = 'BR_FR',
  Bs = 'BS',
  BsCyrl = 'BS_CYRL',
  BsCyrlBa = 'BS_CYRL_BA',
  BsLatn = 'BS_LATN',
  BsLatnBa = 'BS_LATN_BA',
  Ca = 'CA',
  CaAd = 'CA_AD',
  CaEs = 'CA_ES',
  CaEsValencia = 'CA_ES_VALENCIA',
  CaFr = 'CA_FR',
  CaIt = 'CA_IT',
  Ccp = 'CCP',
  CcpBd = 'CCP_BD',
  CcpIn = 'CCP_IN',
  Ce = 'CE',
  Ceb = 'CEB',
  CebPh = 'CEB_PH',
  CeRu = 'CE_RU',
  Cgg = 'CGG',
  CggUg = 'CGG_UG',
  Chr = 'CHR',
  ChrUs = 'CHR_US',
  Ckb = 'CKB',
  CkbIq = 'CKB_IQ',
  CkbIr = 'CKB_IR',
  Cs = 'CS',
  CsCz = 'CS_CZ',
  Cu = 'CU',
  CuRu = 'CU_RU',
  Cy = 'CY',
  CyGb = 'CY_GB',
  Da = 'DA',
  Dav = 'DAV',
  DavKe = 'DAV_KE',
  DaDk = 'DA_DK',
  DaGl = 'DA_GL',
  De = 'DE',
  DeAt = 'DE_AT',
  DeBe = 'DE_BE',
  DeCh = 'DE_CH',
  DeDe = 'DE_DE',
  DeIt = 'DE_IT',
  DeLi = 'DE_LI',
  DeLu = 'DE_LU',
  Dje = 'DJE',
  DjeNe = 'DJE_NE',
  Dsb = 'DSB',
  DsbDe = 'DSB_DE',
  Dua = 'DUA',
  DuaCm = 'DUA_CM',
  Dyo = 'DYO',
  DyoSn = 'DYO_SN',
  Dz = 'DZ',
  DzBt = 'DZ_BT',
  Ebu = 'EBU',
  EbuKe = 'EBU_KE',
  Ee = 'EE',
  EeGh = 'EE_GH',
  EeTg = 'EE_TG',
  El = 'EL',
  ElCy = 'EL_CY',
  ElGr = 'EL_GR',
  En = 'EN',
  EnAe = 'EN_AE',
  EnAg = 'EN_AG',
  EnAi = 'EN_AI',
  EnAs = 'EN_AS',
  EnAt = 'EN_AT',
  EnAu = 'EN_AU',
  EnBb = 'EN_BB',
  EnBe = 'EN_BE',
  EnBi = 'EN_BI',
  EnBm = 'EN_BM',
  EnBs = 'EN_BS',
  EnBw = 'EN_BW',
  EnBz = 'EN_BZ',
  EnCa = 'EN_CA',
  EnCc = 'EN_CC',
  EnCh = 'EN_CH',
  EnCk = 'EN_CK',
  EnCm = 'EN_CM',
  EnCx = 'EN_CX',
  EnCy = 'EN_CY',
  EnDe = 'EN_DE',
  EnDg = 'EN_DG',
  EnDk = 'EN_DK',
  EnDm = 'EN_DM',
  EnEr = 'EN_ER',
  EnFi = 'EN_FI',
  EnFj = 'EN_FJ',
  EnFk = 'EN_FK',
  EnFm = 'EN_FM',
  EnGb = 'EN_GB',
  EnGd = 'EN_GD',
  EnGg = 'EN_GG',
  EnGh = 'EN_GH',
  EnGi = 'EN_GI',
  EnGm = 'EN_GM',
  EnGu = 'EN_GU',
  EnGy = 'EN_GY',
  EnHk = 'EN_HK',
  EnIe = 'EN_IE',
  EnIl = 'EN_IL',
  EnIm = 'EN_IM',
  EnIn = 'EN_IN',
  EnIo = 'EN_IO',
  EnJe = 'EN_JE',
  EnJm = 'EN_JM',
  EnKe = 'EN_KE',
  EnKi = 'EN_KI',
  EnKn = 'EN_KN',
  EnKy = 'EN_KY',
  EnLc = 'EN_LC',
  EnLr = 'EN_LR',
  EnLs = 'EN_LS',
  EnMg = 'EN_MG',
  EnMh = 'EN_MH',
  EnMo = 'EN_MO',
  EnMp = 'EN_MP',
  EnMs = 'EN_MS',
  EnMt = 'EN_MT',
  EnMu = 'EN_MU',
  EnMw = 'EN_MW',
  EnMy = 'EN_MY',
  EnNa = 'EN_NA',
  EnNf = 'EN_NF',
  EnNg = 'EN_NG',
  EnNl = 'EN_NL',
  EnNr = 'EN_NR',
  EnNu = 'EN_NU',
  EnNz = 'EN_NZ',
  EnPg = 'EN_PG',
  EnPh = 'EN_PH',
  EnPk = 'EN_PK',
  EnPn = 'EN_PN',
  EnPr = 'EN_PR',
  EnPw = 'EN_PW',
  EnRw = 'EN_RW',
  EnSb = 'EN_SB',
  EnSc = 'EN_SC',
  EnSd = 'EN_SD',
  EnSe = 'EN_SE',
  EnSg = 'EN_SG',
  EnSh = 'EN_SH',
  EnSi = 'EN_SI',
  EnSl = 'EN_SL',
  EnSs = 'EN_SS',
  EnSx = 'EN_SX',
  EnSz = 'EN_SZ',
  EnTc = 'EN_TC',
  EnTk = 'EN_TK',
  EnTo = 'EN_TO',
  EnTt = 'EN_TT',
  EnTv = 'EN_TV',
  EnTz = 'EN_TZ',
  EnUg = 'EN_UG',
  EnUm = 'EN_UM',
  EnUs = 'EN_US',
  EnVc = 'EN_VC',
  EnVg = 'EN_VG',
  EnVi = 'EN_VI',
  EnVu = 'EN_VU',
  EnWs = 'EN_WS',
  EnZa = 'EN_ZA',
  EnZm = 'EN_ZM',
  EnZw = 'EN_ZW',
  Eo = 'EO',
  Es = 'ES',
  EsAr = 'ES_AR',
  EsBo = 'ES_BO',
  EsBr = 'ES_BR',
  EsBz = 'ES_BZ',
  EsCl = 'ES_CL',
  EsCo = 'ES_CO',
  EsCr = 'ES_CR',
  EsCu = 'ES_CU',
  EsDo = 'ES_DO',
  EsEa = 'ES_EA',
  EsEc = 'ES_EC',
  EsEs = 'ES_ES',
  EsGq = 'ES_GQ',
  EsGt = 'ES_GT',
  EsHn = 'ES_HN',
  EsIc = 'ES_IC',
  EsMx = 'ES_MX',
  EsNi = 'ES_NI',
  EsPa = 'ES_PA',
  EsPe = 'ES_PE',
  EsPh = 'ES_PH',
  EsPr = 'ES_PR',
  EsPy = 'ES_PY',
  EsSv = 'ES_SV',
  EsUs = 'ES_US',
  EsUy = 'ES_UY',
  EsVe = 'ES_VE',
  Et = 'ET',
  EtEe = 'ET_EE',
  Eu = 'EU',
  EuEs = 'EU_ES',
  Ewo = 'EWO',
  EwoCm = 'EWO_CM',
  Fa = 'FA',
  FaAf = 'FA_AF',
  FaIr = 'FA_IR',
  Ff = 'FF',
  FfAdlm = 'FF_ADLM',
  FfAdlmBf = 'FF_ADLM_BF',
  FfAdlmCm = 'FF_ADLM_CM',
  FfAdlmGh = 'FF_ADLM_GH',
  FfAdlmGm = 'FF_ADLM_GM',
  FfAdlmGn = 'FF_ADLM_GN',
  FfAdlmGw = 'FF_ADLM_GW',
  FfAdlmLr = 'FF_ADLM_LR',
  FfAdlmMr = 'FF_ADLM_MR',
  FfAdlmNe = 'FF_ADLM_NE',
  FfAdlmNg = 'FF_ADLM_NG',
  FfAdlmSl = 'FF_ADLM_SL',
  FfAdlmSn = 'FF_ADLM_SN',
  FfLatn = 'FF_LATN',
  FfLatnBf = 'FF_LATN_BF',
  FfLatnCm = 'FF_LATN_CM',
  FfLatnGh = 'FF_LATN_GH',
  FfLatnGm = 'FF_LATN_GM',
  FfLatnGn = 'FF_LATN_GN',
  FfLatnGw = 'FF_LATN_GW',
  FfLatnLr = 'FF_LATN_LR',
  FfLatnMr = 'FF_LATN_MR',
  FfLatnNe = 'FF_LATN_NE',
  FfLatnNg = 'FF_LATN_NG',
  FfLatnSl = 'FF_LATN_SL',
  FfLatnSn = 'FF_LATN_SN',
  Fi = 'FI',
  Fil = 'FIL',
  FilPh = 'FIL_PH',
  FiFi = 'FI_FI',
  Fo = 'FO',
  FoDk = 'FO_DK',
  FoFo = 'FO_FO',
  Fr = 'FR',
  FrBe = 'FR_BE',
  FrBf = 'FR_BF',
  FrBi = 'FR_BI',
  FrBj = 'FR_BJ',
  FrBl = 'FR_BL',
  FrCa = 'FR_CA',
  FrCd = 'FR_CD',
  FrCf = 'FR_CF',
  FrCg = 'FR_CG',
  FrCh = 'FR_CH',
  FrCi = 'FR_CI',
  FrCm = 'FR_CM',
  FrDj = 'FR_DJ',
  FrDz = 'FR_DZ',
  FrFr = 'FR_FR',
  FrGa = 'FR_GA',
  FrGf = 'FR_GF',
  FrGn = 'FR_GN',
  FrGp = 'FR_GP',
  FrGq = 'FR_GQ',
  FrHt = 'FR_HT',
  FrKm = 'FR_KM',
  FrLu = 'FR_LU',
  FrMa = 'FR_MA',
  FrMc = 'FR_MC',
  FrMf = 'FR_MF',
  FrMg = 'FR_MG',
  FrMl = 'FR_ML',
  FrMq = 'FR_MQ',
  FrMr = 'FR_MR',
  FrMu = 'FR_MU',
  FrNc = 'FR_NC',
  FrNe = 'FR_NE',
  FrPf = 'FR_PF',
  FrPm = 'FR_PM',
  FrRe = 'FR_RE',
  FrRw = 'FR_RW',
  FrSc = 'FR_SC',
  FrSn = 'FR_SN',
  FrSy = 'FR_SY',
  FrTd = 'FR_TD',
  FrTg = 'FR_TG',
  FrTn = 'FR_TN',
  FrVu = 'FR_VU',
  FrWf = 'FR_WF',
  FrYt = 'FR_YT',
  Fur = 'FUR',
  FurIt = 'FUR_IT',
  Fy = 'FY',
  FyNl = 'FY_NL',
  Ga = 'GA',
  GaGb = 'GA_GB',
  GaIe = 'GA_IE',
  Gd = 'GD',
  GdGb = 'GD_GB',
  Gl = 'GL',
  GlEs = 'GL_ES',
  Gsw = 'GSW',
  GswCh = 'GSW_CH',
  GswFr = 'GSW_FR',
  GswLi = 'GSW_LI',
  Gu = 'GU',
  Guz = 'GUZ',
  GuzKe = 'GUZ_KE',
  GuIn = 'GU_IN',
  Gv = 'GV',
  GvIm = 'GV_IM',
  Ha = 'HA',
  Haw = 'HAW',
  HawUs = 'HAW_US',
  HaGh = 'HA_GH',
  HaNe = 'HA_NE',
  HaNg = 'HA_NG',
  He = 'HE',
  HeIl = 'HE_IL',
  Hi = 'HI',
  HiIn = 'HI_IN',
  Hr = 'HR',
  HrBa = 'HR_BA',
  HrHr = 'HR_HR',
  Hsb = 'HSB',
  HsbDe = 'HSB_DE',
  Hu = 'HU',
  HuHu = 'HU_HU',
  Hy = 'HY',
  HyAm = 'HY_AM',
  Ia = 'IA',
  Id = 'ID',
  IdId = 'ID_ID',
  Ig = 'IG',
  IgNg = 'IG_NG',
  Ii = 'II',
  IiCn = 'II_CN',
  Is = 'IS',
  IsIs = 'IS_IS',
  It = 'IT',
  ItCh = 'IT_CH',
  ItIt = 'IT_IT',
  ItSm = 'IT_SM',
  ItVa = 'IT_VA',
  Ja = 'JA',
  JaJp = 'JA_JP',
  Jgo = 'JGO',
  JgoCm = 'JGO_CM',
  Jmc = 'JMC',
  JmcTz = 'JMC_TZ',
  Jv = 'JV',
  JvId = 'JV_ID',
  Ka = 'KA',
  Kab = 'KAB',
  KabDz = 'KAB_DZ',
  Kam = 'KAM',
  KamKe = 'KAM_KE',
  KaGe = 'KA_GE',
  Kde = 'KDE',
  KdeTz = 'KDE_TZ',
  Kea = 'KEA',
  KeaCv = 'KEA_CV',
  Khq = 'KHQ',
  KhqMl = 'KHQ_ML',
  Ki = 'KI',
  KiKe = 'KI_KE',
  Kk = 'KK',
  Kkj = 'KKJ',
  KkjCm = 'KKJ_CM',
  KkKz = 'KK_KZ',
  Kl = 'KL',
  Kln = 'KLN',
  KlnKe = 'KLN_KE',
  KlGl = 'KL_GL',
  Km = 'KM',
  KmKh = 'KM_KH',
  Kn = 'KN',
  KnIn = 'KN_IN',
  Ko = 'KO',
  Kok = 'KOK',
  KokIn = 'KOK_IN',
  KoKp = 'KO_KP',
  KoKr = 'KO_KR',
  Ks = 'KS',
  Ksb = 'KSB',
  KsbTz = 'KSB_TZ',
  Ksf = 'KSF',
  KsfCm = 'KSF_CM',
  Ksh = 'KSH',
  KshDe = 'KSH_DE',
  KsArab = 'KS_ARAB',
  KsArabIn = 'KS_ARAB_IN',
  Ku = 'KU',
  KuTr = 'KU_TR',
  Kw = 'KW',
  KwGb = 'KW_GB',
  Ky = 'KY',
  KyKg = 'KY_KG',
  Lag = 'LAG',
  LagTz = 'LAG_TZ',
  Lb = 'LB',
  LbLu = 'LB_LU',
  Lg = 'LG',
  LgUg = 'LG_UG',
  Lkt = 'LKT',
  LktUs = 'LKT_US',
  Ln = 'LN',
  LnAo = 'LN_AO',
  LnCd = 'LN_CD',
  LnCf = 'LN_CF',
  LnCg = 'LN_CG',
  Lo = 'LO',
  LoLa = 'LO_LA',
  Lrc = 'LRC',
  LrcIq = 'LRC_IQ',
  LrcIr = 'LRC_IR',
  Lt = 'LT',
  LtLt = 'LT_LT',
  Lu = 'LU',
  Luo = 'LUO',
  LuoKe = 'LUO_KE',
  Luy = 'LUY',
  LuyKe = 'LUY_KE',
  LuCd = 'LU_CD',
  Lv = 'LV',
  LvLv = 'LV_LV',
  Mai = 'MAI',
  MaiIn = 'MAI_IN',
  Mas = 'MAS',
  MasKe = 'MAS_KE',
  MasTz = 'MAS_TZ',
  Mer = 'MER',
  MerKe = 'MER_KE',
  Mfe = 'MFE',
  MfeMu = 'MFE_MU',
  Mg = 'MG',
  Mgh = 'MGH',
  MghMz = 'MGH_MZ',
  Mgo = 'MGO',
  MgoCm = 'MGO_CM',
  MgMg = 'MG_MG',
  Mi = 'MI',
  MiNz = 'MI_NZ',
  Mk = 'MK',
  MkMk = 'MK_MK',
  Ml = 'ML',
  MlIn = 'ML_IN',
  Mn = 'MN',
  Mni = 'MNI',
  MniBeng = 'MNI_BENG',
  MniBengIn = 'MNI_BENG_IN',
  MnMn = 'MN_MN',
  Mr = 'MR',
  MrIn = 'MR_IN',
  Ms = 'MS',
  MsBn = 'MS_BN',
  MsId = 'MS_ID',
  MsMy = 'MS_MY',
  MsSg = 'MS_SG',
  Mt = 'MT',
  MtMt = 'MT_MT',
  Mua = 'MUA',
  MuaCm = 'MUA_CM',
  My = 'MY',
  MyMm = 'MY_MM',
  Mzn = 'MZN',
  MznIr = 'MZN_IR',
  Naq = 'NAQ',
  NaqNa = 'NAQ_NA',
  Nb = 'NB',
  NbNo = 'NB_NO',
  NbSj = 'NB_SJ',
  Nd = 'ND',
  Nds = 'NDS',
  NdsDe = 'NDS_DE',
  NdsNl = 'NDS_NL',
  NdZw = 'ND_ZW',
  Ne = 'NE',
  NeIn = 'NE_IN',
  NeNp = 'NE_NP',
  Nl = 'NL',
  NlAw = 'NL_AW',
  NlBe = 'NL_BE',
  NlBq = 'NL_BQ',
  NlCw = 'NL_CW',
  NlNl = 'NL_NL',
  NlSr = 'NL_SR',
  NlSx = 'NL_SX',
  Nmg = 'NMG',
  NmgCm = 'NMG_CM',
  Nn = 'NN',
  Nnh = 'NNH',
  NnhCm = 'NNH_CM',
  NnNo = 'NN_NO',
  Nus = 'NUS',
  NusSs = 'NUS_SS',
  Nyn = 'NYN',
  NynUg = 'NYN_UG',
  Om = 'OM',
  OmEt = 'OM_ET',
  OmKe = 'OM_KE',
  Or = 'OR',
  OrIn = 'OR_IN',
  Os = 'OS',
  OsGe = 'OS_GE',
  OsRu = 'OS_RU',
  Pa = 'PA',
  PaArab = 'PA_ARAB',
  PaArabPk = 'PA_ARAB_PK',
  PaGuru = 'PA_GURU',
  PaGuruIn = 'PA_GURU_IN',
  Pcm = 'PCM',
  PcmNg = 'PCM_NG',
  Pl = 'PL',
  PlPl = 'PL_PL',
  Prg = 'PRG',
  Ps = 'PS',
  PsAf = 'PS_AF',
  PsPk = 'PS_PK',
  Pt = 'PT',
  PtAo = 'PT_AO',
  PtBr = 'PT_BR',
  PtCh = 'PT_CH',
  PtCv = 'PT_CV',
  PtGq = 'PT_GQ',
  PtGw = 'PT_GW',
  PtLu = 'PT_LU',
  PtMo = 'PT_MO',
  PtMz = 'PT_MZ',
  PtPt = 'PT_PT',
  PtSt = 'PT_ST',
  PtTl = 'PT_TL',
  Qu = 'QU',
  QuBo = 'QU_BO',
  QuEc = 'QU_EC',
  QuPe = 'QU_PE',
  Rm = 'RM',
  RmCh = 'RM_CH',
  Rn = 'RN',
  RnBi = 'RN_BI',
  Ro = 'RO',
  Rof = 'ROF',
  RofTz = 'ROF_TZ',
  RoMd = 'RO_MD',
  RoRo = 'RO_RO',
  Ru = 'RU',
  RuBy = 'RU_BY',
  RuKg = 'RU_KG',
  RuKz = 'RU_KZ',
  RuMd = 'RU_MD',
  RuRu = 'RU_RU',
  RuUa = 'RU_UA',
  Rw = 'RW',
  Rwk = 'RWK',
  RwkTz = 'RWK_TZ',
  RwRw = 'RW_RW',
  Sah = 'SAH',
  SahRu = 'SAH_RU',
  Saq = 'SAQ',
  SaqKe = 'SAQ_KE',
  Sat = 'SAT',
  SatOlck = 'SAT_OLCK',
  SatOlckIn = 'SAT_OLCK_IN',
  Sbp = 'SBP',
  SbpTz = 'SBP_TZ',
  Sd = 'SD',
  SdArab = 'SD_ARAB',
  SdArabPk = 'SD_ARAB_PK',
  SdDeva = 'SD_DEVA',
  SdDevaIn = 'SD_DEVA_IN',
  Se = 'SE',
  Seh = 'SEH',
  SehMz = 'SEH_MZ',
  Ses = 'SES',
  SesMl = 'SES_ML',
  SeFi = 'SE_FI',
  SeNo = 'SE_NO',
  SeSe = 'SE_SE',
  Sg = 'SG',
  SgCf = 'SG_CF',
  Shi = 'SHI',
  ShiLatn = 'SHI_LATN',
  ShiLatnMa = 'SHI_LATN_MA',
  ShiTfng = 'SHI_TFNG',
  ShiTfngMa = 'SHI_TFNG_MA',
  Si = 'SI',
  SiLk = 'SI_LK',
  Sk = 'SK',
  SkSk = 'SK_SK',
  Sl = 'SL',
  SlSi = 'SL_SI',
  Smn = 'SMN',
  SmnFi = 'SMN_FI',
  Sn = 'SN',
  SnZw = 'SN_ZW',
  So = 'SO',
  SoDj = 'SO_DJ',
  SoEt = 'SO_ET',
  SoKe = 'SO_KE',
  SoSo = 'SO_SO',
  Sq = 'SQ',
  SqAl = 'SQ_AL',
  SqMk = 'SQ_MK',
  SqXk = 'SQ_XK',
  Sr = 'SR',
  SrCyrl = 'SR_CYRL',
  SrCyrlBa = 'SR_CYRL_BA',
  SrCyrlMe = 'SR_CYRL_ME',
  SrCyrlRs = 'SR_CYRL_RS',
  SrCyrlXk = 'SR_CYRL_XK',
  SrLatn = 'SR_LATN',
  SrLatnBa = 'SR_LATN_BA',
  SrLatnMe = 'SR_LATN_ME',
  SrLatnRs = 'SR_LATN_RS',
  SrLatnXk = 'SR_LATN_XK',
  Su = 'SU',
  SuLatn = 'SU_LATN',
  SuLatnId = 'SU_LATN_ID',
  Sv = 'SV',
  SvAx = 'SV_AX',
  SvFi = 'SV_FI',
  SvSe = 'SV_SE',
  Sw = 'SW',
  SwCd = 'SW_CD',
  SwKe = 'SW_KE',
  SwTz = 'SW_TZ',
  SwUg = 'SW_UG',
  Ta = 'TA',
  TaIn = 'TA_IN',
  TaLk = 'TA_LK',
  TaMy = 'TA_MY',
  TaSg = 'TA_SG',
  Te = 'TE',
  Teo = 'TEO',
  TeoKe = 'TEO_KE',
  TeoUg = 'TEO_UG',
  TeIn = 'TE_IN',
  Tg = 'TG',
  TgTj = 'TG_TJ',
  Th = 'TH',
  ThTh = 'TH_TH',
  Ti = 'TI',
  TiEr = 'TI_ER',
  TiEt = 'TI_ET',
  Tk = 'TK',
  TkTm = 'TK_TM',
  To = 'TO',
  ToTo = 'TO_TO',
  Tr = 'TR',
  TrCy = 'TR_CY',
  TrTr = 'TR_TR',
  Tt = 'TT',
  TtRu = 'TT_RU',
  Twq = 'TWQ',
  TwqNe = 'TWQ_NE',
  Tzm = 'TZM',
  TzmMa = 'TZM_MA',
  Ug = 'UG',
  UgCn = 'UG_CN',
  Uk = 'UK',
  UkUa = 'UK_UA',
  Ur = 'UR',
  UrIn = 'UR_IN',
  UrPk = 'UR_PK',
  Uz = 'UZ',
  UzArab = 'UZ_ARAB',
  UzArabAf = 'UZ_ARAB_AF',
  UzCyrl = 'UZ_CYRL',
  UzCyrlUz = 'UZ_CYRL_UZ',
  UzLatn = 'UZ_LATN',
  UzLatnUz = 'UZ_LATN_UZ',
  Vai = 'VAI',
  VaiLatn = 'VAI_LATN',
  VaiLatnLr = 'VAI_LATN_LR',
  VaiVaii = 'VAI_VAII',
  VaiVaiiLr = 'VAI_VAII_LR',
  Vi = 'VI',
  ViVn = 'VI_VN',
  Vo = 'VO',
  Vun = 'VUN',
  VunTz = 'VUN_TZ',
  Wae = 'WAE',
  WaeCh = 'WAE_CH',
  Wo = 'WO',
  WoSn = 'WO_SN',
  Xh = 'XH',
  XhZa = 'XH_ZA',
  Xog = 'XOG',
  XogUg = 'XOG_UG',
  Yav = 'YAV',
  YavCm = 'YAV_CM',
  Yi = 'YI',
  Yo = 'YO',
  YoBj = 'YO_BJ',
  YoNg = 'YO_NG',
  Yue = 'YUE',
  YueHans = 'YUE_HANS',
  YueHansCn = 'YUE_HANS_CN',
  YueHant = 'YUE_HANT',
  YueHantHk = 'YUE_HANT_HK',
  Zgh = 'ZGH',
  ZghMa = 'ZGH_MA',
  Zh = 'ZH',
  ZhHans = 'ZH_HANS',
  ZhHansCn = 'ZH_HANS_CN',
  ZhHansHk = 'ZH_HANS_HK',
  ZhHansMo = 'ZH_HANS_MO',
  ZhHansSg = 'ZH_HANS_SG',
  ZhHant = 'ZH_HANT',
  ZhHantHk = 'ZH_HANT_HK',
  ZhHantMo = 'ZH_HANT_MO',
  ZhHantTw = 'ZH_HANT_TW',
  Zu = 'ZU',
  ZuZa = 'ZU_ZA'
}

export type LanguageDisplay = {
  /** ISO 639 representation of the language name. */
  readonly code: LanguageCodeEnum;
  /** Full name of the language. */
  readonly language: Scalars['String']['output'];
};

export type LimitInfo = {
  /** Defines the allowed maximum resource usage, null means unlimited. */
  readonly allowedUsage: Limits;
  /** Defines the current resource usage. */
  readonly currentUsage: Limits;
};

export type Limits = {
  readonly channels?: Maybe<Scalars['Int']['output']>;
  readonly orders?: Maybe<Scalars['Int']['output']>;
  readonly productVariants?: Maybe<Scalars['Int']['output']>;
  readonly staffUsers?: Maybe<Scalars['Int']['output']>;
  readonly warehouses?: Maybe<Scalars['Int']['output']>;
};

/** The manifest definition. */
export type Manifest = {
  readonly about?: Maybe<Scalars['String']['output']>;
  readonly appUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The audience that will be included in all JWT tokens for the app.
   *
   * Added in Saleor 3.8.
   */
  readonly audience?: Maybe<Scalars['String']['output']>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly author?: Maybe<Scalars['String']['output']>;
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly brand?: Maybe<AppManifestBrand>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  readonly configurationUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  readonly dataPrivacy?: Maybe<Scalars['String']['output']>;
  readonly dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  readonly extensions: ReadonlyArray<AppManifestExtension>;
  readonly homepageUrl?: Maybe<Scalars['String']['output']>;
  readonly identifier: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly permissions?: Maybe<ReadonlyArray<Permission>>;
  /**
   * Determines the app's required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly requiredSaleorVersion?: Maybe<AppManifestRequiredSaleorVersion>;
  readonly supportUrl?: Maybe<Scalars['String']['output']>;
  readonly tokenTargetUrl?: Maybe<Scalars['String']['output']>;
  readonly version: Scalars['String']['output'];
  /**
   * List of the app's webhooks.
   *
   * Added in Saleor 3.5.
   */
  readonly webhooks: ReadonlyArray<AppManifestWebhook>;
};

export type Margin = {
  readonly start?: Maybe<Scalars['Int']['output']>;
  readonly stop?: Maybe<Scalars['Int']['output']>;
};

/**
 * Determine the mark as paid strategy for the channel.
 *
 *     TRANSACTION_FLOW - new orders marked as paid will receive a
 *     `TransactionItem` object, that will cover the `order.total`.
 *
 *     PAYMENT_FLOW - new orders marked as paid will receive a
 *     `Payment` object, that will cover the `order.total`.
 *
 *
 */
export enum MarkAsPaidStrategyEnum {
  PaymentFlow = 'PAYMENT_FLOW',
  TransactionFlow = 'TRANSACTION_FLOW'
}

/** An enumeration. */
export enum MeasurementUnitsEnum {
  AcreFt = 'ACRE_FT',
  AcreIn = 'ACRE_IN',
  Cm = 'CM',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicMeter = 'CUBIC_METER',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicYard = 'CUBIC_YARD',
  FlOz = 'FL_OZ',
  Ft = 'FT',
  G = 'G',
  Inch = 'INCH',
  Kg = 'KG',
  Km = 'KM',
  Lb = 'LB',
  Liter = 'LITER',
  M = 'M',
  Oz = 'OZ',
  Pint = 'PINT',
  Qt = 'QT',
  SqCm = 'SQ_CM',
  SqFt = 'SQ_FT',
  SqInch = 'SQ_INCH',
  SqKm = 'SQ_KM',
  SqM = 'SQ_M',
  SqYd = 'SQ_YD',
  Tonne = 'TONNE',
  Yd = 'YD'
}

export type MeasurementUnitsEnumFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<MeasurementUnitsEnum>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<MeasurementUnitsEnum>>;
};

export enum MediaChoicesSortField {
  /** Sort media by ID. */
  Id = 'ID'
}

export type MediaInput = {
  /** Alt text for a product media. */
  readonly alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file in a multipart request. */
  readonly image?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents an URL to an external media. */
  readonly mediaUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MediaSortingInput = {
  /** Specifies the direction in which to sort media. */
  readonly direction: OrderDirection;
  /** Sort media by the selected field. */
  readonly field: MediaChoicesSortField;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & ObjectWithMetadata & {
  readonly id: Scalars['ID']['output'];
  readonly items?: Maybe<ReadonlyArray<MenuItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly slug: Scalars['String']['output'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Deletes menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuCountableConnection = {
  readonly edges: ReadonlyArray<MenuCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Menu;
};

/**
 * Creates a new Menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuCreate = {
  readonly errors: ReadonlyArray<MenuError>;
  readonly menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuCreateInput = {
  /** List of menu items. */
  readonly items?: InputMaybe<ReadonlyArray<MenuItemInput>>;
  /** Name of the menu. */
  readonly name: Scalars['String']['input'];
  /** Slug of the menu. Will be generated if not provided. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu the event relates to. */
  readonly menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuCreatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuDelete = {
  readonly errors: ReadonlyArray<MenuError>;
  readonly menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu the event relates to. */
  readonly menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuDeletedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuError = {
  /** The error code. */
  readonly code: MenuErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NotFound = 'NOT_FOUND',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE'
}

export type MenuFilterInput = {
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type MenuInput = {
  /** Name of the menu. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Slug of the menu. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & ObjectWithMetadata & {
  readonly category?: Maybe<Category>;
  readonly children?: Maybe<ReadonlyArray<MenuItem>>;
  /** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly collection?: Maybe<Collection>;
  readonly id: Scalars['ID']['output'];
  readonly level: Scalars['Int']['output'];
  readonly menu: Menu;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** A page associated with this menu item. Requires one of the following permissions to include unpublished items: MANAGE_PAGES. */
  readonly page?: Maybe<Page>;
  readonly parent?: Maybe<MenuItem>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated menu item fields for the given language code. */
  readonly translation?: Maybe<MenuItemTranslation>;
  /** URL to the menu item. */
  readonly url?: Maybe<Scalars['String']['output']>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes menu items.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuItemCountableConnection = {
  readonly edges: ReadonlyArray<MenuItemCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuItemCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: MenuItem;
};

/**
 * Creates a new menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemCreate = {
  readonly errors: ReadonlyArray<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
  readonly menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Category to which item points. */
  readonly category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  readonly collection?: InputMaybe<Scalars['ID']['input']>;
  /** Menu to which item belongs. */
  readonly menu: Scalars['ID']['input'];
  /** Name of the menu item. */
  readonly name: Scalars['String']['input'];
  /** Page to which item points. */
  readonly page?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the parent menu. If empty, menu will be top level menu. */
  readonly parent?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu item the event relates to. */
  readonly menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemCreatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemDelete = {
  readonly errors: ReadonlyArray<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
  readonly menuItem?: Maybe<MenuItem>;
};

/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu item the event relates to. */
  readonly menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemDeletedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemFilterInput = {
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemInput = {
  /** Category to which item points. */
  readonly category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  readonly collection?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the menu item. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Page to which item points. */
  readonly page?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Moves items of menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemMove = {
  readonly errors: ReadonlyArray<MenuError>;
  /** Assigned menu to move within. */
  readonly menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  readonly itemId: Scalars['ID']['input'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  readonly parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  readonly sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort menu items. */
  readonly direction: OrderDirection;
  /** Sort menu items by the selected field. */
  readonly field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  readonly id: Scalars['ID']['output'];
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly menuItem?: Maybe<MenuItem>;
  readonly name: Scalars['String']['output'];
  /** Returns translated menu item fields for the given language code. */
  readonly translation?: Maybe<MenuItemTranslation>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a menu item.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type MenuItemTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  readonly menuItem?: Maybe<MenuItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type MenuItemTranslation = Node & {
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name: Scalars['String']['output'];
};

/**
 * Updates a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemUpdate = {
  readonly errors: ReadonlyArray<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
  readonly menuItem?: Maybe<MenuItem>;
};

/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu item the event relates to. */
  readonly menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemUpdatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export enum MenuItemsSortField {
  /** Sort menu items by name. */
  Name = 'NAME'
}

export enum MenuSortField {
  /** Sort menus by items count. */
  ItemsCount = 'ITEMS_COUNT',
  /** Sort menus by name. */
  Name = 'NAME'
}

export type MenuSortingInput = {
  /** Specifies the direction in which to sort menus. */
  readonly direction: OrderDirection;
  /** Sort menus by the selected field. */
  readonly field: MenuSortField;
};

/**
 * Updates a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuUpdate = {
  readonly errors: ReadonlyArray<MenuError>;
  readonly menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly menuErrors: ReadonlyArray<MenuError>;
};

/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu the event relates to. */
  readonly menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuUpdatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MetadataError = {
  /** The error code. */
  readonly code: MetadataErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  NotUpdated = 'NOT_UPDATED',
  Required = 'REQUIRED'
}

export type MetadataFilter = {
  /** Key of a metadata item. */
  readonly key: Scalars['String']['input'];
  /** Value of a metadata item. */
  readonly value?: InputMaybe<Scalars['String']['input']>;
};

export type MetadataInput = {
  /** Key of a metadata item. */
  readonly key: Scalars['String']['input'];
  /** Value of a metadata item. */
  readonly value: Scalars['String']['input'];
};

export type MetadataItem = {
  /** Key of a metadata item. */
  readonly key: Scalars['String']['output'];
  /** Value of a metadata item. */
  readonly value: Scalars['String']['output'];
};

/** Represents amount of money in specific currency. */
export type Money = {
  /** Amount of money. */
  readonly amount: Scalars['Float']['output'];
  /** Currency code. */
  readonly currency: Scalars['String']['output'];
};

export type MoneyInput = {
  /** Amount of money. */
  readonly amount: Scalars['PositiveDecimal']['input'];
  /** Currency code. */
  readonly currency: Scalars['String']['input'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  /** Lower bound of a price range. */
  readonly start?: Maybe<Money>;
  /** Upper bound of a price range. */
  readonly stop?: Maybe<Money>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  readonly productId: Scalars['ID']['input'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  readonly sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  /**
   * Create a new address for the customer.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly accountAddressCreate?: Maybe<AccountAddressCreate>;
  /** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  readonly accountAddressDelete?: Maybe<AccountAddressDelete>;
  /** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  readonly accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  /**
   * Remove user account.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly accountDelete?: Maybe<AccountDelete>;
  /** Register a new user. */
  readonly accountRegister?: Maybe<AccountRegister>;
  /**
   * Sends an email with the account removal link for the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  /**
   * Sets a default address for the authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  /**
   * Updates the account of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly accountUpdate?: Maybe<AccountUpdate>;
  /**
   * Creates user address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly addressCreate?: Maybe<AddressCreate>;
  /**
   * Deletes an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly addressDelete?: Maybe<AddressDelete>;
  /**
   * Sets a default address for the given user.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly addressSetDefault?: Maybe<AddressSetDefault>;
  /**
   * Updates an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly addressUpdate?: Maybe<AddressUpdate>;
  /**
   * Activate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appActivate?: Maybe<AppActivate>;
  /** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  readonly appCreate?: Maybe<AppCreate>;
  /**
   * Deactivate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appDeactivate?: Maybe<AppDeactivate>;
  /**
   * Deletes an app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appDelete?: Maybe<AppDelete>;
  /**
   * Delete failed installation.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  /**
   * Fetch and validate manifest.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appFetchManifest?: Maybe<AppFetchManifest>;
  /** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  readonly appInstall?: Maybe<AppInstall>;
  /**
   * Retry failed installation of new app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appRetryInstall?: Maybe<AppRetryInstall>;
  /**
   * Creates a new token.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appTokenCreate?: Maybe<AppTokenCreate>;
  /**
   * Deletes an authentication token assigned to app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appTokenDelete?: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  readonly appTokenVerify?: Maybe<AppTokenVerify>;
  /**
   * Updates an existing app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appUpdate?: Maybe<AppUpdate>;
  /**
   * Assigns storefront's navigation menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
   */
  readonly assignNavigation?: Maybe<AssignNavigation>;
  /**
   * Add shipping zone to given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  /**
   * Deletes attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  /**
   * Creates/updates translations for attributes.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly attributeBulkTranslate?: Maybe<AttributeBulkTranslate>;
  /** Creates an attribute. */
  readonly attributeCreate?: Maybe<AttributeCreate>;
  /**
   * Deletes an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeDelete?: Maybe<AttributeDelete>;
  /**
   * Reorder the values of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeReorderValues?: Maybe<AttributeReorderValues>;
  /**
   * Creates/updates translations for an attribute.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly attributeTranslate?: Maybe<AttributeTranslate>;
  /**
   * Updates attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeUpdate?: Maybe<AttributeUpdate>;
  /**
   * Deletes values of attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  /**
   * Creates/updates translations for attributes values.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly attributeValueBulkTranslate?: Maybe<AttributeValueBulkTranslate>;
  /**
   * Creates a value for an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly attributeValueCreate?: Maybe<AttributeValueCreate>;
  /**
   * Deletes a value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeValueDelete?: Maybe<AttributeValueDelete>;
  /**
   * Creates/updates translations for an attribute value.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  /**
   * Updates value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  /**
   * Deletes categories.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  /**
   * Creates a new category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly categoryCreate?: Maybe<CategoryCreate>;
  /**
   * Deletes a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly categoryDelete?: Maybe<CategoryDelete>;
  /**
   * Creates/updates translations for a category.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly categoryTranslate?: Maybe<CategoryTranslate>;
  /**
   * Updates a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly categoryUpdate?: Maybe<CategoryUpdate>;
  /**
   * Activate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  readonly channelActivate?: Maybe<ChannelActivate>;
  /**
   * Creates new channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  readonly channelCreate?: Maybe<ChannelCreate>;
  /**
   * Deactivate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  readonly channelDeactivate?: Maybe<ChannelDeactivate>;
  /**
   * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  readonly channelDelete?: Maybe<ChannelDelete>;
  /**
   * Reorder the warehouses of a channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  readonly channelReorderWarehouses?: Maybe<ChannelReorderWarehouses>;
  /**
   * Update a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   * Requires one of the following permissions when updating only orderSettings field: MANAGE_CHANNELS, MANAGE_ORDERS.
   */
  readonly channelUpdate?: Maybe<ChannelUpdate>;
  /** Adds a gift card or a voucher to a checkout. */
  readonly checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  readonly checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  readonly checkoutComplete?: Maybe<CheckoutComplete>;
  /** Create a new checkout. */
  readonly checkoutCreate?: Maybe<CheckoutCreate>;
  /**
   * Create new checkout from existing order.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly checkoutCreateFromOrder?: Maybe<CheckoutCreateFromOrder>;
  /**
   * Sets the customer as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   */
  readonly checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  /**
   * Removes the user assigned as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   */
  readonly checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  /**
   * Updates the delivery method (shipping method or pick up point) of the checkout.
   *
   * Added in Saleor 3.1.
   */
  readonly checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
  /** Updates email address in the existing checkout object. */
  readonly checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  /** Update language code in the existing checkout. */
  readonly checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
  /**
   * Deletes a CheckoutLine.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  readonly checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  /** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
  readonly checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  /** Deletes checkout lines. */
  readonly checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
  /** Updates checkout line in the existing checkout. */
  readonly checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  /** Create a new payment for given checkout. */
  readonly checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  /** Remove a gift card or a voucher from a checkout. */
  readonly checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  /** Update shipping address in the existing checkout. */
  readonly checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  /**
   * Updates the shipping method of the checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  readonly checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  /**
   * Adds products to a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionAddProducts?: Maybe<CollectionAddProducts>;
  /**
   * Deletes collections.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  /**
   * Manage collection's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
  /**
   * Creates a new collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionCreate?: Maybe<CollectionCreate>;
  /**
   * Deletes a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionDelete?: Maybe<CollectionDelete>;
  /**
   * Remove products from a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  /**
   * Reorder the products of a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  /**
   * Creates/updates translations for a collection.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly collectionTranslate?: Maybe<CollectionTranslate>;
  /**
   * Updates a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly collectionUpdate?: Maybe<CollectionUpdate>;
  /** Confirm user account with token sent by email during registration. */
  readonly confirmAccount?: Maybe<ConfirmAccount>;
  /**
   * Confirm the email change of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly confirmEmailChange?: Maybe<ConfirmEmailChange>;
  /**
   * Creates new warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly createWarehouse?: Maybe<WarehouseCreate>;
  /**
   * Deletes customers.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly customerBulkDelete?: Maybe<CustomerBulkDelete>;
  /**
   * Updates customers.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly customerBulkUpdate?: Maybe<CustomerBulkUpdate>;
  /**
   * Creates a new customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly customerCreate?: Maybe<CustomerCreate>;
  /**
   * Deletes a customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly customerDelete?: Maybe<CustomerDelete>;
  /**
   * Updates an existing customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly customerUpdate?: Maybe<CustomerUpdate>;
  /** Delete metadata of an object. To use it, you need to have access to the modified object. */
  readonly deleteMetadata?: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  readonly deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  /**
   * Deletes selected warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly deleteWarehouse?: Maybe<WarehouseDelete>;
  /**
   * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContentCreate?: Maybe<DigitalContentCreate>;
  /**
   * Remove digital content assigned to given variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContentDelete?: Maybe<DigitalContentDelete>;
  /**
   * Update digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  /**
   * Generate new URL to digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  /**
   * Deletes draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  /**
   * Completes creating an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly draftOrderComplete?: Maybe<DraftOrderComplete>;
  /**
   * Creates a new draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly draftOrderCreate?: Maybe<DraftOrderCreate>;
  /**
   * Deletes a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly draftOrderDelete?: Maybe<DraftOrderDelete>;
  /**
   * Deletes order lines.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  /**
   * Updates a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  /**
   * Retries event delivery.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
  /**
   * Export gift cards to csv file.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly exportGiftCards?: Maybe<ExportGiftCards>;
  /**
   * Export products to csv file.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly exportProducts?: Maybe<ExportProducts>;
  /** Prepare external authentication URL for user by custom plugin. */
  readonly externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
  /** Logout user by custom plugin. */
  readonly externalLogout?: Maybe<ExternalLogout>;
  /**
   * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
   *
   * Added in Saleor 3.1.
   */
  readonly externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
  /** Obtain external access tokens for user by custom plugin. */
  readonly externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
  /** Refresh user's access by custom plugin. */
  readonly externalRefresh?: Maybe<ExternalRefresh>;
  /** Verify external authentication data by plugin. */
  readonly externalVerify?: Maybe<ExternalVerify>;
  /**
   * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly fileUpload?: Maybe<FileUpload>;
  /**
   * Activate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardActivate?: Maybe<GiftCardActivate>;
  /**
   * Adds note to the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardAddNote?: Maybe<GiftCardAddNote>;
  /**
   * Activate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
  /**
   * Create gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
  /**
   * Deactivate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
  /**
   * Delete gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
  /**
   * Creates a new gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardCreate?: Maybe<GiftCardCreate>;
  /**
   * Deactivate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  /**
   * Delete gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardDelete?: Maybe<GiftCardDelete>;
  /**
   * Resend a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardResend?: Maybe<GiftCardResend>;
  /**
   * Update gift card settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
  /**
   * Update a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardUpdate?: Maybe<GiftCardUpdate>;
  /**
   * Creates a ready to send invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly invoiceCreate?: Maybe<InvoiceCreate>;
  /**
   * Deletes an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly invoiceDelete?: Maybe<InvoiceDelete>;
  /**
   * Request an invoice for the order using plugin.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly invoiceRequest?: Maybe<InvoiceRequest>;
  /**
   * Requests deletion of an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  /**
   * Send an invoice notification to the customer.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly invoiceSendNotification?: Maybe<InvoiceSendNotification>;
  /**
   * Updates an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly invoiceUpdate?: Maybe<InvoiceUpdate>;
  /**
   * Deletes menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuBulkDelete?: Maybe<MenuBulkDelete>;
  /**
   * Creates a new Menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuCreate?: Maybe<MenuCreate>;
  /**
   * Deletes a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuDelete?: Maybe<MenuDelete>;
  /**
   * Deletes menu items.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  /**
   * Creates a new menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuItemCreate?: Maybe<MenuItemCreate>;
  /**
   * Deletes a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuItemDelete?: Maybe<MenuItemDelete>;
  /**
   * Moves items of menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuItemMove?: Maybe<MenuItemMove>;
  /**
   * Creates/updates translations for a menu item.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly menuItemTranslate?: Maybe<MenuItemTranslate>;
  /**
   * Updates a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuItemUpdate?: Maybe<MenuItemUpdate>;
  /**
   * Updates a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  readonly menuUpdate?: Maybe<MenuUpdate>;
  /**
   * Adds note to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderAddNote?: Maybe<OrderAddNote>;
  /**
   * Cancels orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderBulkCancel?: Maybe<OrderBulkCancel>;
  /**
   * Creates multiple orders.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
   */
  readonly orderBulkCreate?: Maybe<OrderBulkCreate>;
  /**
   * Cancel an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderCancel?: Maybe<OrderCancel>;
  /**
   * Capture an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderCapture?: Maybe<OrderCapture>;
  /**
   * Confirms an unconfirmed order by changing status to unfulfilled.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderConfirm?: Maybe<OrderConfirm>;
  /**
   * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
   *
   * Added in Saleor 3.2.
   */
  readonly orderCreateFromCheckout?: Maybe<OrderCreateFromCheckout>;
  /**
   * Adds discount to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderDiscountAdd?: Maybe<OrderDiscountAdd>;
  /**
   * Remove discount from the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderDiscountDelete?: Maybe<OrderDiscountDelete>;
  /**
   * Update discount for the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
  /**
   * Creates new fulfillments for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderFulfill?: Maybe<OrderFulfill>;
  /**
   * Approve existing fulfillment.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
  /**
   * Cancels existing fulfillment and optionally restocks items.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  /**
   * Refund products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
  /**
   * Return products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
  /**
   * Updates a fulfillment for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  /**
   * Adds granted refund to the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderGrantRefundCreate?: Maybe<OrderGrantRefundCreate>;
  /**
   * Updates granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderGrantRefundUpdate?: Maybe<OrderGrantRefundUpdate>;
  /**
   * Deletes an order line from an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderLineDelete?: Maybe<OrderLineDelete>;
  /**
   * Remove discount applied to the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
  /**
   * Update discount for the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
  /**
   * Updates an order line of an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderLineUpdate?: Maybe<OrderLineUpdate>;
  /**
   * Create order lines for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderLinesCreate?: Maybe<OrderLinesCreate>;
  /**
   * Mark order as manually paid.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  /**
   * Refund an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderRefund?: Maybe<OrderRefund>;
  /**
   * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `channelUpdate` mutation instead.
   */
  readonly orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
  /**
   * Updates an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderUpdate?: Maybe<OrderUpdate>;
  /**
   * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  /**
   * Void an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orderVoid?: Maybe<OrderVoid>;
  /**
   * Assign attributes to a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageAttributeAssign?: Maybe<PageAttributeAssign>;
  /**
   * Unassign attributes from a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
  /**
   * Deletes pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  readonly pageBulkDelete?: Maybe<PageBulkDelete>;
  /**
   * Publish pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  readonly pageBulkPublish?: Maybe<PageBulkPublish>;
  /**
   * Creates a new page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  readonly pageCreate?: Maybe<PageCreate>;
  /**
   * Deletes a page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  readonly pageDelete?: Maybe<PageDelete>;
  /**
   * Reorder page attribute values.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  readonly pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
  /**
   * Creates/updates translations for a page.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly pageTranslate?: Maybe<PageTranslate>;
  /**
   * Delete page types.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
  /**
   * Create a new page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageTypeCreate?: Maybe<PageTypeCreate>;
  /**
   * Delete a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageTypeDelete?: Maybe<PageTypeDelete>;
  /**
   * Reorder the attributes of a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
  /**
   * Update page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly pageTypeUpdate?: Maybe<PageTypeUpdate>;
  /**
   * Updates an existing page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  readonly pageUpdate?: Maybe<PageUpdate>;
  /**
   * Change the password of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly passwordChange?: Maybe<PasswordChange>;
  /**
   * Captures the authorized payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly paymentCapture?: Maybe<PaymentCapture>;
  /** Check payment balance. */
  readonly paymentCheckBalance?: Maybe<PaymentCheckBalance>;
  /**
   * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly paymentGatewayInitialize?: Maybe<PaymentGatewayInitialize>;
  /** Initializes payment process when it is required by gateway. */
  readonly paymentInitialize?: Maybe<PaymentInitialize>;
  /**
   * Refunds the captured payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly paymentRefund?: Maybe<PaymentRefund>;
  /**
   * Voids the authorized payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly paymentVoid?: Maybe<PaymentVoid>;
  /**
   * Create new permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  /**
   * Delete permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  /**
   * Update permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  /**
   * Update plugin configuration.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  readonly pluginUpdate?: Maybe<PluginUpdate>;
  /**
   * Assign attributes to a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productAttributeAssign?: Maybe<ProductAttributeAssign>;
  /**
   * Update attributes assigned to product variant for given product type.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
  /**
   * Un-assign attributes from a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
  /**
   * Creates products.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productBulkCreate?: Maybe<ProductBulkCreate>;
  /**
   * Deletes products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productBulkDelete?: Maybe<ProductBulkDelete>;
  /**
   * Manage product's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
  /**
   * Creates a new product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productCreate?: Maybe<ProductCreate>;
  /**
   * Deletes a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productDelete?: Maybe<ProductDelete>;
  /**
   * Deletes product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
  /**
   * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productMediaCreate?: Maybe<ProductMediaCreate>;
  /**
   * Deletes a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productMediaDelete?: Maybe<ProductMediaDelete>;
  /**
   * Changes ordering of the product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productMediaReorder?: Maybe<ProductMediaReorder>;
  /**
   * Updates a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productMediaUpdate?: Maybe<ProductMediaUpdate>;
  /**
   * Reorder product attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
  /**
   * Creates/updates translations for a product.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly productTranslate?: Maybe<ProductTranslate>;
  /**
   * Deletes product types.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  /**
   * Creates a new product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productTypeCreate?: Maybe<ProductTypeCreate>;
  /**
   * Deletes a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productTypeDelete?: Maybe<ProductTypeDelete>;
  /**
   * Reorder the attributes of a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  /**
   * Updates an existing product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  readonly productTypeUpdate?: Maybe<ProductTypeUpdate>;
  /**
   * Updates an existing product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productUpdate?: Maybe<ProductUpdate>;
  /**
   * Creates product variants for a given product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  /**
   * Deletes product variants.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  /**
   * Update multiple product variants.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantBulkUpdate?: Maybe<ProductVariantBulkUpdate>;
  /**
   * Manage product variant prices in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
  /**
   * Creates a new variant for a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantCreate?: Maybe<ProductVariantCreate>;
  /**
   * Deletes a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantDelete?: Maybe<ProductVariantDelete>;
  /**
   * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
  /**
   * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantReorder?: Maybe<ProductVariantReorder>;
  /**
   * Reorder product variant attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
  /**
   * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  /**
   * Creates stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  /**
   * Delete stocks from product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  /**
   * Update stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  /**
   * Creates/updates translations for a product variant.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly productVariantTranslate?: Maybe<ProductVariantTranslate>;
  /**
   * Updates an existing variant for product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly productVariantUpdate?: Maybe<ProductVariantUpdate>;
  /**
   * Request email change of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly requestEmailChange?: Maybe<RequestEmailChange>;
  /** Sends an email with the account password modification link. */
  readonly requestPasswordReset?: Maybe<RequestPasswordReset>;
  /**
   * Deletes sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleBulkDelete?: Maybe<SaleBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  /**
   * Removes products, categories, collections from a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  /**
   * Manage sale's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
  /**
   * Creates a new sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleCreate?: Maybe<SaleCreate>;
  /**
   * Deletes a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleDelete?: Maybe<SaleDelete>;
  /**
   * Creates/updates translations for a sale.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly saleTranslate?: Maybe<SaleTranslate>;
  /**
   * Updates a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly saleUpdate?: Maybe<SaleUpdate>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  readonly setPassword?: Maybe<SetPassword>;
  /**
   * Manage shipping method's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
  /**
   * Deletes shipping prices.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  /**
   * Creates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  /**
   * Deletes a shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  /**
   * Exclude products from shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
  /**
   * Remove product from excluded list for shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
  /**
   * Creates/updates translations for a shipping method.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  /**
   * Updates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  /**
   * Deletes shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  /**
   * Creates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  /**
   * Deletes a shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  /**
   * Updates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  /**
   * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  /**
   * Updates site domain of the shop.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  /**
   * Fetch tax rates.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   */
  readonly shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  /**
   * Creates/updates translations for shop settings.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  /**
   * Updates shop settings.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  /**
   * Deletes staff users. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly staffBulkDelete?: Maybe<StaffBulkDelete>;
  /**
   * Creates a new staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly staffCreate?: Maybe<StaffCreate>;
  /**
   * Deletes a staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly staffDelete?: Maybe<StaffDelete>;
  /**
   * Creates a new staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  /**
   * Delete staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  /**
   * Updates a staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  /**
   * Updates an existing staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly staffUpdate?: Maybe<StaffUpdate>;
  /**
   * Updates stocks for a given variant and warehouse.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly stockBulkUpdate?: Maybe<StockBulkUpdate>;
  /**
   * Create a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxClassCreate?: Maybe<TaxClassCreate>;
  /**
   * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxClassDelete?: Maybe<TaxClassDelete>;
  /**
   * Update a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxClassUpdate?: Maybe<TaxClassUpdate>;
  /**
   * Update tax configuration for a channel.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxConfigurationUpdate?: Maybe<TaxConfigurationUpdate>;
  /**
   * Remove all tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxCountryConfigurationDelete?: Maybe<TaxCountryConfigurationDelete>;
  /**
   * Update tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxCountryConfigurationUpdate?: Maybe<TaxCountryConfigurationUpdate>;
  /**
   * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
   *
   * Added in Saleor 3.8.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  readonly taxExemptionManage?: Maybe<TaxExemptionManage>;
  /** Create JWT token. */
  readonly tokenCreate?: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
  readonly tokenRefresh?: Maybe<RefreshToken>;
  /** Verify JWT token. */
  readonly tokenVerify?: Maybe<VerifyToken>;
  /**
   * Deactivate all JWT tokens of the currently authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  readonly tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  /**
   * Create transaction for checkout or order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  readonly transactionCreate?: Maybe<TransactionCreate>;
  /**
   * Report the event for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
   */
  readonly transactionEventReport?: Maybe<TransactionEventReport>;
  /**
   * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly transactionInitialize?: Maybe<TransactionInitialize>;
  /**
   * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly transactionProcess?: Maybe<TransactionProcess>;
  /**
   * Request an action for payment transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  readonly transactionRequestAction?: Maybe<TransactionRequestAction>;
  /**
   * Update transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
   */
  readonly transactionUpdate?: Maybe<TransactionUpdate>;
  /**
   * Remove shipping zone from given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  /** Updates metadata of an object. To use it, you need to have access to the modified object. */
  readonly updateMetadata?: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  readonly updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  /**
   * Updates given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly updateWarehouse?: Maybe<WarehouseUpdate>;
  /**
   * Deletes a user avatar. Only for staff members.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  readonly userAvatarDelete?: Maybe<UserAvatarDelete>;
  /**
   * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  readonly userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  /**
   * Activate or deactivate users.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  readonly userBulkSetActive?: Maybe<UserBulkSetActive>;
  /**
   * Assign an media to a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly variantMediaAssign?: Maybe<VariantMediaAssign>;
  /**
   * Unassign an media from a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly variantMediaUnassign?: Maybe<VariantMediaUnassign>;
  /**
   * Deletes vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  /**
   * Removes products, categories, collections from a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  /**
   * Manage voucher's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
  /**
   * Creates a new voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherCreate?: Maybe<VoucherCreate>;
  /**
   * Deletes a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherDelete?: Maybe<VoucherDelete>;
  /**
   * Creates/updates translations for a voucher.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly voucherTranslate?: Maybe<VoucherTranslate>;
  /**
   * Updates a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucherUpdate?: Maybe<VoucherUpdate>;
  /**
   * Creates a new webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  readonly webhookCreate?: Maybe<WebhookCreate>;
  /**
   * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  readonly webhookDelete?: Maybe<WebhookDelete>;
  /**
   * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  readonly webhookDryRun?: Maybe<WebhookDryRun>;
  /**
   * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  readonly webhookTrigger?: Maybe<WebhookTrigger>;
  /**
   * Updates a webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  readonly webhookUpdate?: Maybe<WebhookUpdate>;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String']['input'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  redirectUrl: Scalars['String']['input'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID']['input'];
  type: AddressTypeEnum;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID']['input'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID']['input'];
  type: AddressTypeEnum;
  userId: Scalars['ID']['input'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String']['input'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars['ID']['input']>;
  navigationType: NavigationType;
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationAttributeBulkTranslateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  translations: ReadonlyArray<AttributeBulkTranslateInput>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: ReadonlyArray<ReorderInput>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: AttributeUpdateInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationAttributeValueBulkTranslateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  translations: ReadonlyArray<AttributeValueBulkTranslateInput>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeValueTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: AttributeValueUpdateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ChannelDeleteInput>;
};


export type MutationChannelReorderWarehousesArgs = {
  channelId: Scalars['ID']['input'];
  moves: ReadonlyArray<ReorderInput>;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ChannelUpdateInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  promoCode: Scalars['String']['input'];
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
  validationRules?: InputMaybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  storeSource?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCreateFromOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCodeEnum;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lineId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lines: ReadonlyArray<CheckoutLineInput>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  linesIds: ReadonlyArray<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lines: ReadonlyArray<CheckoutLineUpdateInput>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PaymentInput;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  promoCodeId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shippingAddress: AddressInput;
  token?: InputMaybe<Scalars['UUID']['input']>;
  validationRules?: InputMaybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shippingMethodId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID']['input'];
  moves: ReadonlyArray<MoveProductInput>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationConfirmEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationCustomerBulkUpdateArgs = {
  customers: ReadonlyArray<CustomerBulkUpdateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCustomerUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: CustomerInput;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: ReadonlyArray<Scalars['String']['input']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: ReadonlyArray<Scalars['String']['input']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationDraftOrderUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: DraftOrderInput;
};


export type MutationEventDeliveryRetryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExportGiftCardsArgs = {
  input: ExportGiftCardsInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String']['input'];
  input: ExternalNotificationTriggerInput;
  pluginId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkActivateArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationGiftCardBulkCreateArgs = {
  input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeactivateArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationGiftCardBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput;
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardUpdateInput;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: UpdateInvoiceInput;
};


export type MutationMenuBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID']['input'];
  moves: ReadonlyArray<MenuItemMoveInput>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuInput;
};


export type MutationOrderAddNoteArgs = {
  input: OrderAddNoteInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderBulkCancelArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationOrderBulkCreateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  orders: ReadonlyArray<OrderBulkCreateInput>;
  stockUpdatePolicy?: InputMaybe<StockUpdatePolicyEnum>;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCreateFromCheckoutArgs = {
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  removeCheckout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput;
  orderId: Scalars['ID']['input'];
};


export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID']['input'];
};


export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID']['input'];
  input: OrderDiscountCommonInput;
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  notifyCustomer: Scalars['Boolean']['input'];
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID']['input'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderGrantRefundCreateArgs = {
  id: Scalars['ID']['input'];
  input: OrderGrantRefundCreateInput;
};


export type MutationOrderGrantRefundUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderGrantRefundUpdateInput;
};


export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID']['input'];
};


export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput;
  orderLineId: Scalars['ID']['input'];
};


export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderLineInput;
};


export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID']['input'];
  input: ReadonlyArray<OrderLineCreateInput>;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID']['input'];
  transactionReference?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationOrderUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  input: OrderUpdateShippingInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: ReadonlyArray<Scalars['ID']['input']>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: ReadonlyArray<Scalars['ID']['input']>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationPageBulkPublishArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: ReadonlyArray<ReorderInput>;
  pageId: Scalars['ID']['input'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID']['input'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: ReadonlyArray<ReorderInput>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageTypeUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PageTypeUpdateInput;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput;
};


export type MutationPaymentGatewayInitializeArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  id: Scalars['ID']['input'];
  paymentGateways?: InputMaybe<ReadonlyArray<PaymentGatewayToInitialize>>;
};


export type MutationPaymentInitializeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  gateway: Scalars['String']['input'];
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
};


export type MutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  input: PluginUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: ReadonlyArray<ProductAttributeAssignInput>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: ReadonlyArray<ProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: ReadonlyArray<Scalars['ID']['input']>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductBulkCreateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  products: ReadonlyArray<ProductBulkCreateInput>;
};


export type MutationProductBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationProductMediaBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput;
};


export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductMediaReorderArgs = {
  mediaIds: ReadonlyArray<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};


export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductMediaUpdateInput;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: ReadonlyArray<ReorderInput>;
  productId: Scalars['ID']['input'];
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: ReadonlyArray<ReorderInput>;
  productTypeId: Scalars['ID']['input'];
  type: ProductAttributeType;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductTypeInput;
};


export type MutationProductUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ProductInput;
};


export type MutationProductVariantBulkCreateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  product: Scalars['ID']['input'];
  variants: ReadonlyArray<ProductVariantBulkCreateInput>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  skus?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


export type MutationProductVariantBulkUpdateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  product: Scalars['ID']['input'];
  variants: ReadonlyArray<ProductVariantBulkUpdateInput>;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ReadonlyArray<ProductVariantChannelListingAddInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductVariantReorderArgs = {
  moves: ReadonlyArray<ReorderInput>;
  productId: Scalars['ID']['input'];
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: ReadonlyArray<ReorderInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: ReadonlyArray<StockInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksDeleteArgs = {
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
  warehouseIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  sku?: InputMaybe<Scalars['String']['input']>;
  stocks: ReadonlyArray<StockInput>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ProductVariantInput;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRequestEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationRequestPasswordResetArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleChannelListingInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleInput;
};


export type MutationSetPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID']['input'];
  products: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: InputMaybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationStaffBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffUpdateInput;
};


export type MutationStockBulkUpdateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  stocks: ReadonlyArray<StockBulkUpdateInput>;
};


export type MutationTaxClassCreateArgs = {
  input: TaxClassCreateInput;
};


export type MutationTaxClassDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTaxClassUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TaxClassUpdateInput;
};


export type MutationTaxConfigurationUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TaxConfigurationUpdateInput;
};


export type MutationTaxCountryConfigurationDeleteArgs = {
  countryCode: CountryCode;
};


export type MutationTaxCountryConfigurationUpdateArgs = {
  countryCode: CountryCode;
  updateTaxClassRates: ReadonlyArray<TaxClassRateInput>;
};


export type MutationTaxExemptionManageArgs = {
  id: Scalars['ID']['input'];
  taxExemption: Scalars['Boolean']['input'];
};


export type MutationTokenCreateArgs = {
  audience?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationTransactionCreateArgs = {
  id: Scalars['ID']['input'];
  transaction: TransactionCreateInput;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationTransactionEventReportArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  availableActions?: InputMaybe<ReadonlyArray<TransactionActionEnum>>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  pspReference: Scalars['String']['input'];
  time?: InputMaybe<Scalars['DateTime']['input']>;
  type: TransactionEventTypeEnum;
};


export type MutationTransactionInitializeArgs = {
  action?: InputMaybe<TransactionFlowStrategyEnum>;
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  id: Scalars['ID']['input'];
  paymentGateway: PaymentGatewayToInitialize;
};


export type MutationTransactionProcessArgs = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationTransactionRequestActionArgs = {
  actionType: TransactionActionEnum;
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationTransactionUpdateArgs = {
  id: Scalars['ID']['input'];
  transaction?: InputMaybe<TransactionUpdateInput>;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: ReadonlyArray<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: ReadonlyArray<MetadataInput>;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID']['input'];
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
  isActive: Scalars['Boolean']['input'];
};


export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherChannelListingInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWebhookDryRunArgs = {
  objectId: Scalars['ID']['input'];
  query: Scalars['String']['input'];
};


export type MutationWebhookTriggerArgs = {
  objectId: Scalars['ID']['input'];
  webhookId: Scalars['ID']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WebhookUpdateInput;
};

export type NameTranslationInput = {
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export enum NavigationType {
  /** Main storefront navigation. */
  Main = 'MAIN',
  /** Secondary storefront navigation. */
  Secondary = 'SECONDARY'
}

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
};

export type ObjectWithMetadata = {
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
};


export type ObjectWithMetadataMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type ObjectWithMetadataMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


export type ObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type ObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  /** List of actions that can be performed in the current state of an order. */
  readonly actions: ReadonlyArray<OrderAction>;
  /**
   * The authorize status of the order.
   *
   * Added in Saleor 3.4.
   */
  readonly authorizeStatus: OrderAuthorizeStatusEnum;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   */
  readonly availableCollectionPoints: ReadonlyArray<Warehouse>;
  /**
   * Shipping methods that can be used with this order.
   * @deprecated Use `shippingMethods`, this field will be removed in 4.0
   */
  readonly availableShippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
  /** Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  readonly billingAddress?: Maybe<Address>;
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  readonly canFinalize: Scalars['Boolean']['output'];
  readonly channel: Channel;
  /**
   * The charge status of the order.
   *
   * Added in Saleor 3.4.
   */
  readonly chargeStatus: OrderChargeStatusEnum;
  /**
   * ID of the checkout that the order was created from.
   *
   * Added in Saleor 3.11.
   */
  readonly checkoutId?: Maybe<Scalars['ID']['output']>;
  readonly collectionPointName?: Maybe<Scalars['String']['output']>;
  readonly created: Scalars['DateTime']['output'];
  readonly customerNote: Scalars['String']['output'];
  /**
   * The delivery method selected for this order.
   *
   * Added in Saleor 3.1.
   */
  readonly deliveryMethod?: Maybe<DeliveryMethod>;
  /**
   * Returns applied discount.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  readonly discount?: Maybe<Money>;
  /**
   * Discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  readonly discountName?: Maybe<Scalars['String']['output']>;
  /** List of all discounts assigned to the order. */
  readonly discounts: ReadonlyArray<OrderDiscount>;
  /**
   * Determines whether checkout prices should include taxes when displayed in a storefront.
   *
   * Added in Saleor 3.9.
   */
  readonly displayGrossPrices: Scalars['Boolean']['output'];
  /** List of errors that occurred during order validation. */
  readonly errors: ReadonlyArray<OrderError>;
  /**
   * List of events associated with the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly events: ReadonlyArray<OrderEvent>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  /** List of shipments for the order. */
  readonly fulfillments: ReadonlyArray<Fulfillment>;
  /** List of user gift cards. */
  readonly giftCards: ReadonlyArray<GiftCard>;
  /**
   * List of granted refunds.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly grantedRefunds: ReadonlyArray<OrderGrantedRefund>;
  readonly id: Scalars['ID']['output'];
  /** List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  readonly invoices: ReadonlyArray<Invoice>;
  /** Informs if an order is fully paid. */
  readonly isPaid: Scalars['Boolean']['output'];
  /** Returns True, if order requires shipping. */
  readonly isShippingRequired: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
  readonly languageCode: Scalars['String']['output'];
  /** Order language code. */
  readonly languageCodeEnum: LanguageCodeEnum;
  /** List of order lines. */
  readonly lines: ReadonlyArray<OrderLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** User-friendly number of an order. */
  readonly number: Scalars['String']['output'];
  /** The order origin. */
  readonly origin: OrderOriginEnum;
  /** The ID of the order that was the base for this order. */
  readonly original?: Maybe<Scalars['ID']['output']>;
  /** Internal payment status. */
  readonly paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  readonly paymentStatusDisplay: Scalars['String']['output'];
  /** List of payments for the order. */
  readonly payments: ReadonlyArray<Payment>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  readonly shippingAddress?: Maybe<Address>;
  /**
   * Shipping method for this order.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  readonly shippingMethod?: Maybe<ShippingMethod>;
  readonly shippingMethodName?: Maybe<Scalars['String']['output']>;
  /** Shipping methods related to this order. */
  readonly shippingMethods: ReadonlyArray<ShippingMethod>;
  /** Total price of shipping. */
  readonly shippingPrice: TaxedMoney;
  /**
   * Denormalized tax class assigned to the shipping method.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly shippingTaxClass?: Maybe<TaxClass>;
  /**
   * Denormalized public metadata of the shipping method's tax class.
   *
   * Added in Saleor 3.9.
   */
  readonly shippingTaxClassMetadata: ReadonlyArray<MetadataItem>;
  /**
   * Denormalized name of the tax class assigned to the shipping method.
   *
   * Added in Saleor 3.9.
   */
  readonly shippingTaxClassName?: Maybe<Scalars['String']['output']>;
  /**
   * Denormalized private metadata of the shipping method's tax class. Requires staff permissions to access.
   *
   * Added in Saleor 3.9.
   */
  readonly shippingTaxClassPrivateMetadata: ReadonlyArray<MetadataItem>;
  /** The shipping tax rate value. */
  readonly shippingTaxRate: Scalars['Float']['output'];
  readonly status: OrderStatus;
  /** User-friendly order status. */
  readonly statusDisplay: Scalars['String']['output'];
  /** The sum of line prices not including shipping. */
  readonly subtotal: TaxedMoney;
  /**
   * Returns True if order has to be exempt from taxes.
   *
   * Added in Saleor 3.8.
   */
  readonly taxExemption: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
  readonly token: Scalars['String']['output'];
  /** Total amount of the order. */
  readonly total: TaxedMoney;
  /**
   * Total amount of ongoing authorize requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly totalAuthorizePending: Money;
  /** Amount authorized for the order. */
  readonly totalAuthorized: Money;
  /** The difference between the paid and the order total amount. */
  readonly totalBalance: Money;
  /**
   * Total amount of ongoing cancel requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly totalCancelPending: Money;
  /**
   * Amount canceled for the order.
   *
   * Added in Saleor 3.13.
   */
  readonly totalCanceled: Money;
  /**
   * Amount captured for the order.
   * @deprecated This field will be removed in Saleor 4.0. Use `totalCharged` instead.
   */
  readonly totalCaptured: Money;
  /**
   * Total amount of ongoing charge requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly totalChargePending: Money;
  /**
   * Amount charged for the order.
   *
   * Added in Saleor 3.13.
   */
  readonly totalCharged: Money;
  /**
   * Total amount of granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly totalGrantedRefund: Money;
  /**
   * Total amount of ongoing refund requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly totalRefundPending: Money;
  /**
   * Total refund amount for the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly totalRefunded: Money;
  /**
   * The difference amount between granted refund and the amounts that are pending and refunded.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly totalRemainingGrant: Money;
  readonly trackingClientId: Scalars['String']['output'];
  /**
   * List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   */
  readonly transactions: ReadonlyArray<TransactionItem>;
  /**
   * Translated discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  readonly translatedDiscountName?: Maybe<Scalars['String']['output']>;
  /** Undiscounted total amount of the order. */
  readonly undiscountedTotal: TaxedMoney;
  readonly updatedAt: Scalars['DateTime']['output'];
  /** User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, OWNER. */
  readonly user?: Maybe<User>;
  /** Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  readonly userEmail?: Maybe<Scalars['String']['output']>;
  readonly voucher?: Maybe<Voucher>;
  readonly weight: Weight;
};


/** Represents an order in the shop. */
export type OrderMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an order in the shop. */
export type OrderMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export enum OrderAction {
  /** Represents the capture action. */
  Capture = 'CAPTURE',
  /** Represents a mark-as-paid action. */
  MarkAsPaid = 'MARK_AS_PAID',
  /** Represents a refund action. */
  Refund = 'REFUND',
  /** Represents a void action. */
  Void = 'VOID'
}

/**
 * Adds note to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderAddNote = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order note created. */
  readonly event?: Maybe<OrderEvent>;
  /** Order with the note added. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderAddNoteInput = {
  /** Note message. */
  readonly message: Scalars['String']['input'];
};

/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized and charged don't cover fully the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are authorized and charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
export enum OrderAuthorizeStatusEnum {
  Full = 'FULL',
  None = 'NONE',
  Partial = 'PARTIAL'
}

/**
 * Cancels orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderBulkCancel = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Creates multiple orders.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
 */
export type OrderBulkCreate = {
  /** Returns how many objects were created. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<OrderBulkCreateError>;
  /** List of the created orders. */
  readonly results: ReadonlyArray<OrderBulkCreateResult>;
};

export type OrderBulkCreateDeliveryMethodInput = {
  /** The ID of the shipping method. */
  readonly shippingMethodId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the shipping method. */
  readonly shippingMethodName?: InputMaybe<Scalars['String']['input']>;
  /** The price of the shipping. */
  readonly shippingPrice?: InputMaybe<TaxedMoneyInput>;
  /** The ID of the tax class. */
  readonly shippingTaxClassId?: InputMaybe<Scalars['ID']['input']>;
  /** Metadata of the tax class. */
  readonly shippingTaxClassMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** The name of the tax class. */
  readonly shippingTaxClassName?: InputMaybe<Scalars['String']['input']>;
  /** Private metadata of the tax class. */
  readonly shippingTaxClassPrivateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Tax rate of the shipping. */
  readonly shippingTaxRate?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The ID of the warehouse. */
  readonly warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the warehouse. */
  readonly warehouseName?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBulkCreateError = {
  /** The error code. */
  readonly code?: Maybe<OrderBulkCreateErrorCode>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly path?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum OrderBulkCreateErrorCode {
  BulkLimit = 'BULK_LIMIT',
  FutureDate = 'FUTURE_DATE',
  GraphqlError = 'GRAPHQL_ERROR',
  IncorrectCurrency = 'INCORRECT_CURRENCY',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidQuantity = 'INVALID_QUANTITY',
  MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
  NegativeIndex = 'NEGATIVE_INDEX',
  NonExistingStock = 'NON_EXISTING_STOCK',
  NoteLength = 'NOTE_LENGTH',
  NotFound = 'NOT_FOUND',
  NoRelatedOrderLine = 'NO_RELATED_ORDER_LINE',
  OrderLineFulfillmentLineMismatch = 'ORDER_LINE_FULFILLMENT_LINE_MISMATCH',
  PriceError = 'PRICE_ERROR',
  Required = 'REQUIRED',
  TooManyIdentifiers = 'TOO_MANY_IDENTIFIERS',
  Unique = 'UNIQUE'
}

export type OrderBulkCreateFulfillmentInput = {
  /** List of items informing how to fulfill the order. */
  readonly lines?: InputMaybe<ReadonlyArray<OrderBulkCreateFulfillmentLineInput>>;
  /** Fulfillment's tracking code. */
  readonly trackingCode?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBulkCreateFulfillmentLineInput = {
  /** 0-based index of order line, which the fulfillment line refers to. */
  readonly orderLineIndex: Scalars['Int']['input'];
  /** The number of line items to be fulfilled from given warehouse. */
  readonly quantity: Scalars['Int']['input'];
  /** The external ID of the product variant. */
  readonly variantExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the product variant. */
  readonly variantId?: InputMaybe<Scalars['ID']['input']>;
  /** The SKU of the product variant. */
  readonly variantSku?: InputMaybe<Scalars['String']['input']>;
  /** ID of the warehouse from which the item will be fulfilled. */
  readonly warehouse: Scalars['ID']['input'];
};

export type OrderBulkCreateInput = {
  /** Billing address of the customer. */
  readonly billingAddress: AddressInput;
  /** Slug of the channel associated with the order. */
  readonly channel: Scalars['String']['input'];
  /** The date, when the order was inserted to Saleor database. */
  readonly createdAt: Scalars['DateTime']['input'];
  /** Currency code. */
  readonly currency: Scalars['String']['input'];
  /** Note about customer. */
  readonly customerNote?: InputMaybe<Scalars['String']['input']>;
  /** The delivery method selected for this order. */
  readonly deliveryMethod?: InputMaybe<OrderBulkCreateDeliveryMethodInput>;
  /** List of discounts. */
  readonly discounts?: InputMaybe<ReadonlyArray<OrderDiscountCommonInput>>;
  /** Determines whether checkout prices should include taxes, when displayed in a storefront. */
  readonly displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** External ID of the order. */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillments of the order. */
  readonly fulfillments?: InputMaybe<ReadonlyArray<OrderBulkCreateFulfillmentInput>>;
  /** List of gift card codes associated with the order. */
  readonly giftCards?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** Invoices related to the order. */
  readonly invoices?: InputMaybe<ReadonlyArray<OrderBulkCreateInvoiceInput>>;
  /** Order language code. */
  readonly languageCode: LanguageCodeEnum;
  /** List of order lines. */
  readonly lines: ReadonlyArray<OrderBulkCreateOrderLineInput>;
  /** Metadata of the order. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Notes related to the order. */
  readonly notes?: InputMaybe<ReadonlyArray<OrderBulkCreateNoteInput>>;
  /** Private metadata of the order. */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of a view, where users should be redirected to see the order details. */
  readonly redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  readonly shippingAddress?: InputMaybe<AddressInput>;
  /** Status of the order. */
  readonly status?: InputMaybe<OrderStatus>;
  /** Tracking ID of the customer. */
  readonly trackingClientId?: InputMaybe<Scalars['String']['input']>;
  /** Transactions related to the order. */
  readonly transactions?: InputMaybe<ReadonlyArray<TransactionCreateInput>>;
  /** Customer associated with the order. */
  readonly user: OrderBulkCreateUserInput;
  /** Code of a voucher associated with the order. */
  readonly voucher?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the order in kg. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

export type OrderBulkCreateInvoiceInput = {
  /** The date, when the invoice was created. */
  readonly createdAt: Scalars['DateTime']['input'];
  /** Metadata of the invoice. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Invoice number. */
  readonly number?: InputMaybe<Scalars['String']['input']>;
  /** Private metadata of the invoice. */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of the invoice to download. */
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBulkCreateNoteInput = {
  /** The app ID associated with the message. */
  readonly appId?: InputMaybe<Scalars['ID']['input']>;
  /** The date associated with the message. */
  readonly date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Note message. Max characters: 255. */
  readonly message: Scalars['String']['input'];
  /** The user email associated with the message. */
  readonly userEmail?: InputMaybe<Scalars['ID']['input']>;
  /** The user external ID associated with the message. */
  readonly userExternalReference?: InputMaybe<Scalars['ID']['input']>;
  /** The user ID associated with the message. */
  readonly userId?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderBulkCreateOrderLineInput = {
  /** The date, when the order line was created. */
  readonly createdAt: Scalars['DateTime']['input'];
  /** Gift card flag. */
  readonly isGiftCard: Scalars['Boolean']['input'];
  /** Determines whether shipping of the order line items is required. */
  readonly isShippingRequired: Scalars['Boolean']['input'];
  /** Metadata of the order line. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Private metadata of the order line. */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** The name of the product. */
  readonly productName?: InputMaybe<Scalars['String']['input']>;
  /** Number of items in the order line */
  readonly quantity: Scalars['Int']['input'];
  /** The ID of the tax class. */
  readonly taxClassId?: InputMaybe<Scalars['ID']['input']>;
  /** Metadata of the tax class. */
  readonly taxClassMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** The name of the tax class. */
  readonly taxClassName?: InputMaybe<Scalars['String']['input']>;
  /** Private metadata of the tax class. */
  readonly taxClassPrivateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Tax rate of the order line. */
  readonly taxRate?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Price of the order line. */
  readonly totalPrice: TaxedMoneyInput;
  /** Translation of the product name. */
  readonly translatedProductName?: InputMaybe<Scalars['String']['input']>;
  /** Translation of the product variant name. */
  readonly translatedVariantName?: InputMaybe<Scalars['String']['input']>;
  /** Price of the order line excluding applied discount. */
  readonly undiscountedTotalPrice: TaxedMoneyInput;
  /** The external ID of the product variant. */
  readonly variantExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the product variant. */
  readonly variantId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the product variant. */
  readonly variantName?: InputMaybe<Scalars['String']['input']>;
  /** The SKU of the product variant. */
  readonly variantSku?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the warehouse, where the line will be allocated. */
  readonly warehouse: Scalars['ID']['input'];
};

export type OrderBulkCreateResult = {
  /** List of errors occurred on create attempt. */
  readonly errors?: Maybe<ReadonlyArray<OrderBulkCreateError>>;
  /** Order data. */
  readonly order?: Maybe<Order>;
};

export type OrderBulkCreateUserInput = {
  /** Customer email associated with the order. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /** Customer external ID associated with the order. */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Customer ID associated with the order. */
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when orders are imported.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderBulkCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The orders the event relates to. */
  readonly orders?: Maybe<ReadonlyArray<Order>>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Cancel an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCancel = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Canceled order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Event sent when order is canceled.
 *
 * Added in Saleor 3.2.
 */
export type OrderCancelled = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Capture an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCapture = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Captured order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Determine the current charge status for the order.
 *
 *     An order is considered overcharged when the sum of the
 *     transactionItem's charge amounts exceeds the value of
 *     `order.total` - `order.totalGrantedRefund`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `order.total` - `order.totalGrantedRefund`, we consider the order to be fully
 *     charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `order.total` - `order.totalGrantedRefund`, we treat the order as partially charged.
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     OVERCHARGED - the charged funds are bigger than the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
export enum OrderChargeStatusEnum {
  Full = 'FULL',
  None = 'NONE',
  Overcharged = 'OVERCHARGED',
  Partial = 'PARTIAL'
}

/**
 * Confirms an unconfirmed order by changing status to unfulfilled.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderConfirm = {
  readonly errors: ReadonlyArray<OrderError>;
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Event sent when order is confirmed.
 *
 * Added in Saleor 3.2.
 */
export type OrderConfirmed = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type OrderCountableConnection = {
  readonly edges: ReadonlyArray<OrderCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Order;
};

/**
 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
 *
 * Added in Saleor 3.2.
 */
export type OrderCreateFromCheckout = {
  readonly errors: ReadonlyArray<OrderCreateFromCheckoutError>;
  /** Placed order. */
  readonly order?: Maybe<Order>;
};

export type OrderCreateFromCheckoutError = {
  /** The error code. */
  readonly code: OrderCreateFromCheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** List of line Ids which cause the error. */
  readonly lines?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of variant IDs which causes the error. */
  readonly variants?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum OrderCreateFromCheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutNotFound = 'CHECKOUT_NOT_FOUND',
  EmailNotSet = 'EMAIL_NOT_SET',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NoLines = 'NO_LINES',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  TaxError = 'TAX_ERROR',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE'
}

/**
 * Event sent when new order is created.
 *
 * Added in Saleor 3.2.
 */
export type OrderCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  Asc = 'ASC',
  /** Specifies a descending sort order. */
  Desc = 'DESC'
}

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
  /** Returns amount of discount. */
  readonly amount: Money;
  readonly id: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  /**
   * Explanation for the applied discount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly reason?: Maybe<Scalars['String']['output']>;
  readonly translatedName?: Maybe<Scalars['String']['output']>;
  readonly type: OrderDiscountType;
  /** Value of the discount. Can store fixed value or percent value */
  readonly value: Scalars['PositiveDecimal']['output'];
  /** Type of the discount: fixed or percent */
  readonly valueType: DiscountValueTypeEnum;
};

/**
 * Adds discount to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountAdd = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order which has been discounted. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderDiscountCommonInput = {
  /** Explanation for the applied discount. */
  readonly reason?: InputMaybe<Scalars['String']['input']>;
  /** Value of the discount. Can store fixed value or percent value */
  readonly value: Scalars['PositiveDecimal']['input'];
  /** Type of the discount: fixed or percent */
  readonly valueType: DiscountValueTypeEnum;
};

/**
 * Remove discount from the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountDelete = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order which has removed discount. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/** An enumeration. */
export enum OrderDiscountType {
  Manual = 'MANUAL',
  Sale = 'SALE',
  Voucher = 'VOUCHER'
}

/**
 * Update discount for the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountUpdate = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order which has been discounted. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderDraftFilterInput = {
  readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly created?: InputMaybe<DateRangeInput>;
  readonly customer?: InputMaybe<Scalars['String']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

export type OrderError = {
  /** A type of address that causes the error. */
  readonly addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  readonly code: OrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of order line IDs that cause the error. */
  readonly orderLines?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of product variants that are associated with the error */
  readonly variants?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** Warehouse ID which causes the error. */
  readonly warehouse?: Maybe<Scalars['ID']['output']>;
};

/** An enumeration. */
export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotDiscount = 'CANNOT_DISCOUNT',
  CannotFulfillUnpaidOrder = 'CANNOT_FULFILL_UNPAID_ORDER',
  CannotRefund = 'CANNOT_REFUND',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  ChannelInactive = 'CHANNEL_INACTIVE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GiftCardLine = 'GIFT_CARD_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidQuantity = 'INVALID_QUANTITY',
  NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
  NotEditable = 'NOT_EDITABLE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  TransactionError = 'TRANSACTION_ERROR',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY'
}

/** History log of the order. */
export type OrderEvent = Node & {
  /** Amount of money. */
  readonly amount?: Maybe<Scalars['Float']['output']>;
  /** App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER. */
  readonly app?: Maybe<App>;
  /** Composed ID of the Fulfillment. */
  readonly composedId?: Maybe<Scalars['String']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  readonly date?: Maybe<Scalars['DateTime']['output']>;
  /** The discount applied to the order. */
  readonly discount?: Maybe<OrderEventDiscountObject>;
  /** Email of the customer. */
  readonly email?: Maybe<Scalars['String']['output']>;
  /** Type of an email sent to the customer. */
  readonly emailType?: Maybe<OrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  readonly fulfilledItems?: Maybe<ReadonlyArray<FulfillmentLine>>;
  readonly id: Scalars['ID']['output'];
  /** Number of an invoice related to the order. */
  readonly invoiceNumber?: Maybe<Scalars['String']['output']>;
  /** The concerned lines. */
  readonly lines?: Maybe<ReadonlyArray<OrderEventOrderLineObject>>;
  /** Content of the event. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  readonly orderNumber?: Maybe<Scalars['String']['output']>;
  /** List of oversold lines names. */
  readonly oversoldItems?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /** The payment gateway of the payment. */
  readonly paymentGateway?: Maybe<Scalars['String']['output']>;
  /** The payment reference from the payment provider. */
  readonly paymentId?: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  readonly quantity?: Maybe<Scalars['Int']['output']>;
  /** The reference of payment's transaction. */
  readonly reference?: Maybe<Scalars['String']['output']>;
  /** The order which is related to this order. */
  readonly relatedOrder?: Maybe<Order>;
  /** Define if shipping costs were included to the refund. */
  readonly shippingCostsIncluded?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The status of payment's transaction.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature).Use `TransactionEvent` to track the status of `TransactionItem`.
   */
  readonly status?: Maybe<TransactionStatus>;
  /** The transaction reference of captured payment. */
  readonly transactionReference?: Maybe<Scalars['String']['output']>;
  /** Order event type. */
  readonly type?: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  readonly user?: Maybe<User>;
  /** The warehouse were items were restocked. */
  readonly warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  readonly edges: ReadonlyArray<OrderEventCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderEventCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: OrderEvent;
};

export type OrderEventDiscountObject = {
  /** Returns amount of discount. */
  readonly amount?: Maybe<Money>;
  /** Returns amount of discount. */
  readonly oldAmount?: Maybe<Money>;
  /** Value of the discount. Can store fixed value or percent value. */
  readonly oldValue?: Maybe<Scalars['PositiveDecimal']['output']>;
  /** Type of the discount: fixed or percent. */
  readonly oldValueType?: Maybe<DiscountValueTypeEnum>;
  /** Explanation for the applied discount. */
  readonly reason?: Maybe<Scalars['String']['output']>;
  /** Value of the discount. Can store fixed value or percent value. */
  readonly value: Scalars['PositiveDecimal']['output'];
  /** Type of the discount: fixed or percent. */
  readonly valueType: DiscountValueTypeEnum;
};

export type OrderEventOrderLineObject = {
  /** The discount applied to the order line. */
  readonly discount?: Maybe<OrderEventDiscountObject>;
  /** The variant name. */
  readonly itemName?: Maybe<Scalars['String']['output']>;
  /** The order line. */
  readonly orderLine?: Maybe<OrderLine>;
  /** The variant quantity. */
  readonly quantity?: Maybe<Scalars['Int']['output']>;
};

/** An enumeration. */
export enum OrderEventsEmailsEnum {
  Confirmed = 'CONFIRMED',
  DigitalLinks = 'DIGITAL_LINKS',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  OrderCancel = 'ORDER_CANCEL',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderRefund = 'ORDER_REFUND',
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED'
}

/** The different order event types.  */
export enum OrderEventsEnum {
  AddedProducts = 'ADDED_PRODUCTS',
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  DraftCreated = 'DRAFT_CREATED',
  DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
  EmailSent = 'EMAIL_SENT',
  Expired = 'EXPIRED',
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  FulfillmentAwaitsApproval = 'FULFILLMENT_AWAITS_APPROVAL',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
  FulfillmentReplaced = 'FULFILLMENT_REPLACED',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  FulfillmentReturned = 'FULFILLMENT_RETURNED',
  InvoiceGenerated = 'INVOICE_GENERATED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  InvoiceUpdated = 'INVOICE_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  OrderDiscountAdded = 'ORDER_DISCOUNT_ADDED',
  OrderDiscountAutomaticallyUpdated = 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED',
  OrderDiscountDeleted = 'ORDER_DISCOUNT_DELETED',
  OrderDiscountUpdated = 'ORDER_DISCOUNT_UPDATED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderLineDiscountRemoved = 'ORDER_LINE_DISCOUNT_REMOVED',
  OrderLineDiscountUpdated = 'ORDER_LINE_DISCOUNT_UPDATED',
  OrderLineProductDeleted = 'ORDER_LINE_PRODUCT_DELETED',
  OrderLineVariantDeleted = 'ORDER_LINE_VARIANT_DELETED',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
  Other = 'OTHER',
  OversoldItems = 'OVERSOLD_ITEMS',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentVoided = 'PAYMENT_VOIDED',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  RemovedProducts = 'REMOVED_PRODUCTS',
  TrackingUpdated = 'TRACKING_UPDATED',
  TransactionCancelRequested = 'TRANSACTION_CANCEL_REQUESTED',
  /** This field will be removed in Saleor 3.15 (Preview Feature). Use `TRANSACTION_CHARGE_REQUESTED` instead. */
  TransactionCaptureRequested = 'TRANSACTION_CAPTURE_REQUESTED',
  TransactionChargeRequested = 'TRANSACTION_CHARGE_REQUESTED',
  TransactionEvent = 'TRANSACTION_EVENT',
  TransactionMarkAsPaidFailed = 'TRANSACTION_MARK_AS_PAID_FAILED',
  TransactionRefundRequested = 'TRANSACTION_REFUND_REQUESTED',
  /** This field will be removed in Saleor 3.15 (Preview Feature). Use `TRANSACTION_CANCEL_REQUESTED` instead. */
  TransactionVoidRequested = 'TRANSACTION_VOID_REQUESTED',
  UpdatedAddress = 'UPDATED_ADDRESS'
}

/**
 * Event sent when order becomes expired.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderExpired = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type OrderFilterInput = {
  readonly authorizeStatus?: InputMaybe<ReadonlyArray<OrderAuthorizeStatusEnum>>;
  readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly chargeStatus?: InputMaybe<ReadonlyArray<OrderChargeStatusEnum>>;
  readonly checkoutIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly created?: InputMaybe<DateRangeInput>;
  readonly customer?: InputMaybe<Scalars['String']['input']>;
  readonly giftCardBought?: InputMaybe<Scalars['Boolean']['input']>;
  readonly giftCardUsed?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly isClickAndCollect?: InputMaybe<Scalars['Boolean']['input']>;
  readonly isPreorder?: InputMaybe<Scalars['Boolean']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly numbers?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly paymentStatus?: InputMaybe<ReadonlyArray<PaymentChargeStatusEnum>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<ReadonlyArray<OrderStatusFilter>>;
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/**
 * Filter shipping methods for order.
 *
 * Added in Saleor 3.6.
 */
export type OrderFilterShippingMethods = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  readonly shippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Creates new fulfillments for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderFulfill = {
  readonly errors: ReadonlyArray<OrderError>;
  /** List of created fulfillments. */
  readonly fulfillments?: Maybe<ReadonlyArray<Fulfillment>>;
  /** Fulfilled order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderFulfillInput = {
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  readonly allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of items informing how to fulfill the order. */
  readonly lines: ReadonlyArray<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  readonly notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fulfillment tracking number.
   *
   * Added in Saleor 3.6.
   */
  readonly trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  readonly orderLineId?: InputMaybe<Scalars['ID']['input']>;
  /** List of stock items to create. */
  readonly stocks: ReadonlyArray<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  readonly quantity: Scalars['Int']['input'];
  /** ID of the warehouse from which the item will be fulfilled. */
  readonly warehouse: Scalars['ID']['input'];
};

/**
 * Event sent when order is fulfilled.
 *
 * Added in Saleor 3.2.
 */
export type OrderFulfilled = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when order is fully paid.
 *
 * Added in Saleor 3.2.
 */
export type OrderFullyPaid = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * The order is fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderFullyRefunded = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Adds granted refund to the order.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderGrantRefundCreate = {
  readonly errors: ReadonlyArray<OrderGrantRefundCreateError>;
  /** Created granted refund. */
  readonly grantedRefund?: Maybe<OrderGrantedRefund>;
  /** Order which has assigned new grant refund. */
  readonly order?: Maybe<Order>;
};

export type OrderGrantRefundCreateError = {
  /** The error code. */
  readonly code: OrderGrantRefundCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum OrderGrantRefundCreateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  NotFound = 'NOT_FOUND'
}

export type OrderGrantRefundCreateInput = {
  /** Amount of the granted refund. */
  readonly amount: Scalars['Decimal']['input'];
  /** Reason of the granted refund. */
  readonly reason?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderGrantRefundUpdate = {
  readonly errors: ReadonlyArray<OrderGrantRefundUpdateError>;
  /** Created granted refund. */
  readonly grantedRefund?: Maybe<OrderGrantedRefund>;
  /** Order which has assigned updated grant refund. */
  readonly order?: Maybe<Order>;
  readonly orderGrantedRefund?: Maybe<OrderGrantedRefund>;
};

export type OrderGrantRefundUpdateError = {
  /** The error code. */
  readonly code: OrderGrantRefundUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum OrderGrantRefundUpdateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type OrderGrantRefundUpdateInput = {
  /** Amount of the granted refund. */
  readonly amount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Reason of the granted refund. */
  readonly reason?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The details of granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderGrantedRefund = {
  /** Refund amount. */
  readonly amount: Money;
  /** App that performed the action. */
  readonly app?: Maybe<App>;
  /** Time of creation. */
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  /** Reason of the refund. */
  readonly reason?: Maybe<Scalars['String']['output']>;
  /** Time of last update. */
  readonly updatedAt: Scalars['DateTime']['output'];
  /** User who performed the action. Requires of of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  readonly user?: Maybe<User>;
};

/** Represents order line of particular order. */
export type OrderLine = Node & ObjectWithMetadata & {
  /**
   * List of allocations across warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly allocations?: Maybe<ReadonlyArray<Allocation>>;
  readonly digitalContentUrl?: Maybe<DigitalContentUrl>;
  readonly id: Scalars['ID']['output'];
  readonly isShippingRequired: Scalars['Boolean']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly productName: Scalars['String']['output'];
  readonly productSku?: Maybe<Scalars['String']['output']>;
  readonly productVariantId?: Maybe<Scalars['String']['output']>;
  readonly quantity: Scalars['Int']['output'];
  readonly quantityFulfilled: Scalars['Int']['output'];
  /**
   * A quantity of items remaining to be fulfilled.
   *
   * Added in Saleor 3.1.
   */
  readonly quantityToFulfill: Scalars['Int']['output'];
  /**
   * Denormalized tax class of the product in this order line.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxClass?: Maybe<TaxClass>;
  /**
   * Denormalized public metadata of the tax class.
   *
   * Added in Saleor 3.9.
   */
  readonly taxClassMetadata: ReadonlyArray<MetadataItem>;
  /**
   * Denormalized name of the tax class.
   *
   * Added in Saleor 3.9.
   */
  readonly taxClassName?: Maybe<Scalars['String']['output']>;
  /**
   * Denormalized private metadata of the tax class. Requires staff permissions to access.
   *
   * Added in Saleor 3.9.
   */
  readonly taxClassPrivateMetadata: ReadonlyArray<MetadataItem>;
  readonly taxRate: Scalars['Float']['output'];
  readonly thumbnail?: Maybe<Image>;
  /** Price of the order line. */
  readonly totalPrice: TaxedMoney;
  /** Product name in the customer's language */
  readonly translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language */
  readonly translatedVariantName: Scalars['String']['output'];
  /** Price of the single item in the order line without applied an order line discount. */
  readonly undiscountedUnitPrice: TaxedMoney;
  /** The discount applied to the single order line. */
  readonly unitDiscount: Money;
  readonly unitDiscountReason?: Maybe<Scalars['String']['output']>;
  /** Type of the discount: fixed or percent */
  readonly unitDiscountType?: Maybe<DiscountValueTypeEnum>;
  /** Value of the discount. Can store fixed value or percent value */
  readonly unitDiscountValue: Scalars['PositiveDecimal']['output'];
  /** Price of the single item in the order line. */
  readonly unitPrice: TaxedMoney;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly variant?: Maybe<ProductVariant>;
  readonly variantName: Scalars['String']['output'];
};


/** Represents order line of particular order. */
export type OrderLineMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order line of particular order. */
export type OrderLineMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents order line of particular order. */
export type OrderLinePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order line of particular order. */
export type OrderLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderLineCreateInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  readonly forceNewLine?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Custom price of the item.When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Number of variant items ordered. */
  readonly quantity: Scalars['Int']['input'];
  /** Product variant ID. */
  readonly variantId: Scalars['ID']['input'];
};

/**
 * Deletes an order line from an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDelete = {
  readonly errors: ReadonlyArray<OrderError>;
  /** A related order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
  /** An order line that was deleted. */
  readonly orderLine?: Maybe<OrderLine>;
};

/**
 * Remove discount applied to the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountRemove = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order which is related to line which has removed discount. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
  /** Order line which has removed discount. */
  readonly orderLine?: Maybe<OrderLine>;
};

/**
 * Update discount for the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountUpdate = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order which is related to the discounted line. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
  /** Order line which has been discounted. */
  readonly orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  readonly quantity: Scalars['Int']['input'];
};

/**
 * Updates an order line of an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineUpdate = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Related order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
  readonly orderLine?: Maybe<OrderLine>;
};

/**
 * Create order lines for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLinesCreate = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Related order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
  /** List of added order lines. */
  readonly orderLines?: Maybe<ReadonlyArray<OrderLine>>;
};

/**
 * Mark order as manually paid.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderMarkAsPaid = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order marked as paid. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Event sent when order metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type OrderMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type OrderOrCheckout = Checkout | Order;

/** An enumeration. */
export enum OrderOriginEnum {
  BulkCreate = 'BULK_CREATE',
  Checkout = 'CHECKOUT',
  Draft = 'DRAFT',
  Reissue = 'REISSUE'
}

/**
 * Payment has been made. The order may be partially or fully paid.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderPaid = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Refund an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderRefund = {
  readonly errors: ReadonlyArray<OrderError>;
  /** A refunded order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  readonly fulfillmentLineId: Scalars['ID']['input'];
  /** The number of items to be refunded. */
  readonly quantity: Scalars['Int']['input'];
};

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  readonly orderLineId: Scalars['ID']['input'];
  /** The number of items to be refunded. */
  readonly quantity: Scalars['Int']['input'];
};

export type OrderRefundProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  readonly amountToRefund?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** List of fulfilled lines to refund. */
  readonly fulfillmentLines?: InputMaybe<ReadonlyArray<OrderRefundFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  readonly includeShippingCosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of unfulfilled lines to refund. */
  readonly orderLines?: InputMaybe<ReadonlyArray<OrderRefundLineInput>>;
};

/**
 * The order received a refund. The order may be partially or fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderRefunded = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  readonly fulfillmentLineId: Scalars['ID']['input'];
  /** The number of items to be returned. */
  readonly quantity: Scalars['Int']['input'];
  /** Determines, if the line should be added to replace order. */
  readonly replace?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  readonly orderLineId: Scalars['ID']['input'];
  /** The number of items to be returned. */
  readonly quantity: Scalars['Int']['input'];
  /** Determines, if the line should be added to replace order. */
  readonly replace?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderReturnProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  readonly amountToRefund?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** List of fulfilled lines to return. */
  readonly fulfillmentLines?: InputMaybe<ReadonlyArray<OrderReturnFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  readonly includeShippingCosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of unfulfilled lines to return. */
  readonly orderLines?: InputMaybe<ReadonlyArray<OrderReturnLineInput>>;
  /** If true, Saleor will call refund action for all lines. */
  readonly refund?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents the channel-specific order settings. */
export type OrderSettings = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  readonly automaticallyConfirmAllNewOrders: Scalars['Boolean']['output'];
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  readonly automaticallyFulfillNonShippableGiftCard: Scalars['Boolean']['output'];
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly defaultTransactionFlowStrategy: TransactionFlowStrategyEnum;
  /**
   * The time in days after expired orders will be deleted.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly deleteExpiredOrdersAfter: Scalars['Day']['output'];
  /**
   * Expiration time in minutes. Default null - means do not expire any orders.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly expireOrdersAfter?: Maybe<Scalars['Minute']['output']>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly markAsPaidStrategy: MarkAsPaidStrategyEnum;
};

export type OrderSettingsError = {
  /** The error code. */
  readonly code: OrderSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum OrderSettingsErrorCode {
  Invalid = 'INVALID'
}

export type OrderSettingsInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  readonly automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  readonly automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly defaultTransactionFlowStrategy?: InputMaybe<TransactionFlowStrategyEnum>;
  /**
   * The time in days after expired orders will be deleted.Allowed range is from 1 to 120.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly deleteExpiredOrdersAfter?: InputMaybe<Scalars['Day']['input']>;
  /**
   * Expiration time in minutes. Default null - means do not expire any orders. Enter 0 or null to disable.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly expireOrdersAfter?: InputMaybe<Scalars['Minute']['input']>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly markAsPaidStrategy?: InputMaybe<MarkAsPaidStrategyEnum>;
};

/**
 * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderSettingsUpdate = {
  readonly errors: ReadonlyArray<OrderSettingsError>;
  /** Order settings. */
  readonly orderSettings?: Maybe<OrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderSettingsErrors: ReadonlyArray<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  readonly automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  readonly automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum OrderSortField {
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CreatedAt = 'CREATED_AT',
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CreationDate = 'CREATION_DATE',
  /** Sort orders by customer. */
  Customer = 'CUSTOMER',
  /** Sort orders by fulfillment status. */
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  /** Sort orders by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort orders by number. */
  Number = 'NUMBER',
  /** Sort orders by payment. */
  Payment = 'PAYMENT',
  /** Sort orders by rank. Note: This option is available only with the `search` filter. */
  Rank = 'RANK'
}

export type OrderSortingInput = {
  /** Specifies the direction in which to sort orders. */
  readonly direction: OrderDirection;
  /** Sort orders by the selected field. */
  readonly field: OrderSortField;
};

/** An enumeration. */
export enum OrderStatus {
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  PartiallyReturned = 'PARTIALLY_RETURNED',
  Returned = 'RETURNED',
  Unconfirmed = 'UNCONFIRMED',
  Unfulfilled = 'UNFULFILLED'
}

export enum OrderStatusFilter {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  ReadyToCapture = 'READY_TO_CAPTURE',
  ReadyToFulfill = 'READY_TO_FULFILL',
  Unconfirmed = 'UNCONFIRMED',
  Unfulfilled = 'UNFULFILLED'
}

/**
 * Updates an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdate = {
  readonly errors: ReadonlyArray<OrderError>;
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  readonly billingAddress?: InputMaybe<AddressInput>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  readonly shippingAddress?: InputMaybe<AddressInput>;
  /** Email address of the customer. */
  readonly userEmail?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdateShipping = {
  readonly errors: ReadonlyArray<OrderError>;
  /** Order with updated shipping method. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  readonly shippingMethod?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when order is updated.
 *
 * Added in Saleor 3.2.
 */
export type OrderUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  readonly order?: Maybe<Order>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Void an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderVoid = {
  readonly errors: ReadonlyArray<OrderError>;
  /** A voided order. */
  readonly order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly orderErrors: ReadonlyArray<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  /** List of attributes assigned to this product. */
  readonly attributes: ReadonlyArray<SelectedAttribute>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  readonly contentJson: Scalars['JSONString']['output'];
  readonly created: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isPublished: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly pageType: PageType;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  readonly publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The page publication date.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  /** Returns translated page fields for the given language code. */
  readonly translation?: Maybe<PageTranslation>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeAssign = {
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
  /** The updated page type. */
  readonly pageType?: Maybe<PageType>;
};

/**
 * Unassign attributes from a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeUnassign = {
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
  /** The updated page type. */
  readonly pageType?: Maybe<PageType>;
};

/**
 * Deletes pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

/**
 * Publish pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkPublish = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageCountableConnection = {
  readonly edges: ReadonlyArray<PageCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Page;
};

/**
 * Creates a new page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageCreate = {
  readonly errors: ReadonlyArray<PageError>;
  readonly page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageCreateInput = {
  /** List of attributes. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly content?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the page type that page belongs to. */
  readonly pageType: Scalars['ID']['input'];
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  readonly publicationDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new page is created.
 *
 * Added in Saleor 3.2.
 */
export type PageCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page the event relates to. */
  readonly page?: Maybe<Page>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageDelete = {
  readonly errors: ReadonlyArray<PageError>;
  readonly page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

/**
 * Event sent when page is deleted.
 *
 * Added in Saleor 3.2.
 */
export type PageDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page the event relates to. */
  readonly page?: Maybe<Page>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type PageError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: PageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum PageErrorCode {
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PageFilterInput = {
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly pageTypes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  /** List of attributes. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly content?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  readonly publicationDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Reorder page attribute values.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageReorderAttributeValues = {
  readonly errors: ReadonlyArray<PageError>;
  /** Page from which attribute values are reordered. */
  readonly page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

export enum PageSortField {
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CreatedAt = 'CREATED_AT',
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CreationDate = 'CREATION_DATE',
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PublicationDate = 'PUBLICATION_DATE',
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort pages by slug. */
  Slug = 'SLUG',
  /** Sort pages by title. */
  Title = 'TITLE',
  /** Sort pages by visibility. */
  Visibility = 'VISIBILITY'
}

export type PageSortingInput = {
  /** Specifies the direction in which to sort pages. */
  readonly direction: OrderDirection;
  /** Sort pages by the selected field. */
  readonly field: PageSortField;
};

export type PageTranslatableContent = Node & {
  /** List of page content attribute values that can be translated. */
  readonly attributeValues: ReadonlyArray<AttributeValueTranslatableContent>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  readonly contentJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /**
   * A static page that can be manually added by a shop operator through the dashboard.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly page?: Maybe<Page>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  /** Returns translated page fields for the given language code. */
  readonly translation?: Maybe<PageTranslation>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a page.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PageTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  readonly page?: Maybe<PageTranslatableContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type PageTranslation = Node & {
  /**
   * Translated content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  readonly contentJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type PageTranslationInput = {
  /**
   * Translated page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly content?: InputMaybe<Scalars['JSONString']['input']>;
  readonly seoDescription?: InputMaybe<Scalars['String']['input']>;
  readonly seoTitle?: InputMaybe<Scalars['String']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node & ObjectWithMetadata & {
  /** Page attributes of that page type. */
  readonly attributes?: Maybe<ReadonlyArray<Attribute>>;
  /**
   * Attributes that can be assigned to the page type.
   *
   * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly availableAttributes?: Maybe<AttributeCountableConnection>;
  /**
   * Whether page type has pages assigned.
   *
   * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  readonly hasPages?: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly slug: Scalars['String']['output'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttributeWhereInput>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Delete page types.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageTypeCountableConnection = {
  readonly edges: ReadonlyArray<PageTypeCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageTypeCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: PageType;
};

/**
 * Create a new page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeCreate = {
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
  readonly pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  readonly addAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Name of the page type. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Page type slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new page type is created.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page type the event relates to. */
  readonly pageType?: Maybe<PageType>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Delete a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeDelete = {
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
  readonly pageType?: Maybe<PageType>;
};

/**
 * Event sent when page type is deleted.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page type the event relates to. */
  readonly pageType?: Maybe<PageType>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type PageTypeFilterInput = {
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Reorder the attributes of a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeReorderAttributes = {
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
  /** Page type from which attributes are reordered. */
  readonly pageType?: Maybe<PageType>;
};

export enum PageTypeSortField {
  /** Sort page types by name. */
  Name = 'NAME',
  /** Sort page types by slug. */
  Slug = 'SLUG'
}

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort page types. */
  readonly direction: OrderDirection;
  /** Sort page types by the selected field. */
  readonly field: PageTypeSortField;
};

/**
 * Update page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeUpdate = {
  readonly errors: ReadonlyArray<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
  readonly pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  readonly addAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Name of the page type. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** List of attribute IDs to be assigned to the page type. */
  readonly removeAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Page type slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when page type is updated.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page type the event relates to. */
  readonly pageType?: Maybe<PageType>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an existing page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageUpdate = {
  readonly errors: ReadonlyArray<PageError>;
  readonly page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pageErrors: ReadonlyArray<PageError>;
};

/**
 * Event sent when page is updated.
 *
 * Added in Saleor 3.2.
 */
export type PageUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page the event relates to. */
  readonly page?: Maybe<Page>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Change the password of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type PasswordChange = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance with a new password. */
  readonly user?: Maybe<User>;
};

/** Represents a payment of a given type. */
export type Payment = Node & ObjectWithMetadata & {
  /**
   * List of actions that can be performed in the current state of a payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly actions: ReadonlyArray<OrderAction>;
  /**
   * Maximum amount of money that can be captured.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly availableCaptureAmount?: Maybe<Money>;
  /**
   * Maximum amount of money that can be refunded.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly availableRefundAmount?: Maybe<Money>;
  /** Total amount captured for this payment. */
  readonly capturedAmount?: Maybe<Money>;
  /** Internal payment status. */
  readonly chargeStatus: PaymentChargeStatusEnum;
  readonly checkout?: Maybe<Checkout>;
  readonly created: Scalars['DateTime']['output'];
  /** The details of the card used for this payment. */
  readonly creditCard?: Maybe<CreditCard>;
  /**
   * IP address of the user who created the payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly customerIpAddress?: Maybe<Scalars['String']['output']>;
  readonly gateway: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isActive: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly modified: Scalars['DateTime']['output'];
  readonly order?: Maybe<Order>;
  readonly paymentMethodType: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly token: Scalars['String']['output'];
  /** Total amount of the payment. */
  readonly total?: Maybe<Money>;
  /**
   * List of all transactions within this payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly transactions?: Maybe<ReadonlyArray<Transaction>>;
};


/** Represents a payment of a given type. */
export type PaymentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a payment of a given type. */
export type PaymentMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Authorize payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentAuthorize = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  readonly payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Captures the authorized payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentCapture = {
  readonly errors: ReadonlyArray<PaymentError>;
  /** Updated payment. */
  readonly payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/**
 * Capture payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentCaptureEvent = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  readonly payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum PaymentChargeStatusEnum {
  Cancelled = 'CANCELLED',
  FullyCharged = 'FULLY_CHARGED',
  FullyRefunded = 'FULLY_REFUNDED',
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refused = 'REFUSED'
}

/** Check payment balance. */
export type PaymentCheckBalance = {
  /** Response from the gateway. */
  readonly data?: Maybe<Scalars['JSONString']['output']>;
  readonly errors: ReadonlyArray<PaymentError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly paymentErrors: ReadonlyArray<PaymentError>;
};

export type PaymentCheckBalanceInput = {
  /** Information about card. */
  readonly card: CardInput;
  /** Slug of a channel for which the data should be returned. */
  readonly channel: Scalars['String']['input'];
  /** An ID of a payment gateway to check. */
  readonly gatewayId: Scalars['String']['input'];
  /** Payment method name. */
  readonly method: Scalars['String']['input'];
};

/**
 * Confirm payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentConfirmEvent = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  readonly payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type PaymentCountableConnection = {
  readonly edges: ReadonlyArray<PaymentCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaymentCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Payment;
};

export type PaymentError = {
  /** The error code. */
  readonly code: PaymentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of variant IDs which causes the error. */
  readonly variants?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum PaymentErrorCode {
  BalanceCheckError = 'BALANCE_CHECK_ERROR',
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutEmailNotSet = 'CHECKOUT_EMAIL_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
  NoCheckoutLines = 'NO_CHECKOUT_LINES',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  PaymentError = 'PAYMENT_ERROR',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  Unique = 'UNIQUE'
}

export type PaymentFilterInput = {
  readonly checkouts?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  /** Payment gateway client configuration. */
  readonly config: ReadonlyArray<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  readonly currencies: ReadonlyArray<Scalars['String']['output']>;
  /** Payment gateway ID. */
  readonly id: Scalars['ID']['output'];
  /** Payment gateway name. */
  readonly name: Scalars['String']['output'];
};

export type PaymentGatewayConfig = {
  /** The JSON data required to initialize the payment gateway. */
  readonly data?: Maybe<Scalars['JSON']['output']>;
  readonly errors?: Maybe<ReadonlyArray<PaymentGatewayConfigError>>;
  /** The app identifier. */
  readonly id: Scalars['String']['output'];
};

export type PaymentGatewayConfigError = {
  /** The error code. */
  readonly code: PaymentGatewayConfigErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum PaymentGatewayConfigErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

/**
 * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitialize = {
  readonly errors: ReadonlyArray<PaymentGatewayInitializeError>;
  readonly gatewayConfigs?: Maybe<ReadonlyArray<PaymentGatewayConfig>>;
};

export type PaymentGatewayInitializeError = {
  /** The error code. */
  readonly code: PaymentGatewayInitializeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum PaymentGatewayInitializeErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

/**
 * Event sent when user wants to initialize the payment gateway.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitializeSession = Event & {
  /** Amount requested for initializing the payment gateway. */
  readonly amount?: Maybe<Scalars['PositiveDecimal']['output']>;
  /** Payment gateway data in JSON format, recieved from storefront. */
  readonly data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Checkout or order */
  readonly sourceObject: OrderOrCheckout;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type PaymentGatewayToInitialize = {
  /** The data that will be passed to the payment gateway. */
  readonly data?: InputMaybe<Scalars['JSON']['input']>;
  /** The identifier of the payment gateway app to initialize. */
  readonly id: Scalars['String']['input'];
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  readonly errors: ReadonlyArray<PaymentError>;
  readonly initializedPayment?: Maybe<PaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  /** Initialized data by gateway. */
  readonly data?: Maybe<Scalars['JSONString']['output']>;
  /** ID of a payment gateway. */
  readonly gateway: Scalars['String']['output'];
  /** Payment gateway name. */
  readonly name: Scalars['String']['output'];
};

export type PaymentInput = {
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  readonly amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** A gateway to use with that payment. */
  readonly gateway: Scalars['String']['input'];
  /**
   * User public metadata.
   *
   * Added in Saleor 3.1.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  readonly returnUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Payment store type.
   *
   * Added in Saleor 3.1.
   */
  readonly storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  readonly token?: InputMaybe<Scalars['String']['input']>;
};

/**
 * List payment gateways.
 *
 * Added in Saleor 3.6.
 */
export type PaymentListGateways = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Process payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentProcessEvent = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  readonly payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Refunds the captured payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentRefund = {
  readonly errors: ReadonlyArray<PaymentError>;
  /** Updated payment. */
  readonly payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/**
 * Refund payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentRefundEvent = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  readonly payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  /** Stored credit card details if available. */
  readonly creditCardInfo?: Maybe<CreditCard>;
  /** Payment gateway name. */
  readonly gateway: Scalars['String']['output'];
  /**
   * List of public metadata items.
   *
   * Added in Saleor 3.1.
   *
   * Can be accessed without permissions.
   */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /** ID of stored payment method. */
  readonly paymentMethodId?: Maybe<Scalars['String']['output']>;
};

/**
 * Voids the authorized payment.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentVoid = {
  readonly errors: ReadonlyArray<PaymentError>;
  /** Updated payment. */
  readonly payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/**
 * Void payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentVoidEvent = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  readonly payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
  /** Internal code for permission. */
  readonly code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  readonly name: Scalars['String']['output'];
};

/** An enumeration. */
export enum PermissionEnum {
  HandleCheckouts = 'HANDLE_CHECKOUTS',
  HandlePayments = 'HANDLE_PAYMENTS',
  HandleTaxes = 'HANDLE_TAXES',
  ImpersonateUser = 'IMPERSONATE_USER',
  ManageApps = 'MANAGE_APPS',
  ManageChannels = 'MANAGE_CHANNELS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageMenus = 'MANAGE_MENUS',
  ManageObservability = 'MANAGE_OBSERVABILITY',
  ManageOrders = 'MANAGE_ORDERS',
  ManageOrdersImport = 'MANAGE_ORDERS_IMPORT',
  ManagePages = 'MANAGE_PAGES',
  ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageStaff = 'MANAGE_STAFF',
  ManageTaxes = 'MANAGE_TAXES',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageUsers = 'MANAGE_USERS'
}

/**
 * Create new permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupCreate = {
  readonly errors: ReadonlyArray<PermissionGroupError>;
  readonly group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly permissionGroupErrors: ReadonlyArray<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly addChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of permission code names to assign to this group. */
  readonly addPermissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
  /** List of users to assign to this group. */
  readonly addUsers?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Group name. */
  readonly name: Scalars['String']['input'];
  /**
   * Determine if the group has restricted access to channels.  DEFAULT: False
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly restrictedAccessToChannels?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when new permission group is created.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The permission group the event relates to. */
  readonly permissionGroup?: Maybe<Group>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Delete permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupDelete = {
  readonly errors: ReadonlyArray<PermissionGroupError>;
  readonly group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly permissionGroupErrors: ReadonlyArray<PermissionGroupError>;
};

/**
 * Event sent when permission group is deleted.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The permission group the event relates to. */
  readonly permissionGroup?: Maybe<Group>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type PermissionGroupError = {
  /** List of chnnels IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: PermissionGroupErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  readonly permissions?: Maybe<ReadonlyArray<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  readonly users?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopeChannel = 'OUT_OF_SCOPE_CHANNEL',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PermissionGroupFilterInput = {
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

/** Sorting options for permission groups. */
export enum PermissionGroupSortField {
  /** Sort permission group accounts by name. */
  Name = 'NAME'
}

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort permission group. */
  readonly direction: OrderDirection;
  /** Sort permission group by the selected field. */
  readonly field: PermissionGroupSortField;
};

/**
 * Update permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupUpdate = {
  readonly errors: ReadonlyArray<PermissionGroupError>;
  readonly group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly permissionGroupErrors: ReadonlyArray<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly addChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of permission code names to assign to this group. */
  readonly addPermissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
  /** List of users to assign to this group. */
  readonly addUsers?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Group name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of channels to unassign from this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of permission code names to unassign from this group. */
  readonly removePermissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
  /** List of users to unassign from this group. */
  readonly removeUsers?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Determine if the group has restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly restrictedAccessToChannels?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when permission group is updated.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The permission group the event relates to. */
  readonly permissionGroup?: Maybe<Group>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Plugin. */
export type Plugin = {
  /** Channel-specific plugin configuration. */
  readonly channelConfigurations: ReadonlyArray<PluginConfiguration>;
  /** Description of the plugin. */
  readonly description: Scalars['String']['output'];
  /** Global configuration of the plugin (not channel-specific). */
  readonly globalConfiguration?: Maybe<PluginConfiguration>;
  /** Identifier of the plugin. */
  readonly id: Scalars['ID']['output'];
  /** Name of the plugin. */
  readonly name: Scalars['String']['output'];
};

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
  /** Determines if plugin is active or not. */
  readonly active: Scalars['Boolean']['output'];
  /** The channel to which the plugin configuration is assigned to. */
  readonly channel?: Maybe<Channel>;
  /** Configuration of the plugin. */
  readonly configuration?: Maybe<ReadonlyArray<ConfigurationItem>>;
};

export enum PluginConfigurationType {
  Global = 'GLOBAL',
  PerChannel = 'PER_CHANNEL'
}

export type PluginCountableConnection = {
  readonly edges: ReadonlyArray<PluginCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PluginCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Plugin;
};

export type PluginError = {
  /** The error code. */
  readonly code: PluginErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PluginFilterInput = {
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
  readonly type?: InputMaybe<PluginConfigurationType>;
};

export enum PluginSortField {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type PluginSortingInput = {
  /** Specifies the direction in which to sort plugins. */
  readonly direction: OrderDirection;
  /** Sort plugins by the selected field. */
  readonly field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  readonly active: Scalars['Boolean']['input'];
  readonly channels: ReadonlyArray<Scalars['ID']['input']>;
};

/**
 * Update plugin configuration.
 *
 * Requires one of the following permissions: MANAGE_PLUGINS.
 */
export type PluginUpdate = {
  readonly errors: ReadonlyArray<PluginError>;
  readonly plugin?: Maybe<Plugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly pluginsErrors: ReadonlyArray<PluginError>;
};

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  readonly active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Configuration of the plugin. */
  readonly configuration?: InputMaybe<ReadonlyArray<ConfigurationItemInput>>;
};

/** An enumeration. */
export enum PostalCodeRuleInclusionTypeEnum {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE'
}

/** Represents preorder settings for product variant. */
export type PreorderData = {
  /** Preorder end date. */
  readonly endDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Total number of sold product variant during preorder.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly globalSoldUnits: Scalars['Int']['output'];
  /**
   * The global preorder threshold for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly globalThreshold?: Maybe<Scalars['Int']['output']>;
};

export type PreorderSettingsInput = {
  /** The end date for preorder. */
  readonly endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The global threshold for preorder variant. */
  readonly globalThreshold?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
  /** Preorder threshold for product variant in this channel. */
  readonly quantity?: Maybe<Scalars['Int']['output']>;
  /** Number of sold product variant in this channel. */
  readonly soldUnits: Scalars['Int']['output'];
};

export type PriceInput = {
  /** Amount of money. */
  readonly amount: Scalars['PositiveDecimal']['input'];
  /** Currency code. */
  readonly currency: Scalars['String']['input'];
};

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  /** Price less than or equal to. */
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  /**
   * Get a single attribute attached to product by attribute slug.
   *
   * Added in Saleor 3.9.
   */
  readonly attribute?: Maybe<SelectedAttribute>;
  /** List of attributes assigned to this product. */
  readonly attributes: ReadonlyArray<SelectedAttribute>;
  /**
   * Date when product is available for purchase.
   * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
   */
  readonly availableForPurchase?: Maybe<Scalars['Date']['output']>;
  /** Date when product is available for purchase. */
  readonly availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  readonly category?: Maybe<Category>;
  /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
  readonly channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of availability in channels for the product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly channelListings?: Maybe<ReadonlyArray<ProductChannelListing>>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` field to determine whether tax collection is enabled. */
  readonly chargeTaxes: Scalars['Boolean']['output'];
  /** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly collections?: Maybe<ReadonlyArray<Collection>>;
  readonly created: Scalars['DateTime']['output'];
  readonly defaultVariant?: Maybe<ProductVariant>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /**
   * Get a single product image by ID.
   * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
   */
  readonly imageById?: Maybe<ProductImage>;
  /**
   * List of images for the product.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  readonly images?: Maybe<ReadonlyArray<ProductImage>>;
  /** Whether the product is in stock and visible or not. */
  readonly isAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the product is available for purchase. */
  readonly isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  /** List of media for the product. */
  readonly media?: Maybe<ReadonlyArray<ProductMedia>>;
  /** Get a single product media by ID. */
  readonly mediaById?: Maybe<ProductMedia>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  readonly pricing?: Maybe<ProductPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly productType: ProductType;
  readonly rating?: Maybe<Scalars['Float']['output']>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  /**
   * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxClass?: Maybe<TaxClass>;
  /**
   * A type of tax. Assigned by enabled tax gateway
   * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
   */
  readonly taxType?: Maybe<TaxType>;
  readonly thumbnail?: Maybe<Image>;
  /** Returns translated product fields for the given language code. */
  readonly translation?: Maybe<ProductTranslation>;
  readonly updatedAt: Scalars['DateTime']['output'];
  /**
   * Get a single variant by SKU or ID.
   *
   * Added in Saleor 3.9.
   * @deprecated This field will be removed in Saleor 4.0. Use top-level `variant` query.
   */
  readonly variant?: Maybe<ProductVariant>;
  /** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly variants?: Maybe<ReadonlyArray<ProductVariant>>;
  readonly weight?: Maybe<Weight>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductAttributeArgs = {
  slug: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaArgs = {
  sortBy?: InputMaybe<MediaSortingInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Represents an individual item for sale in the storefront. */
export type ProductVariantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Assign attributes to a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssign = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  /** The updated product type. */
  readonly productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  readonly id: Scalars['ID']['input'];
  /** The attribute type to be assigned as. */
  readonly type: ProductAttributeType;
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  readonly variantSelection?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Update attributes assigned to product variant for given product type.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssignmentUpdate = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  /** The updated product type. */
  readonly productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  readonly id: Scalars['ID']['input'];
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  readonly variantSelection: Scalars['Boolean']['input'];
};

export enum ProductAttributeType {
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

/**
 * Un-assign attributes from a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeUnassign = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  /** The updated product type. */
  readonly productType?: Maybe<ProductType>;
};

/**
 * Creates products.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkCreate = {
  /** Returns how many objects were created. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductBulkCreateError>;
  /** List of the created products. */
  readonly results: ReadonlyArray<ProductBulkResult>;
};

export type ProductBulkCreateError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of channel IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductBulkCreateErrorCode;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly path?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum ProductBulkCreateErrorCode {
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  Blank = 'BLANK',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidPrice = 'INVALID_PRICE',
  MaxLength = 'MAX_LENGTH',
  NotFound = 'NOT_FOUND',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
  ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER'
}

export type ProductBulkCreateInput = {
  /** List of attributes. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
  /** ID of the product's category. */
  readonly category?: InputMaybe<Scalars['ID']['input']>;
  /** List of channels in which the product is available. */
  readonly channelListings?: InputMaybe<ReadonlyArray<ProductChannelListingCreateInput>>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  readonly chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /** External ID of this product. */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** List of media inputs associated with the product. */
  readonly media?: InputMaybe<ReadonlyArray<MediaInput>>;
  /** Fields required to update the product metadata. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Product name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Fields required to update the product private metadata. */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** ID of the type that product belongs to. */
  readonly productType: Scalars['ID']['input'];
  /** Defines the product rating value. */
  readonly rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  readonly taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  readonly taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Input list of product variants to create. */
  readonly variants?: InputMaybe<ReadonlyArray<ProductVariantBulkCreateInput>>;
  /** Weight of the Product. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Deletes products.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductBulkResult = {
  /** List of errors occurred on create attempt. */
  readonly errors?: Maybe<ReadonlyArray<ProductBulkCreateError>>;
  /** Product data. */
  readonly product?: Maybe<Product>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  readonly availableForPurchase?: Maybe<Scalars['Date']['output']>;
  /**
   * The product available for purchase date time.
   *
   * Added in Saleor 3.3.
   */
  readonly availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  readonly channel: Channel;
  /** The price of the cheapest variant (including discounts). */
  readonly discountedPrice?: Maybe<Money>;
  readonly id: Scalars['ID']['output'];
  /** Whether the product is available for purchase. */
  readonly isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  readonly isPublished: Scalars['Boolean']['output'];
  /**
   * Range of margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly margin?: Maybe<Margin>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  readonly pricing?: Maybe<ProductPricingInfo>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  readonly publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The product publication date time.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Purchase cost of product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly purchaseCost?: Maybe<MoneyRange>;
  readonly visibleInListings: Scalars['Boolean']['output'];
};


/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
  address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
  /** List of variants to which the channel should be assigned. */
  readonly addVariants?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.
   *
   * Added in Saleor 3.3.
   */
  readonly availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
   */
  readonly availableForPurchaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** Determine if product should be available for purchase. */
  readonly isAvailableForPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if object is visible to customers. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  readonly publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** List of variants from which the channel should be unassigned. */
  readonly removeVariants?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  readonly visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductChannelListingCreateInput = {
  /** A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed. */
  readonly availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** Determine if product should be available for purchase. */
  readonly isAvailableForPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if object is visible to customers. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Publication date time. ISO 8601 standard. */
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  readonly visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductChannelListingError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of variants IDs which causes the error. */
  readonly variants?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/**
 * Manage product's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductChannelListingUpdate = {
  readonly errors: ReadonlyArray<ProductChannelListingError>;
  /** An updated product instance. */
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productChannelListingErrors: ReadonlyArray<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
  /** List of channels from which the product should be unassigned. */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of channels to which the product should be assigned or updated. */
  readonly updateChannels?: InputMaybe<ReadonlyArray<ProductChannelListingAddInput>>;
};

export type ProductCountableConnection = {
  readonly edges: ReadonlyArray<ProductCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Product;
};

/**
 * Creates a new product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductCreate = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
  /** ID of the product's category. */
  readonly category?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  readonly chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Product name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** ID of the type that product belongs to. */
  readonly productType: Scalars['ID']['input'];
  /** Defines the product rating value. */
  readonly rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  readonly taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  readonly taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the Product. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductCreated = Event & {
  /** The category of the product. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  readonly product?: Maybe<Product>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductCreatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductDelete = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductDeleted = Event & {
  /** The category of the product. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  readonly product?: Maybe<Product>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductDeletedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidPrice = 'INVALID_PRICE',
  MediaAlreadyAssigned = 'MEDIA_ALREADY_ASSIGNED',
  NotFound = 'NOT_FOUND',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  PreorderVariantCannotBeDeactivated = 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
  ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT'
}

export enum ProductFieldEnum {
  Category = 'CATEGORY',
  ChargeTaxes = 'CHARGE_TAXES',
  Collections = 'COLLECTIONS',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  ProductMedia = 'PRODUCT_MEDIA',
  ProductType = 'PRODUCT_TYPE',
  ProductWeight = 'PRODUCT_WEIGHT',
  VariantId = 'VARIANT_ID',
  VariantMedia = 'VARIANT_MEDIA',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT'
}

export type ProductFilterInput = {
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeInput>>;
  /**
   * Filter by the date of availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  readonly availableFrom?: InputMaybe<Scalars['DateTime']['input']>;
  readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Filter on whether product is a gift card or not. */
  readonly giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  readonly hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  readonly hasPreorderedVariants?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Filter by availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  readonly isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Filter by visibility in product listings.
   *
   * Added in Saleor 3.8.
   */
  readonly isVisibleInListing?: InputMaybe<Scalars['Boolean']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  /** Filter by the lowest variant price after discounts. */
  readonly minimalPrice?: InputMaybe<PriceRangeInput>;
  readonly price?: InputMaybe<PriceRangeInput>;
  readonly productTypes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Filter by the publication date.
   *
   * Added in Saleor 3.8.
   */
  readonly publishedFrom?: InputMaybe<Scalars['DateTime']['input']>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** Filter by variants having specific stock status. */
  readonly stockAvailability?: InputMaybe<StockAvailability>;
  readonly stocks?: InputMaybe<ProductStockFilterInput>;
  /** Filter by when was the most recent update. */
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/** Represents a product image. */
export type ProductImage = {
  /** The alt text of the image. */
  readonly alt?: Maybe<Scalars['String']['output']>;
  /** The ID of the image. */
  readonly id: Scalars['ID']['output'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  readonly sortOrder?: Maybe<Scalars['Int']['output']>;
  readonly url: Scalars['String']['output'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductInput = {
  /** List of attributes. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
  /** ID of the product's category. */
  readonly category?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  readonly chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Product name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Defines the product rating value. */
  readonly rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  readonly seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  readonly taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  readonly taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the Product. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** Represents a product media. */
export type ProductMedia = Node & ObjectWithMetadata & {
  readonly alt: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly oembedData: Scalars['JSONString']['output'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Product id the media refers to.
   *
   * Added in Saleor 3.12.
   */
  readonly productId?: Maybe<Scalars['ID']['output']>;
  readonly sortOrder?: Maybe<Scalars['Int']['output']>;
  readonly type: ProductMediaType;
  readonly url: Scalars['String']['output'];
};


/** Represents a product media. */
export type ProductMediaMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a product media. */
export type ProductMediaMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a product media. */
export type ProductMediaPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a product media. */
export type ProductMediaPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a product media. */
export type ProductMediaUrlArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Deletes product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaCreate = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly media?: Maybe<ProductMedia>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductMediaCreateInput = {
  /** Alt text for a product media. */
  readonly alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file in a multipart request. */
  readonly image?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents an URL to an external media. */
  readonly mediaUrl?: InputMaybe<Scalars['String']['input']>;
  /** ID of an product. */
  readonly product: Scalars['ID']['input'];
};

/**
 * Event sent when new product media is created.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product media the event relates to. */
  readonly productMedia?: Maybe<ProductMedia>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaDelete = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly media?: Maybe<ProductMedia>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Event sent when product media is deleted.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product media the event relates to. */
  readonly productMedia?: Maybe<ProductMedia>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Changes ordering of the product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaReorder = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly media?: Maybe<ReadonlyArray<ProductMedia>>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/** An enumeration. */
export enum ProductMediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

/**
 * Updates a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaUpdate = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly media?: Maybe<ProductMedia>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductMediaUpdateInput = {
  /** Alt text for a product media. */
  readonly alt?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when product media is updated.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product media the event relates to. */
  readonly productMedia?: Maybe<ProductMedia>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductMetadataUpdated = Event & {
  /** The category of the product. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  readonly product?: Maybe<Product>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductMetadataUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrder = {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  readonly attributeId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  readonly direction: OrderDirection;
  /** Sort products by the selected field. */
  readonly field?: InputMaybe<ProductOrderField>;
};

export enum ProductOrderField {
  /**
   * Sort products by collection. Note: This option is available only for the `Collection.products` query.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Collection = 'COLLECTION',
  /**
   * Sort products by creation date.
   *
   * Added in Saleor 3.8.
   */
  CreatedAt = 'CREATED_AT',
  /** Sort products by update date. */
  Date = 'DATE',
  /** Sort products by update date. */
  LastModified = 'LAST_MODIFIED',
  /** Sort products by update date. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /**
   * Sort products by a minimal price of a product's variant.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  MinimalPrice = 'MINIMAL_PRICE',
  /** Sort products by name. */
  Name = 'NAME',
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Price = 'PRICE',
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  PublicationDate = 'PUBLICATION_DATE',
  /**
   * Sort products by publication status.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Published = 'PUBLISHED',
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  Rank = 'RANK',
  /** Sort products by rating. */
  Rating = 'RATING',
  /** Sort products by type. */
  Type = 'TYPE'
}

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  /** The discount amount if in sale (null otherwise). */
  readonly discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  readonly discountLocalCurrency?: Maybe<TaxedMoney>;
  /**
   * Determines whether this product's price displayed in a storefront should include taxes.
   *
   * Added in Saleor 3.9.
   */
  readonly displayGrossPrices: Scalars['Boolean']['output'];
  /** Whether it is in sale or not. */
  readonly onSale?: Maybe<Scalars['Boolean']['output']>;
  /** The discounted price range of the product variants. */
  readonly priceRange?: Maybe<TaxedMoneyRange>;
  /** The discounted price range of the product variants in the local currency. */
  readonly priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  readonly priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

/**
 * Reorder product attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductReorderAttributeValues = {
  readonly errors: ReadonlyArray<ProductError>;
  /** Product from which attribute values are reordered. */
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductStockFilterInput = {
  readonly quantity?: InputMaybe<IntRangeInput>;
  readonly warehouseIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

export type ProductTranslatableContent = Node & {
  /** List of product attribute values that can be translated. */
  readonly attributeValues: ReadonlyArray<AttributeValueTranslatableContent>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly product?: Maybe<Product>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated product fields for the given language code. */
  readonly translation?: Maybe<ProductTranslation>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ProductTranslation = Node & {
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  readonly descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly seoDescription?: Maybe<Scalars['String']['output']>;
  readonly seoTitle?: Maybe<Scalars['String']['output']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  /**
   * Variant attributes of that product type with attached variant selection.
   *
   * Added in Saleor 3.1.
   */
  readonly assignedVariantAttributes?: Maybe<ReadonlyArray<AssignedVariantAttribute>>;
  /**
   * List of attributes which can be assigned to this product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly availableAttributes?: Maybe<AttributeCountableConnection>;
  readonly hasVariants: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isDigital: Scalars['Boolean']['output'];
  readonly isShippingRequired: Scalars['Boolean']['output'];
  /** The product type kind. */
  readonly kind: ProductTypeKindEnum;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Product attributes of that product type. */
  readonly productAttributes?: Maybe<ReadonlyArray<Attribute>>;
  /**
   * List of products of this type.
   * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
   */
  readonly products?: Maybe<ProductCountableConnection>;
  readonly slug: Scalars['String']['output'];
  /**
   * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxClass?: Maybe<TaxClass>;
  /**
   * A type of tax. Assigned by enabled tax gateway
   * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
   */
  readonly taxType?: Maybe<TaxType>;
  /**
   * Variant attributes of that product type.
   * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
   */
  readonly variantAttributes?: Maybe<ReadonlyArray<Attribute>>;
  readonly weight?: Maybe<Weight>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttributeWhereInput>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};

/**
 * Deletes product types.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE'
}

export type ProductTypeCountableConnection = {
  readonly edges: ReadonlyArray<ProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductTypeCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: ProductType;
};

/**
 * Creates a new product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeCreate = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productType?: Maybe<ProductType>;
};

/**
 * Deletes a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeDelete = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productType?: Maybe<ProductType>;
};

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE'
}

export type ProductTypeFilterInput = {
  readonly configurable?: InputMaybe<ProductTypeConfigurable>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly kind?: InputMaybe<ProductTypeKindEnum>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly productType?: InputMaybe<ProductTypeEnum>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type ProductTypeInput = {
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  readonly hasVariants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if products are digital. */
  readonly isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if shipping is required for products of this variant. */
  readonly isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** The product type kind. */
  readonly kind?: InputMaybe<ProductTypeKindEnum>;
  /** Name of the product type. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes shared among all product variants. */
  readonly productAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Product type slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product type. All products of this product type would use this tax class, unless it's overridden in the `Product` type. */
  readonly taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.. Use tax classes to control the tax calculation for a product type. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  readonly taxCode?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes used to distinguish between different variants of a product. */
  readonly variantAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Weight of the ProductType items. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** An enumeration. */
export enum ProductTypeKindEnum {
  GiftCard = 'GIFT_CARD',
  Normal = 'NORMAL'
}

/**
 * Reorder the attributes of a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeReorderAttributes = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  /** Product type from which attributes are reordered. */
  readonly productType?: Maybe<ProductType>;
};

export enum ProductTypeSortField {
  /** Sort products by type. */
  Digital = 'DIGITAL',
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by shipping. */
  ShippingRequired = 'SHIPPING_REQUIRED'
}

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort product types. */
  readonly direction: OrderDirection;
  /** Sort product types by the selected field. */
  readonly field: ProductTypeSortField;
};

/**
 * Updates an existing product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeUpdate = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productType?: Maybe<ProductType>;
};

/**
 * Updates an existing product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductUpdate = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductUpdated = Event & {
  /** The category of the product. */
  readonly category?: Maybe<Category>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  readonly product?: Maybe<Product>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  /** List of attributes assigned to this variant. */
  readonly attributes: ReadonlyArray<SelectedAttribute>;
  /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
  readonly channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of price information in channels for the product.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly channelListings?: Maybe<ReadonlyArray<ProductVariantChannelListing>>;
  readonly created: Scalars['DateTime']['output'];
  /**
   * Digital content for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContent?: Maybe<DigitalContent>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /**
   * List of images for the product variant.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  readonly images?: Maybe<ReadonlyArray<ProductImage>>;
  /** Gross margin percentage value. */
  readonly margin?: Maybe<Scalars['Int']['output']>;
  /** List of media for the product variant. */
  readonly media?: Maybe<ReadonlyArray<ProductMedia>>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /**
   * Preorder data for product variant.
   *
   * Added in Saleor 3.1.
   */
  readonly preorder?: Maybe<PreorderData>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  readonly pricing?: Maybe<VariantPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly product: Product;
  /** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
  readonly quantityAvailable?: Maybe<Scalars['Int']['output']>;
  readonly quantityLimitPerCustomer?: Maybe<Scalars['Int']['output']>;
  /**
   * Total quantity ordered.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly quantityOrdered?: Maybe<Scalars['Int']['output']>;
  /**
   * Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly revenue?: Maybe<TaxedMoney>;
  readonly sku?: Maybe<Scalars['String']['output']>;
  /**
   * Stocks for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly stocks?: Maybe<ReadonlyArray<Stock>>;
  readonly trackInventory: Scalars['Boolean']['output'];
  /** Returns translated product variant fields for the given language code. */
  readonly translation?: Maybe<ProductVariantTranslation>;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly weight?: Maybe<Weight>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantBackInStock = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** Look up a warehouse. */
  readonly warehouse?: Maybe<Warehouse>;
};


/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantBackInStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Creates product variants for a given product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly bulkProductErrors: ReadonlyArray<BulkProductError>;
  /** Returns how many objects were created. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<BulkProductError>;
  /** List of the created variants.This field will be removed in Saleor 4.0. */
  readonly productVariants: ReadonlyArray<ProductVariant>;
  /**
   * List of the created variants.
   *
   * Added in Saleor 3.11.
   */
  readonly results: ReadonlyArray<ProductVariantBulkResult>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  readonly attributes: ReadonlyArray<BulkAttributeValueInput>;
  /** List of prices assigned to channels. */
  readonly channelListings?: InputMaybe<ReadonlyArray<ProductVariantChannelListingAddInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Variant name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  readonly preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  readonly sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  readonly stocks?: InputMaybe<ReadonlyArray<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  readonly trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Deletes product variants.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductVariantBulkError = {
  /** List of attributes IDs which causes the error. */
  readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of channel listings IDs which causes the error. */
  readonly channelListings?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /**
   * List of channel IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ProductVariantBulkErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /**
   * Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   *
   * Added in Saleor 3.14.
   */
  readonly path?: Maybe<Scalars['String']['output']>;
  /**
   * List of stocks IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  readonly stocks?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of attribute values IDs which causes the error. */
  readonly values?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum ProductVariantBulkErrorCode {
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidPrice = 'INVALID_PRICE',
  NotFound = 'NOT_FOUND',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ProductVariantBulkResult = {
  /** List of errors occurred on create attempt. */
  readonly errors?: Maybe<ReadonlyArray<ProductVariantBulkError>>;
  /** Product variant data. */
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Update multiple product variants.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkUpdate = {
  /** Returns how many objects were updated. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ProductVariantBulkError>;
  /** List of the updated variants. */
  readonly results: ReadonlyArray<ProductVariantBulkResult>;
};

/**
 * Input fields to update product variants.
 *
 * Added in Saleor 3.11.
 */
export type ProductVariantBulkUpdateInput = {
  /** List of attributes specific to this variant. */
  readonly attributes?: InputMaybe<ReadonlyArray<BulkAttributeValueInput>>;
  /**
   * Channel listings input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly channelListings?: InputMaybe<ProductVariantChannelListingUpdateInput>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** ID of the product variant to update. */
  readonly id: Scalars['ID']['input'];
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Variant name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  readonly preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  readonly sku?: InputMaybe<Scalars['String']['input']>;
  /**
   * Stocks input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly stocks?: InputMaybe<ProductVariantStocksUpdateInput>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  readonly trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** Represents product variant channel listing. */
export type ProductVariantChannelListing = Node & {
  readonly channel: Channel;
  /** Cost price of the variant. */
  readonly costPrice?: Maybe<Money>;
  readonly id: Scalars['ID']['output'];
  /**
   * Gross margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly margin?: Maybe<Scalars['Int']['output']>;
  /**
   * Preorder variant data.
   *
   * Added in Saleor 3.1.
   */
  readonly preorderThreshold?: Maybe<PreorderThreshold>;
  readonly price?: Maybe<Money>;
};

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** Cost price of the variant in channel. */
  readonly costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * The threshold for preorder variant in channel.
   *
   * Added in Saleor 3.1.
   */
  readonly preorderThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Price of the particular variant in channel. */
  readonly price: Scalars['PositiveDecimal']['input'];
};

/**
 * Manage product variant prices in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantChannelListingUpdate = {
  readonly errors: ReadonlyArray<ProductChannelListingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productChannelListingErrors: ReadonlyArray<ProductChannelListingError>;
  /** An updated product variant instance. */
  readonly variant?: Maybe<ProductVariant>;
};

export type ProductVariantChannelListingUpdateInput = {
  /** List of channels to create variant channel listings. */
  readonly create?: InputMaybe<ReadonlyArray<ProductVariantChannelListingAddInput>>;
  /** List of channel listings to remove. */
  readonly remove?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of channel listings to update. */
  readonly update?: InputMaybe<ReadonlyArray<ChannelListingUpdateInput>>;
};

export type ProductVariantCountableConnection = {
  readonly edges: ReadonlyArray<ProductVariantCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductVariantCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: ProductVariant;
};

/**
 * Creates a new variant for a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantCreate = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  readonly attributes: ReadonlyArray<AttributeValueInput>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Variant name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  readonly preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Product ID of which type is the variant. */
  readonly product: Scalars['ID']['input'];
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  readonly sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  readonly stocks?: InputMaybe<ReadonlyArray<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  readonly trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantCreatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantDelete = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantDeletedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantFilterInput = {
  readonly isPreorder?: InputMaybe<Scalars['Boolean']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly sku?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Variant name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  readonly preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  readonly sku?: InputMaybe<Scalars['String']['input']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  readonly trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  readonly weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductVariantMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductVariantMetadataUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantOutOfStock = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** Look up a warehouse. */
  readonly warehouse?: Maybe<Warehouse>;
};


/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantOutOfStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantPreorderDeactivate = {
  readonly errors: ReadonlyArray<ProductError>;
  /** Product variant with ended preorder. */
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorder = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Reorder product variant attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorderAttributeValues = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  /** Product variant from which attribute values are reordered. */
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantSetDefault = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
};

export enum ProductVariantSortField {
  /** Sort products variants by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type ProductVariantSortingInput = {
  /** Specifies the direction in which to sort productVariants. */
  readonly direction: OrderDirection;
  /** Sort productVariants by the selected field. */
  readonly field: ProductVariantSortField;
};

/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ProductVariantStockUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** Look up a warehouse. */
  readonly warehouse?: Maybe<Warehouse>;
};


/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ProductVariantStockUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Creates stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly bulkStockErrors: ReadonlyArray<BulkStockError>;
  readonly errors: ReadonlyArray<BulkStockError>;
  /** Updated product variant. */
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Delete stocks from product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksDelete = {
  readonly errors: ReadonlyArray<StockError>;
  /** Updated product variant. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly stockErrors: ReadonlyArray<StockError>;
};

/**
 * Update stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly bulkStockErrors: ReadonlyArray<BulkStockError>;
  readonly errors: ReadonlyArray<BulkStockError>;
  /** Updated product variant. */
  readonly productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantStocksUpdateInput = {
  /** List of warehouses to create stocks. */
  readonly create?: InputMaybe<ReadonlyArray<StockInput>>;
  /** List of stocks to remove. */
  readonly remove?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of stocks to update. */
  readonly update?: InputMaybe<ReadonlyArray<StockUpdateInput>>;
};

export type ProductVariantTranslatableContent = Node & {
  /** List of product variant attribute values that can be translated. */
  readonly attributeValues: ReadonlyArray<AttributeValueTranslatableContent>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly productVariant?: Maybe<ProductVariant>;
  /** Returns translated product variant fields for the given language code. */
  readonly translation?: Maybe<ProductVariantTranslation>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product variant.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductVariantTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  readonly productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ProductVariantTranslation = Node & {
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name: Scalars['String']['output'];
};

/**
 * Updates an existing variant for product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantUpdate = {
  readonly errors: ReadonlyArray<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  /** List of conditions that must be met. */
  readonly AND?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  readonly OR?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  /** Filter by attributes associated with the product. */
  readonly attributes?: InputMaybe<ReadonlyArray<AttributeInput>>;
  /** Filter by the date of availability for purchase. */
  readonly availableFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter by product category. */
  readonly category?: InputMaybe<GlobalIdFilterInput>;
  /** Filter by collection. */
  readonly collection?: InputMaybe<GlobalIdFilterInput>;
  /** Filter on whether product is a gift card or not. */
  readonly giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by product with category assigned. */
  readonly hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by product with preordered variants. */
  readonly hasPreorderedVariants?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Filter by availability for purchase. */
  readonly isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by public visibility. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by visibility on the channel. */
  readonly isVisibleInListing?: InputMaybe<Scalars['Boolean']['input']>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  /** Filter by the lowest variant price after discounts. */
  readonly minimalPrice?: InputMaybe<DecimalFilterInput>;
  /** Filter by product name. */
  readonly name?: InputMaybe<StringFilterInput>;
  /** Filter by product variant price. */
  readonly price?: InputMaybe<DecimalFilterInput>;
  /** Filter by product type. */
  readonly productType?: InputMaybe<GlobalIdFilterInput>;
  /** Filter by the publication date. */
  readonly publishedFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter by product slug. */
  readonly slug?: InputMaybe<StringFilterInput>;
  /** Filter by variants having specific stock status. */
  readonly stockAvailability?: InputMaybe<StockAvailability>;
  /** Filter by stock of the product variant. */
  readonly stocks?: InputMaybe<ProductStockFilterInput>;
  /** Filter by when was the most recent update. */
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** Determines if object is visible to customers. */
  readonly isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  readonly publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Query = {
  readonly _entities?: Maybe<ReadonlyArray<Maybe<_Entity>>>;
  readonly _service?: Maybe<_Service>;
  /**
   * Look up an address by ID.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  readonly address?: Maybe<Address>;
  /** Returns address validation rules. */
  readonly addressValidationRules?: Maybe<AddressValidationData>;
  /**
   * Look up an app by ID. If ID is not provided, return the currently authenticated app.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER AUTHENTICATED_APP. The authenticated app has access to its resources. Fetching different apps requires MANAGE_APPS permission.
   */
  readonly app?: Maybe<App>;
  /**
   * Look up an app extension by ID.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly appExtension?: Maybe<AppExtension>;
  /**
   * List of all extensions.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly appExtensions?: Maybe<AppExtensionCountableConnection>;
  /**
   * List of the apps.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.
   */
  readonly apps?: Maybe<AppCountableConnection>;
  /**
   * List of all apps installations
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  readonly appsInstallations: ReadonlyArray<AppInstallation>;
  /** Look up an attribute by ID, slug or external reference. */
  readonly attribute?: Maybe<Attribute>;
  /** List of the shop's attributes. */
  readonly attributes?: Maybe<AttributeCountableConnection>;
  /** List of the shop's categories. */
  readonly categories?: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  readonly category?: Maybe<Category>;
  /** Look up a channel by ID or slug. */
  readonly channel?: Maybe<Channel>;
  /**
   * List of all channels.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  readonly channels?: Maybe<ReadonlyArray<Channel>>;
  /** Look up a checkout by token and slug of channel. */
  readonly checkout?: Maybe<Checkout>;
  /**
   * List of checkout lines.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  readonly checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  /**
   * List of checkouts.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  readonly checkouts?: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly collection?: Maybe<Collection>;
  /** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly collections?: Maybe<CollectionCountableConnection>;
  /**
   * List of the shop's customers.
   *
   * Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.
   */
  readonly customers?: Maybe<UserCountableConnection>;
  /**
   * Look up digital content by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContent?: Maybe<DigitalContent>;
  /**
   * List of digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly digitalContents?: Maybe<DigitalContentCountableConnection>;
  /**
   * List of draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly draftOrders?: Maybe<OrderCountableConnection>;
  /**
   * Look up a export file by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly exportFile?: Maybe<ExportFile>;
  /**
   * List of export files.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly exportFiles?: Maybe<ExportFileCountableConnection>;
  /**
   * Look up a gift card by ID.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCard?: Maybe<GiftCard>;
  /**
   * List of gift card currencies.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardCurrencies: ReadonlyArray<Scalars['String']['output']>;
  /**
   * Gift card related settings from site settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardSettings: GiftCardSettings;
  /**
   * List of gift card tags.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCardTags?: Maybe<GiftCardTagCountableConnection>;
  /**
   * List of gift cards.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  readonly giftCards?: Maybe<GiftCardCountableConnection>;
  /**
   * List of activity events to display on homepage (at the moment it only contains order-events).
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly homepageEvents?: Maybe<OrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  readonly me?: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  readonly menu?: Maybe<Menu>;
  /** Look up a menu item by ID. */
  readonly menuItem?: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  readonly menuItems?: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  readonly menus?: Maybe<MenuCountableConnection>;
  /** Look up an order by ID or external reference. */
  readonly order?: Maybe<Order>;
  /**
   * Look up an order by token.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly orderByToken?: Maybe<Order>;
  /**
   * Order related settings from site settings. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0. Use the `channel` query to fetch the `orderSettings` field instead.
   */
  readonly orderSettings?: Maybe<OrderSettings>;
  /**
   * List of orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly orders?: Maybe<OrderCountableConnection>;
  /**
   * Return the total sales amount from a specific period.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly ordersTotal?: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  readonly page?: Maybe<Page>;
  /** Look up a page type by ID. */
  readonly pageType?: Maybe<PageType>;
  /** List of the page types. */
  readonly pageTypes?: Maybe<PageTypeCountableConnection>;
  /** List of the shop's pages. */
  readonly pages?: Maybe<PageCountableConnection>;
  /**
   * Look up a payment by ID.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly payment?: Maybe<Payment>;
  /**
   * List of payments.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  readonly payments?: Maybe<PaymentCountableConnection>;
  /**
   * Look up permission group by ID.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly permissionGroup?: Maybe<Group>;
  /**
   * List of permission groups.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly permissionGroups?: Maybe<GroupCountableConnection>;
  /**
   * Look up a plugin by ID.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  readonly plugin?: Maybe<Plugin>;
  /**
   * List of plugins.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  readonly plugins?: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly product?: Maybe<Product>;
  /** Look up a product type by ID. */
  readonly productType?: Maybe<ProductType>;
  /** List of the shop's product types. */
  readonly productTypes?: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly productVariant?: Maybe<ProductVariant>;
  /** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly productVariants?: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  readonly products?: Maybe<ProductCountableConnection>;
  /**
   * List of top selling products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly reportProductSales?: Maybe<ProductVariantCountableConnection>;
  /**
   * Look up a sale by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly sale?: Maybe<Sale>;
  /**
   * List of the shop's sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly sales?: Maybe<SaleCountableConnection>;
  /**
   * Look up a shipping zone by ID.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingZone?: Maybe<ShippingZone>;
  /**
   * List of the shop's shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly shippingZones?: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  readonly shop: Shop;
  /**
   * List of the shop's staff users.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  readonly staffUsers?: Maybe<UserCountableConnection>;
  /**
   * Look up a stock by ID
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly stock?: Maybe<Stock>;
  /**
   * List of stocks.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  readonly stocks?: Maybe<StockCountableConnection>;
  /**
   * Look up a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxClass?: Maybe<TaxClass>;
  /**
   * List of tax classes.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxClasses?: Maybe<TaxClassCountableConnection>;
  /**
   * Look up a tax configuration.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxConfiguration?: Maybe<TaxConfiguration>;
  /**
   * List of tax configurations.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxConfigurations?: Maybe<TaxConfigurationCountableConnection>;
  /**
   * Tax class rates grouped by country.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxCountryConfiguration?: Maybe<TaxCountryConfiguration>;
  /**
   *
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxCountryConfigurations?: Maybe<ReadonlyArray<TaxCountryConfiguration>>;
  /** List of all tax rates available from tax gateway. */
  readonly taxTypes?: Maybe<ReadonlyArray<TaxType>>;
  /**
   * Look up a transaction by ID.
   *
   * Added in Saleor 3.6.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  readonly transaction?: Maybe<TransactionItem>;
  /**
   * Lookup a translatable item by ID.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly translation?: Maybe<TranslatableItem>;
  /**
   * Returns a list of all translatable items of a given kind.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  readonly translations?: Maybe<TranslatableItemConnection>;
  /**
   * Look up a user by ID or email address.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS.
   */
  readonly user?: Maybe<User>;
  /**
   * Look up a voucher by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly voucher?: Maybe<Voucher>;
  /**
   * List of the shop's vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly vouchers?: Maybe<VoucherCountableConnection>;
  /**
   * Look up a warehouse by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  readonly warehouse?: Maybe<Warehouse>;
  /**
   * List of warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  readonly warehouses?: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  readonly webhook?: Maybe<Webhook>;
  /**
   * List of all available webhook events.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
   */
  readonly webhookEvents?: Maybe<ReadonlyArray<WebhookEvent>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  readonly webhookSamplePayload?: Maybe<Scalars['JSONString']['output']>;
};


export type Query_EntitiesArgs = {
  representations?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['_Any']['input']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  cityArea?: InputMaybe<Scalars['String']['input']>;
  countryArea?: InputMaybe<Scalars['String']['input']>;
  countryCode: CountryCode;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAppExtensionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAppExtensionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppExtensionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AppSortingInput>;
};


export type QueryAttributeArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckoutArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CheckoutFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CheckoutSortingInput>;
};


export type QueryCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CollectionSortingInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderDraftFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExportFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ExportFileFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ExportFileSortingInput>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGiftCardTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardTagFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<GiftCardSortingInput>;
};


export type QueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuItemFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuItemSortingInput>;
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuSortingInput>;
};


export type QueryOrderArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryOrdersTotalArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<ReportingPeriod>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPageTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageTypeSortingInput>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageSortingInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermissionGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PermissionGroupSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QueryProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductTypeSortingInput>;
};


export type QueryProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductVariantSortingInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  period: ReportingPeriod;
};


export type QuerySaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QuerySalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QueryShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingZoneFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStaffUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StaffUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryStockArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaxClassArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxClassesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxClassFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TaxClassSortingInput>;
};


export type QueryTaxConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxConfigurationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxConfigurationFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaxCountryConfigurationArgs = {
  countryCode: CountryCode;
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTranslationArgs = {
  id: Scalars['ID']['input'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind: TranslatableKinds;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryWarehouseArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWarehousesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  /** Reduced VAT rate in percent. */
  readonly rate: Scalars['Float']['output'];
  /** A type of goods. */
  readonly rateType: Scalars['String']['output'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
export type RefreshToken = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** JWT token, required to authenticate. */
  readonly token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  readonly user?: Maybe<User>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  readonly id: Scalars['ID']['input'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  readonly sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export enum ReportingPeriod {
  ThisMonth = 'THIS_MONTH',
  Today = 'TODAY'
}

/**
 * Request email change of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type RequestEmailChange = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** A user instance. */
  readonly user?: Maybe<User>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node & ObjectWithMetadata & {
  /** List of categories this sale applies to. */
  readonly categories?: Maybe<CategoryCountableConnection>;
  /**
   * List of channels available for the sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly channelListings?: Maybe<ReadonlyArray<SaleChannelListing>>;
  /**
   * List of collections this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly collections?: Maybe<CollectionCountableConnection>;
  readonly created: Scalars['DateTime']['output'];
  /** Currency code for sale. */
  readonly currency?: Maybe<Scalars['String']['output']>;
  /** Sale value. */
  readonly discountValue?: Maybe<Scalars['Float']['output']>;
  readonly endDate?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of products this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly products?: Maybe<ProductCountableConnection>;
  readonly startDate: Scalars['DateTime']['output'];
  /** Returns translated sale fields for the given language code. */
  readonly translation?: Maybe<SaleTranslation>;
  readonly type: SaleType;
  readonly updatedAt: Scalars['DateTime']['output'];
  /**
   * List of product variants this sale applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly variants?: Maybe<ProductVariantCountableConnection>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleAddCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  readonly sale?: Maybe<Sale>;
};

/**
 * Deletes sales.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
};

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
  readonly channel: Channel;
  readonly currency: Scalars['String']['output'];
  readonly discountValue: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
};

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** The value of the discount. */
  readonly discountValue: Scalars['PositiveDecimal']['input'];
};

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  readonly addChannels?: InputMaybe<ReadonlyArray<SaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Manage sale's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleChannelListingUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  /** An updated sale instance. */
  readonly sale?: Maybe<Sale>;
};

export type SaleCountableConnection = {
  readonly edges: ReadonlyArray<SaleCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Sale;
};

/**
 * Creates a new sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  readonly sale?: Maybe<Sale>;
};

/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 */
export type SaleCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The sale the event relates to. */
  readonly sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 */
export type SaleCreatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  readonly sale?: Maybe<Sale>;
};

/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 */
export type SaleDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The sale the event relates to. */
  readonly sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 */
export type SaleDeletedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type SaleFilterInput = {
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly saleType?: InputMaybe<DiscountValueTypeEnum>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly started?: InputMaybe<DateTimeRangeInput>;
  readonly status?: InputMaybe<ReadonlyArray<DiscountStatusEnum>>;
  readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
  /** Categories related to the discount. */
  readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** End date of the voucher in ISO 8601 format. */
  readonly endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Products related to the discount. */
  readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Start date of the voucher in ISO 8601 format. */
  readonly startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fixed or percentage. */
  readonly type?: InputMaybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  readonly value?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  readonly variants?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Removes products, categories, collections from a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleRemoveCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  readonly sale?: Maybe<Sale>;
};

export enum SaleSortField {
  /** Sort sales by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort sales by end date. */
  EndDate = 'END_DATE',
  /** Sort sales by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort sales by name. */
  Name = 'NAME',
  /** Sort sales by start date. */
  StartDate = 'START_DATE',
  /** Sort sales by type. */
  Type = 'TYPE',
  /**
   * Sort sales by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Value = 'VALUE'
}

export type SaleSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort sales. */
  readonly direction: OrderDirection;
  /** Sort sales by the selected field. */
  readonly field: SaleSortField;
};

/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 */
export type SaleToggle = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.5.
   */
  readonly sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 */
export type SaleToggleSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type SaleTranslatableContent = Node & {
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly sale?: Maybe<Sale>;
  /** Returns translated sale fields for the given language code. */
  readonly translation?: Maybe<SaleTranslation>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a sale.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type SaleTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  readonly sale?: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type SaleTranslation = Node & {
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export enum SaleType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/**
 * Updates a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  readonly sale?: Maybe<Sale>;
};

/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 */
export type SaleUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The sale the event relates to. */
  readonly sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 */
export type SaleUpdatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  /** Name of an attribute displayed in the interface. */
  readonly attribute: Attribute;
  /** Values of an attribute. */
  readonly values: ReadonlyArray<AttributeValue>;
};

export type SeoInput = {
  /** SEO description. */
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** SEO title. */
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** CSRF token required to re-generate access token. */
  readonly csrfToken?: Maybe<Scalars['String']['output']>;
  readonly errors: ReadonlyArray<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  readonly refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  readonly token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  readonly user?: Maybe<User>;
};

export type ShippingError = {
  /** List of channels IDs which causes the error. */
  readonly channels?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error code. */
  readonly code: ShippingErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of warehouse IDs which causes the error. */
  readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/**
 * List shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type ShippingListMethodsForCheckout = Event & {
  /** The checkout the event relates to. */
  readonly checkout?: Maybe<Checkout>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  readonly shippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethod = Node & ObjectWithMetadata & {
  /** Describes if this shipping method is active and can be selected. */
  readonly active: Scalars['Boolean']['output'];
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /** Unique ID of ShippingMethod available for Order. */
  readonly id: Scalars['ID']['output'];
  /** Maximum delivery days for this shipping method. */
  readonly maximumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Maximum order price for this shipping method. */
  readonly maximumOrderPrice?: Maybe<Money>;
  /**
   * Maximum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly maximumOrderWeight?: Maybe<Weight>;
  /** Message connected to this shipping method. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Minimum delivery days for this shipping method. */
  readonly minimumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Minimal order price for this shipping method. */
  readonly minimumOrderPrice?: Maybe<Money>;
  /**
   * Minimum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  readonly name: Scalars['String']['output'];
  /** The price of selected shipping method. */
  readonly price: Money;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated shipping method fields for the given language code. */
  readonly translation?: Maybe<ShippingMethodTranslation>;
  /**
   * Type of the shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  readonly type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  readonly channel: Channel;
  readonly id: Scalars['ID']['output'];
  readonly maximumOrderPrice?: Maybe<Money>;
  readonly minimumOrderPrice?: Maybe<Money>;
  readonly price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** Maximum order price to use this shipping method. */
  readonly maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Minimum order price to use this shipping method. */
  readonly minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Shipping price of the shipping method in this channel. */
  readonly price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  readonly addChannels?: InputMaybe<ReadonlyArray<ShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Manage shipping method's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingMethodChannelListingUpdate = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  /** An updated shipping method instance. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
};

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
  /** End address range. */
  readonly end?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  /** Inclusion type of the postal code rule. */
  readonly inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
  /** Start address range. */
  readonly start?: Maybe<Scalars['String']['output']>;
};

export type ShippingMethodTranslatableContent = Node & {
  /**
   * Description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** Returns translated shipping method fields for the given language code. */
  readonly translation?: Maybe<ShippingMethodTranslation>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  /**
   * Translated description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name?: Maybe<Scalars['String']['output']>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodType = Node & ObjectWithMetadata & {
  /**
   * List of channels available for the method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly channelListings?: Maybe<ReadonlyArray<ShippingMethodChannelListing>>;
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * List of excluded products for the shipping method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  readonly excludedProducts?: Maybe<ProductCountableConnection>;
  /** Shipping method ID. */
  readonly id: Scalars['ID']['output'];
  /** Maximum number of days for delivery. */
  readonly maximumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** The price of the cheapest variant (including discounts). */
  readonly maximumOrderPrice?: Maybe<Money>;
  /** Maximum order weight to use this shipping method. */
  readonly maximumOrderWeight?: Maybe<Weight>;
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Minimal number of days for delivery. */
  readonly minimumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** The price of the cheapest variant (including discounts). */
  readonly minimumOrderPrice?: Maybe<Money>;
  /** Minimum order weight to use this shipping method. */
  readonly minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  readonly name: Scalars['String']['output'];
  /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
  readonly postalCodeRules?: Maybe<ReadonlyArray<ShippingMethodPostalCodeRule>>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Tax class assigned to this shipping method.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly taxClass?: Maybe<TaxClass>;
  /** Returns translated shipping method fields for the given language code. */
  readonly translation?: Maybe<ShippingMethodTranslation>;
  /** Type of the shipping method. */
  readonly type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeExcludedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** An enumeration. */
export enum ShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT'
}

/**
 * List of shipping methods available for the country.
 *
 * Added in Saleor 3.6.
 */
export type ShippingMethodsPerCountry = {
  /** The country code. */
  readonly countryCode: CountryCode;
  /** List of available shipping methods. */
  readonly shippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
};

export type ShippingPostalCodeRulesCreateInputRange = {
  /** End range of the postal code. */
  readonly end?: InputMaybe<Scalars['String']['input']>;
  /** Start range of the postal code. */
  readonly start: Scalars['String']['input'];
};

/**
 * Deletes shipping prices.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
};

/**
 * Creates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceCreate = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  readonly shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping method the event relates to. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceDelete = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  /** A shipping method to delete. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  readonly shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping method the event relates to. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeletedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Exclude products from shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceExcludeProducts = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  /** A shipping method with new list of excluded products. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  readonly products: ReadonlyArray<Scalars['ID']['input']>;
};

export type ShippingPriceInput = {
  /** Postal code rules to add. */
  readonly addPostalCodeRules?: InputMaybe<ReadonlyArray<ShippingPostalCodeRulesCreateInputRange>>;
  /** Postal code rules to delete. */
  readonly deletePostalCodeRules?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Shipping method description. */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Inclusion type for currently assigned postal code rules. */
  readonly inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
  /** Maximum number of days for delivery. */
  readonly maximumDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum order weight to use this shipping method. */
  readonly maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Minimal number of days for delivery. */
  readonly minimumDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum order weight to use this shipping method. */
  readonly minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Name of the shipping method. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone this method belongs to. */
  readonly shippingZone?: InputMaybe<Scalars['ID']['input']>;
  /** ID of a tax class to assign to this shipping method. If not provided, the default tax class will be used. */
  readonly taxClass?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping type: price or weight based. */
  readonly type?: InputMaybe<ShippingMethodTypeEnum>;
};

/**
 * Remove product from excluded list for shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceRemoveProductFromExclude = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  /** A shipping method with new list of excluded products. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
};

/**
 * Creates/updates translations for a shipping method.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShippingPriceTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ShippingPriceTranslationInput = {
  /**
   * Translated shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceUpdate = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  readonly shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping method the event relates to. */
  readonly shippingMethod?: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & ObjectWithMetadata & {
  /** List of channels for shipping zone. */
  readonly channels: ReadonlyArray<Channel>;
  /** List of countries available for the method. */
  readonly countries: ReadonlyArray<CountryDisplay>;
  readonly default: Scalars['Boolean']['output'];
  /** Description of a shipping zone. */
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** Lowest and highest prices for the shipping. */
  readonly priceRange?: Maybe<MoneyRange>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  readonly shippingMethods?: Maybe<ReadonlyArray<ShippingMethodType>>;
  /** List of warehouses for shipping zone. */
  readonly warehouses: ReadonlyArray<Warehouse>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Deletes shipping zones.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  readonly edges: ReadonlyArray<ShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShippingZoneCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: ShippingZone;
};

/**
 * Creates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneCreate = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** List of channels to assign to the shipping zone. */
  readonly addChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of warehouses to assign to a shipping zone */
  readonly addWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  readonly countries?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  readonly default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of the shipping zone. */
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneDelete = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  readonly shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingZoneFilterInput = {
  readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ShippingZoneMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ShippingZoneMetadataUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneUpdate = {
  readonly errors: ReadonlyArray<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shippingErrors: ReadonlyArray<ShippingError>;
  readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** List of channels to assign to the shipping zone. */
  readonly addChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of warehouses to assign to a shipping zone */
  readonly addWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  readonly countries?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  readonly default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of the shipping zone. */
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** List of channels to unassign from the shipping zone. */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** List of warehouses to unassign from a shipping zone */
  readonly removeWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  readonly shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  /**
   * Enable automatic fulfillment for all digital products.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']['output']>;
  /** List of available external authentications. */
  readonly availableExternalAuthentications: ReadonlyArray<ExternalAuthentication>;
  /** List of available payment gateways. */
  readonly availablePaymentGateways: ReadonlyArray<PaymentGateway>;
  /** Shipping methods that are available for the shop. */
  readonly availableShippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
  /**
   * List of all currencies supported by shop's channels.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly channelCurrencies: ReadonlyArray<Scalars['String']['output']>;
  /**
   * Charge taxes on shipping.
   * @deprecated This field will be removed in Saleor 4.0. Use `ShippingMethodType.taxClass` to determine whether taxes are calculated for shipping methods; if a tax class is set, the taxes will be calculated, otherwise no tax rate will be applied.
   */
  readonly chargeTaxesOnShipping: Scalars['Boolean']['output'];
  /** Company address. */
  readonly companyAddress?: Maybe<Address>;
  /** List of countries available in the shop. */
  readonly countries: ReadonlyArray<CountryDisplay>;
  /** URL of a view where customers can set their password. */
  readonly customerSetPasswordUrl?: Maybe<Scalars['String']['output']>;
  /** Shop's default country. */
  readonly defaultCountry?: Maybe<CountryDisplay>;
  /**
   * Default number of max downloads per digital content URL.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly defaultDigitalMaxDownloads?: Maybe<Scalars['Int']['output']>;
  /**
   * Default number of days which digital content URL will be valid.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly defaultDigitalUrlValidDays?: Maybe<Scalars['Int']['output']>;
  /**
   * Default shop's email sender's address.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly defaultMailSenderAddress?: Maybe<Scalars['String']['output']>;
  /**
   * Default shop's email sender's name.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly defaultMailSenderName?: Maybe<Scalars['String']['output']>;
  /** Default weight unit. */
  readonly defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Shop's description. */
  readonly description?: Maybe<Scalars['String']['output']>;
  /**
   * Display prices with tax in store.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to determine whether to display gross or net prices.
   */
  readonly displayGrossPrices: Scalars['Boolean']['output'];
  /** Shop's domain data. */
  readonly domain: Domain;
  /**
   * Determines if account confirmation by email is enabled.
   *
   * Added in Saleor 3.14.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly enableAccountConfirmationByEmail?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Allow to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  readonly fulfillmentAllowUnpaid: Scalars['Boolean']['output'];
  /**
   * Automatically approve all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  readonly fulfillmentAutoApprove: Scalars['Boolean']['output'];
  /** Header text. */
  readonly headerText?: Maybe<Scalars['String']['output']>;
  /**
   * Include taxes in prices.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration.pricesEnteredWithTax` to determine whether prices are entered with tax.
   */
  readonly includeTaxesInPrices: Scalars['Boolean']['output'];
  /** List of the shops's supported languages. */
  readonly languages: ReadonlyArray<LanguageDisplay>;
  /**
   * Default number of maximum line quantity in single checkout (per single checkout line).
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly limitQuantityPerCheckout?: Maybe<Scalars['Int']['output']>;
  /**
   * Resource limitations and current usage if any set for a shop
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  readonly limits: LimitInfo;
  /** Shop's name. */
  readonly name: Scalars['String']['output'];
  /** List of available permissions. */
  readonly permissions: ReadonlyArray<Permission>;
  /** List of possible phone prefixes. */
  readonly phonePrefixes: ReadonlyArray<Scalars['String']['output']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']['output']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']['output']>;
  /**
   * Minor Saleor API version.
   *
   * Added in Saleor 3.5.
   */
  readonly schemaVersion: Scalars['String']['output'];
  /**
   * List of staff notification recipients.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  readonly staffNotificationRecipients?: Maybe<ReadonlyArray<StaffNotificationRecipient>>;
  /** Enable inventory tracking. */
  readonly trackInventoryByDefault?: Maybe<Scalars['Boolean']['output']>;
  /** Returns translated shop fields for the given language code. */
  readonly translation?: Maybe<ShopTranslation>;
  /**
   * Saleor API version.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  readonly version: Scalars['String']['output'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  address?: InputMaybe<AddressInput>;
  channel: Scalars['String']['input'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopAddressUpdate = {
  readonly errors: ReadonlyArray<ShopError>;
  /** Updated shop. */
  readonly shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
};

/**
 * Updates site domain of the shop.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopDomainUpdate = {
  readonly errors: ReadonlyArray<ShopError>;
  /** Updated shop. */
  readonly shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
};

export type ShopError = {
  /** The error code. */
  readonly code: ShopErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/**
 * Fetch tax rates.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopFetchTaxRates = {
  readonly errors: ReadonlyArray<ShopError>;
  /** Updated shop. */
  readonly shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
};

export type ShopSettingsInput = {
  /** Enable automatic fulfillment for all digital products. */
  readonly automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Charge taxes on shipping.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. To enable taxes for a shipping method, assign a tax class to the shipping method with `shippingPriceCreate` or `shippingPriceUpdate` mutations.
   */
  readonly chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL of a view where customers can set their password. */
  readonly customerSetPasswordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Default number of max downloads per digital content URL. */
  readonly defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Default number of days which digital content URL will be valid. */
  readonly defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Default email sender's address. */
  readonly defaultMailSenderAddress?: InputMaybe<Scalars['String']['input']>;
  /** Default email sender's name. */
  readonly defaultMailSenderName?: InputMaybe<Scalars['String']['input']>;
  /** Default weight unit. */
  readonly defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  /** SEO description. */
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Display prices with tax in store.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  readonly displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable automatic account confirmation by email.
   *
   * Added in Saleor 3.14.
   */
  readonly enableAccountConfirmationByEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable ability to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  readonly fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable automatic approval of all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  readonly fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  /** Header text. */
  readonly headerText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Include taxes in prices.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  readonly includeTaxesInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.
   *
   * Added in Saleor 3.1.
   */
  readonly limitQuantityPerCheckout?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  readonly reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  readonly reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']['input']>;
  /** Enable inventory tracking. */
  readonly trackInventoryByDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Creates/updates translations for shop settings.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShopSettingsTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  /** Updated shop settings. */
  readonly shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly headerText?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates shop settings.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopSettingsUpdate = {
  readonly errors: ReadonlyArray<ShopError>;
  /** Updated shop. */
  readonly shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
};

export type ShopTranslation = Node & {
  readonly description: Scalars['String']['output'];
  readonly headerText: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  readonly domain?: InputMaybe<Scalars['String']['input']>;
  /** Shop site name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes staff users. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly staffErrors: ReadonlyArray<StaffError>;
};

/**
 * Creates a new staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffCreate = {
  readonly errors: ReadonlyArray<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly staffErrors: ReadonlyArray<StaffError>;
  readonly user?: Maybe<User>;
};

/** Fields required to create a staff user. */
export type StaffCreateInput = {
  /** List of permission group IDs to which user should be assigned. */
  readonly addGroups?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** The unique email address of the user. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** A note about the user. */
  readonly note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  readonly redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new staff user is created.
 *
 * Added in Saleor 3.5.
 */
export type StaffCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The user the event relates to. */
  readonly user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffDelete = {
  readonly errors: ReadonlyArray<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly staffErrors: ReadonlyArray<StaffError>;
  readonly user?: Maybe<User>;
};

/**
 * Event sent when staff user is deleted.
 *
 * Added in Saleor 3.5.
 */
export type StaffDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The user the event relates to. */
  readonly user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type StaffError = {
  /** A type of address that causes the error. */
  readonly addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  readonly code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** List of permission group IDs which cause the error. */
  readonly groups?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  readonly permissions?: Maybe<ReadonlyArray<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  readonly users?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** Represents status of a staff account. */
export enum StaffMemberStatus {
  /** User account has been activated. */
  Active = 'ACTIVE',
  /** User account has not been activated yet. */
  Deactivated = 'DEACTIVATED'
}

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  /** Determines if a notification active. */
  readonly active?: Maybe<Scalars['Boolean']['output']>;
  /** Returns email address of a user subscribed to email notifications. */
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Returns a user subscribed to email notifications. */
  readonly user?: Maybe<User>;
};

/**
 * Creates a new staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientCreate = {
  readonly errors: ReadonlyArray<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
  readonly staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Delete staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientDelete = {
  readonly errors: ReadonlyArray<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
  readonly staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  /** Determines if a notification active. */
  readonly active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email address of a user subscribed to email notifications. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user subscribed to email notifications.. */
  readonly user?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Updates a staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientUpdate = {
  readonly errors: ReadonlyArray<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly shopErrors: ReadonlyArray<ShopError>;
  readonly staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Updates an existing staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffUpdate = {
  readonly errors: ReadonlyArray<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly staffErrors: ReadonlyArray<StaffError>;
  readonly user?: Maybe<User>;
};

/** Fields required to update a staff user. */
export type StaffUpdateInput = {
  /** List of permission group IDs to which user should be assigned. */
  readonly addGroups?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** The unique email address of the user. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** A note about the user. */
  readonly note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** List of permission group IDs from which user should be unassigned. */
  readonly removeGroups?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Event sent when staff user is updated.
 *
 * Added in Saleor 3.5.
 */
export type StaffUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The user the event relates to. */
  readonly user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type StaffUserInput = {
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<StaffMemberStatus>;
};

/** Represents stock. */
export type Stock = Node & {
  readonly id: Scalars['ID']['output'];
  readonly productVariant: ProductVariant;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly quantity: Scalars['Int']['output'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly quantityAllocated: Scalars['Int']['output'];
  /**
   * Quantity reserved for checkouts.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  readonly quantityReserved: Scalars['Int']['output'];
  readonly warehouse: Warehouse;
};

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export type StockBulkResult = {
  /** List of errors occurred on create or update attempt. */
  readonly errors?: Maybe<ReadonlyArray<StockBulkUpdateError>>;
  /** Stock data. */
  readonly stock?: Maybe<Stock>;
};

/**
 * Updates stocks for a given variant and warehouse.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type StockBulkUpdate = {
  /** Returns how many objects were updated. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<StockBulkUpdateError>;
  /** List of the updated stocks. */
  readonly results: ReadonlyArray<StockBulkResult>;
};

export type StockBulkUpdateError = {
  /** The error code. */
  readonly code: StockBulkUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum StockBulkUpdateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type StockBulkUpdateInput = {
  /** Quantity of items available for sell. */
  readonly quantity: Scalars['Int']['input'];
  /** Variant external reference. */
  readonly variantExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** Variant ID. */
  readonly variantId?: InputMaybe<Scalars['ID']['input']>;
  /** Warehouse external reference. */
  readonly warehouseExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse ID. */
  readonly warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type StockCountableConnection = {
  readonly edges: ReadonlyArray<StockCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StockCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Stock;
};

export type StockError = {
  /** The error code. */
  readonly code: StockErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type StockFilterInput = {
  readonly quantity?: InputMaybe<Scalars['Float']['input']>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
};

export type StockInput = {
  /** Quantity of items available for sell. */
  readonly quantity: Scalars['Int']['input'];
  /** Warehouse in which stock is located. */
  readonly warehouse: Scalars['ID']['input'];
};

/**
 * Represents the channel stock settings.
 *
 * Added in Saleor 3.7.
 */
export type StockSettings = {
  /** Allocation strategy defines the preference of warehouses for allocations and reservations. */
  readonly allocationStrategy: AllocationStrategyEnum;
};

export type StockSettingsInput = {
  /** Allocation strategy options. Strategy defines the preference of warehouses for allocations and reservations. */
  readonly allocationStrategy: AllocationStrategyEnum;
};

export type StockUpdateInput = {
  /** Quantity of items available for sell. */
  readonly quantity: Scalars['Int']['input'];
  /** Stock. */
  readonly stock: Scalars['ID']['input'];
};

/**
 * Determine how stocks should be updated, while processing an order.
 *
 *     SKIP - stocks are not checked and not updated.
 *     UPDATE - only do update, if there is enough stock.
 *     FORCE - force update, if there is not enough stock.
 *
 */
export enum StockUpdatePolicyEnum {
  Force = 'FORCE',
  Skip = 'SKIP',
  Update = 'UPDATE'
}

/** Enum representing the type of a payment storage in a gateway. */
export enum StorePaymentMethodEnum {
  /** Storage is disabled. The payment is not stored. */
  None = 'NONE',
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  OffSession = 'OFF_SESSION',
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  OnSession = 'ON_SESSION'
}

/**
 * Define the filtering options for string fields.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type StringFilterInput = {
  /** The value equal to. */
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  /** The value included in. */
  readonly oneOf?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type Subscription = {
  /**
   * Look up subscription event.
   *
   * Added in Saleor 3.2.
   */
  readonly event?: Maybe<Event>;
};

export enum TaxCalculationStrategy {
  FlatRates = 'FLAT_RATES',
  TaxApp = 'TAX_APP'
}

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClass = Node & ObjectWithMetadata & {
  /** Country-specific tax rates for this tax class. */
  readonly countries: ReadonlyArray<TaxClassCountryRate>;
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the tax class. */
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type TaxClassCountableConnection = {
  readonly edges: ReadonlyArray<TaxClassCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TaxClassCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: TaxClass;
};

/**
 * Tax rate for a country. When tax class is null, it represents the default tax rate for that country; otherwise it's a country tax rate specific to the given tax class.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassCountryRate = {
  /** Country in which this tax rate applies. */
  readonly country: CountryDisplay;
  /** Tax rate value. */
  readonly rate: Scalars['Float']['output'];
  /** Related tax class. */
  readonly taxClass?: Maybe<TaxClass>;
};

/**
 * Create a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassCreate = {
  readonly errors: ReadonlyArray<TaxClassCreateError>;
  readonly taxClass?: Maybe<TaxClass>;
};

export type TaxClassCreateError = {
  /** The error code. */
  readonly code: TaxClassCreateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  readonly countryCodes: ReadonlyArray<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxClassCreateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

export type TaxClassCreateInput = {
  /** List of country-specific tax rates to create for this tax class. */
  readonly createCountryRates?: InputMaybe<ReadonlyArray<CountryRateInput>>;
  /** Name of the tax class. */
  readonly name: Scalars['String']['input'];
};

/**
 * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassDelete = {
  readonly errors: ReadonlyArray<TaxClassDeleteError>;
  readonly taxClass?: Maybe<TaxClass>;
};

export type TaxClassDeleteError = {
  /** The error code. */
  readonly code: TaxClassDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxClassDeleteErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

export type TaxClassFilterInput = {
  readonly countries?: InputMaybe<ReadonlyArray<CountryCode>>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
};

export type TaxClassRateInput = {
  /** Tax rate value. */
  readonly rate?: InputMaybe<Scalars['Float']['input']>;
  /** ID of a tax class for which to update the tax rate */
  readonly taxClassId?: InputMaybe<Scalars['ID']['input']>;
};

export enum TaxClassSortField {
  /** Sort tax classes by name. */
  Name = 'NAME'
}

export type TaxClassSortingInput = {
  /** Specifies the direction in which to sort tax classes. */
  readonly direction: OrderDirection;
  /** Sort tax classes by the selected field. */
  readonly field: TaxClassSortField;
};

/**
 * Update a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassUpdate = {
  readonly errors: ReadonlyArray<TaxClassUpdateError>;
  readonly taxClass?: Maybe<TaxClass>;
};

export type TaxClassUpdateError = {
  /** The error code. */
  readonly code: TaxClassUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  readonly countryCodes: ReadonlyArray<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxClassUpdateErrorCode {
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

export type TaxClassUpdateInput = {
  /** Name of the tax class. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** List of country codes for which to remove the tax class rates. Note: It removes all rates for given country code. */
  readonly removeCountryRates?: InputMaybe<ReadonlyArray<CountryCode>>;
  /** List of country-specific tax rates to create or update for this tax class. */
  readonly updateCountryRates?: InputMaybe<ReadonlyArray<CountryRateUpdateInput>>;
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfiguration = Node & ObjectWithMetadata & {
  /** A channel to which the tax configuration applies to. */
  readonly channel: Channel;
  /** Determines whether taxes are charged in the given channel. */
  readonly chargeTaxes: Scalars['Boolean']['output'];
  /** List of country-specific exceptions in tax configuration. */
  readonly countries: ReadonlyArray<TaxConfigurationPerCountry>;
  /** Determines whether prices displayed in a storefront should include taxes. */
  readonly displayGrossPrices: Scalars['Boolean']['output'];
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Determines whether prices are entered with the tax included. */
  readonly pricesEnteredWithTax: Scalars['Boolean']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  readonly taxCalculationStrategy?: Maybe<TaxCalculationStrategy>;
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

export type TaxConfigurationCountableConnection = {
  readonly edges: ReadonlyArray<TaxConfigurationCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TaxConfigurationCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: TaxConfiguration;
};

export type TaxConfigurationFilterInput = {
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
};

/**
 * Country-specific exceptions of a channel's tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPerCountry = {
  /** Determines whether taxes are charged in this country. */
  readonly chargeTaxes: Scalars['Boolean']['output'];
  /** Country in which this configuration applies. */
  readonly country: CountryDisplay;
  /** Determines whether prices displayed in a storefront should include taxes for this country. */
  readonly displayGrossPrices: Scalars['Boolean']['output'];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  readonly taxCalculationStrategy?: Maybe<TaxCalculationStrategy>;
};

export type TaxConfigurationPerCountryInput = {
  /** Determines whether taxes are charged in this country. */
  readonly chargeTaxes: Scalars['Boolean']['input'];
  /** Country in which this configuration applies. */
  readonly countryCode: CountryCode;
  /** Determines whether prices displayed in a storefront should include taxes for this country. */
  readonly displayGrossPrices: Scalars['Boolean']['input'];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  readonly taxCalculationStrategy?: InputMaybe<TaxCalculationStrategy>;
};

/**
 * Update tax configuration for a channel.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxConfigurationUpdate = {
  readonly errors: ReadonlyArray<TaxConfigurationUpdateError>;
  readonly taxConfiguration?: Maybe<TaxConfiguration>;
};

export type TaxConfigurationUpdateError = {
  /** The error code. */
  readonly code: TaxConfigurationUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  readonly countryCodes: ReadonlyArray<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxConfigurationUpdateErrorCode {
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

export type TaxConfigurationUpdateInput = {
  /** Determines whether taxes are charged in the given channel. */
  readonly chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines whether prices displayed in a storefront should include taxes. */
  readonly displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines whether prices are entered with the tax included. */
  readonly pricesEnteredWithTax?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of country codes for which to remove the tax configuration. */
  readonly removeCountriesConfiguration?: InputMaybe<ReadonlyArray<CountryCode>>;
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  readonly taxCalculationStrategy?: InputMaybe<TaxCalculationStrategy>;
  /** List of tax country configurations to create or update (identified by a country code). */
  readonly updateCountriesConfiguration?: InputMaybe<ReadonlyArray<TaxConfigurationPerCountryInput>>;
};

/**
 * Tax class rates grouped by country.
 *
 * Added in Saleor 3.9.
 */
export type TaxCountryConfiguration = {
  /** A country for which tax class rates are grouped. */
  readonly country: CountryDisplay;
  /** List of tax class rates. */
  readonly taxClassCountryRates: ReadonlyArray<TaxClassCountryRate>;
};

/**
 * Remove all tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxCountryConfigurationDelete = {
  readonly errors: ReadonlyArray<TaxCountryConfigurationDeleteError>;
  /** Updated tax class rates grouped by a country. */
  readonly taxCountryConfiguration?: Maybe<TaxCountryConfiguration>;
};

export type TaxCountryConfigurationDeleteError = {
  /** The error code. */
  readonly code: TaxCountryConfigurationDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxCountryConfigurationDeleteErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

/**
 * Update tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxCountryConfigurationUpdate = {
  readonly errors: ReadonlyArray<TaxCountryConfigurationUpdateError>;
  /** Updated tax class rates grouped by a country. */
  readonly taxCountryConfiguration?: Maybe<TaxCountryConfiguration>;
};

export type TaxCountryConfigurationUpdateError = {
  /** The error code. */
  readonly code: TaxCountryConfigurationUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of tax class IDs for which the update failed. */
  readonly taxClassIds: ReadonlyArray<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxCountryConfigurationUpdateErrorCode {
  CannotCreateNegativeRate = 'CANNOT_CREATE_NEGATIVE_RATE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  OnlyOneDefaultCountryRateAllowed = 'ONLY_ONE_DEFAULT_COUNTRY_RATE_ALLOWED'
}

/**
 * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
 *
 * Added in Saleor 3.8.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxExemptionManage = {
  readonly errors: ReadonlyArray<TaxExemptionManageError>;
  readonly taxableObject?: Maybe<TaxSourceObject>;
};

export type TaxExemptionManageError = {
  /** The error code. */
  readonly code: TaxExemptionManageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TaxExemptionManageErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotEditableOrder = 'NOT_EDITABLE_ORDER',
  NotFound = 'NOT_FOUND'
}

export type TaxSourceLine = CheckoutLine | OrderLine;

export type TaxSourceObject = Checkout | Order;

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  /** Description of the tax type. */
  readonly description?: Maybe<Scalars['String']['output']>;
  /** External tax code used to identify given tax group. */
  readonly taxCode?: Maybe<Scalars['String']['output']>;
};

/** Taxable object. */
export type TaxableObject = {
  /** The address data. */
  readonly address?: Maybe<Address>;
  readonly channel: Channel;
  /** The currency of the object. */
  readonly currency: Scalars['String']['output'];
  /** List of discounts. */
  readonly discounts: ReadonlyArray<TaxableObjectDiscount>;
  /** List of lines assigned to the object. */
  readonly lines: ReadonlyArray<TaxableObjectLine>;
  /** Determines if prices contain entered tax.. */
  readonly pricesEnteredWithTax: Scalars['Boolean']['output'];
  /** The price of shipping method. */
  readonly shippingPrice: Money;
  /** The source object related to this tax object. */
  readonly sourceObject: TaxSourceObject;
};

/** Taxable object discount. */
export type TaxableObjectDiscount = {
  /** The amount of the discount. */
  readonly amount: Money;
  /** The name of the discount. */
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type TaxableObjectLine = {
  /** Determines if taxes are being charged for the product. */
  readonly chargeTaxes: Scalars['Boolean']['output'];
  /** The product name. */
  readonly productName: Scalars['String']['output'];
  /** The product sku. */
  readonly productSku?: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  readonly quantity: Scalars['Int']['output'];
  /** The source line related to this tax line. */
  readonly sourceLine: TaxSourceLine;
  /** Price of the order line. */
  readonly totalPrice: Money;
  /** Price of the single item in the order line. */
  readonly unitPrice: Money;
  /** The variant name. */
  readonly variantName: Scalars['String']['output'];
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  /** Currency code. */
  readonly currency: Scalars['String']['output'];
  /** Amount of money including taxes. */
  readonly gross: Money;
  /** Amount of money without taxes. */
  readonly net: Money;
  /** Amount of taxes. */
  readonly tax: Money;
};

export type TaxedMoneyInput = {
  /** Gross value of an item. */
  readonly gross: Scalars['PositiveDecimal']['input'];
  /** Net value of an item. */
  readonly net: Scalars['PositiveDecimal']['input'];
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  /** Lower bound of a price range. */
  readonly start?: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  readonly stop?: Maybe<TaxedMoney>;
};

/**
 * Event sent when thumbnail is created.
 *
 * Added in Saleor 3.12.
 */
export type ThumbnailCreated = Event & {
  /**
   * Thumbnail id.
   *
   * Added in Saleor 3.12.
   */
  readonly id?: Maybe<Scalars['ID']['output']>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Original media url.
   *
   * Added in Saleor 3.12.
   */
  readonly mediaUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Object the thumbnail refers to.
   *
   * Added in Saleor 3.12.
   */
  readonly objectId?: Maybe<Scalars['ID']['output']>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /**
   * Thumbnail url.
   *
   * Added in Saleor 3.12.
   */
  readonly url?: Maybe<Scalars['String']['output']>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum ThumbnailFormatEnum {
  Avif = 'AVIF',
  Original = 'ORIGINAL',
  Webp = 'WEBP'
}

export type TimePeriod = {
  /** The length of the period. */
  readonly amount: Scalars['Int']['output'];
  /** The type of the period. */
  readonly type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
  /** The length of the period. */
  readonly amount: Scalars['Int']['input'];
  /** The type of the period. */
  readonly type: TimePeriodTypeEnum;
};

/** An enumeration. */
export enum TimePeriodTypeEnum {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

/** An object representing a single payment. */
export type Transaction = Node & {
  /** Total amount of the transaction. */
  readonly amount?: Maybe<Money>;
  readonly created: Scalars['DateTime']['output'];
  readonly error?: Maybe<Scalars['String']['output']>;
  readonly gatewayResponse: Scalars['JSONString']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isSuccess: Scalars['Boolean']['output'];
  readonly kind: TransactionKind;
  readonly payment: Payment;
  readonly token: Scalars['String']['output'];
};

export type TransactionAction = {
  /** Determines the action type. */
  readonly actionType: TransactionActionEnum;
  /** Transaction request amount. Null when action type is VOID. */
  readonly amount?: Maybe<Scalars['PositiveDecimal']['output']>;
};

/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     VOID - Represents a void action. This field will be removed
 *     in Saleor 3.14 (Preview Feature). Use `CANCEL` instead.
 *     CANCEL - Represents a cancel action. Added in Saleor 3.12.
 *
 */
export enum TransactionActionEnum {
  Cancel = 'CANCEL',
  Charge = 'CHARGE',
  Refund = 'REFUND',
  Void = 'VOID'
}

/**
 * Event sent when transaction action is requested.
 *
 * Added in Saleor 3.4.
 *
 * DEPRECATED: this subscription will be removed in Saleor 3.14 (Preview Feature). Use `TransactionChargeRequested`, `TransactionRefundRequested`, `TransactionCancelationRequested` instead.
 */
export type TransactionActionRequest = Event & {
  /** Requested action data. */
  readonly action: TransactionAction;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Look up a transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when transaction cancelation is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionCancelationRequested = Event & {
  /** Requested action data. */
  readonly action: TransactionAction;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Look up a transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when transaction charge is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionChargeRequested = Event & {
  /** Requested action data. */
  readonly action: TransactionAction;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Look up a transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Create transaction for checkout or order.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionCreate = {
  readonly errors: ReadonlyArray<TransactionCreateError>;
  readonly transaction?: Maybe<TransactionItem>;
};

export type TransactionCreateError = {
  /** The error code. */
  readonly code: TransactionCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionCreateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  IncorrectCurrency = 'INCORRECT_CURRENCY',
  Invalid = 'INVALID',
  MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
  NotFound = 'NOT_FOUND',
  Unique = 'UNIQUE'
}

export type TransactionCreateInput = {
  /** Amount authorized by this transaction. */
  readonly amountAuthorized?: InputMaybe<MoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly amountCanceled?: InputMaybe<MoneyInput>;
  /** Amount charged by this transaction. */
  readonly amountCharged?: InputMaybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  readonly amountRefunded?: InputMaybe<MoneyInput>;
  /**
   * Amount voided by this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `amountCanceled` instead.
   */
  readonly amountVoided?: InputMaybe<MoneyInput>;
  /** List of all possible actions for the transaction */
  readonly availableActions?: InputMaybe<ReadonlyArray<TransactionActionEnum>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  readonly externalUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly message?: InputMaybe<Scalars['String']['input']>;
  /** Payment public metadata. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Payment private metadata. */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly pspReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reference of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `pspReference` instead.
   */
  readonly reference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Status of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). The `status` is not needed. The amounts can be used to define the current status of transactions.
   */
  readonly status?: InputMaybe<Scalars['String']['input']>;
  /**
   * Payment type used for this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `name` and `message` instead.
   */
  readonly type?: InputMaybe<Scalars['String']['input']>;
};

/** Represents transaction's event. */
export type TransactionEvent = Node & {
  /**
   * The amount related to this event.
   *
   * Added in Saleor 3.13.
   */
  readonly amount: Money;
  readonly createdAt: Scalars['DateTime']['output'];
  /**
   * User or App that created the transaction event.
   *
   * Added in Saleor 3.13.
   */
  readonly createdBy?: Maybe<UserOrApp>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  readonly externalUrl: Scalars['String']['output'];
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  /**
   * Message related to the transaction's event.
   *
   * Added in Saleor 3.13.
   */
  readonly message: Scalars['String']['output'];
  /**
   * Name of the transaction's event.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature). Use `message` instead.
   */
  readonly name?: Maybe<Scalars['String']['output']>;
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly pspReference: Scalars['String']['output'];
  /**
   * Reference of transaction's event.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature).Use `pspReference` instead.
   */
  readonly reference: Scalars['String']['output'];
  /**
   * Status of transaction's event.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature). Use `type` instead.
   */
  readonly status?: Maybe<TransactionStatus>;
  /**
   * The type of action related to this event.
   *
   * Added in Saleor 3.13.
   */
  readonly type?: Maybe<TransactionEventTypeEnum>;
};

export type TransactionEventInput = {
  /**
   * The message related to the event.
   *
   * Added in Saleor 3.13.
   */
  readonly message?: InputMaybe<Scalars['String']['input']>;
  /**
   * Name of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `message` instead. `name` field will be added to `message`.
   */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * PSP Reference related to this action.
   *
   * Added in Saleor 3.13.
   */
  readonly pspReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reference of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `pspReference` instead.
   */
  readonly reference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Current status of the payment transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Status will be calculated by Saleor.
   */
  readonly status?: InputMaybe<TransactionStatus>;
};

/**
 * Report the event for the transaction.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
 */
export type TransactionEventReport = {
  /** Defines if the reported event hasn't been processed earlier. */
  readonly alreadyProcessed?: Maybe<Scalars['Boolean']['output']>;
  readonly errors: ReadonlyArray<TransactionEventReportError>;
  /** The transaction related to the reported event. */
  readonly transaction?: Maybe<TransactionItem>;
  /** The event assigned to this report. if `alreadyProcessed` is set to `true`, the previously processed event will be returned. */
  readonly transactionEvent?: Maybe<TransactionEvent>;
};

export type TransactionEventReportError = {
  /** The error code. */
  readonly code: TransactionEventReportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionEventReportErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  IncorrectDetails = 'INCORRECT_DETAILS',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

/**
 * Represents possible event types.
 *
 *     Added in Saleor 3.12.
 *
 *     The following types are possible:
 *     AUTHORIZATION_SUCCESS - represents success authorization.
 *     AUTHORIZATION_FAILURE - represents failure authorization.
 *     AUTHORIZATION_ADJUSTMENT - represents authorization adjustment.
 *     AUTHORIZATION_REQUEST - represents authorization request.
 *     AUTHORIZATION_ACTION_REQUIRED - represents authorization that needs
 *     additional actions from the customer.
 *     CHARGE_ACTION_REQUIRED - represents charge that needs
 *     additional actions from the customer.
 *     CHARGE_SUCCESS - represents success charge.
 *     CHARGE_FAILURE - represents failure charge.
 *     CHARGE_BACK - represents chargeback.
 *     CHARGE_REQUEST - represents charge request.
 *     REFUND_SUCCESS - represents success refund.
 *     REFUND_FAILURE - represents failure refund.
 *     REFUND_REVERSE - represents reverse refund.
 *     REFUND_REQUEST - represents refund request.
 *     CANCEL_SUCCESS - represents success cancel.
 *     CANCEL_FAILURE - represents failure cancel.
 *     CANCEL_REQUEST - represents cancel request.
 *     INFO - represents info event.
 *
 */
export enum TransactionEventTypeEnum {
  AuthorizationActionRequired = 'AUTHORIZATION_ACTION_REQUIRED',
  AuthorizationAdjustment = 'AUTHORIZATION_ADJUSTMENT',
  AuthorizationFailure = 'AUTHORIZATION_FAILURE',
  AuthorizationRequest = 'AUTHORIZATION_REQUEST',
  AuthorizationSuccess = 'AUTHORIZATION_SUCCESS',
  CancelFailure = 'CANCEL_FAILURE',
  CancelRequest = 'CANCEL_REQUEST',
  CancelSuccess = 'CANCEL_SUCCESS',
  ChargeActionRequired = 'CHARGE_ACTION_REQUIRED',
  ChargeBack = 'CHARGE_BACK',
  ChargeFailure = 'CHARGE_FAILURE',
  ChargeRequest = 'CHARGE_REQUEST',
  ChargeSuccess = 'CHARGE_SUCCESS',
  Info = 'INFO',
  RefundFailure = 'REFUND_FAILURE',
  RefundRequest = 'REFUND_REQUEST',
  RefundReverse = 'REFUND_REVERSE',
  RefundSuccess = 'REFUND_SUCCESS'
}

/**
 * Determine the transaction flow strategy.
 *
 *     AUTHORIZATION - the processed transaction should be only authorized
 *     CHARGE - the processed transaction should be charged.
 *
 */
export enum TransactionFlowStrategyEnum {
  Authorization = 'AUTHORIZATION',
  Charge = 'CHARGE'
}

/**
 * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionInitialize = {
  /** The JSON data required to finalize the payment. */
  readonly data?: Maybe<Scalars['JSON']['output']>;
  readonly errors: ReadonlyArray<TransactionInitializeError>;
  /** The initialized transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** The event created for the initialized transaction. */
  readonly transactionEvent?: Maybe<TransactionEvent>;
};

export type TransactionInitializeError = {
  /** The error code. */
  readonly code: TransactionInitializeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionInitializeErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

/**
 * Event sent when user starts processing the payment.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionInitializeSession = Event & {
  /** Action to proceed for the transaction */
  readonly action: TransactionProcessAction;
  /** Payment gateway data in JSON format, recieved from storefront. */
  readonly data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Merchant reference assigned to this payment. */
  readonly merchantReference: Scalars['String']['output'];
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Checkout or order */
  readonly sourceObject: OrderOrCheckout;
  /** Look up a transaction. */
  readonly transaction: TransactionItem;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItem = Node & ObjectWithMetadata & {
  /** List of actions that can be performed in the current state of a payment. */
  readonly actions: ReadonlyArray<TransactionActionEnum>;
  /**
   * Total amount of ongoing authorization requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly authorizePendingAmount: Money;
  /** Total amount authorized for this payment. */
  readonly authorizedAmount: Money;
  /**
   * Total amount of ongoing cancel requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly cancelPendingAmount: Money;
  /**
   * Total amount canceled for this payment.
   *
   * Added in Saleor 3.13.
   */
  readonly canceledAmount: Money;
  /**
   * Total amount of ongoing charge requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly chargePendingAmount: Money;
  /** Total amount charged for this payment. */
  readonly chargedAmount: Money;
  readonly createdAt: Scalars['DateTime']['output'];
  /**
   * User or App that created the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly createdBy?: Maybe<UserOrApp>;
  /** List of all transaction's events. */
  readonly events: ReadonlyArray<TransactionEvent>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  readonly externalUrl: Scalars['String']['output'];
  /** The ID of the object. */
  readonly id: Scalars['ID']['output'];
  /**
   * Message related to the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly message: Scalars['String']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly modifiedAt: Scalars['DateTime']['output'];
  /**
   * Name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly name: Scalars['String']['output'];
  /**
   * The related order.
   *
   * Added in Saleor 3.6.
   */
  readonly order?: Maybe<Order>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly pspReference: Scalars['String']['output'];
  /**
   * Reference of transaction.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature).Use `pspReference` instead.
   */
  readonly reference: Scalars['String']['output'];
  /**
   * Total amount of ongoing refund requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly refundPendingAmount: Money;
  /** Total amount refunded for this payment. */
  readonly refundedAmount: Money;
  /**
   * Status of transaction.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature). The `status` is not needed. The amounts can be used to define the current status of transactions.
   */
  readonly status: Scalars['String']['output'];
  /**
   * Type of transaction.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature). Use `name` or `message` instead.
   */
  readonly type: Scalars['String']['output'];
  /**
   * Total amount voided for this payment.
   * @deprecated This field will be removed in Saleor 3.15 (Preview Feature).Use `canceledAmount` instead.
   */
  readonly voidedAmount: Money;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Event sent when transaction item metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type TransactionItemMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Look up a transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionKind {
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  Auth = 'AUTH',
  Cancel = 'CANCEL',
  Capture = 'CAPTURE',
  Confirm = 'CONFIRM',
  External = 'EXTERNAL',
  Pending = 'PENDING',
  Refund = 'REFUND',
  RefundOngoing = 'REFUND_ONGOING',
  Void = 'VOID'
}

/**
 * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionProcess = {
  /** The json data required to finalize the payment. */
  readonly data?: Maybe<Scalars['JSON']['output']>;
  readonly errors: ReadonlyArray<TransactionProcessError>;
  /** The processed transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** The event created for the processed transaction. */
  readonly transactionEvent?: Maybe<TransactionEvent>;
};

export type TransactionProcessAction = {
  readonly actionType: TransactionFlowStrategyEnum;
  /** Transaction amount to process. */
  readonly amount: Scalars['PositiveDecimal']['output'];
  /** Currency of the amount. */
  readonly currency: Scalars['String']['output'];
};

export type TransactionProcessError = {
  /** The error code. */
  readonly code: TransactionProcessErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionProcessErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MissingPaymentApp = 'MISSING_PAYMENT_APP',
  MissingPaymentAppRelation = 'MISSING_PAYMENT_APP_RELATION',
  NotFound = 'NOT_FOUND',
  TransactionAlreadyProcessed = 'TRANSACTION_ALREADY_PROCESSED'
}

/**
 * Event sent when user has additional payment action to process.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionProcessSession = Event & {
  /** Action to proceed for the transaction */
  readonly action: TransactionProcessAction;
  /** Payment gateway data in JSON format, recieved from storefront. */
  readonly data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Merchant reference assigned to this payment. */
  readonly merchantReference: Scalars['String']['output'];
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Checkout or order */
  readonly sourceObject: OrderOrCheckout;
  /** Look up a transaction. */
  readonly transaction: TransactionItem;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when transaction refund is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionRefundRequested = Event & {
  /** Requested action data. */
  readonly action: TransactionAction;
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Look up a transaction. */
  readonly transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

/**
 * Request an action for payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionRequestAction = {
  readonly errors: ReadonlyArray<TransactionRequestActionError>;
  readonly transaction?: Maybe<TransactionItem>;
};

export type TransactionRequestActionError = {
  /** The error code. */
  readonly code: TransactionRequestActionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionRequestActionErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MissingTransactionActionRequestWebhook = 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK',
  NotFound = 'NOT_FOUND'
}

/**
 * Represents a status of payment transaction.
 *
 *     The following statuses are possible:
 *     SUCCESS - Represents a sucess action.
 *     FAILURE - Represents a failure action.
 *     PENDING - Represents a pending action.
 *
 */
export enum TransactionStatus {
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/**
 * Update transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
 */
export type TransactionUpdate = {
  readonly errors: ReadonlyArray<TransactionUpdateError>;
  readonly transaction?: Maybe<TransactionItem>;
};

export type TransactionUpdateError = {
  /** The error code. */
  readonly code: TransactionUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TransactionUpdateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  IncorrectCurrency = 'INCORRECT_CURRENCY',
  Invalid = 'INVALID',
  MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
  NotFound = 'NOT_FOUND',
  Unique = 'UNIQUE'
}

export type TransactionUpdateInput = {
  /** Amount authorized by this transaction. */
  readonly amountAuthorized?: InputMaybe<MoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly amountCanceled?: InputMaybe<MoneyInput>;
  /** Amount charged by this transaction. */
  readonly amountCharged?: InputMaybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  readonly amountRefunded?: InputMaybe<MoneyInput>;
  /**
   * Amount voided by this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `amountCanceled` instead.
   */
  readonly amountVoided?: InputMaybe<MoneyInput>;
  /** List of all possible actions for the transaction */
  readonly availableActions?: InputMaybe<ReadonlyArray<TransactionActionEnum>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  readonly externalUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly message?: InputMaybe<Scalars['String']['input']>;
  /** Payment public metadata. */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Payment private metadata. */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  readonly pspReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reference of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `pspReference` instead.
   */
  readonly reference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Status of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). The `status` is not needed. The amounts can be used to define the current status of transactions.
   */
  readonly status?: InputMaybe<Scalars['String']['input']>;
  /**
   * Payment type used for this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.15 (Preview Feature). Use `name` and `message` instead.
   */
  readonly type?: InputMaybe<Scalars['String']['input']>;
};

export type TranslatableItem = AttributeTranslatableContent | AttributeValueTranslatableContent | CategoryTranslatableContent | CollectionTranslatableContent | MenuItemTranslatableContent | PageTranslatableContent | ProductTranslatableContent | ProductVariantTranslatableContent | SaleTranslatableContent | ShippingMethodTranslatableContent | VoucherTranslatableContent;

export type TranslatableItemConnection = {
  readonly edges: ReadonlyArray<TranslatableItemEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TranslatableItemEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: TranslatableItem;
};

export enum TranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER'
}

/**
 * Event sent when new translation is created.
 *
 * Added in Saleor 3.2.
 */
export type TranslationCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The translation the event relates to. */
  readonly translation?: Maybe<TranslationTypes>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type TranslationError = {
  /** The error code. */
  readonly code: TranslationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum TranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type TranslationInput = {
  /**
   * Translated description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  readonly description?: InputMaybe<Scalars['JSONString']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly seoDescription?: InputMaybe<Scalars['String']['input']>;
  readonly seoTitle?: InputMaybe<Scalars['String']['input']>;
};

export type TranslationTypes = AttributeTranslation | AttributeValueTranslation | CategoryTranslation | CollectionTranslation | MenuItemTranslation | PageTranslation | ProductTranslation | ProductVariantTranslation | SaleTranslation | ShippingMethodTranslation | VoucherTranslation;

/**
 * Event sent when translation is updated.
 *
 * Added in Saleor 3.2.
 */
export type TranslationUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** The translation the event relates to. */
  readonly translation?: Maybe<TranslationTypes>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvoiceInput = {
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** Invoice number */
  readonly number?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of an invoice to download. */
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type UpdateMetadata = {
  readonly errors: ReadonlyArray<MetadataError>;
  readonly item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly metadataErrors: ReadonlyArray<MetadataError>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type UpdatePrivateMetadata = {
  readonly errors: ReadonlyArray<MetadataError>;
  readonly item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly metadataErrors: ReadonlyArray<MetadataError>;
};

export type UploadError = {
  /** The error code. */
  readonly code: UploadErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum UploadErrorCode {
  GraphqlError = 'GRAPHQL_ERROR'
}

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  /**
   * List of channels the user has access to. The sum of channels from all user groups. If at least one group has `restrictedAccessToChannels` set to False - all channels are returned.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly accessibleChannels?: Maybe<ReadonlyArray<Channel>>;
  /** List of all user's addresses. */
  readonly addresses: ReadonlyArray<Address>;
  readonly avatar?: Maybe<Image>;
  /**
   * Returns the last open checkout of this user.
   * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
   */
  readonly checkout?: Maybe<Checkout>;
  /** Returns the checkout ID's assigned to this user. */
  readonly checkoutIds?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
  /**
   * Returns the checkout UUID's assigned to this user.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead.
   */
  readonly checkoutTokens?: Maybe<ReadonlyArray<Scalars['UUID']['output']>>;
  /**
   * Returns checkouts assigned to this user.
   *
   * Added in Saleor 3.8.
   */
  readonly checkouts?: Maybe<CheckoutCountableConnection>;
  readonly dateJoined: Scalars['DateTime']['output'];
  readonly defaultBillingAddress?: Maybe<Address>;
  readonly defaultShippingAddress?: Maybe<Address>;
  /** List of user's permission groups which user can manage. */
  readonly editableGroups?: Maybe<ReadonlyArray<Group>>;
  readonly email: Scalars['String']['output'];
  /**
   * List of events associated with the user.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  readonly events?: Maybe<ReadonlyArray<CustomerEvent>>;
  /**
   * External ID of this user.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  readonly firstName: Scalars['String']['output'];
  /** List of the user gift cards. */
  readonly giftCards?: Maybe<GiftCardCountableConnection>;
  readonly id: Scalars['ID']['output'];
  readonly isActive: Scalars['Boolean']['output'];
  readonly isStaff: Scalars['Boolean']['output'];
  /** User language code. */
  readonly languageCode: LanguageCodeEnum;
  readonly lastLogin?: Maybe<Scalars['DateTime']['output']>;
  readonly lastName: Scalars['String']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * A note about the customer.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  readonly note?: Maybe<Scalars['String']['output']>;
  /** List of user's orders. Requires one of the following permissions: MANAGE_STAFF, OWNER. */
  readonly orders?: Maybe<OrderCountableConnection>;
  /** List of user's permission groups. */
  readonly permissionGroups?: Maybe<ReadonlyArray<Group>>;
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Determine if user have restricted access to channels. False if at least one user group has `restrictedAccessToChannels` set to False.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly restrictedAccessToChannels: Scalars['Boolean']['output'];
  /** List of stored payment sources. */
  readonly storedPaymentSources?: Maybe<ReadonlyArray<PaymentSource>>;
  readonly updatedAt: Scalars['DateTime']['output'];
  /** List of user's permissions. */
  readonly userPermissions?: Maybe<ReadonlyArray<UserPermission>>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserCheckoutIdsArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/** Represents user data. */
export type UserCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user data. */
export type UserMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user data. */
export type UserPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a user avatar. Only for staff members.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** An updated user instance. */
  readonly user?: Maybe<User>;
};

/**
 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** An updated user instance. */
  readonly user?: Maybe<User>;
};

/**
 * Activate or deactivate users.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type UserBulkSetActive = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  readonly errors: ReadonlyArray<AccountError>;
};

export type UserCountableConnection = {
  readonly edges: ReadonlyArray<UserCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: User;
};

export type UserCreateInput = {
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** Billing address of the customer. */
  readonly defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  readonly defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User language code. */
  readonly languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** A note about the user. */
  readonly note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  readonly redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrApp = App | User;

/** Represents user's permissions. */
export type UserPermission = {
  /** Internal code for permission. */
  readonly code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  readonly name: Scalars['String']['output'];
  /** List of user permission groups which contains this permission. */
  readonly sourcePermissionGroups?: Maybe<ReadonlyArray<Group>>;
};


/** Represents user's permissions. */
export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID']['input'];
};

export enum UserSortField {
  /** Sort users by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort users by email. */
  Email = 'EMAIL',
  /** Sort users by first name. */
  FirstName = 'FIRST_NAME',
  /** Sort users by last modified at. */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Sort users by last name. */
  LastName = 'LAST_NAME',
  /** Sort users by order count. */
  OrderCount = 'ORDER_COUNT'
}

export type UserSortingInput = {
  /** Specifies the direction in which to sort users. */
  readonly direction: OrderDirection;
  /** Sort users by the selected field. */
  readonly field: UserSortField;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  /** Country code. */
  readonly countryCode: Scalars['String']['output'];
  /** Country's VAT rate exceptions for specific types of goods. */
  readonly reducedRates: ReadonlyArray<ReducedRate>;
  /** Standard VAT rate in percent. */
  readonly standardRate?: Maybe<Scalars['Float']['output']>;
};

export enum VariantAttributeScope {
  All = 'ALL',
  NotVariantSelection = 'NOT_VARIANT_SELECTION',
  VariantSelection = 'VARIANT_SELECTION'
}

/**
 * Assign an media to a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaAssign = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Unassign an media from a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaUnassign = {
  readonly errors: ReadonlyArray<ProductError>;
  readonly media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly productErrors: ReadonlyArray<ProductError>;
  readonly productVariant?: Maybe<ProductVariant>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  /** The discount amount if in sale (null otherwise). */
  readonly discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  readonly discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  readonly onSale?: Maybe<Scalars['Boolean']['output']>;
  /** The price, with any discount subtracted. */
  readonly price?: Maybe<TaxedMoney>;
  /** The discounted price in the local currency. */
  readonly priceLocalCurrency?: Maybe<TaxedMoney>;
  /** The price without any discount. */
  readonly priceUndiscounted?: Maybe<TaxedMoney>;
};

/** Verify JWT token. */
export type VerifyToken = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly accountErrors: ReadonlyArray<AccountError>;
  readonly errors: ReadonlyArray<AccountError>;
  /** Determine if token is valid or not. */
  readonly isValid: Scalars['Boolean']['output'];
  /** JWT payload. */
  readonly payload?: Maybe<Scalars['GenericScalar']['output']>;
  /** User assigned to token. */
  readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum VolumeUnitsEnum {
  AcreFt = 'ACRE_FT',
  AcreIn = 'ACRE_IN',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicMeter = 'CUBIC_METER',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicYard = 'CUBIC_YARD',
  FlOz = 'FL_OZ',
  Liter = 'LITER',
  Pint = 'PINT',
  Qt = 'QT'
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & ObjectWithMetadata & {
  readonly applyOncePerCustomer: Scalars['Boolean']['output'];
  readonly applyOncePerOrder: Scalars['Boolean']['output'];
  /** List of categories this voucher applies to. */
  readonly categories?: Maybe<CategoryCountableConnection>;
  /**
   * List of availability in channels for the voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly channelListings?: Maybe<ReadonlyArray<VoucherChannelListing>>;
  readonly code: Scalars['String']['output'];
  /**
   * List of collections this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly collections?: Maybe<CollectionCountableConnection>;
  /** List of countries available for the shipping voucher. */
  readonly countries?: Maybe<ReadonlyArray<CountryDisplay>>;
  /** Currency code for voucher. */
  readonly currency?: Maybe<Scalars['String']['output']>;
  /** Voucher value. */
  readonly discountValue?: Maybe<Scalars['Float']['output']>;
  /** Determines a type of discount for voucher - value or percentage */
  readonly discountValueType: DiscountValueTypeEnum;
  readonly endDate?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly minCheckoutItemsQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum order value to apply voucher. */
  readonly minSpent?: Maybe<Money>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly onlyForStaff: Scalars['Boolean']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of products this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly products?: Maybe<ProductCountableConnection>;
  readonly startDate: Scalars['DateTime']['output'];
  /** Returns translated voucher fields for the given language code. */
  readonly translation?: Maybe<VoucherTranslation>;
  /** Determines a type of voucher. */
  readonly type: VoucherTypeEnum;
  readonly usageLimit?: Maybe<Scalars['Int']['output']>;
  readonly used: Scalars['Int']['output'];
  /**
   * List of product variants this voucher applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  readonly variants?: Maybe<ProductVariantCountableConnection>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherAddCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  readonly voucher?: Maybe<Voucher>;
};

/**
 * Deletes vouchers.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherBulkDelete = {
  /** Returns how many objects were affected. */
  readonly count: Scalars['Int']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
};

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  readonly channel: Channel;
  readonly currency: Scalars['String']['output'];
  readonly discountValue: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  readonly channelId: Scalars['ID']['input'];
  /** Value of the voucher. */
  readonly discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Min purchase amount required to apply the voucher. */
  readonly minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  readonly addChannels?: InputMaybe<ReadonlyArray<VoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Manage voucher's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherChannelListingUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  /** An updated voucher instance. */
  readonly voucher?: Maybe<Voucher>;
};

export type VoucherCountableConnection = {
  readonly edges: ReadonlyArray<VoucherCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Voucher;
};

/**
 * Creates a new voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  readonly voucher?: Maybe<Voucher>;
};

/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type VoucherCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  readonly voucher?: Maybe<Voucher>;
};


/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type VoucherCreatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  readonly voucher?: Maybe<Voucher>;
};

/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type VoucherDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  readonly voucher?: Maybe<Voucher>;
};


/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type VoucherDeletedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export enum VoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING'
}

export type VoucherFilterInput = {
  readonly discountType?: InputMaybe<ReadonlyArray<VoucherDiscountType>>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly started?: InputMaybe<DateTimeRangeInput>;
  readonly status?: InputMaybe<ReadonlyArray<DiscountStatusEnum>>;
  readonly timesUsed?: InputMaybe<IntRangeInput>;
};

export type VoucherInput = {
  /** Voucher should be applied once per customer. */
  readonly applyOncePerCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Voucher should be applied to the cheapest item or entire order. */
  readonly applyOncePerOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Categories discounted by the voucher. */
  readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Code to use the voucher. */
  readonly code?: InputMaybe<Scalars['String']['input']>;
  /** Collections discounted by the voucher. */
  readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Country codes that can be used with the shipping voucher. */
  readonly countries?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** Choices: fixed or percentage. */
  readonly discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  /** End date of the voucher in ISO 8601 format. */
  readonly endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  readonly minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Voucher name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Voucher can be used only by staff user. */
  readonly onlyForStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Products discounted by the voucher. */
  readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Start date of the voucher in ISO 8601 format. */
  readonly startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  readonly type?: InputMaybe<VoucherTypeEnum>;
  /** Limit number of times this voucher can be used in total. */
  readonly usageLimit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Variants discounted by the voucher.
   *
   * Added in Saleor 3.1.
   */
  readonly variants?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type VoucherMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  readonly voucher?: Maybe<Voucher>;
};


/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type VoucherMetadataUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Removes products, categories, collections from a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherRemoveCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  readonly voucher?: Maybe<Voucher>;
};

export enum VoucherSortField {
  /** Sort vouchers by code. */
  Code = 'CODE',
  /** Sort vouchers by end date. */
  EndDate = 'END_DATE',
  /**
   * Sort vouchers by minimum spent amount.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
  /** Sort vouchers by start date. */
  StartDate = 'START_DATE',
  /** Sort vouchers by type. */
  Type = 'TYPE',
  /** Sort vouchers by usage limit. */
  UsageLimit = 'USAGE_LIMIT',
  /**
   * Sort vouchers by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Value = 'VALUE'
}

export type VoucherSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  readonly channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort vouchers. */
  readonly direction: OrderDirection;
  /** Sort vouchers by the selected field. */
  readonly field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
  readonly id: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  /** Returns translated voucher fields for the given language code. */
  readonly translation?: Maybe<VoucherTranslation>;
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  readonly voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a voucher.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type VoucherTranslate = {
  readonly errors: ReadonlyArray<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly translationErrors: ReadonlyArray<TranslationError>;
  readonly voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  readonly id: Scalars['ID']['output'];
  /** Translation language. */
  readonly language: LanguageDisplay;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export enum VoucherTypeEnum {
  EntireOrder = 'ENTIRE_ORDER',
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

/**
 * Updates a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly discountErrors: ReadonlyArray<DiscountError>;
  readonly errors: ReadonlyArray<DiscountError>;
  readonly voucher?: Maybe<Voucher>;
};

/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type VoucherUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  readonly voucher?: Maybe<Voucher>;
};


/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type VoucherUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents warehouse. */
export type Warehouse = Node & ObjectWithMetadata & {
  readonly address: Address;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  readonly clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
  /**
   * Warehouse company name.
   * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
   */
  readonly companyName: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  /**
   * External ID of this warehouse.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isPrivate: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  readonly metadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly metafields?: Maybe<Scalars['Metadata']['output']>;
  readonly name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  readonly privateMetadata: ReadonlyArray<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  readonly shippingZones: ShippingZoneCountableConnection;
  readonly slug: Scalars['String']['output'];
};


/** Represents warehouse. */
export type WarehouseMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents warehouse. */
export type WarehouseMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldsArgs = {
  keys?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** An enumeration. */
export enum WarehouseClickAndCollectOptionEnum {
  All = 'ALL',
  Disabled = 'DISABLED',
  Local = 'LOCAL'
}

export type WarehouseCountableConnection = {
  readonly edges: ReadonlyArray<WarehouseCountableEdge>;
  /** Pagination data for this connection. */
  readonly pageInfo: PageInfo;
  /** A total count of items in the collection. */
  readonly totalCount?: Maybe<Scalars['Int']['output']>;
};

export type WarehouseCountableEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Warehouse;
};

/**
 * Creates new warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseCreate = {
  readonly errors: ReadonlyArray<WarehouseError>;
  readonly warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export type WarehouseCreateInput = {
  /** Address of the warehouse. */
  readonly address: AddressInput;
  /** The email address of the warehouse. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse name. */
  readonly name: Scalars['String']['input'];
  /**
   * Shipping zones supported by the warehouse.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Providing the zone ids will raise a ValidationError.
   */
  readonly shippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  /** Warehouse slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new warehouse is created.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseCreated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  readonly warehouse?: Maybe<Warehouse>;
};

/**
 * Deletes selected warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseDelete = {
  readonly errors: ReadonlyArray<WarehouseError>;
  readonly warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

/**
 * Event sent when warehouse is deleted.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseDeleted = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  readonly warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
  /** The error code. */
  readonly code: WarehouseErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
  /** List of shipping zones IDs which causes the error. */
  readonly shippingZones?: Maybe<ReadonlyArray<Scalars['ID']['output']>>;
};

/** An enumeration. */
export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WarehouseFilterInput = {
  readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  readonly search?: InputMaybe<Scalars['String']['input']>;
  readonly slugs?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
};

/**
 * Event sent when warehouse metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type WarehouseMetadataUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  readonly warehouse?: Maybe<Warehouse>;
};

/**
 * Add shipping zone to given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneAssign = {
  readonly errors: ReadonlyArray<WarehouseError>;
  readonly warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

/**
 * Remove shipping zone from given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneUnassign = {
  readonly errors: ReadonlyArray<WarehouseError>;
  readonly warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export enum WarehouseSortField {
  /** Sort warehouses by name. */
  Name = 'NAME'
}

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort warehouses. */
  readonly direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  readonly field: WarehouseSortField;
};

/**
 * Updates given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseUpdate = {
  readonly errors: ReadonlyArray<WarehouseError>;
  readonly warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export type WarehouseUpdateInput = {
  /** Address of the warehouse. */
  readonly address?: InputMaybe<AddressInput>;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  readonly clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  /** The email address of the warehouse. */
  readonly email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  readonly externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Visibility of warehouse stocks.
   *
   * Added in Saleor 3.1.
   */
  readonly isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Warehouse name. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse slug. */
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when warehouse is updated.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseUpdated = Event & {
  /** Time of the event. */
  readonly issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  readonly recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  readonly version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  readonly warehouse?: Maybe<Warehouse>;
};

/** Webhook. */
export type Webhook = Node & {
  readonly app: App;
  /** List of asynchronous webhook events. */
  readonly asyncEvents: ReadonlyArray<WebhookEventAsync>;
  /**
   * Custom headers, which will be added to HTTP request.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly customHeaders?: Maybe<Scalars['JSONString']['output']>;
  /** Event deliveries. */
  readonly eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
  /**
   * List of webhook events.
   * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  readonly events: ReadonlyArray<WebhookEvent>;
  readonly id: Scalars['ID']['output'];
  /** Informs if webhook is activated. */
  readonly isActive: Scalars['Boolean']['output'];
  readonly name: Scalars['String']['output'];
  /**
   * Used to create a hash signature for each payload.
   * @deprecated This field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  readonly secretKey?: Maybe<Scalars['String']['output']>;
  /** Used to define payloads for specific events. */
  readonly subscriptionQuery?: Maybe<Scalars['String']['output']>;
  /** List of synchronous webhook events. */
  readonly syncEvents: ReadonlyArray<WebhookEventSync>;
  /** Target URL for webhook. */
  readonly targetUrl: Scalars['String']['output'];
};


/** Webhook. */
export type WebhookEventDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventDeliveryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventDeliverySortingInput>;
};

/**
 * Creates a new webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookCreate = {
  readonly errors: ReadonlyArray<WebhookError>;
  readonly webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly webhookErrors: ReadonlyArray<WebhookError>;
};

export type WebhookCreateInput = {
  /** ID of the app to which webhook belongs. */
  readonly app?: InputMaybe<Scalars['ID']['input']>;
  /** The asynchronous events that webhook wants to subscribe. */
  readonly asyncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeAsyncEnum>>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly customHeaders?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  readonly events?: InputMaybe<ReadonlyArray<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the webhook. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  readonly query?: InputMaybe<Scalars['String']['input']>;
  /**
   * The secret key used to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  readonly secretKey?: InputMaybe<Scalars['String']['input']>;
  /** The synchronous events that webhook wants to subscribe. */
  readonly syncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  readonly targetUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookDelete = {
  readonly errors: ReadonlyArray<WebhookError>;
  readonly webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly webhookErrors: ReadonlyArray<WebhookError>;
};

/**
 * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type WebhookDryRun = {
  readonly errors: ReadonlyArray<WebhookDryRunError>;
  /** JSON payload, that would be sent out to webhook's target URL. */
  readonly payload?: Maybe<Scalars['JSONString']['output']>;
};

export type WebhookDryRunError = {
  /** The error code. */
  readonly code: WebhookDryRunErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum WebhookDryRunErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  InvalidId = 'INVALID_ID',
  MissingEvent = 'MISSING_EVENT',
  MissingPermission = 'MISSING_PERMISSION',
  MissingSubscription = 'MISSING_SUBSCRIPTION',
  NotFound = 'NOT_FOUND',
  Syntax = 'SYNTAX',
  TypeNotSupported = 'TYPE_NOT_SUPPORTED',
  UnableToParse = 'UNABLE_TO_PARSE'
}

export type WebhookError = {
  /** The error code. */
  readonly code: WebhookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum WebhookErrorCode {
  DeleteFailed = 'DELETE_FAILED',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidCustomHeaders = 'INVALID_CUSTOM_HEADERS',
  MissingEvent = 'MISSING_EVENT',
  MissingSubscription = 'MISSING_SUBSCRIPTION',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Syntax = 'SYNTAX',
  UnableToParse = 'UNABLE_TO_PARSE',
  Unique = 'UNIQUE'
}

/** Webhook event. */
export type WebhookEvent = {
  /** Internal name of the event type. */
  readonly eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  readonly name: Scalars['String']['output'];
};

/** Asynchronous webhook event. */
export type WebhookEventAsync = {
  /** Internal name of the event type. */
  readonly eventType: WebhookEventTypeAsyncEnum;
  /** Display name of the event. */
  readonly name: Scalars['String']['output'];
};

/** Synchronous webhook event. */
export type WebhookEventSync = {
  /** Internal name of the event type. */
  readonly eventType: WebhookEventTypeSyncEnum;
  /** Display name of the event. */
  readonly name: Scalars['String']['output'];
};

/** Enum determining type of webhook. */
export enum WebhookEventTypeAsyncEnum {
  /** A new address created. */
  AddressCreated = 'ADDRESS_CREATED',
  /** An address deleted. */
  AddressDeleted = 'ADDRESS_DELETED',
  /** An address updated. */
  AddressUpdated = 'ADDRESS_UPDATED',
  /** All the events. */
  AnyEvents = 'ANY_EVENTS',
  /** An app deleted. */
  AppDeleted = 'APP_DELETED',
  /** A new app installed. */
  AppInstalled = 'APP_INSTALLED',
  /** An app status is changed. */
  AppStatusChanged = 'APP_STATUS_CHANGED',
  /** An app updated. */
  AppUpdated = 'APP_UPDATED',
  /** A new attribute is created. */
  AttributeCreated = 'ATTRIBUTE_CREATED',
  /** An attribute is deleted. */
  AttributeDeleted = 'ATTRIBUTE_DELETED',
  /** An attribute is updated. */
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  /** A new attribute value is created. */
  AttributeValueCreated = 'ATTRIBUTE_VALUE_CREATED',
  /** An attribute value is deleted. */
  AttributeValueDeleted = 'ATTRIBUTE_VALUE_DELETED',
  /** An attribute value is updated. */
  AttributeValueUpdated = 'ATTRIBUTE_VALUE_UPDATED',
  /** A new category created. */
  CategoryCreated = 'CATEGORY_CREATED',
  /** A category is deleted. */
  CategoryDeleted = 'CATEGORY_DELETED',
  /** A category is updated. */
  CategoryUpdated = 'CATEGORY_UPDATED',
  /** A new channel created. */
  ChannelCreated = 'CHANNEL_CREATED',
  /** A channel is deleted. */
  ChannelDeleted = 'CHANNEL_DELETED',
  /** A channel status is changed. */
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  /** A channel is updated. */
  ChannelUpdated = 'CHANNEL_UPDATED',
  /** A new checkout is created. */
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutFullyPaid = 'CHECKOUT_FULLY_PAID',
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  CheckoutMetadataUpdated = 'CHECKOUT_METADATA_UPDATED',
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  /** A new collection is created. */
  CollectionCreated = 'COLLECTION_CREATED',
  /** A collection is deleted. */
  CollectionDeleted = 'COLLECTION_DELETED',
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  CollectionMetadataUpdated = 'COLLECTION_METADATA_UPDATED',
  /** A collection is updated. */
  CollectionUpdated = 'COLLECTION_UPDATED',
  /** A new customer account is created. */
  CustomerCreated = 'CUSTOMER_CREATED',
  /** A customer account is deleted. */
  CustomerDeleted = 'CUSTOMER_DELETED',
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  CustomerMetadataUpdated = 'CUSTOMER_METADATA_UPDATED',
  /** A customer account is updated. */
  CustomerUpdated = 'CUSTOMER_UPDATED',
  /** A draft order is created. */
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  /** A draft order is deleted. */
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  /** A draft order is updated. */
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  /** A fulfillment is approved. */
  FulfillmentApproved = 'FULFILLMENT_APPROVED',
  /** A fulfillment is cancelled. */
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  /** A new fulfillment is created. */
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  FulfillmentMetadataUpdated = 'FULFILLMENT_METADATA_UPDATED',
  /** A new gift card created. */
  GiftCardCreated = 'GIFT_CARD_CREATED',
  /** A gift card is deleted. */
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  GiftCardMetadataUpdated = 'GIFT_CARD_METADATA_UPDATED',
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  GiftCardSent = 'GIFT_CARD_SENT',
  /** A gift card status is changed. */
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  /** A gift card is updated. */
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  /** An invoice is deleted. */
  InvoiceDeleted = 'INVOICE_DELETED',
  /** An invoice for order requested. */
  InvoiceRequested = 'INVOICE_REQUESTED',
  /** Invoice has been sent. */
  InvoiceSent = 'INVOICE_SENT',
  /** A new menu created. */
  MenuCreated = 'MENU_CREATED',
  /** A menu is deleted. */
  MenuDeleted = 'MENU_DELETED',
  /** A new menu item created. */
  MenuItemCreated = 'MENU_ITEM_CREATED',
  /** A menu item is deleted. */
  MenuItemDeleted = 'MENU_ITEM_DELETED',
  /** A menu item is updated. */
  MenuItemUpdated = 'MENU_ITEM_UPDATED',
  /** A menu is updated. */
  MenuUpdated = 'MENU_UPDATED',
  /** User notification triggered. */
  NotifyUser = 'NOTIFY_USER',
  /** An observability event is created. */
  Observability = 'OBSERVABILITY',
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderBulkCreated = 'ORDER_BULK_CREATED',
  /** An order is cancelled. */
  OrderCancelled = 'ORDER_CANCELLED',
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  OrderConfirmed = 'ORDER_CONFIRMED',
  /** A new order is placed. */
  OrderCreated = 'ORDER_CREATED',
  /** An order is expired. */
  OrderExpired = 'ORDER_EXPIRED',
  /** An order is fulfilled. */
  OrderFulfilled = 'ORDER_FULFILLED',
  /** Payment is made and an order is fully paid. */
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderFullyRefunded = 'ORDER_FULLY_REFUNDED',
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  OrderMetadataUpdated = 'ORDER_METADATA_UPDATED',
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderPaid = 'ORDER_PAID',
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderRefunded = 'ORDER_REFUNDED',
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  OrderUpdated = 'ORDER_UPDATED',
  /** A new page is created. */
  PageCreated = 'PAGE_CREATED',
  /** A page is deleted. */
  PageDeleted = 'PAGE_DELETED',
  /** A new page type is created. */
  PageTypeCreated = 'PAGE_TYPE_CREATED',
  /** A page type is deleted. */
  PageTypeDeleted = 'PAGE_TYPE_DELETED',
  /** A page type is updated. */
  PageTypeUpdated = 'PAGE_TYPE_UPDATED',
  /** A page is updated. */
  PageUpdated = 'PAGE_UPDATED',
  /** A new permission group is created. */
  PermissionGroupCreated = 'PERMISSION_GROUP_CREATED',
  /** A permission group is deleted. */
  PermissionGroupDeleted = 'PERMISSION_GROUP_DELETED',
  /** A permission group is updated. */
  PermissionGroupUpdated = 'PERMISSION_GROUP_UPDATED',
  /** A new product is created. */
  ProductCreated = 'PRODUCT_CREATED',
  /** A product is deleted. */
  ProductDeleted = 'PRODUCT_DELETED',
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  ProductMediaCreated = 'PRODUCT_MEDIA_CREATED',
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  ProductMediaDeleted = 'PRODUCT_MEDIA_DELETED',
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  ProductMediaUpdated = 'PRODUCT_MEDIA_UPDATED',
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  ProductMetadataUpdated = 'PRODUCT_METADATA_UPDATED',
  /** A product is updated. */
  ProductUpdated = 'PRODUCT_UPDATED',
  /** A product variant is back in stock. */
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  /** A new product variant is created. */
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  /** A product variant is deleted. */
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  ProductVariantMetadataUpdated = 'PRODUCT_VARIANT_METADATA_UPDATED',
  /** A product variant is out of stock. */
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  /** A product variant stock is updated */
  ProductVariantStockUpdated = 'PRODUCT_VARIANT_STOCK_UPDATED',
  /** A product variant is updated. */
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  /** A sale is created. */
  SaleCreated = 'SALE_CREATED',
  /** A sale is deleted. */
  SaleDeleted = 'SALE_DELETED',
  /** A sale is activated or deactivated. */
  SaleToggle = 'SALE_TOGGLE',
  /** A sale is updated. */
  SaleUpdated = 'SALE_UPDATED',
  /** A new shipping price is created. */
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  /** A shipping price is deleted. */
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  /** A shipping price is updated. */
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  /** A new shipping zone is created. */
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  /** A shipping zone is deleted. */
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  ShippingZoneMetadataUpdated = 'SHIPPING_ZONE_METADATA_UPDATED',
  /** A shipping zone is updated. */
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  /** A new staff user is created. */
  StaffCreated = 'STAFF_CREATED',
  /** A staff user is deleted. */
  StaffDeleted = 'STAFF_DELETED',
  /** A staff user is updated. */
  StaffUpdated = 'STAFF_UPDATED',
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  ThumbnailCreated = 'THUMBNAIL_CREATED',
  /**
   * An action requested for transaction.
   *
   * DEPRECATED: this subscription will be removed in Saleor 3.14 (Preview Feature). Use `TRANSACTION_CHARGE_REQUESTED`, `TRANSACTION_REFUND_REQUESTED`, `TRANSACTION_CANCELATION_REQUESTED` instead.
   */
  TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  TransactionItemMetadataUpdated = 'TRANSACTION_ITEM_METADATA_UPDATED',
  /** A new translation is created. */
  TranslationCreated = 'TRANSLATION_CREATED',
  /** A translation is updated. */
  TranslationUpdated = 'TRANSLATION_UPDATED',
  /** A new voucher created. */
  VoucherCreated = 'VOUCHER_CREATED',
  /** A voucher is deleted. */
  VoucherDeleted = 'VOUCHER_DELETED',
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  VoucherMetadataUpdated = 'VOUCHER_METADATA_UPDATED',
  /** A voucher is updated. */
  VoucherUpdated = 'VOUCHER_UPDATED',
  /** A new warehouse created. */
  WarehouseCreated = 'WAREHOUSE_CREATED',
  /** A warehouse is deleted. */
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WarehouseMetadataUpdated = 'WAREHOUSE_METADATA_UPDATED',
  /** A warehouse is updated. */
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeEnum {
  /** A new address created. */
  AddressCreated = 'ADDRESS_CREATED',
  /** An address deleted. */
  AddressDeleted = 'ADDRESS_DELETED',
  /** An address updated. */
  AddressUpdated = 'ADDRESS_UPDATED',
  /** All the events. */
  AnyEvents = 'ANY_EVENTS',
  /** An app deleted. */
  AppDeleted = 'APP_DELETED',
  /** A new app installed. */
  AppInstalled = 'APP_INSTALLED',
  /** An app status is changed. */
  AppStatusChanged = 'APP_STATUS_CHANGED',
  /** An app updated. */
  AppUpdated = 'APP_UPDATED',
  /** A new attribute is created. */
  AttributeCreated = 'ATTRIBUTE_CREATED',
  /** An attribute is deleted. */
  AttributeDeleted = 'ATTRIBUTE_DELETED',
  /** An attribute is updated. */
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  /** A new attribute value is created. */
  AttributeValueCreated = 'ATTRIBUTE_VALUE_CREATED',
  /** An attribute value is deleted. */
  AttributeValueDeleted = 'ATTRIBUTE_VALUE_DELETED',
  /** An attribute value is updated. */
  AttributeValueUpdated = 'ATTRIBUTE_VALUE_UPDATED',
  /** A new category created. */
  CategoryCreated = 'CATEGORY_CREATED',
  /** A category is deleted. */
  CategoryDeleted = 'CATEGORY_DELETED',
  /** A category is updated. */
  CategoryUpdated = 'CATEGORY_UPDATED',
  /** A new channel created. */
  ChannelCreated = 'CHANNEL_CREATED',
  /** A channel is deleted. */
  ChannelDeleted = 'CHANNEL_DELETED',
  /** A channel status is changed. */
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  /** A channel is updated. */
  ChannelUpdated = 'CHANNEL_UPDATED',
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  CheckoutCalculateTaxes = 'CHECKOUT_CALCULATE_TAXES',
  /** A new checkout is created. */
  CheckoutCreated = 'CHECKOUT_CREATED',
  /** Filter shipping methods for checkout. */
  CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
  CheckoutFullyPaid = 'CHECKOUT_FULLY_PAID',
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  CheckoutMetadataUpdated = 'CHECKOUT_METADATA_UPDATED',
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  /** A new collection is created. */
  CollectionCreated = 'COLLECTION_CREATED',
  /** A collection is deleted. */
  CollectionDeleted = 'COLLECTION_DELETED',
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  CollectionMetadataUpdated = 'COLLECTION_METADATA_UPDATED',
  /** A collection is updated. */
  CollectionUpdated = 'COLLECTION_UPDATED',
  /** A new customer account is created. */
  CustomerCreated = 'CUSTOMER_CREATED',
  /** A customer account is deleted. */
  CustomerDeleted = 'CUSTOMER_DELETED',
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  CustomerMetadataUpdated = 'CUSTOMER_METADATA_UPDATED',
  /** A customer account is updated. */
  CustomerUpdated = 'CUSTOMER_UPDATED',
  /** A draft order is created. */
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  /** A draft order is deleted. */
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  /** A draft order is updated. */
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  /** A fulfillment is approved. */
  FulfillmentApproved = 'FULFILLMENT_APPROVED',
  /** A fulfillment is cancelled. */
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  /** A new fulfillment is created. */
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  FulfillmentMetadataUpdated = 'FULFILLMENT_METADATA_UPDATED',
  /** A new gift card created. */
  GiftCardCreated = 'GIFT_CARD_CREATED',
  /** A gift card is deleted. */
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  GiftCardMetadataUpdated = 'GIFT_CARD_METADATA_UPDATED',
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  GiftCardSent = 'GIFT_CARD_SENT',
  /** A gift card status is changed. */
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  /** A gift card is updated. */
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  /** An invoice is deleted. */
  InvoiceDeleted = 'INVOICE_DELETED',
  /** An invoice for order requested. */
  InvoiceRequested = 'INVOICE_REQUESTED',
  /** Invoice has been sent. */
  InvoiceSent = 'INVOICE_SENT',
  /** A new menu created. */
  MenuCreated = 'MENU_CREATED',
  /** A menu is deleted. */
  MenuDeleted = 'MENU_DELETED',
  /** A new menu item created. */
  MenuItemCreated = 'MENU_ITEM_CREATED',
  /** A menu item is deleted. */
  MenuItemDeleted = 'MENU_ITEM_DELETED',
  /** A menu item is updated. */
  MenuItemUpdated = 'MENU_ITEM_UPDATED',
  /** A menu is updated. */
  MenuUpdated = 'MENU_UPDATED',
  /** User notification triggered. */
  NotifyUser = 'NOTIFY_USER',
  /** An observability event is created. */
  Observability = 'OBSERVABILITY',
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderBulkCreated = 'ORDER_BULK_CREATED',
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  OrderCalculateTaxes = 'ORDER_CALCULATE_TAXES',
  /** An order is cancelled. */
  OrderCancelled = 'ORDER_CANCELLED',
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  OrderConfirmed = 'ORDER_CONFIRMED',
  /** A new order is placed. */
  OrderCreated = 'ORDER_CREATED',
  /** An order is expired. */
  OrderExpired = 'ORDER_EXPIRED',
  /** Filter shipping methods for order. */
  OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
  /** An order is fulfilled. */
  OrderFulfilled = 'ORDER_FULFILLED',
  /** Payment is made and an order is fully paid. */
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderFullyRefunded = 'ORDER_FULLY_REFUNDED',
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  OrderMetadataUpdated = 'ORDER_METADATA_UPDATED',
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderPaid = 'ORDER_PAID',
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  OrderRefunded = 'ORDER_REFUNDED',
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  OrderUpdated = 'ORDER_UPDATED',
  /** A new page is created. */
  PageCreated = 'PAGE_CREATED',
  /** A page is deleted. */
  PageDeleted = 'PAGE_DELETED',
  /** A new page type is created. */
  PageTypeCreated = 'PAGE_TYPE_CREATED',
  /** A page type is deleted. */
  PageTypeDeleted = 'PAGE_TYPE_DELETED',
  /** A page type is updated. */
  PageTypeUpdated = 'PAGE_TYPE_UPDATED',
  /** A page is updated. */
  PageUpdated = 'PAGE_UPDATED',
  /** Authorize payment. */
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  /** Capture payment. */
  PaymentCapture = 'PAYMENT_CAPTURE',
  /** Confirm payment. */
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentGatewayInitializeSession = 'PAYMENT_GATEWAY_INITIALIZE_SESSION',
  /** Listing available payment gateways. */
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  /** Process payment. */
  PaymentProcess = 'PAYMENT_PROCESS',
  /** Refund payment. */
  PaymentRefund = 'PAYMENT_REFUND',
  /** Void payment. */
  PaymentVoid = 'PAYMENT_VOID',
  /** A new permission group is created. */
  PermissionGroupCreated = 'PERMISSION_GROUP_CREATED',
  /** A permission group is deleted. */
  PermissionGroupDeleted = 'PERMISSION_GROUP_DELETED',
  /** A permission group is updated. */
  PermissionGroupUpdated = 'PERMISSION_GROUP_UPDATED',
  /** A new product is created. */
  ProductCreated = 'PRODUCT_CREATED',
  /** A product is deleted. */
  ProductDeleted = 'PRODUCT_DELETED',
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  ProductMediaCreated = 'PRODUCT_MEDIA_CREATED',
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  ProductMediaDeleted = 'PRODUCT_MEDIA_DELETED',
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  ProductMediaUpdated = 'PRODUCT_MEDIA_UPDATED',
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  ProductMetadataUpdated = 'PRODUCT_METADATA_UPDATED',
  /** A product is updated. */
  ProductUpdated = 'PRODUCT_UPDATED',
  /** A product variant is back in stock. */
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  /** A new product variant is created. */
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  /** A product variant is deleted. */
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  ProductVariantMetadataUpdated = 'PRODUCT_VARIANT_METADATA_UPDATED',
  /** A product variant is out of stock. */
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  /** A product variant stock is updated */
  ProductVariantStockUpdated = 'PRODUCT_VARIANT_STOCK_UPDATED',
  /** A product variant is updated. */
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  /** A sale is created. */
  SaleCreated = 'SALE_CREATED',
  /** A sale is deleted. */
  SaleDeleted = 'SALE_DELETED',
  /** A sale is activated or deactivated. */
  SaleToggle = 'SALE_TOGGLE',
  /** A sale is updated. */
  SaleUpdated = 'SALE_UPDATED',
  /** Fetch external shipping methods for checkout. */
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
  /** A new shipping price is created. */
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  /** A shipping price is deleted. */
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  /** A shipping price is updated. */
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  /** A new shipping zone is created. */
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  /** A shipping zone is deleted. */
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  ShippingZoneMetadataUpdated = 'SHIPPING_ZONE_METADATA_UPDATED',
  /** A shipping zone is updated. */
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  /** A new staff user is created. */
  StaffCreated = 'STAFF_CREATED',
  /** A staff user is deleted. */
  StaffDeleted = 'STAFF_DELETED',
  /** A staff user is updated. */
  StaffUpdated = 'STAFF_UPDATED',
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  ThumbnailCreated = 'THUMBNAIL_CREATED',
  /**
   * An action requested for transaction.
   *
   * DEPRECATED: this subscription will be removed in Saleor 3.14 (Preview Feature). Use `TRANSACTION_CHARGE_REQUESTED`, `TRANSACTION_REFUND_REQUESTED`, `TRANSACTION_CANCELATION_REQUESTED` instead.
   */
  TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  TransactionCancelationRequested = 'TRANSACTION_CANCELATION_REQUESTED',
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  TransactionChargeRequested = 'TRANSACTION_CHARGE_REQUESTED',
  TransactionInitializeSession = 'TRANSACTION_INITIALIZE_SESSION',
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  TransactionItemMetadataUpdated = 'TRANSACTION_ITEM_METADATA_UPDATED',
  TransactionProcessSession = 'TRANSACTION_PROCESS_SESSION',
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  TransactionRefundRequested = 'TRANSACTION_REFUND_REQUESTED',
  /** A new translation is created. */
  TranslationCreated = 'TRANSLATION_CREATED',
  /** A translation is updated. */
  TranslationUpdated = 'TRANSLATION_UPDATED',
  /** A new voucher created. */
  VoucherCreated = 'VOUCHER_CREATED',
  /** A voucher is deleted. */
  VoucherDeleted = 'VOUCHER_DELETED',
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  VoucherMetadataUpdated = 'VOUCHER_METADATA_UPDATED',
  /** A voucher is updated. */
  VoucherUpdated = 'VOUCHER_UPDATED',
  /** A new warehouse created. */
  WarehouseCreated = 'WAREHOUSE_CREATED',
  /** A warehouse is deleted. */
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WarehouseMetadataUpdated = 'WAREHOUSE_METADATA_UPDATED',
  /** A warehouse is updated. */
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeSyncEnum {
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  CheckoutCalculateTaxes = 'CHECKOUT_CALCULATE_TAXES',
  /** Filter shipping methods for checkout. */
  CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  OrderCalculateTaxes = 'ORDER_CALCULATE_TAXES',
  /** Filter shipping methods for order. */
  OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
  /** Authorize payment. */
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  /** Capture payment. */
  PaymentCapture = 'PAYMENT_CAPTURE',
  /** Confirm payment. */
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentGatewayInitializeSession = 'PAYMENT_GATEWAY_INITIALIZE_SESSION',
  /** Listing available payment gateways. */
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  /** Process payment. */
  PaymentProcess = 'PAYMENT_PROCESS',
  /** Refund payment. */
  PaymentRefund = 'PAYMENT_REFUND',
  /** Void payment. */
  PaymentVoid = 'PAYMENT_VOID',
  /** Fetch external shipping methods for checkout. */
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  TransactionCancelationRequested = 'TRANSACTION_CANCELATION_REQUESTED',
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  TransactionChargeRequested = 'TRANSACTION_CHARGE_REQUESTED',
  TransactionInitializeSession = 'TRANSACTION_INITIALIZE_SESSION',
  TransactionProcessSession = 'TRANSACTION_PROCESS_SESSION',
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  TransactionRefundRequested = 'TRANSACTION_REFUND_REQUESTED'
}

/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
  AddressCreated = 'ADDRESS_CREATED',
  AddressDeleted = 'ADDRESS_DELETED',
  AddressUpdated = 'ADDRESS_UPDATED',
  AppDeleted = 'APP_DELETED',
  AppInstalled = 'APP_INSTALLED',
  AppStatusChanged = 'APP_STATUS_CHANGED',
  AppUpdated = 'APP_UPDATED',
  AttributeCreated = 'ATTRIBUTE_CREATED',
  AttributeDeleted = 'ATTRIBUTE_DELETED',
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  AttributeValueCreated = 'ATTRIBUTE_VALUE_CREATED',
  AttributeValueDeleted = 'ATTRIBUTE_VALUE_DELETED',
  AttributeValueUpdated = 'ATTRIBUTE_VALUE_UPDATED',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  ChannelCreated = 'CHANNEL_CREATED',
  ChannelDeleted = 'CHANNEL_DELETED',
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  ChannelUpdated = 'CHANNEL_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutFullyPaid = 'CHECKOUT_FULLY_PAID',
  CheckoutMetadataUpdated = 'CHECKOUT_METADATA_UPDATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionMetadataUpdated = 'COLLECTION_METADATA_UPDATED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerMetadataUpdated = 'CUSTOMER_METADATA_UPDATED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  FulfillmentApproved = 'FULFILLMENT_APPROVED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  FulfillmentMetadataUpdated = 'FULFILLMENT_METADATA_UPDATED',
  GiftCardCreated = 'GIFT_CARD_CREATED',
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  GiftCardMetadataUpdated = 'GIFT_CARD_METADATA_UPDATED',
  GiftCardSent = 'GIFT_CARD_SENT',
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MenuCreated = 'MENU_CREATED',
  MenuDeleted = 'MENU_DELETED',
  MenuItemCreated = 'MENU_ITEM_CREATED',
  MenuItemDeleted = 'MENU_ITEM_DELETED',
  MenuItemUpdated = 'MENU_ITEM_UPDATED',
  MenuUpdated = 'MENU_UPDATED',
  NotifyUser = 'NOTIFY_USER',
  Observability = 'OBSERVABILITY',
  OrderBulkCreated = 'ORDER_BULK_CREATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderCreated = 'ORDER_CREATED',
  OrderExpired = 'ORDER_EXPIRED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderFullyRefunded = 'ORDER_FULLY_REFUNDED',
  OrderMetadataUpdated = 'ORDER_METADATA_UPDATED',
  OrderPaid = 'ORDER_PAID',
  OrderRefunded = 'ORDER_REFUNDED',
  OrderUpdated = 'ORDER_UPDATED',
  PageCreated = 'PAGE_CREATED',
  PageDeleted = 'PAGE_DELETED',
  PageTypeCreated = 'PAGE_TYPE_CREATED',
  PageTypeDeleted = 'PAGE_TYPE_DELETED',
  PageTypeUpdated = 'PAGE_TYPE_UPDATED',
  PageUpdated = 'PAGE_UPDATED',
  PermissionGroupCreated = 'PERMISSION_GROUP_CREATED',
  PermissionGroupDeleted = 'PERMISSION_GROUP_DELETED',
  PermissionGroupUpdated = 'PERMISSION_GROUP_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductMediaCreated = 'PRODUCT_MEDIA_CREATED',
  ProductMediaDeleted = 'PRODUCT_MEDIA_DELETED',
  ProductMediaUpdated = 'PRODUCT_MEDIA_UPDATED',
  ProductMetadataUpdated = 'PRODUCT_METADATA_UPDATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantMetadataUpdated = 'PRODUCT_VARIANT_METADATA_UPDATED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantStockUpdated = 'PRODUCT_VARIANT_STOCK_UPDATED',
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleToggle = 'SALE_TOGGLE',
  SaleUpdated = 'SALE_UPDATED',
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  ShippingZoneMetadataUpdated = 'SHIPPING_ZONE_METADATA_UPDATED',
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  StaffCreated = 'STAFF_CREATED',
  StaffDeleted = 'STAFF_DELETED',
  StaffUpdated = 'STAFF_UPDATED',
  ThumbnailCreated = 'THUMBNAIL_CREATED',
  TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
  TransactionItemMetadataUpdated = 'TRANSACTION_ITEM_METADATA_UPDATED',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED',
  VoucherCreated = 'VOUCHER_CREATED',
  VoucherDeleted = 'VOUCHER_DELETED',
  VoucherMetadataUpdated = 'VOUCHER_METADATA_UPDATED',
  VoucherUpdated = 'VOUCHER_UPDATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  WarehouseMetadataUpdated = 'WAREHOUSE_METADATA_UPDATED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

/**
 * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type WebhookTrigger = {
  readonly delivery?: Maybe<EventDelivery>;
  readonly errors: ReadonlyArray<WebhookTriggerError>;
};

export type WebhookTriggerError = {
  /** The error code. */
  readonly code: WebhookTriggerErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  readonly field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  readonly message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum WebhookTriggerErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  InvalidId = 'INVALID_ID',
  MissingEvent = 'MISSING_EVENT',
  MissingPermission = 'MISSING_PERMISSION',
  MissingQuery = 'MISSING_QUERY',
  MissingSubscription = 'MISSING_SUBSCRIPTION',
  NotFound = 'NOT_FOUND',
  Syntax = 'SYNTAX',
  TypeNotSupported = 'TYPE_NOT_SUPPORTED',
  UnableToParse = 'UNABLE_TO_PARSE'
}

/**
 * Updates a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookUpdate = {
  readonly errors: ReadonlyArray<WebhookError>;
  readonly webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  readonly webhookErrors: ReadonlyArray<WebhookError>;
};

export type WebhookUpdateInput = {
  /** ID of the app to which webhook belongs. */
  readonly app?: InputMaybe<Scalars['ID']['input']>;
  /** The asynchronous events that webhook wants to subscribe. */
  readonly asyncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeAsyncEnum>>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  readonly customHeaders?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  readonly events?: InputMaybe<ReadonlyArray<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The new name of the webhook. */
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  readonly query?: InputMaybe<Scalars['String']['input']>;
  /**
   * Use to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  readonly secretKey?: InputMaybe<Scalars['String']['input']>;
  /** The synchronous events that webhook wants to subscribe. */
  readonly syncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  readonly targetUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  /** Weight unit. */
  readonly unit: WeightUnitsEnum;
  /** Weight value. */
  readonly value: Scalars['Float']['output'];
};

/** An enumeration. */
export enum WeightUnitsEnum {
  G = 'G',
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ',
  Tonne = 'TONNE'
}

/** _Entity union as defined by Federation spec. */
export type _Entity = Address | App | Category | Collection | Group | Order | PageType | Product | ProductMedia | ProductType | ProductVariant | User;

/** _Service manifest as defined by Federation spec. */
export type _Service = {
  readonly sdl?: Maybe<Scalars['String']['output']>;
};

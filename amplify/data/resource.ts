import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Car: a
    .model({
      brand: a.string(),
      model: a.string(),
      year: a.float(), // Remplacez float par int si nécessaire
      pricePerDay: a.float(), // Remplacez float par int si nécessaire
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Rental: a
    .model({
      carId: a.string(),
      userId: a.string(),
      startDate: a.date(),
      endDate: a.date(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  User: a
    .model({
      name: a.string(),
      email: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
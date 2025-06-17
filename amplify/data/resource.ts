import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Car: a.model({
    brand: a.string(),
    model: a.string(),
    isRented: a.boolean(),
    pricePerDay: a.float()
  })
  .authorization(allow => [allow.authenticated()]) // ou adapte selon tes besoins
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool', // Cognito User Pool
  }
});
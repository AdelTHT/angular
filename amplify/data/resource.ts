import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

// filepath: c:\Users\PC\Desktop\DevOps\amplify\amp\angular\amplify\data\resource.ts
const schema = a.schema({
  Car: a
    .model({
      brand: a.string(),
      model: a.string(),
      year: a.float(),
      pricePerDay: a.float(),
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
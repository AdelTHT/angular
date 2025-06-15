import { defineBackend } from '@aws-amplify/backend';
import { auth } from '@aws-amplify/backend/auth';

export const backend = defineBackend({
  auth: auth({
    loginWith: {
      email: true
    }
  }),
});

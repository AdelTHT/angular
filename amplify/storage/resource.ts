import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'carImages',
  access: (allow) => ({
    'car-images/{entity_id}/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.guest.to(['read']) // optionnel, retire si tu veux restreindre aux connectés
    ]
  })
});
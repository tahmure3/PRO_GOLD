import { Mongoose } from 'mongoose';

export const userProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

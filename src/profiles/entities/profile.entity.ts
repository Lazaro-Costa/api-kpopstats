import { Profile } from '@prisma/client';

export class ProfileEntity implements Profile {
  id: number;
  createdAt: Date;
  url: string;
  picId: number;
}

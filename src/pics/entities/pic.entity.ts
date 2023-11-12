import { Pic } from '@prisma/client';
export class PicEntity implements Pic {
  id: number;
  createdAt: Date;
  name: string;
}

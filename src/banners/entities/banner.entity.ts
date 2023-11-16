import { Banner } from '@prisma/client';

export class BannerEntity implements Banner {
  id: number;
  createdAt: Date;
  url: string;
  picId: number;
}

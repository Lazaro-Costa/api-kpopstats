import { Company } from '@prisma/client';

export class CompanyEntity implements Company {
  id: number;
  createdAt: Date;
  name: string;
  founding_date: Date;
  headquarters: string;
  ceo: string;
  more_info: string;
  picsId: number;
}

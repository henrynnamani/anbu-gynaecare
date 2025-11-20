import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'simple-array' })
  content: string[];

  @Column({ type: 'varchar' })
  environmental_impact: string;
}

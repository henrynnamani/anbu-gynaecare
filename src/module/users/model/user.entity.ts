import { Column, Entity } from 'typeorm';

@Entity('users')
export class User {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'number', nullable: true })
  age: number;
}

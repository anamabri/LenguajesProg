import { User } from 'src/auth/user.entity';
import { Local } from 'src/local/local.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NegocioStatus } from './negocio-status.enum';

@Entity()
export class Negocio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  status: NegocioStatus;

  @ManyToOne(() => User, (user) => user.negocios)
  user: User;

  @OneToMany(() => Local, (local) => local.negocio)
  locales: Local[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

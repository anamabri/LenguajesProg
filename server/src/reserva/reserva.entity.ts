import { User } from 'src/auth/user.entity';
import { Local } from 'src/local/local.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reserva extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;

  @Column()
  startHour: string;

  @Column()
  hours: number;

  @Column()
  totalPay: number;

  @ManyToOne(() => User, (user) => user.reservas)
  user: User;

  @ManyToOne(() => Local, (local) => local.reservas)
  local: Local;
}

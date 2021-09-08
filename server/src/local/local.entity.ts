import { Negocio } from 'src/negocio/negocio.entity';
import { Reserva } from 'src/reserva/reserva.entity';
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
import { DaysOfTheWeek } from './days-week.enum';

@Entity()
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  fromDay: DaysOfTheWeek;

  @Column({ nullable: true })
  toDay: DaysOfTheWeek;

  @Column()
  fromHour: string;

  @Column()
  toHour: string;

  @Column()
  costPerHour: number;

  @ManyToOne(() => Negocio, (negocio) => negocio.locales)
  negocio: Negocio;

  @OneToMany(() => Reserva, (reserva) => reserva.local)
  reservas: Reserva[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

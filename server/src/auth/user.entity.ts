import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Negocio } from 'src/negocio/negocio.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { UserType } from './user-type.enum';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  type: UserType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Negocio, (negocio) => negocio.user)
  negocios: Negocio[];

  @OneToMany(() => Reserva, (reserva) => reserva.user)
  reservas: Reserva[];

  async validateUserPassword(password: string): Promise<boolean> {
    const isEqual = await bcrypt.compare(password, this.password);
    return isEqual;
  }
}

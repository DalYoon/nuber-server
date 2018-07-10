import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { verifitationTarget } from "../types/types";

@Entity()
class Vericitation extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() target: verifitationTarget;

  @Column() payload: string;

  @Column() key: string;

  @Column() used: boolean;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Vericitation;

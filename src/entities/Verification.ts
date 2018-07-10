import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
class Vericitation extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() target: string;

  @Column() payload: string;

  @Column() key: string;

  @Column() used: boolean;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Vericitation;

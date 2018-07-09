import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", unique: true })
  @IsEmail()
  email: string;

  @Column({ type: "boolean", default: false })
  verifiedEmail: boolean;

  @Column({ type: "text" })
  firstName: string;

  @Column({ type: "text" })
  lastName: string;

  @Column({ type: "number" })
  age: number;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "text" })
  phoneNumber: string;

  @Column({ type: "boolean", default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: "text", default: false })
  profilePhoto: string;

  @Column({ type: "text" })
  fullName: string;

  @Column({ type: "boolean" })
  isDriving: boolean;

  @Column({ type: "boolean" })
  isRiding: boolean;

  @Column({ type: "boolean" })
  isTaken: boolean;

  // lastLng: float;
  // lastLat: Float
  // lastOrientation: Float

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

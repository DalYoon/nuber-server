import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
  OneToOne
} from "typeorm";

import Message from "./Message";
import User from "./User";
import Ride from "./Ride";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(type => Message, messages => messages.chat)
  messages: Message[];

  @Column({ nullable: true })
  passengerId: number;

  @ManyToOne(type => User, user => user.chatAsPassenger)
  passenger: User;

  @Column({ nullable: true })
  driverId: number;

  @ManyToOne(type => User, user => user.chatAsDriver)
  driver: User;

  @Column({ nullable: true })
  rideId: number;

  @OneToOne(types => Ride, ride => ride.chat)
  ride: Ride;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Chat;

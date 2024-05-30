import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    companyId: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.ADMIN,
    })
    role: UserRole

    @Column({ nullable: false })
    designation: string

    @CreateDateColumn({ nullable: false })
    createdAt: Date

    @UpdateDateColumn({ nullable: false })
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @CreateDateColumn()
    createdAt: Date
}

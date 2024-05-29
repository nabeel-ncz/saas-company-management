import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    ownerId: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    address: string

    @Column({ nullable: false })
    industry: string
    
    @Column({ nullable: false, default: false })
    isDeleted: boolean

    @CreateDateColumn({ nullable: false })
    createdAt: Date

    @UpdateDateColumn({ nullable: false })
    updatedAt: Date
}
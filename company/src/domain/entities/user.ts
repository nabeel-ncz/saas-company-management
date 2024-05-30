enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

export interface UserEntity {
    id?: number
    companyId?: number
    name: string
    email: string
    role: UserRole
    designation: string
    createdAt: Date
    updatedAt: Date
}

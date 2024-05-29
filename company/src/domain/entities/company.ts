export interface CompanyEntity {
    id: number
    ownerId: number
    name: string
    address: string
    industry: string
    isDeleted: boolean
    createdAt: Date | string
    updatedAt: Date | string
}
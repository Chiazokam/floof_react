export type DeedType = {
    id: string;
    title: string;
    status: 'ACTIVE' | 'COMPLETED';
    description: string;
    date: Date;
}

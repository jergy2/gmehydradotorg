export interface InstanceInfoDto {
    instanceType: 'Mastodon' | 'Lemmy';
    name: string;
    url :string;
    registration: 'Closed' | 'ApprovalRequired' | 'Open';
    description: string;
    monthlyActiveUsers: number;
    softwareVersion: string;
    isOnline: boolean;
}
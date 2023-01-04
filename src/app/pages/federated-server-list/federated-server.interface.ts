export interface FederatedServer{
    name: string;
    displayUrl: string;
    fullUrl: string; 
    userCount: number;
    serverStatus: string;
    drsStatus: string;
    adminEmail: string;
    registrationStatus: 'OPEN' | 'BY_INVITE' | 'CLOSED';
    registrationLink: string;
    implementation: string;
    serverLocation: string;
}
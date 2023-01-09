import { OperatorCredential } from "./operator-credential.interface";

export interface FederatedServer{
    name: string;
    displayUrl: string;
    fullUrl: string; 
    userCount: number;
    serverStatus: string;
    drsStatus: string;
    adminEmail: string;
    adminCreds: OperatorCredential[];
    registrationStatus: 'OPEN' | 'BY_INVITE' | 'CLOSED';
    registrationLink: string;
    implementation: string;
    serverLocation: string;
    thumbnailFile: string;
    serverDescription: string;
    exploreLink: string;
    aboutLink: string;
}
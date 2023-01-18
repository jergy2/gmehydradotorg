import { OperatorCredential } from "./operator-credential.interface";

export interface FederatedServer{
    name: string;
    statusPositive: boolean;
    displayUrl: string;
    fullUrl: string; 
    userCount: number;
    serverStatus: string;
    drsStatus: string;
    adminEmail: string;
    adminCreds: OperatorCredential[];
    drsEvidenceLink: string;
    registrationStatus: 'OPEN' | 'BY_INVITE' | 'CLOSED';
    registrationLink: string;
    implementation: string;
    serverLocation: string;
    thumbnailFile: string;
    serverDescription: string;
    exploreLink: string;
    aboutLink: string;
    ownerIsExpanded: boolean;
}
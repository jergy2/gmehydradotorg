import { OperatorCredential } from "./operator-credential.interface";

export interface FederatedServerInfo{
    name: string;
    displayUrl: string;
    fullUrl: string; 
    adminEmail: string;
    adminCreds: OperatorCredential[];
    drsEvidenceLink: string;
    implementation: 'Mastodon' | 'Lemmy' | 'Other';
    serverLocation: string;
    thumbnailFile: string;
    serverDescription: string;
}
import { AuthorityMechanism } from "./authority-mechanism.enum";

export interface CommunityEntry{
    structure: AuthorityMechanism;
    platform: string;
    name: string;
    displayUrl: string;
    fullUrl: string;
    description: string;   
    iconPath: string;
}
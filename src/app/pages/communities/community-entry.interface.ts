import { AuthorityMechanism } from "./authority-mechanism.enum";

export interface CommunityEntry{
    structure: AuthorityMechanism;
    platform: string;
    name: string;
    url: string;
    description: string;   
    iconPath: string;
}
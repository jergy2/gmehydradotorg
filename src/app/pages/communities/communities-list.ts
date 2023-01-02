import { AuthorityMechanism } from "./authority-mechanism.enum";
import { CommunityEntry } from "./community-entry.interface";

export const communitiesList: CommunityEntry[] = [
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Reddit',
        name: 'Superstonk',
        url: 'www.reddit.com/r/superstonk',
        description: 'Primary community for legitimate investors of GameStop',
    },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Reddit',
        name: 'DRS your GME',
        url: 'www.reddit.com/r/DRSyourGME',
        description: 'Community focused on the important subject of DRS GME',
    },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Discord',
        name: 'Superstonk',
        url: '',
        description: 'Discord server run by /r/superstonk mods',
    },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Discord',
        name: 'DRS your GME',
        url: '',
        description: '',
    },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'WT Social',
        name: 'Superstonk',
        url: 'https://wt.social/wt/superstonk',
        description: 'Superstonk community on WT Social',
    },
    {
        structure: AuthorityMechanism.DECENTRALIZED,
        platform: 'Aether',
        name: 'Superstonk',
        url: '',
        description: 'Decentralized Aether community',
    },
];
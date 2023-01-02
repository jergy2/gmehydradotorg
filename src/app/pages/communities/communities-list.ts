import { AuthorityMechanism } from "./authority-mechanism.enum";
import { CommunityEntry } from "./community-entry.interface";

export const communitiesList: CommunityEntry[] = [
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Reddit',
        name: 'Superstonk',
        fullUrl: 'https://www.reddit.com/r/superstonk',
        displayUrl: 'reddit.com/r/superstonk',
        description: 'Primary community for legitimate investors of GameStop',
        iconPath: 'assets/reddit-icon.png',
    },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Reddit',
        name: 'DRS your GME',
        fullUrl: 'https://www.reddit.com/r/DRSyourGME',
        displayUrl: 'reddit.com/r/DRSyourGME',
        description: 'Community focused on the important subject of DRS GME',
        iconPath: 'assets/reddit-icon.png',
    },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'Discord',
        name: 'Superstonk',
        fullUrl: 'https://discord.com/invite/superstonk',
        displayUrl: 'discord.com/invite/superstonk',
        description: 'Discord server run by /r/superstonk mods',
        iconPath: 'assets/discord-icon.png',
    },
    // {
    //     structure: AuthorityMechanism.CENTRALIZED,
    //     platform: 'Discord',
    //     name: 'DRS your GME',
    //     url: '',
    //     description: '',
    //     iconPath: 'assets/discord-icon.png',
    // },
    {
        structure: AuthorityMechanism.CENTRALIZED,
        platform: 'WT Social',
        name: 'Superstonk',
        fullUrl: 'https://wt.social/wt/superstonk',
        displayUrl: 'wt.social/wt/superstonk',
        description: 'Superstonk community on WT Social',
        iconPath: 'assets/wtsocial-icon.png',
    },
    // {
    //     structure: AuthorityMechanism.DECENTRALIZED,
    //     platform: 'Aether',
    //     name: 'Superstonk',
    //     url: 'aether://board/9006d219af22732e3b9dd8e19e028f2ab2a6bb769d8731569096780e14525a0d',
    //     description: 'Decentralized Aether community',
    //     iconPath: 'assets/aether-icon.png',
    // },
];
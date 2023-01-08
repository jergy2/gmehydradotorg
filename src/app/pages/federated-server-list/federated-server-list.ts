import { FederatedServer } from "./federated-server.interface";


export const federatedServerList: FederatedServer[] = [
    {
        name: 'Superstork',
        displayUrl: 'www.superstork.org',
        fullUrl: 'https://www.superstork.org',
        userCount: 150,
        serverStatus: '',
        drsStatus: '',
        adminEmail: 'superstork_admin@protonmail.com',
        registrationStatus: 'OPEN',
        registrationLink: '',
        implementation: 'Mastodon',
        serverLocation: 'Toronto, Canada',
        thumbnailFile: 'assets/superstork-thumb.png',
        serverDescription: 'The superstork watches and protects the nest. This is a place for theoretical discussions about business and stocks - specifically GameStop stock ($GME). Opinions and memes welcome. None of this is financial advice. This server is not affiliated with GameStop Corp. This server is not affiliated with r/superstonk. Server is based in Toronto, Canada',
        exploreLink: 'https://www.superstork.org/public',
    },
    {
        name: 'The Cyber Network',
        displayUrl: 's.thecybernetwork.us',
        fullUrl: 'https://s.thecybernetwork.us',
        userCount: 3,
        serverStatus: '',
        drsStatus: '',
        adminEmail: 'contact@thecybernetwork.us',
        registrationStatus: 'BY_INVITE',
        registrationLink: 'https://s.thecybernetwork.us/invite/Fjwriv6R',
        implementation: 'Mastodon',
        serverLocation: '',
        thumbnailFile: 'assets/cybernetwork-thumb.png',
        serverDescription: 'A place for those of us that want to be a part of a decentralized future. We are gamers, techs, drone pilots, and a multitude of other hobbyists.',
        exploreLink: 'https://s.thecybernetwork.us/public/local',
    },
]
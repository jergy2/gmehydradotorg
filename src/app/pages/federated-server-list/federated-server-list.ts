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
    },
    {
        name: 'The Cyber Network',
        displayUrl: 's.thecybernetwork.us',
        fullUrl: 'https://s.thecybernetwork.us',
        userCount: 3,
        serverStatus: '',
        drsStatus: '',
        adminEmail: 'contact@thecybernetwork.us',
        registrationStatus: 'OPEN',
        registrationLink: 'https://s.thecybernetwork.us/invite/Fjwriv6R',
        implementation: 'Mastodon',
        serverLocation: '',
    },
]
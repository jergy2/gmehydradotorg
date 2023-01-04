import { FederatedServer } from "./federated-server.interface";


export const federatedServerList: FederatedServer[] = [
    {
        name: 'superstork',
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
        name: 'cybernetwork',
        displayUrl: 's.thecybernetwork.us',
        fullUrl: 'https://s.thecybernetwork.us',
        userCount: 3,
        serverStatus: '',
        drsStatus: '',
        adminEmail: '',
        registrationStatus: 'BY_INVITE',
        registrationLink: 'https://s.thecybernetwork.us/invite/Fjwriv6R',
        implementation: 'Mastodon',
        serverLocation: '',
    },
]
import { Server } from "./server.interface";

export const serverList: Server[] = [
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
    },
]
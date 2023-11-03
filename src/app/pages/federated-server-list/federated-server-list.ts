import { FederatedServerInfo } from "./federated-server-info.interface";


export const federatedServerList: FederatedServerInfo[] = [
    {
        name: 'DRSGME/WhyDRS Lemmy',
        displayUrl: 'lemmy.whynotdrs.org',
        fullUrl: 'https://lemmy.whynotdrs.org/',
        adminEmail: '',
        adminCreds: [
            {credName: 'DRSGME.org team', credUrl: 'https://www.drsgme.org'},
        ],
        drsEvidenceLink: '',
        implementation: 'Lemmy',
        serverLocation: '',
        thumbnailFile: 'assets/drsgmewhydrs-thumb.png',
        serverDescription: 'GameStop, US stock markets, direct registration, holding Wall Street accountable, and more',
        monthlyActiveUsers: 100,
        registration: 'Approval Required',
    },

    // {
    //     name: 'The Cyber Network',
    //     displayUrl: 's.thecybernetwork.us',
    //     fullUrl: 'https://s.thecybernetwork.us/',
    //     adminEmail: 'contact@thecybernetwork.us',
    //     adminCreds: [
    //         {credName: '@venivv', credUrl: 'https://s.thecybernetwork.us/@venivv'},
    //         {credName: 'u/Anon_0365Admin', credUrl: 'https://www.reddit.com/user/Anon_0365Admin'},
    //     ],
    //     drsEvidenceLink: 'https://www.reddit.com/r/Superstonk/comments/xvr1bl/moving_this_over_from_gmeorphans/',
    //     implementation: 'Mastodon',
    //     serverLocation: '',
    //     thumbnailFile: 'assets/cybernetwork-thumb.png',
    //     serverDescription: 'A place for those of us that want to be a part of a decentralized future. We are gamers, techs, drone pilots, and a multitude of other hobbyists.',
    // },
]
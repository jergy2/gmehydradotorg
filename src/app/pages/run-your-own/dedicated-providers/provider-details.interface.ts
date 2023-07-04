export interface ProviderDetails{
    appName: 'Mastodon' | 'Lemmy';
    name: string;
    fullUrl: string;
    priceFrom: string;
    priceUrl: string;
    basedLocation: string;
    basedUrl: string;
    suggestedUserCount: number;
    hostingLocations: string;
    isAvailable: boolean;
}
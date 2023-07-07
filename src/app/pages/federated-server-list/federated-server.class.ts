import { FederatedServerInfo } from "./federated-server-info.interface";
import { OperatorCredential } from "./operator-credential.interface";

export class FederatedServer {
    private _name: string;
    private _fullUrl: string;
    private _displayUrl: string;
    private _adminEmail: string;
    private _adminCreds: OperatorCredential[];
    private _drsEvidenceLink: string;
    private _implementation: 'Mastodon' | 'Lemmy' | 'Other';
    private _serverLocation: string;
    private _thumbnailFile: string;
    private _serverDescription: string;

    private _registration: 'Closed' | 'ApprovalRequired' | 'Open' = 'Closed';
    private _monthlyActiveUsers: number = -1;
    private _softwareVersion: string = '';
    private _isOnline: boolean = true;
    
    private _ownerIsExpanded: boolean = false;

    constructor(serverInfo: FederatedServerInfo) {
        this._name = serverInfo.name;
        this._fullUrl = serverInfo.fullUrl;
        this._displayUrl = serverInfo.displayUrl;
        this._adminEmail = serverInfo.adminEmail;
        this._adminCreds = serverInfo.adminCreds;
        this._drsEvidenceLink = serverInfo.drsEvidenceLink;
        this._implementation = serverInfo.implementation;
        this._serverLocation = serverInfo.serverLocation;
        this._thumbnailFile = serverInfo.thumbnailFile;
        this._serverDescription = serverInfo.serverDescription;
    }

    public get name(): string { return this._name; }
    public get fullUrl(): string { return this._fullUrl; }
    public get displayUrl(): string { return this._displayUrl; }
    public get adminEmail(): string { return this._adminEmail; }
    public get adminCreds(): OperatorCredential[] { return this._adminCreds; }
    public get drsEvidenceLink(): string { return this._drsEvidenceLink; }
    public get implementation(): 'Mastodon' | 'Lemmy' | 'Other' { return this._implementation; }
    public get serverLocation(): string { return this._serverLocation; }
    public get thumbnailFile(): string { return this._thumbnailFile; }
    public get serverDescription(): string { return this._serverDescription; }

    public get  registration(): 'Closed' | 'ApprovalRequired' | 'Open' { return this._registration;}
    public get  monthlyActiveUsers(): number { return this._monthlyActiveUsers;}
    public get  softwareVersion(): string { return this._softwareVersion; }
    public get  isOnline(): boolean { return this._isOnline; }

    public get ownerIsExpanded(): boolean { return this._ownerIsExpanded; }

    public onClickOwner(){
        this._ownerIsExpanded = !this._ownerIsExpanded;
    }
}
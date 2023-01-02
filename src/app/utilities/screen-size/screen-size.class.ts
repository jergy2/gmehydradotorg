import { ClientScreenSize } from "./client-screen-size.enum";

export class ScreenSize {

    private _width: number;
    private _componentWidth: number = 0;
    private _height: number;
    private _label: ClientScreenSize;
    private _ngClass: string[];

    public get width(): number { return this._width; }
    public get componentWidth(): number { return this._componentWidth;}
    public get height(): number { return this._height; }
    public get area(): number { return this.width * this.height; }
    public get label(): ClientScreenSize { return this._label; }
    public get ngClass(): string[] { return this._ngClass; }


    public get isMobile(): boolean { return this.label === ClientScreenSize.MOBILE; }
    public get isTablet(): boolean { return this.label === ClientScreenSize.TABLET; }
    public get isNormal(): boolean { return this.label === ClientScreenSize.NORMAL; }
    public get isLarge(): boolean { return this.label === ClientScreenSize.LARGE; }
    public get isVeryLarge(): boolean { return this.label === ClientScreenSize.VERY_LARGE; }
    
    public get isSmallSize(): boolean { return this.isMobile; }
    public get isMediumSize(): boolean { return this.isTablet || this.isNormal; }
    public get isFullSize(): boolean { return this.isLarge || this.isVeryLarge; }


    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
        let label: ClientScreenSize = ClientScreenSize.NORMAL;
        let ngClass: string[] = [];
        if (width <= 400) {
            label = ClientScreenSize.MOBILE;
            ngClass = ['app-size-very-small'];
        }
        if (innerWidth > 400 && innerWidth <= 768) {
            label = ClientScreenSize.TABLET;
            ngClass = ['app-size-small'];
        }
        if (innerWidth > 768 && innerWidth <= 1024) {
            label = ClientScreenSize.NORMAL;
            ngClass = ['app-size-normal'];
        }
        if (innerWidth > 1024 && innerWidth <= 1400) {
            label = ClientScreenSize.LARGE;
            ngClass = ['app-size-large'];
        }
        if (innerWidth > 1400) {
            label = ClientScreenSize.VERY_LARGE;
            ngClass = ['app-size-very-large'];
        }
        this._label = label;
        this._ngClass = ngClass;
    }


    public toString(): string { 
        return "Screen size is ("+this.label+"):  " + this.width + " x " + this.height;
    }
}

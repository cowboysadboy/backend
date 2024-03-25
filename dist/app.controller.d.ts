import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): any;
    getFilter(): string;
    postAvatar(data: {
        url: '';
    }): string;
    postData(data: {
        filter: '';
        helper: boolean;
    }): string;
}

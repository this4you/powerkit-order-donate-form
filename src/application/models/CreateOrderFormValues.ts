import { Region } from './Region.ts';
import { PostOffice } from './PostOffice.ts';

export type CreateOrderFormValues = {
    name: string;
    sureName: string;
    instagram: string;
    phoneNumber: string;
    region: Region;
    postOffice: PostOffice;
    additionalInfo: string;
    approveDocument: FileList
};
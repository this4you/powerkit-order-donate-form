export type CreateOrder = {
    name: string;
    sureName: string;
    instagram: string;
    phoneNumber: string;
    amount: number;
    region: string;
    postOffice: string;
    additionalInfo: string;
    file: ApproveDocument
};

export type ApproveDocument = {
    name: string;
    approveDocument: string;
}
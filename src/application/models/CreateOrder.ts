export type CreateOrder = {
    name: string;
    sureName: string;
    instagram: string;
    phoneNumber: string;
    region: string;
    postOffice: string;
    additionalInfo: string;
    file: ApproveDocument
};

export type ApproveDocument = {
    name: string;
    approveDocument: string;
}
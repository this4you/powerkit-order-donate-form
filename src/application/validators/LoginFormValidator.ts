import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { FormValidator } from '../../components/commons/form/types.ts';
//@ts-ignore
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ValidatorFieldUtils } from './ValidatorUtils.ts';

const FILE_MAX_SIZE_BYTES = 7_000_000;
const MAX_POWER_AMOUNT = 30;

export class OrderFormValidator implements FormValidator<CreateOrderFormValues> {
    validate(data: CreateOrderFormValues): FieldErrors<CreateOrderFormValues> {
        return {
            name: ValidatorFieldUtils.required(data.name) || ValidatorFieldUtils.maxLength(data.name, 50),
            sureName: ValidatorFieldUtils.required(data.sureName) || ValidatorFieldUtils.maxLength(data.sureName, 50),
            instagram: ValidatorFieldUtils.maxLength(data.instagram, 250),
            phoneNumber: ValidatorFieldUtils.required(data.phoneNumber) || this.validatePhoneNumber(data.phoneNumber),
            militaryNumber: ValidatorFieldUtils.maxLength(data.militaryNumber, 50),
            amount: ValidatorFieldUtils.maxAmount(data.amount, MAX_POWER_AMOUNT),
            region: ValidatorFieldUtils.required(data.region),
            postOffice: ValidatorFieldUtils.required(data.postOffice),
            approveDocument: this.validateApproveDocument(data.approveDocument),
        };
    }

    private validateApproveDocument(fileList: FileList | null) {
        if (!fileList || fileList.length == 0) {
            return 'Фото підтвердження є обовʼязковим!';
        }

        if (fileList[0]?.size > FILE_MAX_SIZE_BYTES) {
            return 'Розмір фото є завеликий, завантажте будь ласка інше фото';
        }
    }

    private validatePhoneNumber(phoneNumber: string | null) {
        phoneNumber = phoneNumber.replace("*", "");

        if (phoneNumber && phoneNumber.length < 17) {
            return 'Потрібно заповнити номер телефону'
        }
    }
}
import { TransferTypes } from '../enums';

export interface CreateTransferDefaultBankInput {
  token: string;
  type: TransferTypes.DEFAULT_BANK_ACCOUNT;
  amount?: number;
}

export interface CreateTransferP2PInput {
  type: TransferTypes.P2P;
  document: string;
  amount: number;
}

export type CreateTransferInput = CreateTransferDefaultBankInput | CreateTransferP2PInput;

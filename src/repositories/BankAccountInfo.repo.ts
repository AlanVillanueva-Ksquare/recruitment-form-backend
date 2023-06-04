import BankAccountInfo from "../models/BankAccountInfo";
import { IBankAccountInfo } from "../Interfaces";

// Create
export const createBankAccountInfo = async (
  data: IBankAccountInfo
): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read by ID
export const getBankAccountInfoById = async (
  id: number
): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update by ID
export const updateBankAccountInfoById = async (
  id: number,
  data: IBankAccountInfo
): Promise<BankAccountInfo | null> => {
  try {
    const bankAccountInfo = await BankAccountInfo.findByPk(id);
    if (bankAccountInfo) {
      await bankAccountInfo.update(data);
      return bankAccountInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete by ID
export const deleteBankAccountInfoById = async (
  id: number
): Promise<boolean> => {
  try {
    const bankAccountInfo = await BankAccountInfo.findByPk(id);
    if (bankAccountInfo) {
      await bankAccountInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

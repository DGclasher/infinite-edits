import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import validate from "deep-email-validator";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = async (email: string) => {
  try {
    const { valid } = await validate({
      email: email,
      validateRegex: true,
      validateMx: true,
      validateTypo: true,
      validateDisposable: true,
      validateSMTP: false,
    });
    return valid;
  } catch (error) {
    console.error(error);
    throw new Error("Error validating email");
  }
};

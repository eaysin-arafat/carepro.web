export class TypeValidation {
  static isOnlyNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }
  static isZambiaCellphone = (cellphone: string): boolean => {
    return /^0?\d{0,9}$/.test(cellphone);
  };

  static isPhoneNumber(value: string): boolean {
    return /^[0-9]{9,11}$/.test(value);
  }
  static isZmPhoneInput(value: string): boolean {
    return /^0?\d{0,9}$/.test(value);
  }
  static isNotZMPhoneInput(value: string): boolean {
    return /^\d{0,11}$/.test(value);
  }

  static isOnlyInteger(value: string): boolean {
    return /^\d+$/.test(value);
  }

  static isOnlyFloat(value: string): boolean {
    return /^\d+(\.\d+)?$/.test(value);
  }

  static isOnlyAlphabet(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }
  static isOnlyAlphabetSpace(value: string): boolean {
    return /^[a-zA-Z ]+$/.test(value);
  }
  static isOnlyAlphabetSpaceEmpty(value: string): boolean {
    return /^[a-zA-Z]{0,1}[a-zA-Z ]*$/.test(value);
  }
  static isOnlyNameField(value: string): boolean {
    return /^[a-zA-Z]{0,1}[a-zA-Z .]{0,59}$/.test(value);
  }

  static isOnlyAlphaNumeric(value: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(value);
  }

  static isOnlyAlphaNumericWithSpace(value: string): boolean {
    return /^[a-zA-Z0-9 ]+$/.test(value);
  }

  static isOnlyAlphaNumericWithSpaceAndDot(value: string): boolean {
    return /^[a-zA-Z0-9 .]+$/.test(value);
  }

  static isEmail(value: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
  }

  static isMobileNumber(value: string): boolean {
    return /^[0-9]{10}$/.test(value);
  }

  static isZipCode(value: string): boolean {
    return /^[0-9]{5}$/.test(value);
  }

  static isPassword(value: string): boolean {
    return /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
  }

  static isNrcValid(value: string): boolean {
    return /^\d{6}\/\d{2}\/\d{1}$/.test(value);
  }
  static isUserNameInput(value: string): boolean {
    return /^[A-Za-z0-9]{0,30}$/.test(value);
  }
}

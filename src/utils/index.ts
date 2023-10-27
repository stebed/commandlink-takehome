export const splitCamelCase = (str: string) => {
  return str.split(/(?=[A-Z])/).join(' ');
};

export const isValidName = (name: string) => {
  const NAME_REGEX = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}$/;
  return NAME_REGEX.test(name);
};

export const isValidEmail = (email: string) => {
  const EMAIL_REGEX =
    // eslint-disable-next-line no-useless-escape
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return EMAIL_REGEX.test(email);
};

export const isValidAddress = (address: string) => {
  const ADDRESS_REGEX = /^(\d{1,}) [a-zA-Z0-9\s]+/;
  return ADDRESS_REGEX.test(address);
};

export const isValidCity = (city: string) => {
  const CITY_REGEX = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  return CITY_REGEX.test(city);
};

export const isValidState = (state: string) => {
  const STATE_REGEX = /[A-Z][a-z]+(?: +[A-Z][a-z]+)*/;
  const STATE_ABBRV_REGEX =
    /^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$/gm;

  return STATE_REGEX.test(state) || STATE_ABBRV_REGEX.test(state);
};

export const isValidZip = (zip: string) => {
  const ZIP_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;
  return ZIP_REGEX.test(zip);
};

export const isValidPhone = (phone: string) => {
  const PHONE_REGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return PHONE_REGEX.test(phone);
};

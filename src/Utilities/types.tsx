export type signUpTypes = {
  fullname: string;
  phone_number: string;
  email_address: string;
  message: string;
};

export type carrerOpeningFormType = {
  full_name: string;
  position: string;
  email_address: string;
  cover_letter: null | File;
  resume: null | File;
};

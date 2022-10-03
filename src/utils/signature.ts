import { InputFile } from './fileToInputFile';

export type Signature = {
  color: string,
  avatar?: InputFile,
  firstName: string,
  lastName: string,
  title: string,
  phone: string,
  email: string,
  address: string,
  logo?: InputFile,
  logoAlt: string,
  website: string,
  facebook: string,
  linkedin: string,
  instagram: string,
  twitter: string,
}

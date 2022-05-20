import { Document } from "mongoose";

export default interface User extends Document {
  first_name: string;
  last_name?: string;
  mobile_number: string;
  gender: string;
  email: string;
  password: string;
}

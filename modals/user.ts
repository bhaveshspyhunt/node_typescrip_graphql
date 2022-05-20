import IUser from "interfaces/user.interface";
import mongoose, { Model, Schema } from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
  first_name: String,
  last_name: String,
  mobile_number: String,
  gender: String,
  email: { type: String, required: true },
  password: String,
});

// export interface IUserModal extends Model<IUser> {
//   //   findByCredentials(email: string, password: string): Promise<IUser>;
// }

const User = mongoose.model<IUser>("User", userSchema);

export default User;

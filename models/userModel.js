import mongoose from "mongoose";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import crypto from "crypto";

// User schema definition
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: {
      type: String,
      minLength: [8, "Password must have at least 8 characters"],
      maxLength: [32, "Password must have at most 32 characters"],
    },
    phone: String,
    accountVerified: {type:Boolean, default:false},
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateVerificationCode = function () {
  function generateRandomFiveDigitNumber()
  {
    const firstdigit=Math.floor(Math.random()*9)+1;
    const remainingdigits=Math.floor(Math.random()*10000).toString().padStart(4,0);

    return parseInt(firstdigit+ remainingdigits);
  }
  const verificationCode=generateRandomFiveDigitNumber();
  this.verificationCodeExpire=Date.now()+ 5*60*1000;
  return verificationCode;
}

// // Generate JWT token
// userSchema.methods.generateToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// // Generate reset password token
// userSchema.methods.generateResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString("hex");
//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");
//   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
//   return resetToken;
// };

// Exporting the model
export const User = mongoose.model("User", userSchema);

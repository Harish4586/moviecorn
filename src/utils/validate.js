export const checkValidData=(email,password,fullName)=>{
//using rajex 

const isEmailValid=/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
const isFullNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName);
if(!isEmailValid) return "Email Id is not Valid";
if(!isPasswordValid) return "Password is not Valid";
if(!isFullNameValid) return "Full Name is not Valid";
return null;
};

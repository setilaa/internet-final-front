import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import "./styles/userForm.scss";

import { addUserService } from '../../services/userService';
import { showErrorMessage } from '../../services/httpService';
import { errorMessage, successMessage } from '../../utils/messages';
import { isValidNumericInput } from '../../utils/controlInput';
import {
   correctCharacters,
   isEmail,
   isNumber,
   isPersianWithoutNumber,
   isPersianWithsymbol
} from '../../utils/validation';



const UserForm = () => {

   const [fullName, setFullName] = useState("");
   const [studentNumber, setStudentNumber] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [isLoading, setIsLoading] = useState(false);


   const handelSubmitForm = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      if (validateForm()) {
         const result = await addUserService({
            fullName, studentNumber, email, address
         });

         if (result.error || result.data.error) {
            showErrorMessage(result);
         } else {
            successMessage("کاربر موردنظر باموفقیت اضافه شد :)");
         }
      }

      setIsLoading(false);
   };

   const validateForm = () => {
      if (!fullName.trim() || !studentNumber.trim() || !email.trim() || !address.trim()) {
         errorMessage("لطفا همه مقادیر را وارد نمایید");
         return false;
      }

      if (!isPersianWithoutNumber(correctCharacters(fullName))) {
         errorMessage("نام نامعتبر");
         return false;
      }
      if (!isNumber(correctCharacters(studentNumber))) {
         errorMessage("شماره دانشجویی نامعتبر");
         return false;
      }
      if (!isEmail(correctCharacters(email))) {
         errorMessage("ایمیل نامعتبر");
         return false;
      }
      // if (!isPersianWithsymbol(correctCharacters(address))) {
      //    errorMessage("آدرس نامعتبر");
      //    return false;
      // }

      return true;
   };


   return (
      <div className="form__container">
         <Helmet>
            <title>Add User</title>
         </Helmet>

         <form className="form" onSubmit={handelSubmitForm}>

            <div className="col-3 input-effect">
               <input
                  type="text"
                  className="effect-16"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
               />
               <label>نام و نام خانوادگی :</label>
               <span className="focus-border"></span>
            </div>

            <div className="col-3 input-effect">
               <input
                  type="text"
                  className="effect-16"
                  value={studentNumber}
                  onChange={(e) => setStudentNumber(e.target.value)}
                  onKeyDown={(e) => isValidNumericInput(e)}
               />
               <label>شماره دانشجویی :</label>
               <span className="focus-border"></span>
            </div>

            <div className="col-3 input-effect">
               <input
                  type="email"
                  className="effect-16"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <label>ایمیل :</label>
               <span className="focus-border"></span>
            </div>

            <textarea
               type="email"
               className="form__input"
               rows="2"
               value={address}
               onChange={(e) => setAddress(e.target.value)}
               placeholder="آدرس ..."
            />

            <button type="submit" className="form__btn">
               {isLoading ? <span className="loader"></span> : "افزودن"}
            </button>
         </form>
      </div>
   );
};

export default UserForm;
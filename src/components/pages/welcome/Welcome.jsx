import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from "./Welcome.module.css";
import image from "./welcome.jpg";

const Welcome = () => {
   return (
      <div className={styles.container}>
         <Helmet>
            <title>Welcome</title>
         </Helmet>

         <div className={styles.welcomeContainer}>
            <img src={image} className={styles.image} />
            <div className={styles.buttons}>
               <Link to="/users">مشاهده کاربران</Link>
               <Link to="/users/add">افزودن کاربر</Link>
            </div>
         </div>
      </div>
   );
};

export default Welcome;
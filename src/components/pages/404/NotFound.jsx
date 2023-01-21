import React from "react";
import { Helmet } from "react-helmet";

import styles from "./NotFound.module.css";

const NotFound = () => {
   return (
      <div className={styles.container}>
         <Helmet>
            <title>404 NOT FOUND</title>
         </Helmet>
         <div className={styles.background}></div>
      </div>
   );
};

export default NotFound;
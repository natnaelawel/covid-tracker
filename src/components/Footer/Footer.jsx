import React from 'react'
import { Typography } from '@material-ui/core';
import styles from './Footer.module.css'
function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.menu}>
          <div className={styles.menu_list}>
            <Typography variant="h5" gutterBottom>
              About
            </Typography>
          </div>
          <div className={styles.menu_list}>
            <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
          </div>
          <div className={styles.menu_list}>
            <Typography variant="h5" gutterBottom>
                References  
            </Typography>
          </div>
        </div>
        <Typography variant="h5" component="h2">
          ©2020 copy-right-reserved
        </Typography>
      </div>
    );
}

export default Footer

import { FC } from 'react';
import styles from '../../styles/HomeLayout.module.css';
import { HomeLayoutProps } from '../../types/types';
import Navbar from '../organisms/Navbar';

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;

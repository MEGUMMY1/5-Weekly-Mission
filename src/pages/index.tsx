import React from 'react';
import styles from '../styles/index.module.css';
import Link from 'next/link';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Index = () => {
    return (
        <>
            <Header />
            <div id='root' className={styles.index_container}>
                <p>첫 화면</p>
                <div className={styles.button_container}>
                    <Link href='/folder'>
                        <button className={`${styles.button} button`}>Folder</button>
                    </Link>
                    <Link href='/shared/24'>
                        <button className={`${styles.button} button`}>Shared</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;

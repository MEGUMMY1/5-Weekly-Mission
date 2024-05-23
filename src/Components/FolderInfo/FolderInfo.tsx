import React from 'react';
import { useFetch } from '@/hooks/useFetch';
import { BASE_URL } from '@/constants/baseURL';
import styles from './FolderInfo.module.css';
import Image from 'next/image';
import { SharedMainProps } from '@/types/interface';

const FolderInfo: React.FC<SharedMainProps> = ({ folderId, userId }) => {
    const folderData = useFetch(`${BASE_URL}folders/${folderId}`);
    const folderUserData = useFetch(`${BASE_URL}users/${userId}`);

    return (
        <div className={styles.folder_info_container}>
            <div className={styles.folder_info}>
                {folderUserData && (
                    <>
                        <Image
                            src={folderUserData.data[0].image_source}
                            alt='프로필'
                            width={60}
                            height={60}
                        />
                        <span className={`${styles.owner_name} span`}>
                            {folderUserData.data[0].name}
                        </span>
                    </>
                )}
                <h2 className={`${styles.folder_name} h2`}>{folderData.data[0].name}</h2>
            </div>
        </div>
    );
};

export default FolderInfo;

import React, { useState } from 'react';
import Main from '@/Components/SharedMain/SharedMain';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';

function Shared() {
    const router = useRouter();
    const folderId = router.query['folderId'];
    const [data, setData] = useState([]);

    async function getFolderInfo() {
        const res = await axios.get('folders/');
        const data = res.data ?? [];
        setData(data);
    }

    return (
        <>
            <Header />
            <Main folderId={folderId} />
            <Footer />
        </>
    );
}

export default Shared;

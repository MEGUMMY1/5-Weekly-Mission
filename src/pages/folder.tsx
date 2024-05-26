import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Main from "../Components/FolderMain/FolderMain";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Folder() {
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            router.push("/signin");
        }
    }, []);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Folder;

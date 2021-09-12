import React, { useEffect } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc } from "firebase/firestore";

interface CategoryPageProps {
    category?: string,
}

export const CategoryPage: React.FunctionComponent<CategoryPageProps> = (props) => {

    useEffect(() => {
        const getCooks = async () => {
            const docRef = doc(db, 'beef', '1')
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
        }

        getCooks();
    }, []);

    return (
        <div>HelloWorld</div>
    )
}
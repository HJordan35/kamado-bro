import React, { useEffect } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
interface CategoryPageProps {
    category?: string,
}

const cuts = [
    'Brisket',
    'Ribs',
    'Steak',
    'Tenderloin',
    'Other'
]

export const CategoryPage: React.FunctionComponent<CategoryPageProps> = (props) => {
    const { category } = useParams<{ category?: string, subCategory?: string, }>();

    useEffect(() => {
        const getCooks = async () => {
            const docRef = doc(db, 'beef', '1')
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
        }

        getCooks();
    }, []);


    const renderCutOptions = (cuts: Array<any>) => {
        if (cuts && cuts.length) {
            return cuts.map((cut: string) => {
                const cutRoute = cut.toLowerCase();
                return <li key={cut}><Link to={`/${category}/${cutRoute}`}>{cut}</Link></li>
            })
        }
    }

    return (
        <div>
            <ul>{renderCutOptions(cuts)}</ul>
        </div>
    )
}
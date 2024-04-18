import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from 'react';
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    }, []);

    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => 
                    <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
            <button className="btn btn-outline border-0 border-b-4 text-center mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
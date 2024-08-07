import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
    const [dataSet, setDataSet] = useState([]);

    const fetchData = () => {
        fetch("logements.json").then((response => {
            return response.json()
        })).then((data) => {

            setDataSet(data)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='page-settings'>
            <Navbar />
            <div className='home page-info div-center'>
                <div className='background-div'>
                    <h1 className='title'>Chez vous, partout et ailleurs</h1>
                </div>
                <div className='home-menu'>
                    {dataSet.map((dataFetched, id) => (
                        <div key={id}>
                            <NavLink to={`/rent/${dataFetched.id}`}>
                                < Card cover={dataFetched.cover} title={dataFetched.title} />
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Home;
import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Header from '../Header/Header';
import ProvideServices from '../ProvideServices/ProvideServices';
import SomeWork from '../SomeWork/SomeWork';


const Home = () => {
    return (
        <>
         <Header />
         <ProvideServices />
         <SomeWork />
         <ClientFeedback />
        </>
    );
};

export default Home;
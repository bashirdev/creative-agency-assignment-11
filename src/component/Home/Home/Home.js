import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import ContactUs from '../ContactUs/ContactUs';
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
         <ContactUs />
        </>
    );
};

export default Home;
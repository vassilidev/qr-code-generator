import React from 'react';
import {Container} from "react-bootstrap";
import Logo from '../logo.png';
import Builder from "../components/Builder";

const Home = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-lg-4">
                   <Builder/>
                </div>
                <div className="col-lg-8 text-center">
                    <img src={Logo} alt=""/>
                </div>
            </div>
        </Container>
    );
};

export default Home;

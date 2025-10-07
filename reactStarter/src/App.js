import React from "react";
import './App.css';
import Header from "./components/Header";
import {Outlet} from "react-router-dom";

    const Applayout = ()=>{
        return (
            <div className="app">
                <Header/>
                <div className="body">
                    <Outlet />
                </div>
                
            </div>
        )
    }

export default Applayout;

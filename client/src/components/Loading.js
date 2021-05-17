import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Loading extends React.Component {
    //other logic
    render() {
        return (
            <div style={{ paddingTop: '20%' }}>

                <Loader
                    type="Grid"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={1500} //2.5 secs
                />
            </div>
        );
    }
}
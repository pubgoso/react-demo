import React, { Component } from 'react';
import styles from '../../styles/index.css';
import CopyRight from '../../component/copyRight';
import Header from '../../component/header';
import Contianer from './Contianer';

class User extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className='Body'>

                    <Header/>
                    <Contianer/>
                    <CopyRight/>
                </div>
            </div>            
        )

    }
}

export default User;
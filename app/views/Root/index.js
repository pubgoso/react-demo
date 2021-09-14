import { observer } from 'mobx-react';
import React, { Component} from 'react';
import CopyRight from '../../component/copyRight';
import Header from '../../component/header';
import Contianer from './contianer';
import styles from '../../styles/index.css';

class Root extends Component{
    render(){
        return (
            <div className='Body'>
                <Header/>
                <Contianer/>
                <CopyRight/>
            </div>
        )
    }
}
export default Root;
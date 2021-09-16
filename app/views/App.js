//App.js
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Routers from './routerMap'

// 公共头部组件
import Header from '../component/header';
// 404页面
import NotFound from './NOTFOUND';
import { inject, observer } from 'mobx-react';
import TabPane from '../component/TabPane';
import CopyRight from '../component/copyRight';

@inject('UserStore')
@observer
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { userInfo } = this.props.UserStore;
        console.log('use=',userInfo);
        return (
            <Router>
                <div>
                    <Header />
                    <TabPane/>
                    <CopyRight/>
                    <Switch>
                        {Routers.map((item, index) => {
                            return <Route key={index} path={item.path} exact render={props =>
                            ((userInfo.name ? <item.component {...props} /> : <Redirect to={{
                                pathname: '/login',
                                state: { from: this.props.location }
                            }} />)
                            )} />
                        })}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

// redux拿到token并挂载到App的props上面

export default App;
/*
 * @Author: lanjing
 * @Date: 2022-08-29 15:48:04
 * @LastEditors: lanjing
 * @Description: file content
 */

import { Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import router from './router';

const App = () => {
    const element = useRoutes(router);
    return (
        <div>
            <div>
                <h3>我是头部开始</h3>
                <Link to="/" style={{ marginRight: 16 }}>home</Link>
                <Link to="/sub1" style={{ marginRight: 16 }}>sub1</Link>
                <Link to="/sub2" style={{ marginRight: 16 }}>sub2</Link>
                <h3>我是头部结束</h3>
            </div>
            <div>
                {element}
            </div>
        </div>
    );
};

export default App;
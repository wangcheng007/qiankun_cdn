/*
 * @Author: lanjing
 * @Date: 2022-08-29 16:08:25
 * @LastEditors: lanjing
 * @Description: file content
 */
import { registerMicroApps, start } from 'qiankun';
import { useEffect } from 'react';


registerMicroApps([
    {
        name: 'sub2', // app name registered
        entry: `${window.location.protocol}//${window.location.hostname}:3002`,
        container: '#sub2',
        activeRule: '/sub2',
    }
]);

const Sub1 = () => {

    useEffect(() => {
        start({
            sandbox: true,
        });
    }, []);
    
    return (
        <div>
            <div>我是sub2</div>
            <div id="sub2"></div>
        </div>
    );
}

export default Sub1;
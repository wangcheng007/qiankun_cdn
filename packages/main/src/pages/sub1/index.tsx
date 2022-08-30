/*
 * @Author: lanjing
 * @Date: 2022-08-29 16:08:25
 * @LastEditors: lanjing
 * @Description: file content
 */
import { registerMicroApps, start } from 'qiankun';
import { useEffect } from 'react';

console.log(`${window.location.protocol}//${window.location.hostname}:3001`);

registerMicroApps([
    {
        name: 'sub1', // app name registered
        entry: `${window.location.protocol}//${window.location.hostname}:3001`,
        container: '#sub1',
        activeRule: '/sub1',
    }
]);

const Sub1 = () => {

    useEffect(() => {
        start();
    }, []);
    
    return (
        <div>
            <div>我是sub1</div>
            <div id="sub1"></div>
        </div>
    );
}

export default Sub1;
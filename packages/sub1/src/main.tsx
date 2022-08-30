/*
 * @Author: lanjing
 * @Date: 2022-08-29 16:11:03
 * @LastEditors: lanjing
 * @Description: file content
 */
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './app';

const render = (props: { container?: HTMLElement } = {}) => {
    const { container } = props;

    ReactDOM.render(
        <Router basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/sub1' : '/'}>
            <App />
        </Router>,
        container != null
            ? container.querySelector('#container')
            : document.querySelector('#container')
    );
}

renderWithQiankun({
    mount(props) {
        console.log('mount props:', props);
        render(props);
    },
    bootstrap() {
        console.log('bootstrap');
    },
    unmount(props: any) {
        const { container } = props;
        const mountRoot = container?.querySelector('#container');
        console.log('unmount props:', props);
        ReactDOM.unmountComponentAtNode(
            mountRoot ?? document.querySelector('#container')
        );
    },
    update() {
        console.log('update');
    }
});

if (
    qiankunWindow.__POWERED_BY_QIANKUN__ === false ||
    qiankunWindow.__POWERED_BY_QIANKUN__ == null
) {
    render();
}

import '@/api/new.js'
import { setListDom } from './js/new/index.js';
const data = {
    title: '我是头部',
    lists: ['皮卡丘', '小火龙', '杰尼龟'],
    html: '<p>我是一个p标签</p>'
};
$('body').prepend(setListDom(data));
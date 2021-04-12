import ejs from './list.ejs';
// // import './tpl.css';
export const setListDom = function(data) {
    return ejs(data);
}
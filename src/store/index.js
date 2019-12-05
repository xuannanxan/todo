/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-12-04 14:35:37
 * @LastEditTime: 2019-12-04 15:40:29
 * @LastEditors: Xuannan
 */
import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 创建数据存储仓库
    )
export default store
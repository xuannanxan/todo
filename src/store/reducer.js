/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-12-04 14:38:09
 * @LastEditTime: 2019-12-04 16:54:34
 * @LastEditors: Xuannan
 */
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    return state
}
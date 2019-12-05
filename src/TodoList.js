/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-12-04 12:43:18
 * @LastEditTime: 2019-12-04 17:11:42
 * @LastEditors: Xuannan
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import {changeItem} from './store/changeItem'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.addItem =this.addItem.bind(this)
        
        store.subscribe(this.storeChange) //订阅Redux的状态
        console.log(this.state)
    }


    
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                    <Input placeholder='请输入' style={{ width:'250px'}} onChange={this.changeInputValue} value={this.state.inputValue}/>
                    <Button style={{margin:'0 0 0 10px'}} type="primary" onClick={this.addItem}>增加</Button>
                    <div style={{margin:'10px 0 0 0'}}>
                        <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.delItem.bind(this,index)}>{item}</List.Item>)}
                       
                        />
                    </div>
                </div>
            </div>
         );
    }
    addItem(){
        const action = { type:ADD_ITEM}
        store.dispatch(action)
    }

    delItem(index){
        console.log(index)
        const action = { 
            type:DELETE_ITEM,
            index:index
        }
        store.dispatch(action)
    }

    changeInputValue(e){
        const action = changeItem(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default TodoList;
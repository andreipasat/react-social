import React from 'react'
import profileReducer, { addPostActionCreator, deleteActionCreator } from './profile-reducer'

//1.test data
let state = {
    posts : [
        {id : 1, message : 'Hi my friend' , likes : 1},
        {id : 2, message : 'How are you?' , likes : 10},
        {id : 3, message : 'How are you2?' , likes : 12},
        {id : 4, message : 'How are you3?' , likes : 13},
    ]
}

it('new post should be added and length of post should be 5', () => {
    
    //1.test data
    let state = {
        posts : [
            {id : 1, message : 'Hi my friend' , likes : 1},
            {id : 2, message : 'How are you?' , likes : 10},
            {id : 3, message : 'How are you2?' , likes : 12},
            {id : 4, message : 'How are you3?' , likes : 13},
        ]
    }
    let actionCreator = addPostActionCreator('new post text')
    
    //2.action
    let newState = profileReducer(state,actionCreator)     

    //3.expectations
    expect(newState.posts.length).toBe(5)
})

it('new added post should be correct', () => {
    
    let actionCreator = addPostActionCreator('TestText')
    
    //2.action
    let newState = profileReducer(state,actionCreator)     

    //3.expectations
    expect(newState.posts[4].message).toBe('TestText')
})

it('after delete length of array should be decremented', () => {
    
    let actionCreator = deleteActionCreator(1)
    
    //2.action
    let newState = profileReducer(state,actionCreator)     

    //3.expectations
    expect(newState.posts.length).toBe(3)
})

it('after delete length of array should`nt be decremented if post id is incorrect', () => {
    
    let actionCreator = deleteActionCreator(10)
    
    //2.action
    let newState = profileReducer(state,actionCreator)     

    //3.expectations
    expect(newState.posts.length).toBe(4)
})

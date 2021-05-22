import { baseAxios } from '../index'

export const getAllTodoList = (dispatch) => {
    baseAxios.get("/todo?_sort=views&_order=desc")
    .then((res) => {
        dispatch({type: "SET_TODO", data: res.data})
    })
    .catch((err) => {
        console.log("FAILED GET ALL")
    })
}

export const getOneTodoList = (dispatch, id) => {
    baseAxios.get(`/todo/${id}`)
    .then((res) => {
        console.log("SUCCESS GET ONE")
    })
    .catch((err) => {
        console.log("FAILED GET ONE")
    })
}

export const addTodoList = (dispatch, data, history) => {
    baseAxios.post("/todo", data)
    .then((res) => {
        history.push('/')
        console.log("SUCCESS ADD")
    })
    .catch((err) => {
        console.log("FAILED ADD")
    })
}

export const editTodoList = (dispatch, id, cb) => {
    baseAxios.put("/todo")
    .then((res) => {
        console.log("SUCCESS EDIT")
    })
    .catch((err) => {
        console.log("FAILED EDIT")
    })
}

export const deleteTodoList = (dispatch, id) => {
    baseAxios.delete(`/todo/${id}`)
    .then((res) => {
        getAllTodoList(dispatch)
    })
    .catch((err) => {
        console.log("FAILED EDIT")
    })
}
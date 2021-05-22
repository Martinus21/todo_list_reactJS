import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoList, getAllTodoList } from '../../stores';

// Import Components
import Input from '../../components/input'

function List() {
    const dispatch = useDispatch()
    const dataTodoList = useSelector ( (state) => state.todoReducer.list);

    useEffect(()=>{
        getAllTodoList(dispatch)
    }, [dispatch])

    return (
        <div className="list-container">
            <div className="container-fluid">
                <div className="row mt-2">
                    <div className="col-12 col-md-4">
                            <Input.INPUTICONR placeholder="Search..." addIcon="fas fa-search" />
                    </div>
                    <div className="col-12 col-md-8">
                    </div>
                </div>
            </div>

            <div className="container mt-4 mb-4" style={{height: "50vh", overflowY: "scroll"}}>
                {
                    dataTodoList?.map((datas, index) => {
                        return(
                            <div className="row my-2" key={index}>
                                <div className="col-12 col-md-12">
                                    <div className="card" style={{background: "#222222"}}>
                                        <div className="card-body">
                                            <div className="container-fluid">
                                                <div className="row no-gutter">
                                                    <div className="col-12 col-md-10">
                                                        <div className="row">
                                                            <div className="col-12 col-md-4">
                                                                <h4 className="mb-0 font-18 text-white font-weight-bold">{datas.title}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-1">
                                                            <div className="col-12 col-md-4">
                                                                <p className="mb-0 font-10 text-warning">Author : {datas.author}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-1">
                                                            <div className="col-12 col-md-12">
                                                                <p className="mb-0 font-12 text-white">{datas.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-2 d-flex">
                                                        <Link to={`/add/${datas.id}`} className="nav-button w-100 mr-1">
                                                            <div className="buttonAdd text-center" style={{
                                                                background: "#F9BA42", 
                                                                borderRadius: "4px"
                                                            }}>
                                                                <i className="fas fa-edit"></i>
                                                            </div>
                                                        </Link>
                                                        <span className="nav-button w-100 ml-1" style={{cursor: "pointer"}} onClick={() => deleteTodoList(dispatch, datas.id)}>
                                                            <div className="buttonAdd text-center" style={{
                                                                background: "#cf2828", 
                                                                borderRadius: "4px"
                                                            }}>
                                                                <i className="fas fa-trash"></i>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Link to="/add" className="nav-button">
                <div className="buttonAdd mr-3 d-flex justify-content-center align-items-center" style={{
                    position: "absolute",
                    right: "0px", 
                    bottom: "15px", 
                    background: "#222222", 
                    width: "50px", 
                    height: "50px",
                    borderRadius: "100%"
                }}>
                        <i className="fas fa-plus text-white"></i>
                </div>
            </Link>
        </div>
    )
}

export default List

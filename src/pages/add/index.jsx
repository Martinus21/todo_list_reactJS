import React, { useState } from 'react'

// Import Redux and Stores
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { addTodoList } from '../../stores'

// Import Components
import Input from '../../components/input'
import Button from '../../components/button'

function AddList() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")

    const onClickAddList = (e) => {
        e.preventDefault()
        addTodoList(dispatch, {
            title: title, 
            author: author, 
            description: description
        }, history)
    }

    return (
        <div className="list-container">
            <div className="container-fluid mt-3">
                <div className="row mt-2 justify-content-between">
                    <div className="col-12 col-md-4">
                        <h3 className="font-20">Add List</h3>
                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center justify-content-end">
                        <Link to="/" className="nav-button">
                            <i className="fas fa-arrow-left px-2" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row no-gutter justify-content-center">
                    <div className="col-8">
                        <form className="form-horizontal auth-form">
                            <div className="form-group">
                                <label className="ci-text-blueLight" for="title">Title</label>
                                <Input.INPUTICONR value={title} onChange={e => setTitle(e.target.value)} types="text" id="title" placeholder="Masukan title"/>
                            </div>

                            <div className="form-group">
                                <label className="ci-text-blueLight" for="author">Author</label>
                                <Input.INPUTICONR value={author} onChange={e => setAuthor(e.target.value)} types="text" id="author" placeholder="Masukan author"/>
                            </div>

                            <div className="form-group">
                                <label className="ci-text-blueLight" for="description">Description</label>
                                <textarea className="form-control cs-inputDefault-bg-input" style={{paddingLeft: "12px"}} rows="3" value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="Masukan description"></textarea>
                            </div>

                            <div className="form-group mb-4 mt-4 row">
                                <div className="col-12">
                                    <Button.WARNING
                                        onClick={onClickAddList}
                                        addClass="w-100 py-2"
                                        type="submit"
                                        text="Add List"
                                        style={{background: "#f9ba42", borderRadius: "4px"}}
                                    />
                                </div>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddList

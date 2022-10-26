import React, { useState } from 'react'

const Card = ({ user, updateUser }) => {

    //console.log({user});
    const [newEmail, setEmail] = useState("");
    let id;
    const setModaldata = (e) => {
        id = e.target.dataset.id
        console.log({id: e.target.dataset.id, id});

     }
   
    const updateCard = (e, email) => {
        console.log({id, email})
        //const data = updateUser(id, newEmail);
        if (newEmail !== user.email) {
            document.querySelector('.userEmail').innerHTML = newEmail;
            document.querySelector('.modal').setAttribute('aria-hidden',"true")
        }
        //return data
    }

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Update User</h5>
                <p className="id" style={{ display: "hidden" }}>{user.id}</p>
                <h6 className="card-subtitle mb-2">{user.name}</h6>
                <p className="card-text userEmail">{user.email}</p>
                <button className="card-link" data-toggle="modal" onClick={(e) => setModaldata(e)} data-id={user.id} data-target="#exampleModal">Update </button>
            </div>

            <div className="modal" id="exampleModal" tabIndex="-1" data-id={user.id} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name='email' value={newEmail} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="hidden" name='id' value={id} />

                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" onClick={(e) => updateCard(e,newEmail)}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
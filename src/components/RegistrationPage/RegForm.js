import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './RegForm.css'
import { useForm } from 'react-hook-form';

const RegForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {eventTitle} = useParams();
    const history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) =>{
        history.push(`/userRegister`);

        fetch('http://localhost:5000/addUserEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div className="registrationForm">
            <div className="p-5">
                <Link to="/home"><img src="https://iili.io/2VACFV.png" style={{width: 200}} className="d-inline-block align-top" alt=""/></Link>
            </div>
            <div className="w-50 mx-auto border p-5 bg-white">
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        
                    <input name="name" className="form-control" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name"/>
                    {errors.name && <span className="error">Name is required</span>}
                    <br/>

                    <input name="email" className="form-control" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email"/>
                    {errors.email && <span className="error">Email is required</span>}
                    <br/>

                    <input type="date" name="date" className="form-control" ref={register({ required: true })} placeholder="Date" />
                    {errors.date && <span className="error">Date is required</span>}
                    <br/>

                    <input name="description" className="form-control" ref={register({ required: true })} placeholder="Description"/>
                    {errors.description && <span className="error">Description is required</span>}
                    <br/>

                    <input name="eventTitle" className="form-control" defaultValue={eventTitle} ref={register({ required: true })} placeholder="Event Title"/>
                    {errors.eventTitle && <span className="error">eventTitle is required</span>}
                    <br/>
                    <button className="btn btn-primary" type="submit">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegForm;
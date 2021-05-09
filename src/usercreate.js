
import { useContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserContext from './usercontext';


export default function UserCreate() {
    let UserData = useContext(UserContext)
    let [firstName, setfirstName] = useState("")
    let [lastName, setlastName] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let UserSubmit = (e) => {
        e.preventDefault()
        UserData.setuserList([...UserData.userList,

            {
                firstName,
                lastName,
                email,
                password
            }]

        )


    }
  
    return <>
        <div className="container">

            <form onSubmit={UserSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>User Form</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)}></input>
                    </div>

                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)}></input>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <label>Email</label>
                        <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)} ></input>
                    </div>

                    <div className="col-lg-6">
                        <label>Password</label>
                        <input className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                </div>
            </form>
        </div>

    </>
}
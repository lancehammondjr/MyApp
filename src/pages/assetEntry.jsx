import React from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const assetentry = (props: { name: string }) => {

    return (
        <div>
            <div className="row g-2">
            <div className="col-md">
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Device Name"/>
                <label for="floatingInput">Device Name</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="NIC Address"/>
                <label for="floatingInput">NIC Address</label>
                </div>
            </div>
            </div>


            <div className="row g-2">
            <div className="col-md">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
            </div>
                <div className="col-md">
                    <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Office Number"/>
                    <label for="floatingInput">Office Number</label>
                    </div>
                </div>
            </div>


            <div className="row g-2">
            <div className="col-md">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Shared Device</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                    <label for="floatingSelect">Shared Device</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>In Storage</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                    <label for="floatingSelect">In Storage</label>
                </div>
            </div>
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Been Decomissioned</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                    <label for="floatingSelect">Been Decomissioned</label>
                </div>
            </div>


            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
        </div>
    )
};


export default assetentry;
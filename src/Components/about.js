import React from "react";
import axios from 'axios';


export default function About() {

    const [success, setSuccess] = React.useState(null);
    const [title, setTitle] = React.useState(null)

    const changeAbout = (event) => {
        event.preventDefault();
        axios.put('about/update-about', { title })
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)

                    // reset form
                    setTitle('')
                    setInterval(() => {
                        setSuccess(null)
                    }, 3000)
                }
            })

    }

    const successFun = () => {
        if (success == null) {
            return null;
        }
        else if (success == true)
            return (
                <div class="alert alert-success" role="alert">
                    Success to update about
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to  update about
            </div>)



    }
    return (
        <div>

            <br />
            <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
            <i style={{ marginLeft: '0px', fontSize: '25px' }}   > About </i>
            <i className="fa fa-angle-right" style={{ marginLeft: '0px', fontSize: '30px' }}></i>

            {
                successFun()
            }

            <form style={{
                backgroundColor: 'white',
                padding: '5%',
                borderRadius: '13px',
                margin: '4vh'
            }}>



                <div class="form-group">
                    <label >About</label>
                    <textarea class="form-control " required style={{ minHeight: '200px' }} onChange={(event) => setTitle(event.target.value)}></textarea>
                </div>


                <br />

                <button type="submit" className="btn btn-warning" onClick={(event) => changeAbout(event)}>Update new about</button>
            </form>
        </div>
    );
}
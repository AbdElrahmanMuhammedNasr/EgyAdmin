import React, { useEffect } from "react";
import axios from 'axios';
import uuid from "react-uuid";

export default function Section() {
    const url = axios.defaults.baseURL;

    const [section, setSection] = React.useState([]);

     //  get sliders
     useEffect(() => {
        axios.get('section/get-section')
            .then(res => {
                if (res.status == 200) {
                    setSection(res.data);
                }
            }).catch(e => {
                setSuccess(false)
            })

    }, [])

    // 
    const [name, setName] = React.useState(null);
    const [success, setSuccess] = React.useState(null);


    const onAddNewSection = (event) => {
        event.preventDefault();

        axios.post('section/add-section', {name})
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)
                    setSection([...section, res.data]);
                    
                    setName('')

                    setInterval(() => {
                        setSuccess(null)
                    }, 3000)
                }
            })

        // console.log({ image, title, subtitle })
    }

    const onDelete = (event, id) => {
        event.preventDefault();
        console.log(id)

        axios.delete('section/delete-section/' + id)
            .then(res => {
                if (res.status == 200) {
                    setSection([...section.filter(s => s._id != id)]);
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
                    Success to Add section
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to  add Section
            </div>)


    }
    return (

        <div className="row" style={{ padding: '0px' }}>


            <div className=" col-lg-8 col-md-12" style={{ height: '100vh', borderRight: '3px solid black' }}>


                <br />
                <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
                <i style={{ marginLeft: '0px', fontSize: '25px' }}   > Sections </i>
                <i className="fa fa-angle-right" style={{ marginLeft: '0px', fontSize: '30px' }}></i>



                {
                    successFun()
                }



                <form style={{
                    backgroundColor: 'white',
                    padding: '5%',
                    borderRadius: '13px',
                    marginTop: '4vh'
                }}>
                    


                    
                    <div className="form-group">
                        <label for="exampleInputEmail1">name</label>
                        <input type="text" class="form-control" onChange={(event) => setName(event.target.value)} value={name}/>
                    </div>
                    <br />         
                    <br />


                    <button type="submit" className="btn btn-primary " onClick={onAddNewSection}>Add new section</button>
                </form>

            </div>
            <div className=" col-4 d-none d-md-block" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll ', margin: '0px', padding: '0px' }}>
                {
                    section.map((e) => {
                        return (

                            <div key={uuid()} className="card " style={{ margin: '10px ' }}>
                                {/* <h5 className="card-header">{e.name}</h5> */}

                                <div className="card-body ">
                                    <div class="card">
                                        <div class="card-body">
                                            <p className="card-text">{e.name}</p>
                                        </div>
                                    </div>
                                    <br />
                                    <button className="btn btn-outline-danger" onClick={(event) => onDelete(event, e._id)}>Delete</button>
                                </div>
                            </div>


                        );
                    })
                }

            </div>

        </div>
    );
}
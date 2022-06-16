import React, { useEffect } from "react";
import img from '../assets/1.jpg'
import axios from 'axios';
import uuid from "react-uuid";

export default function Services() {
    const url = axios.defaults.baseURL;

    const [service, setService] = React.useState([]);


    //  get service
    useEffect(() => {
        axios.get('service/get-services')
            .then(res => {
                if (res.status == 200) {
                    setService(res.data);
                }
            }).catch(e => {
                setSuccess(false)
            })

    }, [])

    // 

    const [image, setImage] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [subtitle, setSubtitle] = React.useState(null);

    const [success, setSuccess] = React.useState(null);


    const onAddNewService = (event) => {
        event.preventDefault();

        axios.post('service/add-service', { image, name, subtitle })
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)
                    setService([...service, res.data]);
                    setInterval(() => {
                        setSuccess(null)
                    }, 3000)
                }
            })
    }
    const onDelete = (event, id) => {
        event.preventDefault();
        console.log(id)

        axios.delete('service/delete-service/' + id)
            .then(res => {
                if (res.status == 200) {
                    setService([...service.filter(s => s._id != id)]);
                }
            })

    }



    const getimage = (event) => {
        const file = event.target.files[0]
        // console.log(file)
        let formData = new FormData();
        formData.append("picture", file);
        axios.post('upload/image', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            setImage(response.data)
            // console.log();
        }).catch((error) => {
            console.log(error);
        });
    }

    const successFun = () => {
        if (success == null) {
            return null;
        }
        else if (success == true)
            return (
                <div class="alert alert-success" role="alert">
                    Success to add new project
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to add new project
            </div>)

    }
    return (
            <div className="row" style={{ padding: '0px' }}>
                <div className=" col-lg-8 col-md-12" style={{ height: '100vh', borderRight: '3px solid black' }}>

                    <br />
                    <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
                    <i style={{ marginLeft: '0px', fontSize: '25px' }}   > Service </i>
                    <i className="fa fa-angle-right" style={{ marginLeft: '0px', fontSize: '30px' }}></i>


                    <form style={{
                        backgroundColor: 'white',
                        padding: '5%',
                        borderRadius: '13px',
                        marginTop: '4vh'
                    }}>


                        {
                            successFun()
                        }
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" onChange={(event) => getimage(event)} />
                        </div>

                        <br />

                        <div className="form-group">
                            <label for="exampleInputEmail1">Service Name</label>
                            <input type="text" class="form-control" required aria-describedby="emailHelp" onChange={(event) => setName(event.target.value)} />
                        </div>
                        <br />


                        <div class="form-group">
                            <label for="validationTextarea">Service subtitle</label>
                            <textarea class="form-control " required style={{ minHeight: '150px', maxHeight: '150px' }} onChange={(event) => setSubtitle(event.target.value)}></textarea>
                        </div>

                        <br />




                        <button type="submit" className="btn btn-primary " onClick={onAddNewService}>Add new service</button>
                    </form>

                </div>
                <div className="col-4 d-none d-md-block" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        service.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{ margin: '10px' }}>
                                        <h5 className="card-header">{e.name}</h5>
                                        <div className="card-body">

                                            <img src={url + e.image} class="card-img-top" style={{ height: '200px', borderRadius: '0%', margin: '10px 0px ' }} />

                                            <div class="card">
                                                <div class="card-body">
                                                    <p className="card-text">{e.subtitle}</p>
                                                </div>
                                            </div>
                                            <br />


                                            <button className="btn btn-outline-danger" onClick={(event) => onDelete(event, e._id)}>Delete</button>
                                        </div>
                                    </div>

                                </>
                            );
                        })
                    }

                </div>

            </div>
    );
}
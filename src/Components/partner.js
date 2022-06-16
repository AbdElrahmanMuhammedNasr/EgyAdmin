import React, { useEffect } from "react";
import axios from 'axios';
import uuid from "react-uuid";

export default function Partner() {
    const url = axios.defaults.baseURL;

    const [partner, setPartner] = React.useState([]);

    //  get partners
    useEffect(() => {
        axios.get('partner/get-partners')
            .then(res => {
                if (res.status == 200) {
                    setPartner(res.data);
                }
            }).catch(e => {
                setSuccess(false)
            })

    }, [])

    // 

    const [image, setImage] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [success, setSuccess] = React.useState(null);


    const addPartner = (event) => {

        axios.post('partner/add-partner', { image, name })
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)
                    const _id = res.data._id;
                    setPartner([...partner, { _id, image, name }]);
                }
            })

    }

    const onDelete = (event, id) => {
        event.preventDefault();
        // console.log(id)

        axios.delete('partner/delete-partner/' + id)
            .then(res => {
                if (res.status == 200) {
                    setPartner([...partner.filter(s => s._id != id)]);
                }
            })

    }

    const getimage = (event) => {
        const file = event.target.files[0]
        let formData = new FormData();
        formData.append("picture", file);
        axios.post('upload/image', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            setImage(response.data)
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
                    Success to add new partner
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to add new partner
            </div>)

    }

    return (
            <div className="row" style={{ padding: '0px' }}>
                <div className="col-8" style={{ height: '100vh', borderRight: '3px solid black' }}>

                    <br />
                    <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
                    <i style={{ marginLeft: '0px', fontSize: '25px' }}   > Partners </i>
                    <i className="fa fa-angle-right" style={{ marginLeft: '0px', fontSize: '30px' }}></i>


                    <div style={{
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
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" required aria-describedby="emailHelp" onChange={(event) => setName(event.target.value)} />
                        </div>
                        <br />



                        <button type="submit" className="btn btn-primary " onClick={(event) => addPartner(event)}>Add new partner</button>
                    </div>

                </div>
                <div className="col-4" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        partner.map((e) => {
                            return (
                                <div key={uuid()} className="card" style={{ margin: '10px' }}>
                                    <h5 className="card-header">{e.name}</h5>
                                    <div className="card-body">
                                        <img src={url + e.image} class="card-img-top" style={{ height: '200px', borderRadius: '0%', margin: '10px 0px ' }} />
                                        <br /><br />
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
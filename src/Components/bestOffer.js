import React, { useEffect } from "react";
import img from '../assets/1.jpg';
import axios from 'axios';
import uuid from "react-uuid";

export default function BestOffer() {
    const url = axios.defaults.baseURL;

    const [offer, setOffer] = React.useState([]);

    //  get offers
    useEffect(() => {
        axios.get('offer/get-offers')
            .then(res => {
                if (res.status == 200) {
                    setOffer(res.data);
                    // console.log(res.data);

                }
            }).catch(e => {
                setSuccess(false)
            })

    }, [])

    // 

    const [images, setImages] = React.useState([]);
    const [title, setTitle] = React.useState(null);
    const [subtitle, setSubtile] = React.useState(null);
    const [oldPrice, setOldPrice] = React.useState(null);
    const [newPrice, setNewPrice] = React.useState(null);
    const [exDate, setExDate] = React.useState(null);


    const [success, setSuccess] = React.useState(null);

    const addNewOffer = (event) => {

        event.preventDefault();
        console.log({ images, title, subtitle, oldPrice, newPrice, exDate })

        axios.post('offer/add-offer', { images, title, subtitle, oldPrice, newPrice, exDate })
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)
                    setOffer([...offer, res.data]);
                    setInterval(() => {
                        setSuccess(null)
                    }, 3000)
                }
            })

    }

    const getimage = (event) => {
        const file = event.target.files

        for (let i = 0; i < file.length; i++) {
            let formData = new FormData();
            formData.append("picture", file[i]);

            axios.post('upload/image', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((response) => {
                // console.log(response.data);
                images.push(response.data)
                // console.log(images);

            }).catch((error) => {
                console.log(error);
            })
        }



    }
    const onDelete = (event, id) => {
        event.preventDefault();
        console.log(id)

        axios.delete('offer/delete-offer/' + id)
            .then(res => {
                if (res.status == 200) {
                    setOffer([...offer.filter(s => s._id != id)]);
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
                    Success to add new offer
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to add new offer
            </div>)

    }

    return (
            <div className="row" style={{ padding: '0px' }}>
                <div className=" col-lg-8 col-md-12" style={{ height: '100vh', borderRight: '3px solid black' }}>
                    <br />
                    <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
                    <i style={{ marginLeft: '0px', fontSize: '25px' }}   > Offers </i>
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
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" multiple onChange={(event) => getimage(event)} />
                        </div>

                        <br />

                        <div className="form-group">
                            <label for="exampleInputEmail1">Offer Title</label>
                            <input type="text" class="form-control" required aria-describedby="emailHelp" onChange={(event) => setTitle(event.target.value)} />
                        </div>
                        <br />


                        <div class="form-group">
                            <label for="validationTextarea">Offer Subtitle</label>
                            <textarea class="form-control " required style={{ minHeight: '150px', maxHeight: '150px' }} onChange={(event) => setSubtile(event.target.value)} ></textarea>
                        </div>

                        <br />


                        <div class="row">
                            <div class="col">
                                <label >Old Price</label>

                                <input type="text" class="form-control" onChange={(event) => setOldPrice(event.target.value)} />
                            </div>
                            <div class="col">
                                <label >New Price</label>
                                <input type="text" class="form-control" onChange={(event) => setNewPrice(event.target.value)} />
                            </div>
                        </div>
                        <br />

                        <div class="form-group">
                            <label for="validationTextarea"> Expire Date</label>
                            <input type="date" class="form-control" id="date" name="date" onChange={(event) => setExDate(event.target.value)} />
                        </div>

                        <br />
                        <button type="submit" className="btn btn-primary" onClick={(event) => addNewOffer(event)}>Add new offer</button>
                    </form>

                </div>
                <div className="col-4 d-none d-md-block" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        offer.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{ margin: '10px' }}>
                                        <h5 className="card-header">{e.title}</h5>
                                        <div className="card-body">
                                            <img src={url + e.images[0]} class="card-img-top" style={{ height: '200px', borderRadius: '0%', margin: '10px 0px ' }} />

                                            <div class="card">
                                                <div class="card-body">
                                                    <p className="card-text">
                                                        <p className="card-text">{e.subtitle}</p>
                                                    </p>
                                                </div>
                                            </div>


                                            <br />

                                            <div class="card">
                                                <div class="card-body">
                                                    <p className="card-text">
                                                        <p className="card-text">Offer Expire Date: <span style={{ color: 'red' }}>{e.exDate.split('T')[0]} </span></p>
                                                    </p>

                                                </div>

                                                <div class="card-body">
                                                    <p className="card-text">
                                                        <p className="card-text">
                                                            <p className="card-text">Old price: <span style={{ color: 'red' }}>{e.oldPrice} EGP</span> to New Price:<span style={{ color: 'red' }}>{e.newPrice} EGP</span> </p>
                                                        </p>
                                                    </p>

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
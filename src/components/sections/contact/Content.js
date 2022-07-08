import React, { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { toast ,ToastContainer} from 'react-toastify';
import AppService from '../../../services/app.service';


function Content(props) {
    const [files, setFiles] = useState([]); 
    const [fields, setfields] = useState({})

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div className="thumb" key={file.name}> 
            <div className="thumbInner">
                <img
                    src={file.preview}
                    alt="img"
                />
            </div>
        </div> 
    ));
    const handleChange = (e)=>{
        let field = fields;
        field[e.target.name] = e.target.value;
        setfields(field);
  
      }
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    const onSubmitContact = (e) =>{
        e.preventDefault()
        if(fields["email"] && fields["name"] && fields["phone"] && fields["message"]){
            let response = AppService.postContactInquiry({inquiry_email:fields["email"],inquiry_phone:fields["phone"],inquiry_message:fields["message"],inquiry_name:fields["name"]}).then((response) => {
                toast.success('Thank You for conatcting us')
                window.location.reload()
              });
            
        }else{
           
            toast.error("All fields are required")
        }
        
    }
    return (
        <div className="section pt-5">
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row">
                    <Tab.Container defaultActiveKey="tab1">
                        {/* Tabs Start */}
                        {/* <div className="col-md-5">
                            <Nav variant="tabs" className="nav nav-tabs tab-cards">
                                <h3>Get in Touch</h3>
                                <p className="mb-4">Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</p>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab1"><span><img src={process.env.PUBLIC_URL + "/assets/img/contact/email.svg"} alt="img" /></span>Company112@mail.com</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab2"><span><img src={process.env.PUBLIC_URL + "/assets/img/contact/phone-call.svg"} alt="img" /></span> +44 345 678 903 | +44 345 678 90</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab3"><span><img src={process.env.PUBLIC_URL + "/assets/img/contact/fax.svg"} alt="img" /></span> +22 345 678 903 11</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div> */}
                        {/* Tabs End */}
                        {/* Tab Content Start */}
                        <div className="col-md-7">
                            <form>
                                <Tab.Content className="m-0 p-4">
                                        <div className="row"> 
                                        <div className="col-md-12 form-group">   
                                        <h3>Quick Contact</h3>
                                        <p className="mb-4">Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</p>  
                                       
                                            <div className="row">
                                                <div className="col-md-4 form-group">
                                                    <label>Full Name</label>
                                                    <input onChange={handleChange} type="text" 
                                                    className="form-control" placeholder="" name="name" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Email Address</label>
                                                    <input onChange={handleChange} type="email" 
                                                    className="form-control" placeholder="" name="email" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Phone</label>
                                                    <input onChange={handleChange} type="number" 
                                                    className="form-control" placeholder="" name="phone" />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <label>Your Message</label>
                                                    <textarea onChange={handleChange} 
                                                    className="form-control" placeholder="Type your message..." 
                                                    name="message" rows={7} />
                                                </div>
                                            </div>
                                            <button onClick={(e)=>{onSubmitContact(e)}} 
                                            className="btn-custom secondary btn-block">Send Message</button>
                                        

                                        </div>
                                    </div>
                                    
                                </Tab.Content>
                            </form>
                        </div>
                    </Tab.Container>
                    {/* Tab Content End */}
                </div>
            </div>
        </div>
    );
}

export default Content;
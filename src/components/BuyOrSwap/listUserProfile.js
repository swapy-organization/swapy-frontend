import NavBar from "../NavBar/NavBar";
import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import axios from "axios";
import PageNotFound from "../../404";

function ListUserProfile () {
    const [ user, setUser ] = React.useState( {} );
    const [ error, setError ] = React.useState( false );
    const [ loading, setLoading ] = React.useState( true );
    const { id } = useParams();
    const getUser = async () => {
        await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/userprofile/${id}` ).then( res => {
            setUser( res.data.user );
            setLoading( false );
        } ).catch( err => {
            setError( true );
        } );
    };

    useEffect( () => {
        getUser();
    }, [] );

    return (
        loading ?
            <Flex h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Spinner animation="border" variant="primary" />
            </Flex>
            :
            error ?
                <PageNotFound />
                :
                <>
                    <NavBar />
                    <section className="vh-100" style={{ backgroundColor: '#f4f5f7', overflow: 'hidden' }}>
                        <MDBContainer className="py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol lg="6" className="mb-4 mb-lg-0">
                                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                        <MDBRow className="g-0">
                                            <MDBCol md="4" className="gradient-custom text-center text-white"
                                                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                                <MDBCardImage src={user.avatar}
                                                    alt="Avatar" className="my-5" />
                                                <MDBTypography tag="h5">{user.firstName} {user.lastName}</MDBTypography>
                                                <MDBCardText>{user.username}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol md="8">
                                                <MDBCardBody className="p-4">
                                                    <MDBTypography tag="h6">Information</MDBTypography>
                                                    <hr className="mt-0 mb-4" />
                                                    <MDBRow className="pt-1">
                                                        <MDBCol size="6" className="mb-3">
                                                            <MDBTypography tag="h6">Email</MDBTypography>
                                                            <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                                        </MDBCol>
                                                        <MDBCol size="6" className="mb-3">
                                                            <MDBTypography tag="h6">City / Country </MDBTypography>
                                                            <MDBCardText className="text-muted">{user.city} / {user.country}</MDBCardText>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <div className="d-flex justify-content-start">
                                                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </>
    );
}

export default ListUserProfile;;
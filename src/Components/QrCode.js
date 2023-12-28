import React, { useState } from 'react';
import { Button, styled } from '@mui/material';
import { Container, Card, CardContent, Grid, TextField } from '@mui/material';
import axios from 'axios';

const QrContainer = styled('div')(({ theme }) => ({
    marginTop: 10
}));

const Qrtitle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    background: "#00897b",
    color: "white"
}));

const Btn = styled('div')(({ theme }) => ({
    marginTop: 10,
    marginBottom: 20
}));

function QrCode() {
    const [url, setUrl] = useState('');
    const [qrImage, setQrImage] = useState('');

    const generateQrcode = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/api/scanQrcode", { url: url })
            .then(response => {
                console.log(response);
                setQrImage(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <QrContainer>
                <Container>
                    <Card>
                        <Qrtitle><h2>Generate and Download QR code</h2></Qrtitle>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                    <TextField label='Enter text here' onChange={(e) => setUrl(e.target.value)} value={url} />
                                    <Btn><Button variant='contained' color='primary' onClick={generateQrcode}
                                    >Generate QR Code</Button></Btn>
                                    <br />
                                </Grid>
                                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                    {
                                        url.length > 0 && qrImage ?
                                            <>
                                                <a href={qrImage} download><img src={qrImage} alt='qrImage' /></a>
                                                <p>Scan the QR Code to access the data!</p>
                                            </>
                                            : null
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </QrContainer>
        </div>
    )
}

export default QrCode;
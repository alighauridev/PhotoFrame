import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import FrameImage from './FrameImage';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    imgContainer: {
        position: 'relative',
        flex: 1,
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
};

const ImgDialog = (props) => {
    const { classes, framePiece } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const postDetails = async (img) => {
        console.log(img);
    };

    return (
        <Dialog
            fullScreen
            open={!!props.img}
            onClose={props.onClose}
            TransitionComponent={Slide}
        >
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={props.onClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            Your Image
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.imgContainer}>
                    <section className="frame">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gridGap: "3rem",
                                marginBottom: "50px",
                            }}
                        >

                            {
                                framePiece.patch ? <FrameImage mainImageUrl={props.img} rod={framePiece} /> : <div className="full__image" style={{
                                    backgroundImage: `url(${framePiece.image})`,

                                    padding: '5%',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundPosition: 'center',
                                    backgroundSize: '100%'
                                }}>
                                    <img style={{ width: framePiece.patch ? "90%" : "80%" }} src={props.img} alt="" />
                                </div>
                            }
                        </div>
                    </section >
                </div>
            </div>
        </Dialog>
    );
};

export default withStyles(styles)(ImgDialog);

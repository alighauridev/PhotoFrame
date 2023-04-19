import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

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

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ImgDialog = (props) => {
    const { classes } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const postDetails = async (img) => {
        try {
            const response = await fetch(img);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "notesapp");
            data.append("cloud_name", "dipcjbjho");
            const uploadResponse = await fetch("https://api.cloudinary.com/v1_1/dipcjbjho/image/upload", {
                method: "post",
                body: data,
            });
            const result = await uploadResponse.json();

            console.log(result.url.toString());
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Dialog
            fullScreen
            open={!!props.img}
            onClose={props.onClose}
            TransitionComponent={Transition}
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
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                        >
                            Cropped image
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.imgContainer}>
                    <img src={props.img} alt="Cropped" className={classes.img} />
                    <button onClick={() => postDetails(props.img)}>upload</button>
                </div>
            </div>
        </Dialog>
    );
};

export default withStyles(styles)(ImgDialog);

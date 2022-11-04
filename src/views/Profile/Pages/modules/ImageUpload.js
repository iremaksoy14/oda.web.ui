import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//import ImageUploader from "react-images-upload";
//import Input from "@material-ui/core/Input";
//import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import ImagesUploader from "react-images-upload";
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
import resim from '../../../../assets/Images/profil/profilfoto.png'
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

export default function ImageUpload(props) {
  const [file, setFile] = React.useState(0);
  const [status, setStatus] = React.useState(false);

  const handleChange = event => {
    setStatus(true)
    setFile(URL.createObjectURL(event.target.files[0]));
    document.getElementById("abc").style.display = "flex";
    //document.getElementById("abc").style.width = "100px";
    //document.getElementById("abcd").style.display = "block";
    // this.setState({
    //   file: URL.createObjectURL(event.target.files[0])
    // })
  };
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
             <img alt="" id="abc" src={file} height="80px" style={{ display: "none",marginLeft:200,borderRadius:"50%" }} /> 
         
         
          
          <p className='text-message'>Shulammite Edheri</p>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="contained-button-file">
            <Button style={{borderRadius: 6,borderColor: "transparent",color: "white",width: 200,height: 40,backgroundColor:"#01577D",marginLeft:140}}
              variant="contained"
            
              component="span"
              float="left"
            ><PersonIcon style={{paddingRight:5,fontSize:20}}/>
             Şəkil dəyişdir
            </Button>
          </label>
        </Grid>
      </Grid>

     

      {/* <input type="file" onChange={handleChange}/>
     <img id="abc" src={file} height='80px' style={{display: "none"}}/> 
    */}
    </div>
  );
}

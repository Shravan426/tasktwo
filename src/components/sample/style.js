import {  Center, createStyles, Group } from "@mantine/core";
const useStyles = createStyles((theme) => ({
//  container {
//   BackgroundImage:URL("mantinetwo/images/Group 3.png");
//  }
//  Header {
//     align-items:
//  }
head:{
    borderradius: '23px',
    opacity: '1',
},

card:{
    borderRadius: '23px' ,
},
 tabRadius:{
    borderRadius: '10px' },
input:{
    borderRadius: '10px',
    height:'57px',
    alignContent:'center'
},
 
text:{
    color:'#4D4D4D',
    fontSize:'18px',
    font:'var(--unnamed-font-style-normal) normal normal var(--unnamed-font-size-18)/var(--unnamed-line-spacing-31) var(--unnamed-font-family-poppins)',
},
image:{
borderRadius:'50%',
},
select: {
    backgroundColor:'#E2E2E2',
 
    '&::placeholder': {
      color: '#4D4D4D',
    },
},
button:{
color:'#002D74',
borderRadius:'13px',
},

secondCard:{
    border: `1px dashed ${theme.colors.blue[9]}`, // Assuming --unnamed-color-002d74 is a dark blue color
    backgroundColor: '#D0D8E5',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '17px',
    opacity: 1,
},

booking:{
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 14px #00000029',
    borderRadius: '22px',
    opacity: 1,
},
box:{
    display:'flex',

},
off:{
    
    opacity: 1,                                         // Opacity
    backdropFilter: 'blur(30px)',                       // Backdrop filter for the blur effect
    WebkitBackdropFilter: 'blur(30px)', 
},

Path:{
    display:'flex',
    backgroundColor: '#FFFFFF',
    backgroundRepeat: 'no-repeat',
    padding: '0', // If you want padding, specify it
    borderRadius: '20px',
    opacity: 1,
    paddingTop:30,
    paddingBottom:30,
    paddingLeft:20,
    paddingRight:20,
},
Path1:{
    display:'flex',
},

}));
export default useStyles;
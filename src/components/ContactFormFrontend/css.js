import { createUseStyles } from 'react-jss';

export default createUseStyles({
  form: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    fontSize: '16px',
    '& fieldset': {
      position: 'relative',
    },
    '& input': {
      height: '35px',

      outline: 'none',
    },
    '& label': {
      color: '#999',
      position: 'absolute',
      top: 0,
      left: 0,
      fontSize: '1.2em',
      fontWeight: 500,
      webkitTransition: 'all 0.15s ease-in-out',
      mozTransition: 'all 0.15s ease-in-out',
      transition: 'all 0.15s ease-in-out',
      pointerEvents: 'none',
    },
    '& input[type=submit]': {
      position: 'realative',
      width: '150px',
      margin: '20px 20px 0 0',
      backgroundColor: '#316AFF',
      borderRadius: '15px',
      color: '#fff',
      border: '1px solid #fff',
      float: 'right',
    },
  },
  styledInput: {
    width: '100%',
    position: 'relative',
    marginTop: '20px',
    '& input[type=text], input[type=email], textarea': {
      marginRight: 0,
      webkitAppearance: 'none',
      mozAppearance: 'none',
      msAppearance: 'none',
      oAppearance: 'none',
      appearance: 'none',
      webkitTransition: 'all 0.2s ease-in-out',
      mozTransition: 'all 0.2s ease-in-out',
      transition: 'all 0.2s ease-in-out',
      border: 'none',
      borderBottom: '1px solid #cdcdcd',
      padding: '0.3em 0.5em 0.2em 0em',
      textDecoration: 'none',
      outline: 0,
      lineHeight: '1em',
      margin: 0,
      width: '100%',
      fontSize: '1.4em',
      fontWeight: '400',
      color: 'black',
    },
    '& input:focus ~ label, input[type=text]:valid ~ label, input:not(:placeholder-shown) ~ label, textarea:focus ~ label, textarea:valid ~ label ':
      {
        top: -15,
        position: 'absolute',
        fontSize: '1em',
        webkitTransition: 'all 0.3s ease-in-out',
        mozTransition: 'all 0.3s ease-in-out',
        transition: 'all 0.3s ease-in-out',
      },
    '& input[type=text]:focus ~ div, input[type=email]:focus ~ div, textarea:focus ~ div':
      {
        width: '100%',
        webkitTransition: 'all 0.5s ease-in-out',
        mozTransition: 'all 0.5s ease-in-out',
        transition: 'all 0.5s ease-in-out',
      },
    '& input[type=text]:focus, input[type=email]:focus, textarea:focus': {
      borderBottomWidth: '0px',
    },
    '& div': {
      height: '2px',
      width: '0%',
      backgroundColor: '#316AFF',
      position: 'absolute',
      bottom: 0,
    },
  },
  submitContainer: {
    width: '100%',
    float: 'right',
  },

  answareContainer: {
    width: '350px',
  },

  /*
    
    .input[type='text']:focus,
    .input[type='email']:focus {
        border-bottom: #00b192 2px solid;
    }

    */
});

import { useAuth0 } from '@auth0/auth0-react';
import {
  Typography,
  Paper,
  Container,
  makeStyles,
  Avatar,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import React from 'react';

const Profile = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const classes = useStyles();
  const userDate = user.updated_at;

  const formatDate = new Date(userDate);

  return (
    <Container className={classes.container}>
      <Typography
        variant='h3'
        style={{
          color: theme.palette.secondary.main,

          marginTop: '2rem',
          marginBottom: '3rem',
        }}
      >
        Account Details
      </Typography>
      <Divider />
      <Avatar className={classes.child} src={user.picture} />
      <Typography
        style={{
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        {user.email}
      </Typography>
      <Divider />

      <Paper className={classes.paper}>
        <List component='nav' aria-label='profile info'>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText className={classes.text}>
              Family name: {user.family_name}
            </ListItemText>
          </ListItem>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText className={classes.text}>
              Given name: {user.given_name}
            </ListItemText>
          </ListItem>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText className={classes.text}>
              User name: {user.name}
            </ListItemText>
          </ListItem>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText className={classes.text}>
              Nickname: {user.nickname}
            </ListItemText>
          </ListItem>
          <ListItem>
            <EmailOutlinedIcon />
            <ListItemText className={classes.text}>{user.email} </ListItemText>
          </ListItem>
          <ListItem>
            {user.email_verified ? (
              <CheckOutlinedIcon />
            ) : (
              <CloseOutlinedIcon />
            )}
            <ListItemText className={classes.text}>
              {user.email_verified ? 'Email verified' : 'Email not verified'}
            </ListItemText>
          </ListItem>
          <ListItem>
            <LanguageOutlinedIcon />
            <ListItemText className={classes.text}>
              {user.locale.toUpperCase()}
            </ListItemText>
          </ListItem>
          <ListItem>
            <FingerprintOutlinedIcon />
            <ListItemText className={classes.text}>
              {user.sub.toString().split('|')[0]}
            </ListItemText>
          </ListItem>
          <ListItem>
            <UpdateOutlinedIcon />
            <ListItemText className={classes.text}>
              {formatDate.toUTCString()}
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};
export default Profile;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '1rem',
    width: '100%',
    height: '100%',
  },
  child: {
    alignSelf: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.fortiary.main,
    alignSelf: 'center',
    marginTop: '1rem',
  },
  text: {
    color: theme.palette.secondary.main,
  },
}));

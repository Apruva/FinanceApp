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
    <Container
      className={classes.container}
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <Typography
        variant='h3'
        style={{
          color: theme.palette.secondary.main,
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        Account Details
      </Typography>
      <Divider />
      <Avatar className={classes.child} src={user.picture} />
      <Typography
        style={{
          color: theme.palette.tertiary.main,
          fontWeight: 'bold',
          marginBottom: '3px',
        }}
      >
        {user.email}
      </Typography>
      <Divider />
      <Paper
        className={classes.paper}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <List component='nav' aria-label='profile info'>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText>Family name: {user.family_name}</ListItemText>
          </ListItem>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText>Given name: {user.given_name}</ListItemText>
          </ListItem>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText>User name: {user.name}</ListItemText>
          </ListItem>
          <ListItem>
            <PersonOutlineOutlinedIcon />
            <ListItemText>Nickname: {user.nickname}</ListItemText>
          </ListItem>
          <ListItem>
            <EmailOutlinedIcon />
            <ListItemText>{user.email} </ListItemText>
          </ListItem>
          <ListItem>
            {user.email_verified ? (
              <CheckOutlinedIcon />
            ) : (
              <CloseOutlinedIcon />
            )}
            <ListItemText>
              {user.email_verified ? 'Email verified' : 'Email not verified'}
            </ListItemText>
          </ListItem>
          <ListItem>
            <LanguageOutlinedIcon />
            <ListItemText>{user.locale.toUpperCase()}</ListItemText>
          </ListItem>
          <ListItem>
            <FingerprintOutlinedIcon />
            <ListItemText>{user.sub.toString().split('|')[0]}</ListItemText>
          </ListItem>
          <ListItem>
            <UpdateOutlinedIcon />
            <ListItemText>{formatDate.toUTCString()}</ListItemText>
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

    marginBottom: '1rem',
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
  },
}));

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
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import React from 'react';

const Profile = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const classes = useStyles();
  const userDate = user.updated_at;

  const formatDate = new Date(userDate);

  return (
    <Container className={classes.container}>
      <Typography className={classes.headline} variant='h3'>
        Account Details
      </Typography>

      <Avatar className={classes.avatar} src={user.picture} />
      <Typography className={classes.typography_small}>{user.email}</Typography>
      <Divider />
      <Container>
        <Paper className={classes.paper}>
          <List>
            <ListItem>
              <PersonOutlineOutlinedIcon />
              <ListItemText className={classes.text}>
                Given Name: <strong>{user.given_name}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <PersonOutlineOutlinedIcon />
              <ListItemText className={classes.text}>
                Family Name: <strong>{user.family_name}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <PersonOutlineOutlinedIcon />
              <ListItemText className={classes.text}>
                Name: <strong>{user.name}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <PersonOutlineOutlinedIcon />
              <ListItemText className={classes.text}>
                Nickname: <strong>{user.nickname}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <EmailOutlinedIcon />
              <ListItemText className={classes.text}>
                Email: <strong>{user.email}</strong>
              </ListItemText>
            </ListItem>

            <ListItem>
              {user.email_verified ? (
                <CheckOutlinedIcon />
              ) : (
                <CloseOutlinedIcon />
              )}
              <ListItemText className={classes.text}>
                Email verified:
                <strong>{user.email_verified.toString()}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <LanguageOutlinedIcon />
              <ListItemText className={classes.text}>
                Language: <strong>{user.locale}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <FingerprintOutlinedIcon />
              <ListItemText className={classes.text}>
                Authentication: <strong>{user.sub.split('|')[0]}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ImageSearchIcon />
              <ListItemText className={classes.text}>
                Picture URL: <strong>{user.picture.toString()}</strong>
              </ListItemText>
            </ListItem>
            <ListItem>
              <UpdateOutlinedIcon />
              <ListItemText className={classes.text}>
                Updated: <strong>{formatDate.toString()}</strong>
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Container>
    </Container>
  );
};
export default Profile;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  text: {
    color: theme.palette.secondary.main,
  },
  typography_small: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  avatar: {
    alignSelf: 'center',
  },
  headline: {
    marginBottom: '2rem',
  },
  paper: {
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.main,
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
}));

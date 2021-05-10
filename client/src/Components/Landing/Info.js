import { React } from 'react';
import {
  Container,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import { useSelector } from 'react-redux';

const Info = () => {
  const classes = useStyles();
  const queryFromState = useSelector((state) => state.queryReducer);

  return (
    <Container className={classes.container}>
      <div className={classes.parent}>
        {queryFromState.map((e, i) => (
          <div key={i} className={classes.child}>
            <br />
            <Typography>
              <InfoIcon className={classes.infoIcon} />
              <strong> {e.comment}</strong>
            </Typography>
            <br />
            <Typography>
              <strong>Supported queries:</strong> {e.queries}
            </Typography>
            <List className={classes.list} key={i}>
              <ListItem key={i} className={classes.listItem}>
                <ListItemText key={i} className={classes.listItem}>
                  <strong key={i} className={classes.strong}>
                    {e.httpMethod}
                  </strong>{' '}
                  {e.endpoint}
                </ListItemText>
              </ListItem>
            </List>
          </div>
        ))}
      </div>
      <div></div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  text: {
    marginTop: '1rem',
    marginBottom: '1rem',
    fontFamily: 'Comic Sans MS',
  },

  list: {
    color: theme.palette.secondary.main,
  },

  listItem: {
    background: theme.palette.primary.main,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },

  divChild: {
    backgroundColor: theme.palette.fifthiary.main,
    color: theme.palette.primary.main,
    alignSelf: 'center',
  },
  divParent: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    textAlign: 'center',
  },
  strong: {
    color: '#58eda7',
  },
  infoIcon: {
    color: theme.palette.tertiary.main,
  },
  queries: {
    color: theme.palette.tertiary.main,
  },
}));
export default Info;

// REACT
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base/'
import * as CssUtils from 'ProjStyles/cssUtils';

// ALL
import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class PhoneListContainer extends Component {

  componentDidUpdate(prevProps) {
  }

  render() {
    const { phoneList, theme, ...rProps } = this.props

    return <Bs.Box f="medium" px={["5%", "10%"]}>
      {/* Phones */}
      <Bs.Flex 
        flexWrap='wrap'
        justify="center" >

        {phoneList.map(phone => (
          <Bs.Box
            f='medium'
            py='0.5em'
            px='0.5em'>
            <SimpleMediaCardStyled dat={phone} />
          </Bs.Box>
        ))}

      </Bs.Flex>

    </Bs.Box>;
  }
}


const styles = {
  card: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const SimpleMediaCard = (props) => {
  const { classes, dat } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={dat.url}
          title={dat.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {dat.title}
          </Typography>
          <Typography component="p">
           {dat.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleMediaCardStyled =  withStyles(styles)(SimpleMediaCard);


export default  withTheme( PhoneListContainer )
// REACT
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
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


import phoneDat from 'mock/phoneDat'

class PhoneDetailComponent extends Component {

  componentDidUpdate(prevProps) {
  }

  render() {
    const { phoneListDat, phoneDat, theme, ...rProps } = this.props

    return (
    <Bs.Box f="medium" px={["5%", "5%", "5%", "5%"]}>
      {/* Phone */}
      <Bs.Flex 
        flexWrap='wrap'
        justify="center" >

          <Bs.Flex
            justify="center" 
            f='medium'
            py='0.5em'
            px='0.5em'
            w={[1, 1/2, 1/3, 1/4]}
            position>
            <SimpleMediaCardStyled dat={phoneDat} />
          </Bs.Flex>

      </Bs.Flex>

    </Bs.Box>
    )
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
          image={dat.imageUrl}
          title={dat.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component='h2'>
            {dat.title}
          </Typography>
          <Typography component='p'>
           {dat.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Title = (props) => (
  <Bs.Box
    f={['small', 'medium']}>
    {props.children}
  </Bs.Box>
)

const Desc = (props) => (
  <Bs.Box
    f={['small', 'medium']}>
    {props.children}
  </Bs.Box>
)

const Details = (props) => (
  <Bs.Box
    f={['small', 'medium']}>
    {props.children}
  </Bs.Box>
)


const SimpleMediaCardStyled =  withStyles(styles)(SimpleMediaCard);

const mapStateToProps = (state) => ({
  phoneListDat: state.phoneList
})

const PhoneDetailComponentRdxContd = connect(
mapStateToProps
)(PhoneDetailComponent);

export default  withTheme( PhoneDetailComponentRdxContd )
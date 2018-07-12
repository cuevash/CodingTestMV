// REACT
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base/'
import * as CssUtils from 'ProjStyles/cssUtils';

// ALL
import RMarkdown from 'react-markdown'
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
    const { phoneDat, theme, ...rProps } = this.props

    return (
    <Bs.Box 
      f="medium"
      font={theme.font}
      px={["5%", "5%", "5%", "5%"]}>

      {/* Phone Img */}
      <Bs.Flex
        justify="center" 
        py='0.5em' >
        <SimpleMediaCardStyled dat={phoneDat} />
      </Bs.Flex>

        {/* Details */}
        <Bs.Flex
          flexDirection='column'
          flexWrap='wrap'
          justify="center" >

          {/* Color */}
          <TextRow>
            <TitleTxt> Color </TitleTxt>
            <Bs.Span> {phoneDat.color} </Bs.Span>
          </TextRow>

          {/* Description */}
          <TextRow>
            <TitleTxt> Description </TitleTxt>
            <RMarkdown source={phoneDat.description} />
          </TextRow>

          {/* Price */}
          <TextRow>
            <TitleTxt> Color </TitleTxt>
            <Bs.Span> {phoneDat.price}€ </Bs.Span>
          </TextRow>

        </Bs.Flex>


    </Bs.Box>
    )
  }
}

const TextRow = styled(Bs.Text)(
  {
    paddingBottom: '2em'
  }
)


const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '130%', // 9:16
    backgroundSize: 'contain',
  },
};


const input = `El Samsung Galaxy S6 ofrece diversidad de novedades:  
* **Acabado** en vidrio que consigue un diseño único.
* Mejoras importantes en ambas cámaras, mayor resolución y una apertura de F1.9.
## Carga ultrarrápida, con la que cargarás el móvil un 50% más rápido que en modelos anteriores. Además de carga inalámbrica.
- Pantalla Quad HD (2.560 x 1.440) Super AMOLED de 5,1" con la que podrás disfrutar de una nitidez increíble.
- Seguridad mejorada gracias a la detección de huellas dactilares.
- Arquitectura de 64 bits con la que podrás realizar multitud de tareas a gran velocidad.`


const SimpleMediaCard = (props) => {
  const { classes, dat } = props;

  console.log("asdasdasdasdasd", dat)

  const input2 = `${dat.description}`

  return (
    <div>

      {/* Card Image */}
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component='h2'>
            {dat.title}
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.media}
          image={dat.imageUrl}
          title={dat.title} />

      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const TitleTxt = ({theme, children, ...rProps}) => (
  <Bs.Span
    f='medium'
    fontWeight='700'>
    {children}:
  </Bs.Span>
)

const MdTxt = ({theme, src, ...rProps}) => (
  <Bs.Text
    f='medium'
    fontWeight='700'>
    <RMarkdown source={src} />
  </Bs.Text>
)


const SimpleMediaCardStyled =  withStyles(styles)(SimpleMediaCard);

export default  withTheme( PhoneDetailComponent )
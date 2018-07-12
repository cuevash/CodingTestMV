// REACT
import React, { Component } from "react";
import PropTypes from "prop-types";

// STYLES
import { withTheme } from "emotion-theming";
import styled from "react-emotion";
import * as Bs from "styles/base/";

// ALL
import RMarkdown from "react-markdown";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class PhoneDetailComponent extends Component {
  render() {
    const { phoneDat, theme, ...rProps } = this.props;

    return (
      <Bs.Box f="medium" font={theme.font} px={["5%"]}>
        {/* Phone Img */}
        <Bs.Flex justify="center" py="0.5em">
          <SimpleMediaCardStyled dat={phoneDat} />
        </Bs.Flex>

        {/* Details */}
        <Bs.Flex flexDirection="column" flexWrap="wrap" justify="center">
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
            <TitleTxt> Price </TitleTxt>
            <Bs.Span> {phoneDat.price}€ </Bs.Span>
          </TextRow>
        </Bs.Flex>
      </Bs.Box>
    );
  }
}

const TextRow = styled(Bs.Text)({
  paddingBottom: "1em"
});

const TitleTxt = ({ theme, children, ...rProps }) => (
  <Bs.Span f="medium" fontWeight="700">
    {children}:
  </Bs.Span>
);

// Card styles
const styles = {
  card: {
    maxWidth: 250
  },
  media: {
    height: 0,
    paddingTop: "130%",
    backgroundSize: "contain"
  }
};

const SimpleMediaCard = props => {
  const { classes, dat } = props;

  return (
    <div>
      {/* Card Image */}
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {dat.title}
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.media}
          image={dat.imageUrl}
          title={dat.title}
        />
      </Card>
    </div>
  );
};

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleMediaCardStyled = withStyles(styles)(SimpleMediaCard);

export default withTheme(PhoneDetailComponent);

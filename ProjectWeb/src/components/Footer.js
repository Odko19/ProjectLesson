import React from "react";

import { makeStyles } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";

const style = {
  bgColor: {
    backgroundColor: "#0f0329",
    color: "white",
  },
  bor1: {
    borderBottom: "1px solid gray",
  },
  float: {
    float: "right",
  },
};

const useStyles = makeStyles((theme) => ({
  logoWidth: {
    width: "9%",
    [theme.breakpoints.down("1200")]: {
      width: "12%",
    },
    [theme.breakpoints.down("992")]: {
      width: "6%",
    },
    [theme.breakpoints.down("768")]: {
      width: "9%",
    },
    [theme.breakpoints.down("576")]: {
      width: "13%",
    },
  },

  bg1: {
    padding: "4% 5%",
    border: "1px solid gray",
    [theme.breakpoints.down("768")]: {
      padding: "2% 3%",
    },
    borderRadius: "50%",
    backgroundColor: "rgba(40,29,65, 0.9)",
    "&:hover": {
      backgroundColor: "black",
    },
  },

  bg2: {
    padding: "2.5% 3.3%",
    border: "1px solid gray",
    [theme.breakpoints.up("768")]: {
      padding: "2% 3%",
    },
    [theme.breakpoints.up("992")]: {
      padding: "2.5% 3.5%",
    },
    borderRadius: "50%",
    backgroundColor: "rgba(40,29,65, 0.9)",
    "&:hover": {
      backgroundColor: "black",
    },
  },

  font: {
    fontSize: "0.8em",
    [theme.breakpoints.down("768")]: {
      fontSize: "2em",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div style={style.bgColor}>
      <div className="container-xxl p-4">
        <Row className="d-flex align-items-center">
          <Col lg={5} md={12} className="p-2">
            <div className="d-flex align-items-center ">
              <img src="image/logo.png" alt="" className={classes.logoWidth} />
              <h5 className="m-0 ms-2">Дархан дээд сургууль</h5>
            </div>
          </Col>
          <Col lg={2} md={3} sm={12} className="p-2">
            <div className="d-flex align-items-center ">
              <div className={classes.bg1}>
                <img src="image/phone.png" alt="" />
              </div>
              <p className={classes.font}>7070 0000</p>
            </div>
          </Col>
          <Col lg={2} md={3} sm={12} className="p-2">
            <div className="d-flex align-items-center ">
              <div className={classes.bg1}>
                <img src="image/mail.png" alt="" />
              </div>
              <p className="m-0 ms-2">darhan@edu.mn</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-2">
            <div className="d-flex align-items-center ">
              <div className={classes.bg2}>
                <img src="image/add.png" alt="" />
              </div>
              <p className="m-0 ms-2">
                Улаанбаатар, Чингисийн Өргөн Чөлөө 17, Гурван гол оффис, 301
                тоот
              </p>
            </div>
          </Col>
        </Row>
        <div className="my-4" style={style.bor1}></div>
        <div className="d-flex align-items-center my-5   flex-column-reverse ">
          <div>
            <p className="m-0 text-center">
              <small>
                © Зохиогчийн бүх эрх Нэст Академид харьяалагдана. 2022 он
              </small>
            </p>
          </div>

          <div className="d-flex mb-3">
            <div className="mx-5">
              <img src="image/facebook.png" alt="" />
            </div>
            <div>
              <img src="image/instagram.png" alt="" />
            </div>
            <div className="mx-5">
              <img src="image/youtube.png" alt="" />
            </div>
            <div>
              <img src="image/in.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

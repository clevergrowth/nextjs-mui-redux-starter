import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import PropTypes from 'prop-types'

import Head from "next/head";
import Router, { withRouter } from "next/router";
import withRedux from 'next-redux-wrapper'

import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from '../src/theme'

import createStore from "../src/store";

import PageChange from "@Components/PageTransition/index.js";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp(props) {
  const { Component, pageProps, router, store } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <React.Fragment>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Head>
            <title>NextJS Material Kit by Clever Growth</title>
          </Head>
          <Component router={router} {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withRedux(createStore)(withRouter(MyApp))

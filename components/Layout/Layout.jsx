import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
import useStyles from '../../utils/styles.js';

const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
  });
  const styles = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Shoppy commerce` : 'Shoppy commerce'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={styles.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link style={{ textDecoration: 'none' }}>
                <Typography className={styles.brand}>
                  Shoppy commerce
                </Typography>
              </Link>
            </NextLink>
            <div className={styles.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link style={{ textDecoration: 'none' }}>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link style={{ textDecoration: 'none' }}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={styles.main}>{children}</Container>
        <footer className={styles.footer}>
          <Typography>All rights reserved by Shoppy commerce</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;

"use client"
import React, { useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'; // Import next/image
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next'; // Import cookies-next

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
  },
  actions: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    },
  }
}));

export default function Page(props: any) {
  const navigate = useRouter();

  const initialValues = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const credentials = useMemo(() => ({
    email: "amishakumawat@gmail.com",
    password: "12345"
  }), []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  }

  const validate = (values: any) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 8) {
      errors.password = "Password cannot exceed more than 8 characters!";
    }
    return errors;
  }

  useEffect(() => {
    if (isSubmit) {
      if (formValues.email === credentials.email &&
          formValues.password === credentials.password
      ) {
        setCookie('token', 'your-token-here', { maxAge: 60 * 60 * 24 });
        navigate.push("/users");
      } else {
        setFormErrors({ general: "Invalid credentials!" });
      }
    }
  }, [isSubmit, formValues, credentials, navigate]) // Fix the missing dependencies issue

  const classes = useStyles();
  const content = {
    'brand': { image: '/mui-assets/img/logo-pied-piper-icon.png', width: 40, height: 40 }, 
    '02_header': 'Sign in',
    '02_primary-action': 'Sign in',
    '02_secondary-action': "Don't have an account?",
    '02_tertiary-action': 'Forgot password?',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <Image 
        src="/signinicon.png" 
        alt=""
        width={content.brand.width} 
        height={content.brand.height} 
        />
    );
  } else {
    brand = content.brand.text || '';
  }

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">{content['02_header']}</Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField variant="outlined" required fullWidth name="email" id="email" label="Email address" autoComplete="email" value={formValues.email} onChange={handleChange} />
                </Grid>
                <p style={{color:"red"}}>{formErrors.email}</p>
                <Grid item xs={12}>
                  <TextField variant="outlined" required fullWidth name="password" id="password" label="Password" type="password" autoComplete="current-password" value={formValues.password} onChange={handleChange} />
                </Grid>
                <p style={{color:"red"}}>{formErrors.password}</p>
              </Grid>
              <Box my={2}>
                <Button type="submit" fullWidth variant="contained" color="primary">
                  {content['02_primary-action']}
                </Button>
              </Box>
              {formErrors.general && <p style={{color:"red"}}>{formErrors.general}</p>}
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="#" variant="body2">{content['02_secondary-action']}</Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">{content['02_tertiary-action']}</Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

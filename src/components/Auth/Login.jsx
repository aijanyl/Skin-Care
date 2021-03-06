import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { Grid, makeStyles } from "@material-ui/core"
import { useAuth } from "../../contexts/AuthContext"
import { BorderColor } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({

  
}))

  const Login = () => {
  const classes = useStyles()

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <Grid container justify="center" alignItems="center" style={{color:"pink" , marginTop:"150px"}}>
      <Card >
        <Card.Body>
          <h2 className="text-center mb-4" style={{color:"pink"}} >Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Grid container justify="center" align="center">
          <Form onSubmit={handleSubmit} >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading}type="submit" style={{color:"white" , backgroundColor:"pink" , BorderColor:"pink"}} >
              Log In
            </Button>
          </Form>
          </Grid>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </Card>
    </Grid>
  )
}
export default Login;
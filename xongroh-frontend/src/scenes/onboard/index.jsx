import xongroh from '@/assets/xongroh.svg'
import backgroundWebP from '@/assets/background.webp'

import usePersist from '@/hooks/usePersist'
import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/features/auth/authSlice'
import {
  useLoginMutation,
  useRegisterMutation,
} from '@/features/auth/authApiSlice'

function AuthenticationPage() {
  const unsplash =
    'https://api.unsplash.com/photos/random/?client_id=XPPWxHD5JMiw0Eq6DqlacVopjtvThQ2jaZbwEspvMwM'
  useEffect(() => {
    fetch(unsplash)
      .then((response) => response.json())
      .then((jsonData) => {
        setBackgroundImageUrl(jsonData.urls.regular)
      })
      .catch((error) => console.log(error))
  }, [])

  fetch(unsplash)
    .then((response) => response.json)
    .then((jsonData) => jsonData.urls.regular)
    .catch((error) => console.log(error))

  const userRef = useRef()
  const errRef = useRef()
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isLoginMode, setIsLoginMode] = useState(false)
  const [isAccountCreated, setIsAccountCreated] = useState(false)
  const [persist, setPersist] = usePersist()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()
  const [register] = useRegisterMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password, email])

  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode)
    setUsername('')
    setPassword('')
    setEmail('')
    setErrMsg('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isLoginMode) {
        const { accessToken } = await login({ username, password }).unwrap()
        dispatch(setCredentials({ accessToken }))
        setUsername('')
        setPassword('')
        navigate('/dash')
      } else {
        await register({ username, password, email }).unwrap()
        setUsername('')
        setPassword('')
        setEmail('')
        setIsAccountCreated(true)
      }
    } catch (err) {
      if (!err.status) {
        setErrMsg('No Server Response')
      } else if (err.status === 400) {
        setErrMsg('All fields required')
      } else if (err.status === 401) {
        setErrMsg('Unauthorized')
      } else if (err.status === 409) {
        setErrMsg('Username or email already exists')
      } else {
        setErrMsg(err.data?.message)
      }
      errRef.current.focus()
    }
  }

  if (isAccountCreated) {
    window.alert('Account created successfully!')
    setIsAccountCreated(false)
  }

  const handleUserInput = (e) => {
    if (isLoginMode) {
      setUsername(e.target.value)
    } else {
      if (e.target.name === 'email') {
        setEmail(e.target.value)
      } else {
        setUsername(e.target.value)
      }
    }
  }

  const handlePwdInput = (e) => setPassword(e.target.value)
  const handleToggle = () => setPersist((prev) => !prev)

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Left Black Box */}
      <div className="lg:w-1/2 bg-gray-900 text-white p-10 hidden lg:flex flex-col justify-between">
        <div>
          <img src={xongroh} alt="Xongroh" className="mr-2 h-6 w-6" />
          <div className="text-lg font-medium">Xongroh </div>
        </div>

        <div className="text-sm text-gray-400 mt-4">
          <blockquote className="space">
            <p className="text-lg">&ldquo;Jibon Kosupator Pani&rdquo;</p>
            <footer className="text-sm">Zubeen Garg</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Authentication Form */}
      <div className="lg:w-1/2 flex-1 relative flex justify-center items-center">
        {/* Background Image */}
        <div
          className="bg-cover bg-center absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImageUrl || backgroundWebP || ''})`,
            // backgroundImage: `url(${backgroundWebP})`,
          }}
        />

        {/* Transparent Container */}
        <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8 mx-4 md:mx-8 mt-8 md:mt-0 relative z-10">
          <div className="mb-8 text-center">
            <div className="text-2xl font-medium">Xongroh </div>
            <h1 className="text-lg font-semibold mt-2">
              {isLoginMode ? 'Log in' : 'Create an Account'}
            </h1>
            <p className="text-sm text-gray-600">
              {isLoginMode
                ? 'Enter your username and password to log in'
                : 'Enter your email below to create your account'}
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLoginMode ? (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  required
                  id="email"
                  ref={userRef}
                  value={email}
                  onChange={handleUserInput}
                  autoComplete="off"
                />
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Username"
                  required
                  id="username"
                  value={username}
                  onChange={handleUserInput}
                  autoComplete="off"
                />
              </div>
            ) : (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Username"
                  required
                  id="username"
                  ref={userRef}
                  value={username}
                  onChange={handleUserInput}
                  autoComplete="off"
                />
              </div>
            )}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Password"
                required
                onChange={handlePwdInput}
                value={password}
                autoComplete="on"
              />
            </div>
            <p ref={errRef} aria-live="assertive">
              {errMsg}
            </p>
            {isLoginMode && (
              <label htmlFor="persist" className="form__persist">
                <input
                  type="checkbox"
                  id="persist"
                  onChange={handleToggle}
                  checked={persist}
                />
                Trust This Device
              </label>
            )}
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
              >
                {isLoginMode ? 'Log in' : 'Create Account'}
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            By clicking "{isLoginMode ? 'Log in' : 'Create Account'}," you agree
            to our{' '}
            <Link to="/terms" className="text-primary">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-primary">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {isLoginMode
              ? "Don't have an account? "
              : 'Already have an account? '}
            <button
              type="button"
              onClick={handleToggleMode}
              className="text-primary underline"
            >
              {isLoginMode ? 'Create one here' : 'Log in here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationPage

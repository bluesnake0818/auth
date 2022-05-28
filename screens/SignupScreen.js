import { useState } from 'react'
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)


  async function signupHandler({email, password}) {
    setIsAuthenticating(true)
    await createUser(email, password)
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating use..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
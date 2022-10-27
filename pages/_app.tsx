import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const theme: DefaultTheme = {
  colors: {
    primary: '#333',
    secondary: '#c276d9',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const logoutUser = () => {
    setLoading(true)
    signOut(auth).then(() => {
      setUserData(null)
      setLoading(false)
    });
  }

  useEffect(() => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData({
          user: result.user,
          token: GoogleAuthProvider.credentialFromResult(result).accessToken
        })
        setLoading(false)
      })


  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!userData) return <p>No profile data</p>

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component logout={logoutUser} userSession={userData} {...pageProps} />
      </ThemeProvider>
    </>
  )
}

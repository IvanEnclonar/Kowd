import React, { useContext, useState, useEffect } from "react"
import LoadingDiv from "../components/LoadingDiv.js"
import { auth, firestore } from "../Firebase.js"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState();


  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      if(user){
        firestore.collection("Users").doc(user.uid).get().then((doc) => {
            setUserData(doc.data())
            setLoading(false)
          }).catch((error) => {
              console.log("Error getting document:", error);
              setLoading(false)
            });
      }
      else setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userData,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <LoadingDiv /> }
    </AuthContext.Provider>
  )
}
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyADVShUSXklq5dW57mHzu3NnyjdjzgDt7Y',
  authDomain: 'fashion-clothing-1a255.firebaseapp.com',
  projectId: 'fashion-clothing-1a255',
  storageBucket: 'fashion-clothing-1a255.appspot.com',
  messagingSenderId: '855739266460',
  appId: '1:855739266460:web:599b9e1c71b6c971de0459',
  measurementId: 'G-TPBRRP5EYH',
}

// 初始化 app 实例
initializeApp(firebaseConfig)

// 设置服务提供商
const googleProvider = new GoogleAuthProvider()
// 设置授权实例
const auth = getAuth()
// 设置弹窗登陆
export const googleSignInWithPopup = () => signInWithPopup(auth, googleProvider)

const db = getFirestore()
/**
 * 根据授权结果中的 user 字段获取用户记录的索引，若无数据则创建。
 * @param {*} user 授权结果中的 user 字段数据
 * @returns 用户记录的索引
 */
export const getUserDocRefFromAuth = async (user) => {
  const userDocRef = doc(db, 'users', user.uid) // 根据用户的 uid 获取用户记录的索引
  const userSnapshot = await getDoc(userDocRef) // 根据索引找到对应的用户记录
  // 如果用户记录不存在，则创建
  if (!userSnapshot.exists()) {
    const { displayName, email } = user
    const createdAt = new Date()

    try {
      // 在索引位置创建用户记录
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  return userDocRef
}

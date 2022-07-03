import { googleSignInWithPopup, getUserDocRefFromAuth } from '../../utils/firebase'

const SignIn = () => {
  const onButtonClick = async () => {
    // 等待用户授权，授权之后获取结果中的用户数据
    const { user } = await googleSignInWithPopup()
    // 根据用户数据获取对应记录索引
    const userDocRef = await getUserDocRefFromAuth(user)
    console.log(userDocRef);
  }

  return (
    <div>
      <h1>This is SignIn Route.</h1>
      <button onClick={onButtonClick}>Sign In</button>
    </div>
  )
}

export default SignIn

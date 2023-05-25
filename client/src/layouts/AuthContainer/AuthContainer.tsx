import {FC, PropsWithChildren} from 'react'
import scss from "./authContainer.module.scss"

const AuthContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={scss['auth-container']}>{children}</div>
  )
}

export default AuthContainer
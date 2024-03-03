import { usePrivy } from "@privy-io/react-auth"

const LogoutButton = ({ className = "" }) => {
  const { logout } = usePrivy()

  return (
    <button
      type="button"
      onTouchStart={logout}
      onClick={logout}
      className={`${className} bg-darkgray py-[3px]`}
    >
      Log Out
    </button>
  )
}

export default LogoutButton

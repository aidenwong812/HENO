import { usePrivy } from "@privy-io/react-auth"

const LogoutButton = ({ className = "" }) => {
  const { logout } = usePrivy()

  return (
    <button
      type="button"
      onTouchStart={logout}
      onClick={logout}
      className={`${className} bg-darkgray py-[3px] hover:opacity-60 transition-opacity ease-in-out`}
    >
      Log Out
    </button>
  )
}

export default LogoutButton

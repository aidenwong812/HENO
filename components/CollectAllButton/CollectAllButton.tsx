import usePrivyCollect from "@/hooks/usePrivyCollect"
import { usePrivy } from "@privy-io/react-auth"
import { useUserProvider } from "@/providers/UserProvider"
import useCollectAll from "../../hooks/useCollectAll"

const CollectAllButton = ({ className = "" }) => {
  const { login, authenticated } = usePrivy()
  const { onClick: collectWithWallet } = useCollectAll()
  const { onClick: collectWithPrivy } = usePrivyCollect()
  const { isLoggedByEmail } = useUserProvider()

  const handleClick = () => {
    if (!authenticated) {
      login()
      return
    }

    if (isLoggedByEmail) {
      collectWithPrivy()
      return
    }

    collectWithWallet()
  }

  return (
    <button
      type="button"
      onTouchStart={handleClick}
      onClick={handleClick}
      className={`${className} bg-darkgray py-[3px] px-[5px] hover:opacity-60 transition-opacity ease-in-out`}
    >
      Collect with Crypto
    </button>
  )
}

export default CollectAllButton

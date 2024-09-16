import { useRouter } from 'next/navigation'

function MyAccount() {
  const router = useRouter()
  function isUserLoggedIn() {
    const cookies = document.cookie.split(';');
    return cookies.some(cookie => cookie.trim().startsWith('session='));
  }

  const isLoggedIn = isUserLoggedIn()
  console.log(isLoggedIn)
  isLoggedIn?router.push('/profile'):router.push('/login')
}

export default MyAccount;

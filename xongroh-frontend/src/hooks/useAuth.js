import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    // let isCreator = false
    // let isPatron = false
    // let isAdmin = false
    let status = "User"

    if (token) {
        const decoded = jwtDecode(token)
        const { username } = decoded.UserInfo // add roles later

        // isCreator = roles.includes('Creator') do it later after a logic has been agreed upon
        // isPatron = roles.includes('Patron')
        // isAdmin = roles.includes('Admin')

        // if (isCreator) status = "Creator"
        // if (isPatron) status = "Patron"
        // if (isAdmin) status = "Admin"

        return { username } // add status later
    }

    return { username: '', status }
}
export default useAuth
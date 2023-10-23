import { useContext } from "react";
import { AuthContext } from "../context/userAuth";

function useAuth() {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('must be within an AuthProvider')
    }

    return context
}

export default useAuth
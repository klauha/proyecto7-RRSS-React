
const apiUrl = "http://localhost:4000"


export const register = async (bodyCredentials) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyCredentials),
            }
        )
        const data = await response.json()

        return data

    } catch (error) {
        return error
    }
}

export const login = async (bodyCredentials) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/auth/login`,
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyCredentials),
            }
        )
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}

export const getProfile = async () => {
    try {
        const response = await fetch(
            `${apiUrl}/api/users/profile`,
            {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}

export const editProfile = async (bodyDataToUpdate) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/users/profile`,
            {
                method: "Put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(bodyDataToUpdate),
            }
        )

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error); error

    }
}
const usersUrl = "https://reqres.in/api/users";
const loginUrl = "https://reqres.in/api/login";
export const getalAllUsers = async () => {
    let response = await fetch(usersUrl);
    return response.json();
};

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`${usersUrl}?page=${page}`);
    return response.json();
};

export const getUserDetails = async (id) => {
    let response = await fetch(`${usersUrl}/${id}`);
    return response.json();
};

export const postLogin = async (payload) => {
    const body = {
        ...payload
    };
    let response = await fetch(loginUrl, {
        body: {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        },
    })
    return response.json();
};

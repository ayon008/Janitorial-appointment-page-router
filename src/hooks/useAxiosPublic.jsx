import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://backend.janitorialappointment.com/',
    });
    return instance;
};

export default useAxiosPublic;
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err) {
            console.error(`${err}: erro na API.`);
        }
    }
}

Api.getUserInfo('rmmarquini');
Api.getUserInfo('rmmarquiniiiiiiiiiiiiiiiiiiiiiiiiiii');
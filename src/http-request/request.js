import Axios from 'axios'




const getPlayList = params => Axios.request({
    url: '/api/playlist/all',
    method: 'get',
    params: params,
})

const API = {
    getPlayList
}

export default API
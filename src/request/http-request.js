import Axios from 'axios'

const getMusicList = params => Axios.request({
    url: '/music/list',
    method: 'get',
    params: params,
})

const API = {
    getMusicList,

}

export default API
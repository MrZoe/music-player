import Mock from 'mockjs'



const music = {
    coverImgSrc: require('../../public/banner/celeste.jpg'),
    musicSrc: require('../../public/music/awake.mp3'),
    musicName: 'Awake',
    author: 'Lena Raine',
    album: 'Celeste (Original Soundtrack)',
}

// const musicList = [
//     {
//         coverImgSrc: require('../../public/banner/celeste.jpg'),
//         musicSrc: require('../../public/music/awake.mp3'),
//         musicName: 'Awake',
//         author: 'Lena Raine',
//         album: 'Celeste (Original Soundtrack)',
//     },
// ]


Mock.mock('/api/playlist/all', 'get', (req) => {
    console.log(req)
    return music
})
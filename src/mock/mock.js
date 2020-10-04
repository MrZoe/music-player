import Mock from 'mockjs'
const musicList = [
    {
        id: 0,
        title: 'Awake',
        author: 'Lena Raine',
        album: 'Celeste (Original Soundtrack)',
        type: 100,
        coverSrc: require('../../public/banner/celeste.jpg'),
        musicSrc: require('../../public/music/awake.mp3'),
    },
    {
        id: 1,
        title: '生之爱',
        author: '嘠调',
        album: '嘠调',
        type: 200,
        coverSrc: require('../../public/banner/生之爱.jpg'),
        musicSrc: require('../../public/music/生之爱.mp3'),
    },
    {
        id: 2,
        title: 'A小调圆舞曲',
        author: '肖邦 / 国家交响乐团',
        album: '国家交响乐团演奏合集',
        type: 100,
        coverSrc: require('../../public/banner/A小调圆舞曲.jpg'),
        musicSrc: require('../../public/music/A小调圆舞曲.mp3'),
    },
    {
        id: 3,
        title: 'Piano Sonata No.14, Op.27 No.2:1',
        author: 'Ludwig van Beethoven',
        album: '世界名曲',
        type: 100,
        coverSrc: require('../../public/banner/月光奏鸣曲第一乐章.jpg'),
        musicSrc: require('../../public/music/月光奏鸣曲第一乐章.mp3'),
    },
]

Mock.mock('/music/list', 'get', () => {
    return musicList
})
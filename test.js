const fs = require('fs')
// fs.readFile('E:/frontend/你好.html', function (err, data) {
//     if (err) {
//         console.log('获取文件失败：', err)
//         return
//     }
//     fs.writeFile('E:/frontend/你好2.html', data, function (err) {
//         if (!err) {
//             console.log('写入文件成功')
//         } else {
//             console.log('写入文件失败：', err)
//         }
//     })
// })

for (let i = 0; i < 100000; i++) {
    try { fs.unlinkSync(`E:/nh${i}.html`) } catch{ }
    // try { fs.writeFileSync(`E:/nh${i}.html`, '<span style="color:red">data</span>') } catch{ }

}
console.log('end')

// let a= parseInt('11111111',2)
// console.log(a)


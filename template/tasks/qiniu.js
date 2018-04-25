var qn = require('qn');
var fs = require('fs');
let join = require('path').join;

var client = qn.create({
  accessKey: '-CKuLT7qlltOkN0pB0bVYqQqPgOxlcPcG17Xtazo',
  secretKey: 'ErZPcL0a52VXRus0m5hkiEdD40GFOmizG5NcXJ5N',
  bucket: 'activity',
  uploadURL: 'http://up-z2.qiniup.com',
});

// 上传文件
function upload(filePath, key) {
    client.uploadFile(filePath, { key }, function(err) {
        if (err) console.error(err);
        console.log(`上传完毕: ${key}`);
    });
}

// 递归遍历文件夹
function findSync(startPath) {
    function finder(path) {
        const files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if (stats.isFile()) {
                upload(fPath, fPath.replace('dist/', 'kxdlt-admin/'));
                // console.log(fPath, fPath.replace('dist/', 'kxdlt-admin/'));
            }
        });
    }
    finder(startPath);
}

// 上传整个文件夹
findSync('./dist/static/');

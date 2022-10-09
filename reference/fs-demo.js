const fs = require('fs')
const path = require('path')

// Create folder
fs.mkdir(path.join(__dirname, 'test-folder'), {}, err => {
    if(err) throw err
    console.log('folder created')
})

// Create and write to file - will overwrite text
fs.writeFile(path.join(__dirname, 'test-folder', 'text-file.txt'), 'Words words words', err => {
    if(err) throw err
    console.log('file created')
    // Append more text to file
    fs.appendFile(path.join(__dirname, 'test-folder', 'text-file.txt'), ' more words words words', err => {
        if(err) throw err
        console.log('file appended')
    })
})

// Read file
fs.readFile(path.join(__dirname, '/test-folder', 'text-file.txt'), 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
})

// Rename file
fs.rename(path.join(__dirname, '/test-folder', 'text-file.txt'), (path.join(__dirname, '/test-folder', 'text-file-renamed.txt')), err => {
    if(err) throw err
    console.log('file renamed')
})
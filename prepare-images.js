const fs = require('fs');
const {exec} = require('child_process');

const srcFolder = './public-src/';
const outFolder = './public/';
const imagesSizes = {
  L: 3120,
  M: 1560,
  S: 780,
};

fs.readdirSync(srcFolder).forEach(projectFolder => {
  fs.readdirSync(`${srcFolder}${projectFolder}`).forEach(fullFileName => {
    const [fileName, extension] = fullFileName.split('.');

    const params = {
      projectFolder,
      fileName,
    }

    switch (extension) {
      case 'jpg':
        return convertImage(params);
      default:
        console.error('Unrecognized file type: ', fullFileName)
    }
  });
});

const convertImage = ({ projectFolder, fileName }) => {
  Object.entries(imagesSizes).forEach(([type, width]) => {
    runCommand(
      `cwebp -q 90 -resize ${width} 0 "${srcFolder}${projectFolder}/${fileName}.jpg" -o "${outFolder}${projectFolder}/${fileName}-${type}.webp"`
    );
  });
}

const runCommand = (command) => {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
}

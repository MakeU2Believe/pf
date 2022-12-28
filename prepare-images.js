const fs = require('fs');
const {exec} = require('child_process');

const srcFolder = './public-src/';
const outFolder = './public/';

// sizes here should be synced with constant in ProjectPage.tsx
const projectImagesSizes = {
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
        return jpgToWebP(params);
      case 'mp4':
        return mp4ToWebM(params);
      default:
        console.error('Unrecognized file type: ', fullFileName)
    }
  });
});

function jpgToWebP({ projectFolder, fileName }) {
  Object.entries(projectImagesSizes).forEach(([type, width]) => {
    runCommand(
      `cwebp -q 90 -resize ${width} 0 "${srcFolder}${projectFolder}/${fileName}.jpg" -o "${outFolder}${projectFolder}/${fileName}-${type}.webp"`
    );
  });
}


function mp4ToWebM({ projectFolder, fileName }) {
  runCommand(`ffmpeg -an -y -i "${srcFolder}${projectFolder}/${fileName}.mp4" -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3 "${outFolder}${projectFolder}/${fileName}.mp4"`)

  // TODO try webm
  // runCommand(
  //   `ffmpeg -i "${srcFolder}${projectFolder}/${fileName}.mp4" -vcodec libvpx -qmin 0 -qmax 50 -crf 10 -b:v 1M -acodec libvorbis "${outFolder}${projectFolder}/${fileName}.webm"`
  // );
}

function runCommand(command) {
  console.log('command=', command);

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

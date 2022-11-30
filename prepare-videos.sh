#!/usr/bin/env bash

scriptsPath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P)
projectPath=$(dirname ${scriptsPath})
baseImagesPath="${projectPath}/assets/img/photos/"
originalImages=$(find "./public" -type f -name "*.mp4")

echo "${originalImages}"

mkdir "./temp"
for video in ${originalImages}
do
    baseName=$(basename "${video}")
    echo "Processing ${baseName}..."
    mv "${video}" "./temp/${baseName}"
    ffmpeg -an -i "./temp/${baseName}" -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3 "${video}"
done

rm -rf "./temp"



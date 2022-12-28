#!/usr/bin/env bash


# 3120 1560 780
for file in ./public-src/litkovskaya/*.jpg; do
  cwebp -q 90 -resize 1560 0 "$file" -o "${file%.*}-m.webp"
done

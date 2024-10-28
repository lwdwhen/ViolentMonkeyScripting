script_info=$(grep -B 100 '^// ==/UserScript==' ./rule34_xxx/index.js)

echo "${script_info}" > ./minify/rule34_xxx.min.js
cat ./minify/tmp/rule34_xxx/index.js >> ./minify/rule34_xxx.min.js

rm ./minify/tmp/rule34_xxx/index.js
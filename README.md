1. npm run serve 开发
1. npm run build 准备打包
3. 将dist/index.html 所有css js 链接改成./
上线的代码在dist目录下
4. git checkout -b gh-pages
  删除代码， 把dist/ 所有代码放到根目录下
5. git push origin gh-pages
  源码在master分支， 上线的代码在gh-pages dist/
# Simple TweetDeck

このWebアプリはHTMLやCSSの練習用に作成した。

- `index.html`：フォームの入力画面
- `WebApp.gs`：Google Apps ScriptによるWebアプリ・ログ保存のスクリプト
  
なお、`WebApp.gs`の中で関数`Twitter_for_MacBook(String account, String tweet)`を用いたが、これは渡された`account`で`tweet`の内容を投稿する関数で、動作のためには別で作成する必要がある。また私の所有するGoogleアカウントにログインした状態でなければ機能しない。

Webアプリのアドレスは次の通り：
https://script.google.com/macros/s/AKfycbylkBcw9-bNZn4EKal1RdJfDI6trFqZobvLuyU41N6i9wD7LT6Tdrw8PVsC4WVBzBpozw/exec

---

`index.html`は次のような外観になっている。
<img width="1056" alt="page" src="https://user-images.githubusercontent.com/83168581/119250752-336ed480-bbdd-11eb-8e76-5ff31d4c400a.png">

アカウントを選択しTweetボタンを押すとログが返る。
<img width="1056" alt="result" src="https://user-images.githubusercontent.com/83168581/119250804-8f395d80-bbdd-11eb-9424-37f9ea5c1d1d.png">

投稿データは念のためスプレッドシートに記録してある。
<img width="1056" alt="log" src="https://user-images.githubusercontent.com/83168581/119251173-12f44980-bbe0-11eb-83e6-4e8fd9cb8677.png">

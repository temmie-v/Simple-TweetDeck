function doGet() {
    var html = HtmlService.createTemplateFromFile('index').evaluate();
    html.setTitle('Simple TweetDeck');
    return html;
}

function doPost(e) {
    var account = e.parameter.account, tweet = e.parameter.tweet, ret = "";
    var r = Twitter_for_MacBook(account, tweet);
    /*
     * function Twitter_for_MacBook(String account, String tweet)
     *  -> JSON.parse(response of https://api.twitter.com/1.1/statuses/update.json { method: 'post', payload: { status: message } })
     * If the given account isn't supported, return null
     */
    if (r != null && account != undefined) {
        record(r.created_at, account, r.text);
        ret = 'Success!\n\n' + r.created_at + '　' + '\n@' + r.user.screen_name + '　' + r.user.name + '　No. ' + r.user.statuses_count + '\n' + r.text;
    } else {
        ret = 'Error';
    }
    return ContentService.createTextOutput(ret);
}

function record(created_at, screen_name, tweet) {
    var sheet = SpreadsheetApp.openById('1BAjn3uHBhu5yMS7BxDn2EdiopgjBo0uUziej2dlPT5g').getSheetByName('form');
    var lastrow = sheet.getLastRow() + 1;
    sheet.getRange(lastrow, 1).setValue(created_at);
    sheet.getRange(lastrow, 2).setValue(screen_name);
    sheet.getRange(lastrow, 3).setValue(tweet);
}


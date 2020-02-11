$(function(){
  last_message_id = $('.messages:last').data("message-id");
  function buildHTML(message){
      var image = (message.image) ? `<img class= "lower-message__image" src=${message.image} >` : ""; //三項演算子を使ってmessage.imageにtrueならHTML要素、faiseなら空の値を代入。
        var html =
          `<div class="messages" data-message-id="${message.id}">
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
            </div>
            <div class="upper-message__date">
            ${message.created_at}
            </div>
            </div>
            <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
            ${image}
          </div>`
        return html;
      }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html);      
      $('form')[0].reset();
      $('.submit-btn').prop("disabled", false);
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  });

  $(function(){
    $(function(){
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
      setInterval(reloadMessages, 7000);
    }
  })

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.messages:last').data("message-id");
    console.log(last_message_id);
    group_id = $('.main-header__left-box__current-group').data('group_id');
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: `/groups/${group_id}/api/messages`,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'GET',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {
        id: last_message_id
      }
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {  //追加するHTMLの入れ物を作る
          var insertHTML = '';
          //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          //メッセージが入ったHTMLに、入れ物ごと追加
          $('.message').append(insertHTML);
          $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
        }
        })
    .fail(function() {
      alert('error');
    });
  };
})
})
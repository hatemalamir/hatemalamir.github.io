$(function() {
  $("#userIdBt").click(() => {
    const userId = $("#userId").val();
    if(userId)
      $.get(
        "https://jsonplaceholder.typicode.com/posts",
        {"userId": userId}
      ).done((data) => {
        const posts= $("#posts");
        posts.empty();
        if(data.length < 1) {
          posts.append($("<div>", {
            "class": "noPosts",
            "text": "No posts found!"
          }));
          return;
        }
        for(const p of data) {
          const post = $("<div>", {"class": "post"});
          post.append($("<div>", {
            "class": "postTitle",
            "text": "#" + p.id + ": " + p.title
          }));
          post.append($("<div>", {
            "class": "postBody",
            "text": p.body
          }));
          posts.append(post);
        }
      }).fail(() => {
        const posts= $("#posts");
        posts.empty();
        posts.append($("<div>", {
          "class": "error",
          "text": "Some error occured wile reading posts!"
        }));
      });
  });
});

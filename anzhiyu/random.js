var posts=["2024/06/25/article2/","2024/06/26/article3/","2024/06/24/article1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
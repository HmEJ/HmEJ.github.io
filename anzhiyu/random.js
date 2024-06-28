var posts=["2024/06/26/article3/","2024/06/24/article1/","2024/06/25/article2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
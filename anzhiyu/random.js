var posts=["2024/06/26/article3/","2024/07/07/article4/","2024/09/22/win11professionalactive/","2024/07/18/article5/","2024/06/24/article1/","2024/08/11/自用工具合集/","2024/06/25/article2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
# egg_example
Eggjs


### CSRF 模式
    
    ```
        // CSRF的全名为 Cross-site request forgery， 它的中文名为 伪造跨站请求。
        // /config/config.default.js
        // 关闭掉CSRF
        config.security = {
            csrf :{
              enable:false,
            }
        }

    ```

### eggjs 参数传递
    
+ get
    
    ```
        // 自由传参
        http:www.xxx.com/articles?id=xx&title=xxx
        // 严格模拟传参
        router.get('/articles/:id/:title', controller.)
    ```
  
+ post
  
    ```
        // 
        const { ctx } = this;
        ctx.body={
           status: 200,
           data: ctx.request.body
        }
    ```
  
### ejs 模版引擎
  
+ instll
  
  ```yarn add egg-view-ejs```

+ 配置
  
  ```
    // /config/plugin.js
    exports.ejs = {
        enable :true,
        package:"egg-view-ejs"
    }
    
    /config /config.default.js
    config.view = {
        mapping : {
            ".html":"ejs"
        }
    };
    config.ejs={
      delimiter: "$", // 修改默认的分隔符号
      prefix:"/assets/", // 修改静态资源的路径前缀
    }
  ```
+ 使用
  
  ```
    @Controller
    async index() {
      const {ctx} = this;
      await ctx.render('king.html');
    }
  ```
  
  ```
      // 载入其他的模版
      <% include header.html %>
  
      // 配置静态资源
  ```
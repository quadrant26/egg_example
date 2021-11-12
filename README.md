# egg_example
Eggjs


### CSRF 模式
    
    ```
        // CSRF的全名为 Cross-site request forgery， 它的中文名为 伪造跨站请求。
        // /config/config/default.js
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
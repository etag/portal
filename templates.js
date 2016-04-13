!function(){var l=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["tmpl-readers"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,r,n,e){var t,s=null!=a?a:{},o=r.helperMissing,i="function",m=l.escapeExpression;return'<div>\r\n  <div class="form-container">\r\n    <form name="myForm" id="submitForm" >\r\n      <div class="form-group">\r\n        <label class="control-label" for="url">URL</label>\r\n        <input type="text" class="form-control" name='+m((t=null!=(t=r.url||(null!=a?a.url:a))?t:o,typeof t===i?t.call(s,{name:"url",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="reader_id">Reader ID</label>\r\n        <input type="text" class="form-control" name='+m((t=null!=(t=r.reader_id||(null!=a?a.reader_id:a))?t:o,typeof t===i?t.call(s,{name:"reader_id",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="name">Name</label>\r\n        <input type="text" class="form-control" name='+m((t=null!=(t=r.name||(null!=a?a.name:a))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="description">Description</label>\r\n        <input type="text" class="form-control" name='+m((t=null!=(t=r.description||(null!=a?a.description:a))?t:o,typeof t===i?t.call(s,{name:"description",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="user_id">User ID</label>\r\n        <input type="text" class="form-control" name='+m((t=null!=(t=r.user_id||(null!=a?a.user_id:a))?t:o,typeof t===i?t.call(s,{name:"user_id",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <div class="sumbit">\r\n          <button type="submit" class="btn btn-primary">Submit</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n</div>\r\n'},useData:!0}),a["tmpl-tags"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,r,n,e){var t;return"<div> "+l.escapeExpression((t=null!=(t=r.text||(null!=a?a.text:a))?t:r.helperMissing,"function"==typeof t?t.call(null!=a?a:{},{name:"text",hash:{},data:e}):t))+" </div>\r\n"},useData:!0}),a["tmpl-tr"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,r,n,e){var t,s=null!=a?a:{},o=r.helperMissing,i="function",m=l.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+m((t=null!=(t=r.result||(null!=a?a.result:a))?t:o,typeof t===i?t.call(s,{name:"result",hash:{},data:e}):t))+"');return false;\" >"+m((t=null!=(t=r.task_name||(null!=a?a.task_name:a))?t:o,typeof t===i?t.call(s,{name:"task_name",hash:{},data:e}):t))+"</a></td><td>"+m((t=null!=(t=r.timestamp||(null!=a?a.timestamp:a))?t:o,typeof t===i?t.call(s,{name:"timestamp",hash:{},data:e}):t))+"</td><td>"+m((r.json_metatags||a&&a.json_metatags||o).call(s,null!=a?a.tags:a,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\r\n"},useData:!0}),a["tmpl-user"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,r,n,e){var t,s=null!=a?a:{},o=r.helperMissing,i="function",m=l.escapeExpression;return'      <h2>User Profile</h2>\r\n      <div id="user_profile">\r\n          <div id="photo" class="col-md-2" style="width:200px ">\r\n            <img src="'+m((t=null!=(t=r.gravator_url||(null!=a?a.gravator_url:a))?t:o,typeof t===i?t.call(s,{name:"gravator_url",hash:{},data:e}):t))+'?s=180&d=mm"><br><br>\r\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\r\n            <a id="reset_password" style="clear:both;">Reset Password</a>\r\n          </div>\r\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Username</label>\r\n                  <div class="col-md-09">\r\n                <p class="form-control-static">'+m((t=null!=(t=r.username||(null!=a?a.username:a))?t:o,typeof t===i?t.call(s,{name:"username",hash:{},data:e}):t))+'</p>\r\n                </div>\r\n            </div>\r\n             <div class="form-group">\r\n                  <label class="col-md-3 control-label">Name</label>\r\n                    <div class="col-md-09">\r\n                  <p class="form-control-static">'+m((t=null!=(t=r.name||(null!=a?a.name:a))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'</p>\r\n                  </div>\r\n            </div>\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Email</label>\r\n                  <div class="col-md-09">\r\n                    <p class="form-control-static">'+m((t=null!=(t=r.email||(null!=a?a.email:a))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'</p>\r\n                 </div>\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\r\n         </form>\r\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\r\n              <div style="display:none">\r\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+m((t=null!=(t=r.csrftoken||(null!=a?a.csrftoken:a))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n             </div>\r\n              <div class="form-group">\r\n                 <label for="first_name">First Name</label>\r\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+m((t=null!=(t=r.first_name||(null!=a?a.first_name:a))?t:o,typeof t===i?t.call(s,{name:"first_name",hash:{},data:e}):t))+'">\r\n             </div>\r\n              <div class="form-group">\r\n                   <label for="last_name">Last Name</label>\r\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+m((t=null!=(t=r.last_name||(null!=a?a.last_name:a))?t:o,typeof t===i?t.call(s,{name:"last_name",hash:{},data:e}):t))+'">\r\n               </div>\r\n              <div class="form-group">\r\n                 <label for="email">Email address</label>\r\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+m((t=null!=(t=r.email||(null!=a?a.email:a))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'">\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\r\n         </form>\r\n         <div class="row" style="width:100%;clear:both;"></div>\r\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\r\n            <div style="display:none">\r\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+m((t=null!=(t=r.csrftoken||(null!=a?a.csrftoken:a))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password">New Password</label>\r\n              <input type="password" class="form-control" name="password" placeholder="New Password">\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password2">Retype New Password</label>\r\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\r\n           </div>\r\n           <button type="submit" class="btn btn-default">Set Password</button>\r\n         </form>\r\n     </div>\r\n'},useData:!0})}();

!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["tmpl-readers-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,r,l,e){var t,s=null!=n?n:{},o=r.helperMissing,i="function",d=a.escapeExpression;return'<form action="'+d((t=null!=(t=r.url||(null!=n?n.url:n))?t:o,typeof t===i?t.call(s,{name:"url",hash:{},data:e}):t))+'" name="myForm" method="POST" id="submitForm" >\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Reader ID</label>\r\n          <input type="text" class="form-control" name="reader_id" id="reader_id" value="'+d((t=null!=(t=r.reader_id||(null!=n?n.reader_id:n))?t:o,typeof t===i?t.call(s,{name:"reader_id",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Name</label>\r\n          <input type="text" class="form-control" name="name" id="name" value="'+d((t=null!=(t=r.name||(null!=n?n.name:n))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="description">Description</label>\r\n          <input type="text" class="form-control" name="description" id="description" value="'+d((t=null!=(t=r.description||(null!=n?n.description:n))?t:o,typeof t===i?t.call(s,{name:"description",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="user_id">User ID</label>\r\n          <input type="text" class="form-control" name="user_id" id="user_id" value="'+d((t=null!=(t=r.user_id||(null!=n?n.user_id:n))?t:o,typeof t===i?t.call(s,{name:"user_id",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button type="submit" class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-readers"]=a({1:function(a,n,r,l,e){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.reader_id:n,n))+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,r,l,e){var t;return'<div> <!--beginning div-->\r\n  <div class = "tab-container"> <!--tab container div-->\r\n    <div class = "dropdown-reader"> <!--dropdown div-->\r\n      <select class="btn btn-default dropdown-toggle" type="button" id="readers-container" size = "10" data-toggle="dropdown" aria-expanded="true" aria-haspopup="true">\r\n'+(null!=(t=r.each.call(null!=n?n:{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?t:"")+'      </select>\r\n    </div> <!--end of dropdown div-->\r\n\r\n    <div id="readers-form" class="form-container"> <!--form div-->\r\n    </div> <!--end of form div-->\r\n    <div id="tags-table" class = "table-container"> <!--table div-->\r\n    </div> <!--end of table div-->\r\n  </div> <!--end of container div-->\r\n</div> <!--ending div-->\r\n'},useData:!0}),n["tmpl-tags-table"]=a({1:function(a,n,r,l,e){var t=a.lambda,s=a.escapeExpression;return"    <tr>\n      <td>"+s(t(null!=n?n.tag:n,n))+"</td>\n      <td>"+s(t(null!=n?n.tag_timestamp:n,n))+"</td>\n    </tr>\n"},compiler:[7,">= 4.0.0"],main:function(a,n,r,l,e){var t;return'<table id="grid-basic" name="myTable" class="table table-bordered table-striped">\n  <thead>\n    <tr>\n      <th data-column-id="tag">Tag</th>\n      <th data-column-id="tag-timestamp">Tag Timestamp</th>\n    </tr>\n  </thead>\n  <tbody id ="tagRow">\n'+(null!=(t=r.each.call(null!=n?n:{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?t:"")+"  </tbody>\n</table>\n"},useData:!0}),n["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,r,l,e){var t,s=null!=n?n:{},o=r.helperMissing,i="function",d=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+d((t=null!=(t=r.result||(null!=n?n.result:n))?t:o,typeof t===i?t.call(s,{name:"result",hash:{},data:e}):t))+"');return false;\" >"+d((t=null!=(t=r.task_name||(null!=n?n.task_name:n))?t:o,typeof t===i?t.call(s,{name:"task_name",hash:{},data:e}):t))+"</a></td><td>"+d((t=null!=(t=r.timestamp||(null!=n?n.timestamp:n))?t:o,typeof t===i?t.call(s,{name:"timestamp",hash:{},data:e}):t))+"</td><td>"+d((r.json_metatags||n&&n.json_metatags||o).call(s,null!=n?n.tags:n,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\r\n"},useData:!0}),n["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,r,l,e){var t,s=null!=n?n:{},o=r.helperMissing,i="function",d=a.escapeExpression;return'      <h2>User Profile</h2>\r\n      <div id="user_profile">\r\n          <div id="photo" class="col-md-2" style="width:200px ">\r\n            <img src="'+d((t=null!=(t=r.gravator_url||(null!=n?n.gravator_url:n))?t:o,typeof t===i?t.call(s,{name:"gravator_url",hash:{},data:e}):t))+'?s=180&d=mm"><br><br>\r\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\r\n            <a id="reset_password" style="clear:both;">Reset Password</a>\r\n          </div>\r\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Username</label>\r\n                  <div class="col-md-09">\r\n                <p class="form-control-static">'+d((t=null!=(t=r.username||(null!=n?n.username:n))?t:o,typeof t===i?t.call(s,{name:"username",hash:{},data:e}):t))+'</p>\r\n                </div>\r\n            </div>\r\n             <div class="form-group">\r\n                  <label class="col-md-3 control-label">Name</label>\r\n                    <div class="col-md-09">\r\n                  <p class="form-control-static">'+d((t=null!=(t=r.name||(null!=n?n.name:n))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'</p>\r\n                  </div>\r\n            </div>\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Email</label>\r\n                  <div class="col-md-09">\r\n                    <p class="form-control-static">'+d((t=null!=(t=r.email||(null!=n?n.email:n))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'</p>\r\n                 </div>\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\r\n         </form>\r\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\r\n              <div style="display:none">\r\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=r.csrftoken||(null!=n?n.csrftoken:n))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n             </div>\r\n              <div class="form-group">\r\n                 <label for="first_name">First Name</label>\r\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((t=null!=(t=r.first_name||(null!=n?n.first_name:n))?t:o,typeof t===i?t.call(s,{name:"first_name",hash:{},data:e}):t))+'">\r\n             </div>\r\n              <div class="form-group">\r\n                   <label for="last_name">Last Name</label>\r\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((t=null!=(t=r.last_name||(null!=n?n.last_name:n))?t:o,typeof t===i?t.call(s,{name:"last_name",hash:{},data:e}):t))+'">\r\n               </div>\r\n              <div class="form-group">\r\n                 <label for="email">Email address</label>\r\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((t=null!=(t=r.email||(null!=n?n.email:n))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'">\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\r\n         </form>\r\n         <div class="row" style="width:100%;clear:both;"></div>\r\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\r\n            <div style="display:none">\r\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=r.csrftoken||(null!=n?n.csrftoken:n))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password">New Password</label>\r\n              <input type="password" class="form-control" name="password" placeholder="New Password">\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password2">Retype New Password</label>\r\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\r\n           </div>\r\n           <button type="submit" class="btn btn-default">Set Password</button>\r\n         </form>\r\n     </div>\r\n'},useData:!0})}();

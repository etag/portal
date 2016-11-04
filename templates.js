!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["tmpl-animal-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e,s=null!=n?n:{},o=l.helperMissing,d="function",i=a.escapeExpression;return'<form id="submit_animal" onclick = "form_submit(\'submit_animal\'); return false;">\r\n\r\n        <div class="form-group" style="display:none">\r\n          <label class="control-label" for="url">URL</label>\r\n          <input type="text" class="form-control" name="url" id="url" value="'+i((e=null!=(e=l.url||(null!=n?n.url:n))?e:o,typeof e===d?e.call(s,{name:"url",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Name</label>\r\n          <input type="text" class="form-control" name="name" id="name" value="'+i((e=null!=(e=l.name||(null!=n?n.name:n))?e:o,typeof e===d?e.call(s,{name:"name",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Description</label>\r\n          <input type="text" class="form-control" name="description" id="description" value="'+i((e=null!=(e=l.description||(null!=n?n.description:n))?e:o,typeof e===d?e.call(s,{name:"description",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Start Timestamp</label>\r\n          <input type="text" class="form-control" name="longitude" id="start_timestamp" value="'+i((e=null!=(e=l.start_timestamp||(null!=n?n.start_timestamp:n))?e:o,typeof e===d?e.call(s,{name:"start_timestamp",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">End Timestamp</label>\r\n          <input type="text" class="form-control" name="latitude" id="end_timestamp" value="'+i((e=null!=(e=l.end_timestamp||(null!=n?n.end_timestamp:n))?e:o,typeof e===d?e.call(s,{name:"end_timestamp",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-location-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e,s=null!=n?n:{},o=l.helperMissing,d="function",i=a.escapeExpression;return'<form id="submit_location" onclick = "form_submit(\'submit_location\'); return false;">\r\n\r\n        <div class="form-group" style="display:none">\r\n          <label class="control-label" for="url">URL</label>\r\n          <input type="text" class="form-control" name="url" id="url" value="'+i((e=null!=(e=l.url||(null!=n?n.url:n))?e:o,typeof e===d?e.call(s,{name:"url",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Start Timestamp</label>\r\n          <input type="text" class="form-control" name="start_timestamp" id="start_timestamp" value="'+i((e=null!=(e=l.start_timestamp||(null!=n?n.start_timestamp:n))?e:o,typeof e===d?e.call(s,{name:"start_timestamp",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">End Timestamp</label>\r\n          <input type="text" class="form-control" name="end_timestamp" id="end_timestamp" value="'+i((e=null!=(e=l.end_timestamp||(null!=n?n.end_timestamp:n))?e:o,typeof e===d?e.call(s,{name:"end_timestamp",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Longitude</label>\r\n          <input type="number" class="form-control" name="longitude" id="longitude" value='+i((e=null!=(e=l.longitude||(null!=n?n.longitude:n))?e:o,typeof e===d?e.call(s,{name:"longitude",hash:{},data:t}):e))+'>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Latitude</label>\r\n          <input type="number" class="form-control" name="latitude" id="latitude" value='+i((e=null!=(e=l.latitude||(null!=n?n.latitude:n))?e:o,typeof e===d?e.call(s,{name:"latitude",hash:{},data:t}):e))+'>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-readers-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e,s=null!=n?n:{},o=l.helperMissing,d="function",i=a.escapeExpression;return'<form id="submitForm" onclick = "form_submit(\'submitForm\'); return false;">\r\n\r\n        <div class="form-group" style="display:none">\r\n          <label class="control-label" for="url">URL</label>\r\n          <input type="text" class="form-control" name="url" id="url" value="'+i((e=null!=(e=l.url||(null!=n?n.url:n))?e:o,typeof e===d?e.call(s,{name:"url",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Reader ID</label>\r\n          <input type="text" class="form-control" name="reader_id" id="reader_id" value="'+i((e=null!=(e=l.reader_id||(null!=n?n.reader_id:n))?e:o,typeof e===d?e.call(s,{name:"reader_id",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Name</label>\r\n          <input type="text" class="form-control" name="name" id="name" value="'+i((e=null!=(e=l.name||(null!=n?n.name:n))?e:o,typeof e===d?e.call(s,{name:"name",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="description">Description</label>\r\n          <input type="text" class="form-control" name="description" id="description" value="'+i((e=null!=(e=l.description||(null!=n?n.description:n))?e:o,typeof e===d?e.call(s,{name:"description",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <!--<div class="form-group" style="display:none">\r\n          <label class="control-label" for="user_id">User ID</label>\r\n          <input type="text" class="form-control" name="user_id" id="user_id" value="'+i((e=null!=(e=l.user_id||(null!=n?n.user_id:n))?e:o,typeof e===d?e.call(s,{name:"user_id",hash:{},data:t}):e))+'">\r\n        </div>-->\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-readers-table"]=a({1:function(a,n,l,r,t){var e=a.lambda,s=a.escapeExpression;return"      <tr>\r\n        <td>"+s(e(null!=n?n.start_timestamp:n,n))+"</td>\r\n        <td>"+s(e(null!=n?n.end_timestamp:n,n))+"</td>\r\n        <td>"+s(e(null!=n?n.latitude:n,n))+"</td>\r\n        <td>"+s(e(null!=n?n.longitude:n,n))+'</td>\r\n        <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal2" onclick = "lat_long_change(\''+s(e(null!=n?n.url:n,n))+'\'); return false;" id="#myModal2">Edit</button></td>\r\n      </tr>\r\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e;return'<div id = "grid-container">\r\n  <table id="grid-basic" name="myTable" class="table table-bordered table-striped">\r\n    <thead>\r\n      <tr>\r\n        <th data-column-id="start_time">Start Timestamp</th>\r\n        <th data-column-id="end_time">End Timestamp</th>\r\n        <th data-column-id="latitude">Latitude</th>\r\n        <th data-column-id="longitude">Longitude</th>\r\n        <th data-column-id="longitude">Edit <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#modal_add" onclick = "reader_add(); return false;" id="#myModal3">+</button></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id ="locationRow">\r\n'+(null!=(e=l.each.call(null!=n?n:{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?e:"")+'    </tbody>\r\n  </table>\r\n\r\n\r\n  <div class="modal fade" id="modal2" tabindex="-1" role="dialog">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n          <h4 class="modal-title">Edit Longitude/Latitude</h4>\r\n        </div>\r\n        <div class="modal-body">\r\n          <div id="modal-lat-long"></div>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n  <div class="modal fade" id="modal_add" tabindex="-1" role="dialog">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n          <h4 class="modal-title">Add Longitude/Latitude</h4>\r\n        </div>\r\n        <div class="modal-body">\r\n          <div id="modal-location"></div>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n</div>\r\n'},useData:!0}),n["tmpl-readers"]=a({1:function(a,n,l,r,t){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.reader_id:n,n))+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e;return'<div> <!--beginning div-->\r\n  <div class = "tab-container"> <!--tab container div-->\r\n    <div class = "dropdown-reader"> <!--dropdown div-->\r\n      <select class="form-control" id="readers-container" size = "10">\r\n'+(null!=(e=l.each.call(null!=n?n:{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?e:"")+'      </select>\r\n    </div> <!--end of dropdown div-->\r\n\r\n    <div id="readers-form" class="form-container"> <!--form div-->\r\n    </div> <!--end of form div-->\r\n    <div id="readers-table" class = "table-container"> <!--table div-->\r\n    </div> <!--end of table div-->\r\n  </div> <!--end of container div-->\r\n</div> <!--ending div-->\r\n'},useData:!0}),n["tmpl-tags-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e,s=null!=n?n:{},o=l.helperMissing,d="function",i=a.escapeExpression;return'<form id="submit_tags" onclick = "form_submit(\'submit_tags\'); return false;">\r\n\r\n        <div class="form-group" style="display:none">\r\n          <label class="control-label" for="url">URL</label>\r\n          <input type="text" class="form-control" name="url" id="url" value="'+i((e=null!=(e=l.url||(null!=n?n.url:n))?e:o,typeof e===d?e.call(s,{name:"url",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Tag ID</label>\r\n          <input type="text" class="form-control" name="tag_id" id="tag_id" value="'+i((e=null!=(e=l.tag_id||(null!=n?n.tag_id:n))?e:o,typeof e===d?e.call(s,{name:"tag_id",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Name</label>\r\n          <input type="text" class="form-control" name="name" id="name" value="'+i((e=null!=(e=l.name||(null!=n?n.name:n))?e:o,typeof e===d?e.call(s,{name:"name",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="description">Description</label>\r\n          <input type="text" class="form-control" name="description" id="description" value="'+i((e=null!=(e=l.description||(null!=n?n.description:n))?e:o,typeof e===d?e.call(s,{name:"description",hash:{},data:t}):e))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-tags-table"]=a({1:function(a,n,l,r,t){var e=a.lambda,s=a.escapeExpression;return"      <tr>\r\n        <td>"+s(e(null!=n?n.name:n,n))+"</td>\r\n        <td>"+s(e(null!=n?n.description:n,n))+"</td>\r\n        <td>"+s(e(null!=n?n.start_timestamp:n,n))+"</td>\r\n        <td>"+s(e(null!=n?n.end_timestamp:n,n))+'</td>\r\n        <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal3" onclick = "tag_animal_change(\''+s(e(null!=n?n.url:n,n))+'\'); return false;" id="#myModal3">Edit</button></td>\r\n      </tr>\r\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e;return'<div id = "tag-container">\r\n  <table id="grid-basic" name="myTable" class="table table-bordered table-striped">\r\n    <thead>\r\n      <tr>\r\n        <th data-column-id="name">Name</th>\r\n        <th data-column-id="description">Description</th>\r\n        <th data-column-id="start_time">Start Timestamp</th>\r\n        <th data-column-id="end_time">End Timestamp</th>\r\n        <th data-column-id="longitude">Edit <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#modal_add2" onclick = "tag_animal_add(); return false;" id="#myModal_add2">+</button></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id ="animalRow">\r\n'+(null!=(e=l.each.call(null!=n?n:{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?e:"")+'    </tbody>\r\n  </table>\r\n\r\n\r\n  <div class="modal fade" id="modal3" tabindex="-1" role="dialog">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n          <h4 class="modal-title">Edit Animal</h4>\r\n        </div>\r\n        <div class="modal-body">\r\n          <div id="modal-tag-animal"></div>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n  <div class="modal fade" id="modal_add2" tabindex="-1" role="dialog">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n          <h4 class="modal-title">Add Animal</h4>\r\n        </div>\r\n        <div class="modal-body">\r\n          <div id="modal-animal"></div>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n</div>\r\n'},useData:!0}),n["tmpl-tags"]=a({1:function(a,n,l,r,t){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.tag_id:n,n))+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e;return'<div> <!--beginning div-->\r\n  <div class = "tab-container"> <!--tab container div-->\r\n    <div class = "dropdown-reader"> <!--dropdown div-->\r\n      <select class="form-control" id="tags-container" size = "10">\r\n'+(null!=(e=l.each.call(null!=n?n:{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?e:"")+'      </select>\r\n    </div> <!--end of dropdown div-->\r\n\r\n    <div id="tags-form" class="form-container"> <!--form div-->\r\n    </div> <!--end of form div-->\r\n    <div id="tags-table" class = "table-container">\r\n    </div>\r\n  </div> <!--end of container div-->\r\n</div> <!--ending div-->\r\n'},useData:!0}),n["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e,s=null!=n?n:{},o=l.helperMissing,d="function",i=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+i((e=null!=(e=l.result||(null!=n?n.result:n))?e:o,typeof e===d?e.call(s,{name:"result",hash:{},data:t}):e))+"');return false;\" >"+i((e=null!=(e=l.task_name||(null!=n?n.task_name:n))?e:o,typeof e===d?e.call(s,{name:"task_name",hash:{},data:t}):e))+"</a></td><td>"+i((e=null!=(e=l.timestamp||(null!=n?n.timestamp:n))?e:o,typeof e===d?e.call(s,{name:"timestamp",hash:{},data:t}):e))+"</td><td>"+i((l.json_metatags||n&&n.json_metatags||o).call(s,null!=n?n.tags:n,{name:"json_metatags",hash:{},data:t}))+"</td></tr>\r\n"},useData:!0}),n["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,t){var e,s=null!=n?n:{},o=l.helperMissing,d="function",i=a.escapeExpression;return'      <h2>User Profile</h2>\r\n      <div id="user_profile">\r\n          <div id="photo" class="col-md-2" style="width:200px ">\r\n            <img src="'+i((e=null!=(e=l.gravator_url||(null!=n?n.gravator_url:n))?e:o,typeof e===d?e.call(s,{name:"gravator_url",hash:{},data:t}):e))+'?s=180&d=mm"><br><br>\r\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\r\n            <a id="reset_password" style="clear:both;">Reset Password</a>\r\n          </div>\r\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Username</label>\r\n                  <div class="col-md-09">\r\n                <p class="form-control-static">'+i((e=null!=(e=l.username||(null!=n?n.username:n))?e:o,typeof e===d?e.call(s,{name:"username",hash:{},data:t}):e))+'</p>\r\n                </div>\r\n            </div>\r\n             <div class="form-group">\r\n                  <label class="col-md-3 control-label">Name</label>\r\n                    <div class="col-md-09">\r\n                  <p class="form-control-static">'+i((e=null!=(e=l.name||(null!=n?n.name:n))?e:o,typeof e===d?e.call(s,{name:"name",hash:{},data:t}):e))+'</p>\r\n                  </div>\r\n            </div>\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Email</label>\r\n                  <div class="col-md-09">\r\n                    <p class="form-control-static">'+i((e=null!=(e=l.email||(null!=n?n.email:n))?e:o,typeof e===d?e.call(s,{name:"email",hash:{},data:t}):e))+'</p>\r\n                 </div>\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\r\n         </form>\r\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\r\n              <div style="display:none">\r\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+i((e=null!=(e=l.csrftoken||(null!=n?n.csrftoken:n))?e:o,typeof e===d?e.call(s,{name:"csrftoken",hash:{},data:t}):e))+'"/>\r\n             </div>\r\n              <div class="form-group">\r\n                 <label for="first_name">First Name</label>\r\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+i((e=null!=(e=l.first_name||(null!=n?n.first_name:n))?e:o,typeof e===d?e.call(s,{name:"first_name",hash:{},data:t}):e))+'">\r\n             </div>\r\n              <div class="form-group">\r\n                   <label for="last_name">Last Name</label>\r\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+i((e=null!=(e=l.last_name||(null!=n?n.last_name:n))?e:o,typeof e===d?e.call(s,{name:"last_name",hash:{},data:t}):e))+'">\r\n               </div>\r\n              <div class="form-group">\r\n                 <label for="email">Email address</label>\r\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+i((e=null!=(e=l.email||(null!=n?n.email:n))?e:o,typeof e===d?e.call(s,{name:"email",hash:{},data:t}):e))+'">\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\r\n         </form>\r\n         <div class="row" style="width:100%;clear:both;"></div>\r\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\r\n            <div style="display:none">\r\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+i((e=null!=(e=l.csrftoken||(null!=n?n.csrftoken:n))?e:o,typeof e===d?e.call(s,{name:"csrftoken",hash:{},data:t}):e))+'"/>\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password">New Password</label>\r\n              <input type="password" class="form-control" name="password" placeholder="New Password">\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password2">Retype New Password</label>\r\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\r\n           </div>\r\n           <button type="submit" class="btn btn-default">Set Password</button>\r\n         </form>\r\n     </div>\r\n'},useData:!0})}();

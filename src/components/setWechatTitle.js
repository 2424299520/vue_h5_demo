import $ from 'jquery'
import axios from 'axios'
import community from '@/components/home/community/communityList'
export default{
	saveStorage(dataObj){
		//储存用户信息
//		agentarea agentchannel agentid agenttype phoneno stopdate token
        var agentarea = dataObj.agentarea;
        var agentchannel = dataObj.agentchannel;
        var agentid = dataObj.agentid;
        var agenttype = dataObj.agenttype;
        var phoneno = dataObj.phoneno;
        var stopdate = dataObj.stopdate;
        var token = dataObj.token;

        localStorage.setItem("agentarea",agentarea);
        localStorage.setItem("agentchannel",agentchannel);
        localStorage.setItem("agentid",agentid);
        localStorage.setItem("agenttype",agenttype);
        localStorage.setItem("phoneno",phoneno);
        localStorage.setItem("stopdate",stopdate);
        localStorage.setItem("token",token);
	},
	titile(title){
		document.title = title
		var mobile = navigator.userAgent.toLowerCase()
		if (/iphone|ipad|ipod/.test(mobile)) {
			var iframe = document.createElement('iframe')
			iframe.style.display = 'none'

			iframe.setAttribute('src', '/favicon.ico')
			var iframeCallback = function () {
				setTimeout(function () {
					iframe.removeEventListener('load', iframeCallback)
					document.body.removeChild(iframe)
				}, 0)
			}
			iframe.addEventListener('load', iframeCallback)
			document.body.appendChild(iframe)
			}
	},
//	promise(cb){
//		return new Promise((resolve,reject) => {
//			cb(resolve,reject)
//		})
//	},
	unBindScroll(){
		$(window).unbind("scroll");
	},
	bindScroll(pageno){
		var pageno = pageno;
		$(window).unbind('scroll');
		$(window).scroll(function(){
			var win = $(window);
			var height = win.height();
			var top = win.scrollTop();
			var bodyTop = parseInt($("body").height());

				if((height + top - bodyTop) > 0){
					console.log(height + top - bodyTop);
					pageno = pageno + 1;
					console.log(this)
					community.methods._loading(pageno)
				}
		})
	},

	mobileAddStar(mobile){
		var stars = (mobile+"").split("");
        stars[3] = '*';
        stars[4] = '*';
        stars[5] = '*';
        stars[6] = '*';
        return stars.join("");
	},
	getList (data, callback) {
	    reqwest({
	      url: domain,
	      data: data
	    })
	    .then(val => callback(null, val))
	    .catch(e => callback(e))
	},
  toArray(obj){
    if($.isArray(obj)) return obj;
    else{
      return [obj];
    }
  }
}

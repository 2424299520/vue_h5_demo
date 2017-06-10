

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
	}
}

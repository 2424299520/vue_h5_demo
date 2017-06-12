import Vue from 'vue'
import Router from 'vue-router'
import main from '../main.js'
import bizHome from '@/components/home/bizHome'
import logo from '@/components/logo'
import register from '@/components/register'
import change from '@/components/change'
import headeres from '@/components/home/header/header'
import set from '@/components/home/set/set'
import setBindPay from '@/components/home/set/children/setBindPay'
import bindPay from '@/components/home/set/children/bindPay'
import bindCard from '@/components/home/set/children/bindCard'
import bindWechat from '@/components/home/set/children/bindWechat'
import blank from '@/components/home/set/children/blank'
import setChangeDepoistPwd from '@/components/home/set/children/setChangeDepoistPwd'
import setChangeLogoPwd from '@/components/home/set/children/setChangeLogoPwd'
import validatePwd from '@/components/home/set/children/validatePwd'
import tell from '@/components/home/tell/tell'
import deposit from '@/components/home/tell/children/deposit'
import system from '@/components/home/tell/children/system'
import systemDetail from '@/components/home/tell/children/systemDetail'
import depositDetail from '@/components/home/tell/children/depositDetail'
import loading from '@/components/loading'
import setWechatTitle from '@/components/setWechatTitle'
import communityList from '@/components/home/community/communityList'
import communityDetail from '@/components/home/community/communityDetail'

//import webapi from '@/components/webapi'
Vue.use(Router)

export default new Router({
  routes: [ {path:"/",name : 'logo',component : logo},
					  {path: '/register',name: 'register',component: register},
					  {path: '/change',name: 'change',component: change},
					  {path: '/bizHome', name: 'bizHome',component: bizHome},
					  {path: '/headeres', name: 'headeres', component: headeres},
					  {path: '/set',name: 'set',component: set},
					  {path: '/setBindPay',name: 'setBindPay',component: setBindPay},
					  {path: '/bindPay',name: 'bindPay',component: bindPay},
					  {path: '/bindCard',name: 'bindCard',component: bindCard},
					  {path: '/bindWechat',name: 'bindWechat',component: bindWechat},
					  {path: '/setChangeDepoistPwd',name: 'setChangeDepoistPwd',component: setChangeDepoistPwd},
					  {path: '/setChangeLogoPwd',name: 'setChangeLogoPwd',component: setChangeLogoPwd},
					  {path: '/validatePwd',name: 'validatePwd',component: validatePwd},
					  {path: '/blank',name: 'blank',component: blank},
					  {path: '/tell',name: 'tell',component: tell},
						{path: '/loading',name: 'loading', component: loading},
					  {path: '/deposit', name: 'deposit',component: deposit},
					  {path: '/system',name: 'system',component: system},
					  {path: '/setWechatTitle',name: 'setWechatTitle',component: setWechatTitle},
					  {path: '/systemDetail',name: 'systemDetail',component: systemDetail},
					  {path: '/depositDetail',name: 'depositDetail',component: depositDetail},
					  {path: '/communityList',name: 'communityList',component: communityList},
            {path: '/communityDetail',name: 'communityDetail',component: communityDetail},

  ],
//
//router.afterEach((transition) => {
//	let title = transition.to.title + '-Custom-Suffix'
//	setWechatTitle(title)
//	})
})

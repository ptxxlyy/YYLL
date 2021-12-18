import { LightningElement } from 'lwc';
import loginCheck from '@salesforce/apex/wsyhk_Login.loginCheck';

export default class Wsyhk_LoginComponet extends LightningElement {
    loginFlag = false;
    userName;
    password;

    wsyhk_Login(){

        let inputList = this.template.querySelectorAll("lightning-input");
            for (let index = 0; index < inputList.length; index++) {
                if(inputList[index].label == '名前：'){
                    this.userName = inputList[index].value;
                }
                if(inputList[index].label == 'パスワード：'){
                    this.password = inputList[index].value;
                }
            }
            console.log('this.userName: ' + this.userName);
            console.log('this.password: ' + this.password);

        if(this.userName == ''){
            alert('请输入用户名！！');
        }else if(this.password == ''){
            alert('请输入密码！！');
        }else{
        
            loginCheck({ userName: this.userName}).then(user => {
                if(user.length > 0){
                    if(user[0].WSYHK_Password__c != this.password){
                        alert('密码错误！！');
                    }else{
                        alert(user[0].WSYHK_UserName__c + '登録成功！！');
                        this.userName = user[0].WSYHK_NickName__c;
                        this.loginFlag = !this.loginFlag;
                    } 
                }else{
                    alert('用户不存在，登録失敗！！');
                }
            });
        } 
    }

    wsyhk_Logout(){
        this.loginFlag = !this.loginFlag;
    }
}
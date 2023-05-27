<template>
    <div id="login_shell">
        <div id="login_header">
            <div id="login_header_text">登录后内容更精彩</div>
            <RouterLink to="/" id="login_header_cancel">
                返回首页
            </RouterLink>
        </div>

        <div id="login_inner">
            <div id="login_inner_left">

                <div id="inner_left_text">手机登录</div>

                <div id="login_input_account">
                    <div id="login_input_position">
                        <el-select v-model="select_value" popper-class="selectStyle" filterable placeholder="">
                            <el-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            <span style="float: left">{{ item.value }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
                            </el-option>
                        </el-select>
                    </div>
                    <input type="string" v-model="account_yanzhen" maxlength="11" :placeholder="account_holder">
                </div>
                <div id="login_input_password">
                    <input type="string" v-model="password_yanzhen" maxlength="4" :placeholder="password_holder">
                    <div id="login_getpassword">获取验证码</div>
                </div>

                <div id="login_noAccount">
                    <div  v-if="no_account || no_password">{{ no_accountORpassword_text }}</div>
                </div>

                <div id="login_check">
                    <div :class="{'checkbox_checked': checkbox_checked}" @click="login_check" v-bind="checkbox_checked" id="login_checkbox"></div>
                    <div id="login_checkText">登录即同意
                        <a>《用户协议》</a>
                        和
                        <a>《隐私政策》</a>
                    </div>
                </div>

                <div id="login_confirm" :class="{'confirm_checked':confirm_checked}">登录</div>

            </div>

            <div id="login_inner_right">
                <div id="right_text">扫码登录</div>
                <div id="right_QRcode">
                    <img id="QRinner" src="../components/pic/QRcode_inner.png">
                    <img id="QRcode" src="../components/pic/QRcode.jfif">
                </div>
                <div id="right_bottom" v-on:mouseenter="showImage=true" v-on:mouseleave="showImage=false">
                    <div id="right_bottom_1">使用<span>今日头条APP</span></div>
                    
                    <div id="right_bottom_2">在“我的”界面左上角点击扫一扫登陆
                        <img v-if="showImage" id="right_bottom_hovered" src="../components/pic/1.png">
                    <img id="right_bottom_help" src="../components/icon/icon_help.png"></div>
                </div>
            </div>
        </div>

        <div id="login_footer">
            <span>其他登录</span>
            <div id="login_other">
                <div id="login_tiktok">
                    <img src="../components/icon/icon_tiktok.png">
                </div>
                <div id="login_wechat"> 
                    <img src="../components/icon/icon_wechat.png">
                </div>
                <div id="login_QQ">
                    <img src="../components/icon/icon_QQ.png">
                </div>
                <div id="login_password">
                    <img src="../components/icon/icon_password.png">
                </div>
            </div>
        </div>
    </div>
    <div class="background-video">
    <video autoplay loop muted>
      <source src="../components/video/welcome-video.mp4" type="video/mp4">
    </video>
  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
import 'element-plus/theme-chalk/index.css';

export default defineComponent({
    data() {
        return {
            no_account:false,
            no_password:false,
            no_accountORpassword_text:"123",
            account_yanzhen:"",
            account_holder:"请输入手机号",
            account_mima:"邮箱/手机号",
            password_yanzhen:"",
            password_holder:"验证码",
            password_mima:"密码",
            confirm_checked:false,
            checkbox_checked:false,
            cities: [{
                label: '+86',
                value: '中国大陆'
                }, {
                label: '+886',
                value: '中国台湾'
                }, {
                label: '+852',
                value: '中国香港'
                }, {
                label: '+853',
                value: '中国澳门'
                }, {
                label: '+355',
                value: '阿尔巴尼亚'
                }, {
                label: '+213',
                value: '阿尔及利亚'
                }, {
                label: '+93',
                value: '阿富汗'
            }],
            select_value:"中国大陆",
            showImage:"false",
            isModalVisible: false
        }
    },
    watch: {
        password_yanzhen: 'confirm_checking', // 监听 input1 的变化
        account_yanzhen: 'confirm_checking' ,// 监听 input2 的变化
        checkbox_checked: 'confirm_checking'
    },
    mounted() {
    // 监听点击非登录框部分的事件，隐藏登录框
        document.addEventListener('click', this.closeModal);
    },
    methods: {
        exit(){
            //关闭
        },
        login_check() {
            this.checkbox_checked = !this.checkbox_checked
        },
        confirm_checking(){
            if(this.account_yanzhen.length>=11 && this.password_yanzhen.length>=4 && this.checkbox_checked == true){
                this.confirm_checked = true;
                this.no_accountORpassword_text = ""
            }
            else if(this.account_yanzhen.length<11){
                this.confirm_checked = false;
                this.no_account = true;
                this.no_accountORpassword_text="手机号不能为空"
            }
            else if(this.password_yanzhen.length<4){
                this.confirm_checked = false;
                this.no_password = true;
                this.no_accountORpassword_text="请输入验证码"
            }
            else if(this.checkbox_checked == false){
                this.confirm_checked = false;
                this.no_password = true;
                this.no_accountORpassword_text="请勾选同意协议"
            }
        },

    },
    components: {
        ElSelect,
        ElOption,
  },
})



</script>


<style  scoped>
    .background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background-video video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
}

    #login_shell{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        color:black;
        width: 650px;
        height: 450px;
        background-color: rgb(234, 235, 236);
        border-radius: 10px;
        overflow: hidden;
    }

    #login_header{
        width:100%;
        height: 15%;
        display: flex;
        border-bottom: 2px solid hsla(0, 1%, 75%, 0.299);
    }

        #login_header_text{
            font-size: 20px;
            display: flex;
            align-items: center;
            padding: 20px;
            text-align: center;
        }
        #login_header_cancel{
            padding: 20px;
            margin-left:auto
        }
        #login_header_cancel img{
            max-width: 30px;
        }

    #login_inner{
        width: 100%;
        height: 70%;
        display: flex;
        padding:20px 0px;
    }
        #login_inner_left{
            width:50%;
            padding:0 20px;
            border-right:2px solid rgba(123, 115, 115, 0.253);
        }

            #inner_left_text{
                font-size: 20px;
            }

            #login_inner_left input{
                border-radius: 5px;
                border:none;
            }
            #login_inner_left input:focus{
                border:none;
                outline: none;
            }

            #login_input_account{
                font-size: 17px;
                margin:15px 0;
                height: 40px;
                background-color: white;
                border-radius: 5px;
                display: flex;
            }

                #login_input_account input{
                    padding-left:15px;
                    height: 100%;
                }



            #login_input_password{
                background-color: white;
                height: 40px;
                border-radius: 5px;
                display: flex;
                align-items: center;
            }
            #login_input_password input{
                width:65%;
                padding-left:20px;
            }
            #login_getpassword{
                width: 35%;
            }

            #login_noAccount{
                padding-left:20px;
                height: 20px;
                color: red;
                font-size: 13px;
            }

            #login_check{
                display:flex;
                align-items: center;
                font-size: 12px;
                margin-top:15px;
                margin-bottom:10px;
            }
                #login_checkbox{
                    width: 15px;
                    height: 15px;
                    border: 1px solid rgba(107, 107, 107, 0.597);
                    border-radius: 3px;
                    margin:0 5px;
                }

                .checkbox_checked{
                    background-image:url(../components/pic/checkbox_checked.png); 
                    background-size: 14px;
                }

                #login_check a{
                    color:red;
                }
                

            #login_confirm{
                display:flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                font-size: 20px;
                width: 100%;
                height: 40px;
                background-color: rgba(255, 0, 0, 0.386);
                color: white;
            }

            .confirm_checked{
                background-color: rgba(255, 0, 0, 0.999) !important;
            }

        #login_inner_right{
            text-align: center;
            width: 50%;
            padding: 0 20px;
        }

        #right_text{
            font-size: 20px;
        }

            #right_QRcode{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #right_QRcode #QRinner{
                max-width: 40px;
                position: absolute;
                z-index: 2;
            }

            #right_QRcode #QRcode{
                max-width: 160px;
            }

            #right_bottom{
                position: relative;
                padding:20px 0;
                font-size: 16px;
            }
            #right_bottom_hovered{
                z-index: 10;
                border-radius: 10px;
                display: block;
                max-width: 200px;
                max-height: 200px;
                position: absolute;
                right: 20px;
                bottom:50px;
            }

            #right_bottom_1 span{
                color:red;
            }

            #right_bottom_2{
                display: flex;
                align-items: center;
            }

            #right_bottom_help{
                max-width: 20px;
                max-height: 20px;
            }

    #login_footer{
        height: 15%;
        background-color: rgb(212, 221, 224);
        padding:20px 25px;
        display: flex;
    }
    #login_footer span{
        font-size: 16px;
        margin-right: 18px;
    }
    #login_other{
        display: flex;
    }
    #login_other > div{
        margin:0 3px
    }

    #login_other div img{
        width: 28px;
        height: 28px;
    }
</style>

<style>
    /*下拉框标题文本label*/

    .el-input{
        width:80px;
        height: 40px;
        border-radius: none;
    }
    .el-input__wrappper{
        box-shadow: none;
    }

::v-deep .el-form-item__label{
  color: black;
  font-weight: 100;
}


    .el-select-dropdown__item:hover {
        color: red !important;
    }

    .el-select-dropdown__item.selected {
        color: red !important;
    }


</style>


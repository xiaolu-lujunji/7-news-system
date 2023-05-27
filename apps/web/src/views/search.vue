<template>
    <div id="search_all">
    <div id="search_top">
        <div id="top_pic">
            <img src="../components/pic/1.jpg">
        </div>
        <div id="top_search">
            <input id="top_search_input" placeholder="输入关键词进行搜索" v-model="search_input">
            <div @click="clear_search" id="top_search_clear">
                <img src="../components/icon/icon_cancel_black_round.png">
            </div>
            <div @click="start_search" id="top_search_pic">
                <img src="../components/icon/icon_search.png">
            </div>
        </div>

        <div id="top_right">
            <div id="top_right_nozhangai">无障碍</div>
            <RouterLink to="/" id="back_to_mainpage">今日头条首页</RouterLink>
            <RouterLink to="/login" id="login">登陆</RouterLink>
        </div>
    </div>


    <div id="search_inner">
        <div id="search_bar">
            <div id="options">
                    <!-- 创建一组div与绑定click方法 -->
                <div v-for="(item, index) in list" :key="index" 
                        @click="toggleSeries(index)" :class="{ 'active': (selected === index) || defaultActive && index === 0}">
                    {{ item }}
                </div>
                <div id="options_select">
                    <div>更多</div>
                </div>
            </div>
            <div id="others">
                <div id="go_to_xigua">
                    <img src="../components/icon/icon_xigua.jpg">
                    <div>去西瓜搜</div>
                </div>
                <div id="go_to_tiktok">
                    <img src="../components/icon/icon_tiktok.jpg">
                    <div>去抖音搜</div>
                </div>
            </div>
        </div>

        <div id="search_page">
            <div id="page_top">
                <div id="all_internet">全网内容</div>
                <div id="only_toutiao">只看头条</div>
                <div id="time_select">
                    <div>不限时间</div>
                </div>
            </div>
            <div id="page_inner">
                <div id="answer_page">
                    <div id="example_page1" class="picturned news">
                        <div class="title">萨摩耶是棉花团子的99个论据</div>
                        <div class="inner">
                            <div class="inner_picturn">
                                <img src="../components/pic/mianhuatuanzi.jpg">
                            </div>
                            <div class="inner_text">
                                <div>据专家研究表明，萨摩耶竟然是一种棉花团子，小编也感到不可置信，萨摩耶为什么是棉花团子？其实是这样的，萨摩耶其实是一种棉花团子……</div>
                                <div class="foot">小狗新闻 xiaogou.news.com</div>
                            </div>
                        </div>
                        
                    </div>
                    <div id="example_page2" class="texted news">
                        <div class="title">比格犬公共场合辱骂金毛</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>据哈士奇狗仔队的跟踪报道显示，昨天下午在狗狗公园做公益活动的金毛小姐被比格犬先生公开辱骂，在座的各位都被如此脏的脏话给震撼，以至于没有人敢于上前制止，在这之后金毛小姐亲了亲比格犬先生，后者一怒之下离开了狗狗公园……</div>
                                <div class="foot">小狗新闻 xiaogou.news.com</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                    <div id="example_page3" class="texted news">
                        <div class="title">测试标题</div>
                        <div class="inner">
                            <div class="inner_text">
                                <div>测试内容</div>
                                <div class="foot">测试地址</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="hot_page">
                    <div id="hot_top">
                        <div>头榜热条</div>
                        <div id="hotTop_inner">
                            <img src="../components/icon/icon_refresh.png">
                            <div>换一换</div>
                        </div>
                    </div>
                    <div id="hot_news">
                        <div v-for="(news,index) in hot_news">
                            <div id="hot_news_inner">
                                <div id="index_0" v-if="index == 0">{{ index+1 }}</div>
                                <div id="index_1" v-if="index == 1">{{ index+1 }}</div>
                                <div id="index_2" v-if="index == 2">{{ index+1 }}</div>
                                <div id="index_other" v-if="index >=3">{{ index+1 }}</div>
                                <div>{{ news }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
import 'element-plus/theme-chalk/index.css';

export default {
    data() {
      return {
        search_input:"",
        times:[{
            value:"不限时间"
        },{
            value:"一小时内"
        },{
            value:"一天内"
        },{
            value:"一周内"
        },{
            value:"一个月内"
        },{
            value:"一年内"
        }],
        options:[
            {value:"微头条"},
            {value:"百科"},
            {value:"音乐"}
        ],
        selected: null, // 跟踪选中的div的下标
        list:[
            "综合",
            "咨询",
            "视频",
            "图片",
            "用户",
            "小视频",
            "问答"
        ],
        defaultActive :true,
        select_value1:"更多",
        select_value2:"不限时间",
        hot_news:[
            "小狗可爱到全人类为之疯狂！",
            "小猫也很可爱！",
            "邪恶科学家成功研究出复活的恐龙获诺贝尔奖",
            "小熊猫占领了这块大石头",
            "这头巨大的大象吃掉整整五斤香蕉",
            "点我看性感萨摩耶睡觉两小时",
            "哈士奇爆料：耶耶竟然和德警官……",
            "小猫咪击倒了大山雀",
            "没人在乎的明星做了没人在乎的事"
        ]
      }
    },
    methods: {
        toggleSeries(index) {
            this.defaultActive = false;
            if (this.selected === index) {
                this.selected = null;
            } else {
                this.selected = index;
            }
        },
        clear_search(){
            this.search_input = ""
        }

    },
    components: {
        ElSelect,
        ElOption,
  },
}
</script>

<style  scoped> 
    #search_all{
        overflow:auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        width: 100%;
        display: block;
        background-color: white;
    }

    #search_top{
        background-color: white;
        z-index: 1000000;
        position: sticky;
        top:0px;
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;

    }
        #top_pic{
            padding:10px 20px;
            height: 40px;
        }
        #top_pic img{
            max-width: 80px;
        }
        #top_search{
            display: flex;
            align-items: center;
            width: 470px;
            height: 40px;
            border:2px solid rgba(185, 185, 185, 0.768);
            border-radius: 5px;
        }
        #top_search input{
            margin-left: 10px;
            font-size: 16px;
            border:none;
            width: 370px;
            height: 30px;
        }

            #top_search_clear{
                margin-right: 10px;
                display: flex;
                align-items: center;
            }
            #top_search_clear img{
                position: relative;
                right:0px;
                max-width: 25px;
            }
            
        #top_search input:focus{
            border-radius: 5px;
            outline: none;
        }    

        #top_search_pic{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width:70px;
            background-color: red;
        }
        #top_search_pic img{
            max-width: 20px;
        }

        #top_right{
            color:black;
            display: flex;
            align-items: center;
            height: 100%;
            font-size: 12px;
            margin-bottom: auto;
            margin-left: auto;
        }
        #top_right_nozhangai{
            margin-right:20px;
        }
        #top_right_nozhangai:hover{
            text-decoration: underline;
        }

        #back_to_mainpage{
            color:black;
            margin-right:20px;
        }

        #back_to_mainpage:hover{
            background-color: transparent;
            text-decoration: underline;
        }

        #login{
            border:2px solid rgb(181, 180, 180);
            border-radius: 5px;
            padding:3px 8px;
            color:black;
            margin-right:5px;
        }
        #login:hover{
            background-color: rgba(208, 208, 208, 0.379);
            text-decoration: none;
        }

    #search_inner{
        color: black;
        background-color: white;
    }

    #search_bar{
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(137, 137, 137, 0.164);
        padding-left: 120px;
        display: flex;
    }
    #options{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

        /* div样式 */
        #options > div {
            margin-right:15px;
            font-size: 12px;
            cursor: pointer; /* 添加鼠标悬停效果 */
        }

        /* 选中的div样式 */
        .active {
            font-weight: bold;
        }

        /* 未选中的div样式（添加灰色下划线） */
        #options > div.active::after {
        content: '';
        display: block;
        position: relative;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: rgb(253, 0, 0);
        opacity: 0.5;
        }
        #options #options_select{
            font-size: 12px;
            max-height: 10px;
            max-width:100px;
        }



        #others{
            font-size: 12px;
            display:flex;
        }
        #others > div{
            align-items: center;
            display: flex;
        }
        #others img{
            max-width: 15px;
            max-height: 15px;
        }

     #page_top{
        font-size: 12px;
        position: relative;
        padding-top:10px;
        padding-left:120px;
        display: flex;
    }

        #all_internet{
            padding-right: 10px;
            border-right:2px solid rgba(125, 125, 125, 0.416);
        }

        #only_toutiao{
            padding:0 10px;
        }

    #page_inner{
        display: flex;
    }

    #answer_page{
        height: 100%;
        width:50%;
        padding-left:120px;
    }

    #hot_page{
        
    }
    #hot_top{
        display: flex;
    }
        #hotTop_inner{
            align-items: center;
            color: red;
            margin-left: auto;
            display: flex;
        }
        #hotTop_inner img{
            max-width: 15px;
        }

    #hot_news_inner{
        margin: 10px 2px;
        font-size: 12px;
        display: flex;
    }

    #hot_news_inner div{
        margin-right: 10px;
    }

        #index_0{
            color:red;
        }

        #index_1{
            color:rgb(255, 102, 0)
        }

        #index_2{
            color:rgba(255, 162, 0, 0.997)
        }

        #index_other{
            color:lightgray;
        }

    
    .news{
        margin:10px 0;
        width:440px;
    }
    .news .title{
        margin-bottom:5px;
    }
    .news .title:hover{
        text-decoration: underline;
    }
    .news .inner{
        position: relative;
        color: rgb(58, 58, 58);
        font-size: 12px;
        display: flex;
    }

    .inner div{
        text-overflow: ellipsis; /* 超出部分显示省略号 */
    }

    .texted .inner_text{
        height: 80px;
    }
    
    .inner_picturn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        height: 80px;
        width: 250px;
        margin-right: 10px;
    }
    .inner_picturn img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
    }
    .foot{
        font-size: 10px;
        color: rgba(58, 58, 58, 0.678);;
        position: absolute;
        bottom: 0px;        
    }
</style>

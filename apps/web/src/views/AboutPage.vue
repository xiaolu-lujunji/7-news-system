<script>
   export default {
        data () {
            return {               
            }
        }
    }
</script>

<template>
    <header>
      <Menu mode="horizontal"  theme="light" active-name="1">
        <MenuItem name="1" id="qwer">
           今日头条
        </MenuItem>
        <MenuItem name="2">          
          关于头条
        </MenuItem>
        <MenuItem name="3">
          加入头条           
        </MenuItem>
        <MenuItem name="4">
          媒体报道         
        </MenuItem>
        <MenuItem name="5">
          媒体合作           
        </MenuItem>
        <MenuItem name="6">
          广告合作           
        </MenuItem>
        <MenuItem name="7">
          产品合作          
        </MenuItem>
        <MenuItem name="8">
          头条MCN           
        </MenuItem>
        <MenuItem name="9">
          合作说明         
        </MenuItem>
        <MenuItem name="10">
          联系我们          
        </MenuItem>
        <MenuItem name="11">
          用户协议         
        </MenuItem>
        <MenuItem name="12">
          投诉指引         
        </MenuItem>
        <MenuItem name="13">
          廉洁举报          
        </MenuItem>
        <MenuItem name="14">
          友情链接       
        </MenuItem>
    </Menu>
  
    </header>
    <div id="qw">

        <div id="rewq">
        <p>今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效分发，让用户看见更大的世界。</p>
        <br>
        <br>

        <p> 今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内
      容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。</p>
        <br>
        <br>

        <p>头条搜索是今日头条推出的搜索引擎服务，支持海量优质内容和全网公开内容的检索，为用户提供精准、专业、快捷的搜索结果。用户可以在今日头条客户端
      内体验，除了默认的综合搜索频道外，还有视频、资讯、小视频、图片、音乐、影视等多个垂直搜索，全方位满足搜索需求。</p>
        <br>
        <br>

        <p>头条号是今日头条旗下开放的内容创作与分发平台， 实现政府部门、媒体、企业、个人等内容创作者与用户之间的智能连接。截至2021年12月，头条号帐号
      总数已超过 237 万，平均每天发布 150 万条内容。</p>  
        <br>
        <br>

        <p>微头条是今日头条旗下的社交产品，用户可通过发布图文、短视频、直播等多形式的动态与人互动，逐渐与人建立起社交关系。在微头条，用户每天产生的互
      动数量超过2000万，发布量近1000万，活跃的大咖超过1万位。</p>
        </div>

        <div id="er">
          © 2023 今日头条 中国互联网举报中心京ICP证140141号京ICP备12025439号-3京公网安备 11000002002023号
          <br>
          网络文化经营许可证跟帖评论自律管理承诺书违法和不良信息举报电话：400-140-2108公司名称：北京抖音信息服务有限公司
        </div>

      </div>
    


</template>

<style scoped>
.header{
  background-image:white;

}
#qwer{
  color: red;
  font-size: 25px;
  font-weight: bold;
}
#rewq{
  padding: 50px;
  background-color: white;
}
#qw{
  padding:100px;
  background-color: #F3EDED;
}
#er{
  padding-top:40px;
  text-align: center;
}

*{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  p{
    text-indent: 2em;
    font-size: large;
    font-weight: lighter;
  }
 

</style>

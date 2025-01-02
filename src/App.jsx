import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import { ArchiveContext } from './Archive';
import {useEffect, useState } from 'react';
import About from './About';
import Posts from './Posts'
import Categories from './Categories';
import CategoryDetail from './CategoryDetail';
import ArticleContent from "./ArticleContent"
import ChangeButton from './ChangeButton';

function App() {

  const [changeModel,setChangeModel]=useState(true);
  const modelBlock=changeModel?"bg-white":"text-white bg-dark";
  const modelText=changeModel?"":"text-white";
  const modelAnnotation=changeModel?"gray":"rgb(218,215,215)";

  useEffect(()=>{
    document.body.style.backgroundColor=changeModel?"rgb(251, 246, 234)":"rgb(0,0,0,0.900)";
  },[changeModel])//條背景顏色

  const [categories]=useState([
    {
      category:"React",
      categoryId:[1]
    },
    {
      category:"Travel",
      categoryId:[2]
    },
    {
      category:"reflections",
      categoryId:[3]
    }
  ])


  const [archives]=useState([
    {
      id:1,
      name:'學習React入門條件',
      img:'react/reactImg.jpeg',
      date:'2022-07-17',
      folder:'React',
      preface:'React 是由 Facebook 開發的一個用於構建用戶界面的 JavaScript 函式庫，'+
              '專注於高效、靈活地創建互動式 UI。'+
              '它是現代前端開發的核心技術之一，但在學習 React 之前，建議先掌握以下基礎知識和技能。',
      content:
      [
        [
          {
            type:"title",
            describe:"HTML"
          },
          {
            type:"text",
            describe:'理解基本的 HTML 語法與結構。\n\n'+
                    '熟悉常見的標籤，如<div>,<span>,<form>,<input>。\n\n'+
                    '理解語義化標籤的作用，例如 <header>, <footer>, <article>。'
          },
          {
            type:"largeImg",
            src:'htmlExample.png'
          }
        ],
        [
          {
            type:"title",
            describe:"CSS"
          },
          {
            type:"text",
            describe:'掌握 CSS 的基本選擇器和樣式規則。\n\n'+
                    '熟悉盒模型、佈局方式(如 Flexbox 和 Grid)。\n\n'+
                    '理解 CSS 的層疊優先級和響應式設計。'
          },
          {
            type:"largeImg",
            src:"cssExample.png"
          },
        ],
        [
          {
            type:"title",
            describe:"JavaScript"
          },
          {
            type:"text",
            describe:'React 是基於 JavaScript 的，因此需要熟練掌握以下 JavaScript 技能：'
          },
          {
            type:"checkList",
            describe:
            [
              '變數與數據類型(var, let, const)',
              '條件語句與迴圈(if, for, while)',
              '函式與箭頭函式(function, ()=&gt;)',
              'ES6+ 語法',
              '解構賦值(Destructuring)',
              '展開運算符(Spread Operator)',
              '模板字串(Template Literals)', 
              '模組系統(import/export)',
              'DOM 操作',
              '理解如何使用 JavaScript 操作 DOM 元素',
              '熟悉事件監聽(addEventListener)'
            ]
          },
          {
            type:"middleImg",
            src:"listenExample.png"
          },
          {
            type:"annotation",
            describe:"此為監聽按鈕範例"
          },
        
        ],
        [
          {
            type:"title",
            describe:"Git和版本控制"
          },
          {
            type:"text",
            describe:"理解 Git 的基本命令，例如 clone, commit, push, pull。\n\n"+
                      "熟悉 GitHub 或其他版本控制平臺，用於管理和分享代碼。"
          },
          {
            type:"program",
            describe:"git push origin new_fiction"
          },
          {
            type:"annotation",
            describe:"此指令為本地端檔案庫傳送至名為new_fitcion的遠端檔案庫"
          }
        ],
        [
          {
            type:"title",
            describe:"Node.js和npm"
          },
          {
            type:"text",
            describe:"安裝 Node.js 並理解其作用(用於運行 JavaScript)。\n\n"+
                      "熟悉 npm(Node Package Manager)，學會使用它來安裝和管理依賴。"
          }
        ],
        [
          {
            type:"title",
            describe:"JavaScript框架基礎"
          },
          {
            type:"text",
            describe:"理解 SPA(Single Page Application)單頁應用的基本概念。\n\n"+
                      "掌握模組化和元件化的思想。"
          }
        ],
        [
          {
            type:"title",
            describe:"學習React的基礎知識"
          },
          {
            type:"text",
            describe:"JSX：React 的語法擴展，讓 HTML 與 JavaScript 結合。\n\n"+
                      "元件：理解如何創建函式元件和類元件。\n\n"+
                      "State 與 Props：掌握數據的管理和傳遞。\n\n"+
                      "事件處理：學習如何在 React 中處理用戶事件。\n\n"+
                      "條件渲染與列表渲染：理解如何基於條件和數據集合動態生成 UI。"
          }
        ],
        [
          {
            type:"title",
            describe:"工具與環境"
          },
          {
            type:"text",
            describe:"熟悉代碼編輯器(如 VS Code)和其插件。\n\n"+
                      "學會使用瀏覽器的開發者工具(DevTools)。\n\n"+
                      "瞭解 React 開發常用工具(如 Create React App)。"
          }
        ],
        [
          {
            type:"title",
            describe:"建議的學習路徑"
          },
          {
            type:"text",
            describe:"先掌握 HTML、CSS、JavaScript。\n\n"+
                      "瞭解基本的版本控制和工具鏈，再開始學習React的核心概念"
          }
        ]
      ]
    },
    {
      id:2,
      name:"新竹景點",
      img:"hsinchu/hsinchu.png",
      date:"2023-01-24",
      folder:'Travel',
      preface:"在新竹讀書的前幾年都沒有好好的認識這一個縣市，對他的印象也只限於貢丸、米粉、落山風，"+
              "所以決定在要畢業的前夕趁著剩下的幾天好好去認識一下這個縣市。",
      content:[
        [
          {         
            type:"title",
            describe:"新竹火車站"
          },
          {
            type:"text",
            describe:"第一站就是新竹的門面“新竹火車站”。\n\n"+
                     "新竹火車站位於新竹市中華路上，是全台唯一沒有招牌的火車站，"+
                     "建築樣式融合了西方建築特色， 加上陡斜的複折式屋頂與老虎窗，同時在柱體，"+
                     "牆壁轉角與開口部四周等結構應力集中的地方， 加強石造的結實感，使得整體建築物呈現繁複卻不失莊重，"+
                     "嚴肅卻又不失親和的建築風味來。\n\n"+
                     "設計者的巧思，使火車站成為新竹的門戶與都市的地標，並於民國87年獲列為國定古蹟。"
          },
          {
            type:"largeImg",
            src:"hsinchu/hsinchu1.jpg"
          }
        ],
        [
          {
            type:"title",
            describe:"十七公里海岸線"
          },
          {
            type:"text",
            describe:"新竹市的海岸線北起南寮里，南至南港，長約十七公里，"+
                      "遊憩景點包括南寮休閒碼頭、看海公園、海天一線觀景區、港南運河、紅樹林公園、風情海岸、海山漁港觀海台、南港賞鳥區、旅遊服務中心等景點，"+
                      "提供多元化、多面向的美食、美景、遊憩、運動及文化巡禮等休閒功能，成為全臺灣知名的觀光休閒基地。"
          },
          {
            type:"largeImg",
            src:"hsinchu/hsinchu2.jpeg"
          },
          {
            type:"annotation",
            describe:"此圖為新竹南寮漁港"
          }
        ],
        [
          {
            type:"title",
            describe:"香山溼地"
          },
          {
            type:"text",
            describe:"香山區的地名典雅，傳說是國姓爺(鄭成功)治台時，此地為竹塹社番所居往，沒有固定名稱，"+
                      "後移居至此的漢人看見大坪頂一帶，漫山遍野盛開著無名花草，芬芳無比，所以此地命名為「香山」，"+
                      "佔地廣闊的香山區，正以自然風貌等待遊客前來，此區有中華大學、玄奘大學，元培科技大學等。"
          },
          {
            type:"largeImg",
            src:"hsinchu/hsinchu3.jpeg"
          }
        ],
        [
          {
            type:"title",
            describe:"新竹風情"
          },
          {
            type:"text",
            describe:"新竹曾經是台灣原住民平埔族道卡斯族的美麗故鄉，而其舊稱「竹塹」也是由道卡斯族語而來，"+
                     "為「海邊」的意思，因為道卡斯族原來一直在新竹的海邊活動，後來才由香山沿海一帶，往東北方向擴張，"+
                     "逐漸開發整個新竹平原，也就是所謂的「竹塹埔」，可說是北台灣最古老的城市。\n\n"+
                     "台灣很少有城市能像新竹一般，既擁有大片翠綠山林，在這面積僅有104.1526平方公里的城市，"+
                     "可以到18尖山賞花健行，或到17公里海岸騎單車遨遊，廣達一千多公頃香山的濕地，"+
                     "是大甲溪以北螃蟹數量最多的潮間帶，也因此定期造訪台灣的候鳥，有半數每年都在新竹的海邊逗留。\n\n"+
                     "新竹市三面環山，一面向海，又位居台灣的西北方，這樣的地形與理位置，造成了冬季東北季風十分強盛，"+
                     "所以有「風城」之稱。季風由沖積平原的東南向西北沿「喇叭狀」地勢吹入，"+
                     "所以無論東北季風或西南季風一進入新竹市，就立即受地勢約束而增強，就像一股「穿堂風」一樣貫入新竹，"+
                     "所以民間早就有「新竹風、基隆雨」的諺語。"
          },
          {
            type:"largeImg",
            src:"hsinchu/hsinchu5.jpeg"
          }
        ],
        [
          {
            type:"title",
            describe:"參考來源"
          },
          {
            type:"link",
            linkName:"新竹旅遊網",
            src:"https://tourism.hccg.gov.tw/"
          }
        ]
      ]
    },
    {
      id:3,
      name:"考研心路歷程",
      img:"graduate/graduate1.jpg",
      date:"2024-12-01",
      folder:'reflections',
      preface:"準備考研的這段時間既難熬又痛苦。當初因為未能咬牙堅持下去，最終導致結果不盡人意。\n\n"+
              "因此，我決定記錄下這段心路歷程，給未來的自己一個警惕，希望在接下來的日子裡，能夠更加堅定的迎接每個難關。",
      content:[
        [
          {
            type:"title",
            describe:"ㄧ、起念"
          },
          {
            type:"text",
            describe:"大學時光匆匆離去，轉眼間就到了要畢業的季節。\n\n"+
                     "然而，那時的我卻對自己未來的路程毫無頭緒，"+
                     "於是我開始尋求同儕及家人的意見，得到的建議不外乎建議不外乎兩種：考研或找工作。\n\n"+
                     "經過一段時間的深思熟慮，我發現自己對這門科系其實蠻有興趣的，也有想繼續讀的想法。\n\n"+
                     "最終，我默默下定決心，開始著手準備考研計劃。"
          }
        ],
        [
          {
            type:"title",
            describe:"二、準備階段"
          },
          {
            type:"text",
            describe:"在制定計劃前，我先上網搜尋了許多學長留下來考研經驗，並了解是否需要報補習班。\n\n"+
                     "經過統整後，我發現我的底子較為薄弱，於是於是開始對比幾間口碑好的考研補習班，最終選擇了大碩補習班。\n\n"+
                     "確認好方向後，我變開始制定一年的學習計畫，安排每天運動的時間每天運動的時間以及學習的時長。同時，"+
                     "我將六科科目分成三類："
          },
          {
            type:"checkList",
            describe:["計算機數學類(線性代數、離散數學)","程式設計(資料結構、演算法)","計算機組織計算機組織(作業系統、計算機組織)"]
          },
          {
            type:"text",
            describe:"在熟悉課綱後，我著手規劃從五月到考試期間的詳細計畫，並將整體學習分為四個部分："
          },
          {
            type:"checkList",
            describe:["跟課程(5月~8月)","重新複習(8月~11月)","刷題庫(11月~1月)","考前衝刺(1月~考試)"]
          }

        ],
        [
          {
            type:"title",
            describe:"三、上課階段"
          },
          {
            type:"text",
            describe:"剛開始上補習班時，我有些不適應，本以為是老師當面授課，但到了現場發現是觀看已錄製好的課程，想到既然如此，"+
                     "還是得坐在電腦前看課程，我便立刻將線上課程改為雲端課程，這樣可以隨時隨地學習，更有效率。\n\n"+
                     "在制定計畫時，我規定自己每天至少需要花兩個小時跟進課程。"+
                     "然而，在跟進課程的過程中，我深刻的感受到自己對這門科目的不熟悉，許多知識及用法都是以前沒接觸過的。\n\n"+
                     "跟課的過程因此變得相當煎熬，每天都像是在接觸全新的內容。但熬過數學這關後，其餘科目因為比較感興趣，學習過程相對順利，"+
                     "最終也成功撐過了這幾個月挑戰。"
          }
        ],  
        [
          {
            type:"title",
            describe:"四、複習階段"
          },
          {
            type:"text",
            describe:"我認為這個階段是最容易偷懶的階段，因為剛看完所有課程時，總覺得自己已經掌握得差不多了，似乎不需要再重新複習一遍。\n\n"+
                     "這種心態讓我過上一段頹廢的生活，自以為計劃已完成、課程也都上完了，便開始懈怠。\n\n"+
                     "就這樣度過一到兩個月，直到朋友提醒我只剩下三個多月了，應該要抓緊時間刷考古題，我才如夢初醒。"+
                     "在這段偷懶的日子裡，時間不知不覺的流逝，再加上沒有好好複習，之前學習的課程幾乎全忘了。\n\n"+
                     "結果，進度被耽擱，拖到了下個階段才開始彌補。"
          }
        ],
        [
          {
            type:"title",
            describe:"五、刷題庫"
          },
          {
            type:"text",
            describe:"由於上個階段沒有好好複習，導致我的基礎不夠扎實，在開始寫考古題時，錯誤連連，對許多解法及術語都一竅不通。\n\n"+
                     "意識到問題的嚴重性後，我決定馬上補救，把落下的課程重新梳理了一遍，並將課程影片重新看過，試圖讓那些不熟悉的觀念在腦海中的印象更為深刻。\n\n"+
                     "然而，當我終於複習完課程後，時間已經悄然來到了該衝刺的階段了，這讓那時的我有點沮喪，因為即使複習完課程，在面對考古題時依然困難重重，"+
                     "並沒有因為複習完就能夠搞懂題目的要求，而新增的術語和概念反而讓我更加困惑，在解題時無法確定應該使用哪種方法。"
          }
        ],
        [
          {
            type:"title",
            describe:"六、衝刺"
          },
          {
            type:"text",
            describe:"為了盡快趕上進度，我將計畫從一天兩小時改為四小時，並每天集中精力練習一整年的考古題，讓自己進入備戰的狀態。\n\n"+
                     "這樣的緊繃節奏一直持續到了考前一個月。然而，長時間的高壓學習讓偷懶的念頭逐漸浮現。\n\n"+
                     "此時我仍有許多觀念尚未掌握，對一些題型依然一頭霧水。\n\n"+
                     "最終，我選擇放棄部分較為複雜的題型，專注於鞏固自己的基礎，確保能穩穩拿到基本分。"
          }
        ],
        [
          {
            type:"title",
            describe:"七、考試"
          },
          {
            type:"text",
            describe:"我總共報考了四間學校(中山、中興、北科、北大)，在準備這幾間學校的考試時，寫考古題的過程還算順利，"+
                     "由於基本題居多，很少涉及複雜的題型，因此這段時間給了我不少信心。\n\n"+
                     "然而，當寫完基本題翻到最後幾道題時，心瞬間涼了一下，那些歷屆未出現的題型突然冒了出來。\n\n"+
                     "我反覆思考這幾道題應該用何種解法，但時間在不知不覺中流逝，轉眼已過轉眼已過了將近一小時，最後只能抱著試試看的心態來解，"+
                     "交卷鈴響起時，我匆匆收筆交卷，然而，這種情況連著幾科考試反覆出現，心裡已經隱隱明白，這就是我偷懶的結果。"
          }
        ],
        [
          {
            type:"title",
            describe:"Finally"
          },
          {
            type:"text",
            describe:"當成績單寄來後，結果和預想的差別不大，全是毫無機會的備取名額。\n\n"+
                     "這段經歷深深的烙印在我的心裡，也帶給我許多啟發。\n\n"+
                     "首先，明白了在準備考研的過程中，不該讓太多人知道自己的計畫，"+
                     "因為當結果不如預期時，往往會讓自己不知如何面對。\n\n"+
                     "還有，在達到最終目標之前，永遠不要因為完成幾個小目標就自滿，而是要堅持到成功為止。\n\n"+
                     "希望自己牢記這次的失意，將其最為一個深刻的謹惕，無論未來是在工作上還是任何事情中，都能時刻提醒自己，"+
                     "這樣才能真正的不辜負這份經歷所帶來的教訓，讓它成為日後成長的基石"
          }
        ]
      ]
    }

]);


  return (
    <BrowserRouter>


			{/* <Link to="/">首頁</Link>  */}
      <ArchiveContext.Provider value={{archives,categories,changeModel,setChangeModel,modelAnnotation,modelBlock,modelText}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ChangeButton" element={<ChangeButton/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Posts' element={<Posts/>}/>
          <Route path='/Categories' element={<Categories/>}/>
          <Route path='/Categories/:categoryName' element={<CategoryDetail/>}/>
          <Route path='ArticleContent' element={<ArticleContent/>}>
            <Route path=':id' element={<ArticleContent/>}/>
          </Route>
          <Route path="*" element={<p>找不到頁面</p>}/> {/* 星號代表上面的網站找不到就跳到星號 */}
        </Routes>
      </ArchiveContext.Provider>

	</BrowserRouter>
  );
}

export default App;
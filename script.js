let burger = document.queryselector('.burger-menu' )
let nav = document.querySelector('.main-nav')
burger.addEventListener ('click', function() {
burger.classList.toggle('active');
nav.classlist.toggle('active');
})
let FC=document.getElementById('FC');
let pog=document.getElementById('pog');
FC.addEventListener('change',()=>{
    let value=FC.value;
    if(value=='Rubin Kazan'){
        pog.innerHTML=`<div
          id="widget-cl3rmineuiwm"
          class="scoreaxis-widget"
          style="
            width: 40%;
            height: auto;
            font-size: 14px;
            background-color: #ffffff;
            color: #141416;
            border: 1px solid;
            border-color: #000000;
            margin: 40px;
            overflow: auto;
          "
        >
          <script
            src="https://widgets.scoreaxis.com/api/football/team-top-players/62321b29adaf4b2bd73deb4a?widgetId=cl3rmineuiwm&lang=ru&playersCount=18&goalsBlock=1&assistsBlock=1&cardsBlock=1&links=1&font=heebo&fontSize=14&widgetWidth=auto&widgetHeight=auto&bodyColor=%23ffffff&textColor=%23141416&linkColor=%23141416&borderColor=%23000000&tabColor=%23ff0000"
            async
          ></script>
          <div
            class="widget-main-link"
            style="padding: 6px 12px; font-weight: 500"
          >
            Live data by
            <a href="https://www.scoreaxis.com/" style="color: inherit"
              >Scoreaxis</a
            >
          </div>
        </div>
        <div
          id="widget-ukteminf6ti0"
          class="scoreaxis-widget"
          style="
            width: 40%;
            height: auto;
            font-size: 14px;
            background-color: #ffffff;
            color: #141416;
            border: 1px solid;
            border-color: #000000;
            margin: 40px;
            overflow: auto;
          "
        >
          <script
            src="https://widgets.scoreaxis.com/api/football/team-info/62321b29adaf4b2bd73deb4a?widgetId=ukteminf6ti0&lang=ru&statsBlock=1&playersBlock=0&matchesBlock=1&links=1&font=heebo&fontSize=14&widgetWidth=auto&widgetHeight=auto&bodyColor=%23ffffff&textColor=%23141416&linkColor=%23141416&borderColor=%23000000&tabColor=%23fafcff"
            async
          ></script>
          <div
            class="widget-main-link"
            style="padding: 6px 12px; font-weight: 500"
          >
            Live data by
            <a href="https://www.scoreaxis.com/" style="color: inherit"
              >Scoreaxis</a
            >
          </div>
        </div>`;
    }

    if(value=='Rubin Kazan'){
        pog.innerHTML=`        <div
          id="widget-prfiminfea8v"
          class="scoreaxis-widget"
          style="
            width: 40%;
            height: auto;
            font-size: 14px;
            background-color: #ffffff;
            color: #141416;
            border: 1px solid;
            border-color: #000000;
            margin: 40px;
            overflow: auto;
          "
        >
          <script
            src="https://widgets.scoreaxis.com/api/football/team-info/62321b1badaf4b2bd73de8dc?widgetId=prfiminfea8v&lang=ru&statsBlock=1&playersBlock=0&matchesBlock=1&links=1&font=heebo&fontSize=14&widgetWidth=auto&widgetHeight=auto&bodyColor=%23ffffff&textColor=%23141416&linkColor=%23141416&borderColor=%23000000&tabColor=%23fafcff"
            async
          ></script>
          <div
            class="widget-main-link"
            style="padding: 6px 12px; font-weight: 500"
          >
            Live data by
            <a href="https://www.scoreaxis.com/" style="color: inherit"
              >Scoreaxis</a
            >
          </div>
        </div>
        <div
          id="widget-yyjaminfk2fs"
          class="scoreaxis-widget"
          style="
            width: 40%;
            height: auto;
            font-size: 14px;
            background-color: #ffffff;
            color: #141416;
            border: 1px solid;
            border-color: #000000;
            margin: 40px;
            overflow: auto;
          "
        >
          <script
            src="https://widgets.scoreaxis.com/api/football/team-top-players/62321b1badaf4b2bd73de8dc?widgetId=yyjaminfk2fs&lang=ru&playersCount=18&goalsBlock=1&assistsBlock=1&cardsBlock=1&links=1&font=heebo&fontSize=14&widgetWidth=auto&widgetHeight=auto&bodyColor=%23ffffff&textColor=%23141416&linkColor=%23141416&borderColor=%23000000&tabColor=%23fff700"
            async
          ></script>
          <div
            class="widget-main-link"
            style="padding: 6px 12px; font-weight: 500"
          >
            Live data by
            <a href="https://www.scoreaxis.com/" style="color: inherit"
              >Scoreaxis</a
            >
          </div>`;}

});


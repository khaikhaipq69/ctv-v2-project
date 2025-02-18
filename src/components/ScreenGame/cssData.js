import images from "../../assets/images/storeImage";

const levelNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const basicTextDescriptionCss = `p{
    font-family: "Fredoka One", cursive;
    color:  rgba(255,255,255,0.9);
    line-height: 1.5;
}
.help{
    font-family: 'Source Code Pro', monospace;
    background-color: rgba(255,255,255,0.2);
    border-bottom:  rgba(255,255,255,0.8) solid #000;
    color: #fff;
    font-weight: bold;
}
b{
    color:  rgba(77,141,255,1);
    font-family: "Fredoka One", cursive;

}
.hint{
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
}
/* Scrollbar */
::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: #46155c; 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #478dff; 
  }
`;

export const cssData = [
  {
    css: `${basicTextDescriptionCss}`,
    html: `<b>Level ${levelNumber[2]}:</b>
    <p>The explorers are being blocked by a team of frogs. Please arrange this team of frogs into three rows to create the path.
    </p>
    <p class = "hint" >You can help this army of frogs form three orderly columns using a combination of 
        <span class="help">flex-direction</span>
        and <span class="help">flex-wrap</span>
    </p>`,
  },
  {
    css: `${basicTextDescriptionCss}`,
    html: `<b>Level ${levelNumber[1]}:</b>
    <p> Use the <span class="help">justify-content</span> and <span class="help">align-items</span> to help the lotus float on the leaves
    </p>`,
  },
  {
    css: `${basicTextDescriptionCss}

    img.c{
        width: 13%;
        height:13%
    }
    `,
    html: `<b>Level ${levelNumber[0]}:</b>
    <p> The master is hungry, you must move each adventurer to the 
    right food and get it for the master.
    The goal is:</p>
    <img class = 'c' src="${images.itemKnightActive}" /> 
    <img src="${images.itemApple}" /><br>
    <img class = 'c' src="${images.itemMageActive}" /> 
    <img src="${images.itemCheese}" /><br>
    <img class = 'c' src="${images.itemRogueActive}" /> 
    <img  src="${images.itemSalmon}" />
    `,
  },
  {
    css: `${basicTextDescriptionCss}

    img{
        width: 15%;
        height:15%
    }
    `,
    html: `<b>Level ${levelNumber[3]}:</b>
    <p> The master is in the forest, fight with the insects to meet him.
    Use enough 2 css style <span class="help">order</span> and <span class="help">align-self</span> to win.
    The goal is:</p>
    <img src="${images.itemKnightActive}" /> 
    <img src="${images.itemZZZ}" /><br>
    <img src="${images.itemMageActive}" /> 
    <img src="${images.itemSnake}" /><br>
    <img src="${images.itemRogueActive}" /> 
    <img src="${images.itemSpider}" />
    `,
  },
  {
    css: `${basicTextDescriptionCss}
    `,
    html: `<b>Level ${levelNumber[4]}:</b>
    <p>Now, the area of these flowers in this master's garden are chaotic. To resize each area color, you will use:</p>
    <p >Row 1, 2, 3: <span class="help">flex-grow / flex </span> + minitimes
    <p class = "hint"> The flex-grow is a property for flex items. <span class="help">flex</span> is CSS shorthand for <span class="help">flex-grow</span>
    <p  >Row 4, 5: <span class="help">flex-basis / flex </span> + percentages
    <p class = "hint"> The flex-basis is a property for flex items. <span class="help">flex</span> is also CSS shorthand for <span class="help">flex-grow</span>
    </p>
    `,
  },
];

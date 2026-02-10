//Ziyan Pan: D
//Ben: A
//Weini: C
//Xueyi: B

setup_F();
/** THEME: JOY  */
function setup_F() {
  console.log("in f");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_F`, "ani_canvF", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamF");

    let button = document.createElement("div");
    button.classList.add("TEAM_H_box");
    button.textContent = "CLICK";
    parentCanvas.appendChild(button);

    let squares = [];

    for (let i = 0; i < 154; i++) {
      let square = document.createElement("div");
      square.classList.add("square");

      parentCanvas.appendChild(square);
      squares.push(square);
    }

    button.addEventListener("click", () => {
      direction *= -1;
    });

    let currentIndex = 0;
    let direction = 1;

    setInterval(() => {
      squares.forEach((squares) => {
        squares.style.backgroundColor = "gray";
      });
      squares[currentIndex].style.backgroundColor = getRandomColour();
      currentIndex += direction;

      if (currentIndex >= squares.length) {
        currentIndex = 0;
      }

      if (currentIndex < 0) {
        currentIndex = squares.length - 1;
      }
    }, 30);

    function getRandomColour() {
      let squareColors = [
        "red",
        "white",
        "green",
        "yellow",
        "pink",
        "lime",
        "maroon",
        "teal",
        "navy",
        "olive",
        "grey",
        "fuchsia",
      ];

      let randomIndex = Math.floor(Math.random() * squareColors.length);
      return squareColors[randomIndex];
    }
  }

  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamF");
    let sampleColors = [
      "red",
      "white",
      "green",
      "yellow",
      "pink",
      "lime",
      "maroon",
      "teal",
      "navy",
      "olive",
      "grey",
      "fuchsia",
    ];
    parentCanvas.style.position = "relative";

    parentCanvas.addEventListener("mousemove", moveCallBack);

    parentCanvas.addEventListener("click", () => {
      parentCanvas.innerHTML = "";
    });

    function moveCallBack(e) {
      let rect = this.getBoundingClientRect();

      let offsetX = e.clientX - rect.x;
      let offsetY = e.clientY - rect.y;

      const red = Math.round((offsetX / rect.width) * 255);
      const blue = Math.round((offsetY / rect.height) * 255);
      parentCanvas.style.background = `linear-gradient(rgb(${red}, 100, ${blue}), rgb(255, 255, 255))`;

      let pointDiv = document.createElement("div");
      pointDiv.classList.add("point");

      pointDiv.style.left = offsetX + "px";
      pointDiv.style.top = offsetY + "px";

      // pick a random color from the color list
      let color = sampleColors[Math.floor(Math.random() * sampleColors.length)];

      pointDiv.style.background = color;

      // give each point a slightly random size
      let size = 4 + Math.random() * 8;
      pointDiv.style.width = size + "px";
      pointDiv.style.height = size + "px";

      this.appendChild(pointDiv);

      // remove the point after 1 second to create a fading trail
      setTimeout(() => {
        pointDiv.remove();
      }, 800);
    }
  }

  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamF");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("f-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("f-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  let sampleColors = [
    "red",
    "purple",
    "orange",
    "magenta",
    "black",
    "green",
    "yellow",
    "pink",
    "lime",
    "maroon",
    "teal",
    "navy",
    "olive",
    "grey",
    "fuchsia",
  ];

  function aniD(parentCanvas) {
    //get the rendered bounding Box of parent and use the width and height
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    let arrayOfellipses = [];
    console.log("in ani-D -teamF");
    //make a grid of cells
    for (let i = 20; i < boundingBoxParent.width; i += 20) {
      for (let j = 20; j < boundingBoxParent.height; j += 20) {
        //create a div and place in the grid
        let ellipse = document.createElement("div");
        ellipse.classList.add("TEAM_H_h_cell_D");
        parentCanvas.appendChild(ellipse);
        ellipse.style.left = `${j}px`;
        ellipse.style.top = `${i}px`;
        ellipse.style.width = "10px";
        ellipse.style.height = "10px";
        ellipse.style.opacity = 1;
        ellipse.style.background =
          sampleColors[parseInt(Math.random() * sampleColors.length)];
        ellipse.setAttribute("ani-dir", "1");
        ellipse.setAttribute("ani-go", "false");
        arrayOfellipses.push(ellipse);
        setTimeout(function () {
          ellipse.setAttribute("ani-go", "true");
        }, Math.random() * 5000);
      }
    }

    requestAnimationFrame(animate);

    /****** callback for requestAnimationFrame **********/
    function animate() {
      for (let i = 0; i < arrayOfellipses.length; i++) {
        if (arrayOfellipses[i].getAttribute("ani-go") === "true") {
          let dir_of_ani = parseInt(arrayOfellipses[i].getAttribute("ani-dir"));
          let currentSize = parseInt(arrayOfellipses[i].style.width);
          //console.log(currentSize)
          if (currentSize > 25 || currentSize < 2) {
            dir_of_ani *= -1;
            arrayOfellipses[i].setAttribute("ani-dir", dir_of_ani);
          }
          arrayOfellipses[i].style.width = currentSize + 1 * dir_of_ani + "px";
          arrayOfellipses[i].style.height = currentSize + 1 * dir_of_ani + "px";
          arrayOfellipses[i].style.borderRadius =
            currentSize + 1 * dir_of_ani + "px";
        }
      }
      //recall animation loop
      requestAnimationFrame(animate);
    }
  }
}

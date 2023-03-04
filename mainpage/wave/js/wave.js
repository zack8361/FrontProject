(function () {
  "use strict";

  var cvs, ctx;
  var nodes = 4;
  var waves = [];
  var waveHeight = 90;
  var colours = ["#f80000", "#00f800", "#0000f8"];

  // Initiator function
  function init() {
    cvs = document.getElementById("canvas");
    ctx = cvs.getContext("2d");
    resizeCanvas(cvs);

    for (var i = 0; i < 3; i++) {
      waves.push(new wave(colours[i], 1, nodes));
    }

    update();
  }

  function update() {
    var fill = window
      .getComputedStyle(document.querySelector(".header"), null)
      .getPropertyValue("background-color");
    var test = window
      .getComputedStyle(document.querySelector(".footer"), null)
      .getPropertyPriority("background-color");
    ctx.fillStyle = fill;
    ctx.fillStyle = test;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.globalCompositeOperation = "screen";
    for (var i = 0; i < waves.length; i++) {
      for (var j = 0; j < waves[i].nodes.length; j++) {
        bounce(waves[i].nodes[j]);
      }
      drawWave(waves[i]);
    }
    ctx.fillStyle = fill;
    ctx.fillStyle = test;

    requestAnimationFrame(update);
  }

  function wave(colour, lambda, nodes) {
    this.colour = colour;
    this.lambda = lambda;
    this.nodes = [];
    var tick = 1;

    for (var i = 0; i <= nodes + 2; i++) {
      var temp = [((i - 1) * cvs.width) / nodes, 0, Math.random() * 200, 0.3];
      this.nodes.push(temp);
      // console.log(temp);
    }
    // console.log(this.nodes);
  }

  function bounce(nodeArr) {
    nodeArr[1] = (waveHeight / 2) * Math.sin(nodeArr[2] / 20) + cvs.height / 2;
    nodeArr[2] = nodeArr[2] + nodeArr[3];
  }

  function drawWave(obj) {
    var diff = function (a, b) {
      return (b - a) / 2 + a;
    };

    ctx.fillStyle = obj.colour;
    ctx.beginPath();
    ctx.moveTo(0, cvs.height);
    ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);

    for (var i = 0; i < obj.nodes.length; i++) {
      if (obj.nodes[i + 1]) {
        ctx.quadraticCurveTo(
          obj.nodes[i][0],
          obj.nodes[i][1],
          diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
          diff(obj.nodes[i][1], obj.nodes[i + 1][1])
        );
      } else {
        ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
        ctx.lineTo(cvs.width, cvs.height);
      }
    }
    ctx.closePath();
    ctx.fill();
  }

  function drawNodes(array) {
    ctx.strokeStyle = "#888"; //도형의 윤곽선

    for (var i = 0; i < array.length; i++) {
      ctx.beginPath(); ///도형 그리기 시작
      ctx.arc(array[i][0], array[i][1], 4, 0, 2 * Math.PI); // 원의 중심 좌표와 반지름, 원을 그리기 시작할 시작 위치와 종료 위치의 좌표, 그리는 방향 등을 설정
      ctx.closePath(); // 도형그리기를 마침
      ctx.stroke(); //선그리기 시작함
    }
  }

  function drawLine(array) {
    ctx.strokeStyle = "#888";

    for (var i = 0; i < array.length; i++) {
      if (array[i + 1]) {
        ctx.lineTo(array[i + 1][0], array[i + 1][1]);
      }
    }

    ctx.stroke();
  }

  function resizeCanvas(canvas, width, height) {
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
    } else {
      if (window.innerWidth > 1920) {
        canvas.width = window.innerWidth;
      } else {
        canvas.width = 1920;
      }

      canvas.height = waveHeight;
    }
  }

  document.addEventListener("DOMContentLoaded", init, false);
})();

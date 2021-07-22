let myChart = '';
let myChart2 = '';
let myChart3 = '';
let myChart4 = '';

function setValue(classNumber) {
    //console.log(classNumber);

    let dataArray = []; //세로 막대 그래프 값
    let dataArray2 = []; //가로 막대 그래프 값
    let pieArray = []; //성별 취업률
    let pieArray2 = []; //연령별

    if(classNumber == 11){

        console.log("Call By Seoul Data");
        $("#name").text("서울");
        $(".summary1").text("금융업");
        $(".summary2").text("1,500,000");

        dataArray = [12, 19, 3, 5, 2, 3];
        dataArray2 = [170, 230, 200, 0];
       
    }else if (classNumber == 21) {

        console.log("Call By Busan Data");
        $("#name").text("부산");
        $(".summary1").text("어업");
        $(".summary2").text("1,250,000");

        dataArray = [19, 12, 7, 2, 4, 5];
        dataArray2 = [150, 120, 180, 0];

      } else if (classNumber == 22) {

        console.log("Call By Daegu Data");
        $("#name").text("대구");
        $(".summary1").text("금속 광업");
        $(".summary2").text("1,700,000");

        dataArray = [15, 12, 8, 9, 9, 8];
        dataArray2 = [250, 80, 90, 0];

      } else if (classNumber == 23) {

        console.log("Call By Incheon Data");
        $("#name").text("인천");
        $(".summary1").text("식료품 제조업");
        $(".summary2").text("2,100,000");

        dataArray = [10, 12, 5, 7, 8, 9];
        dataArray2 = [60, 170, 180, 0];
        
      } else if (classNumber == 24) {

        console.log("Call By Gwangju Data");
        $("#name").text("광주");
        $(".summary1").text("수도업");
        $(".summary2").text("3,100,000");

        dataArray = [23, 19, 3, 5, 2, 3];
        dataArray2 = [120, 130, 110, 0];
        
      } else if (classNumber == 25) {

        console.log("Call By Seoul Daejeon");
        $("#name").text("대전");
        $(".summary1").text("종합 건설업");
        $(".summary2").text("900,000");

        dataArray = [15, 12, 8, 9, 9, 8];
        dataArray2 = [230, 200, 100, 0];
        
      } else if (classNumber == 26) {

        console.log("Call By Ulsan Data");
        $("#name").text("울산");
        $(".summary1").text("자동차 및 부품 판매업");
        $(".summary2").text("1,150,000");

        dataArray = [12, 19, 3, 5, 2, 3];
        dataArray2 = [170, 150, 200, 0];
        
      } else if (classNumber == 29) {

        console.log("Call By Seojong Data");
        $("#name").text("세종");
        $(".summary1").text("항공 운송업");
        $(".summary2").text("1,200,000");

        dataArray = [12, 19, 3, 5, 2, 3];
        dataArray2 = [160, 120, 250, 0];
        
      } else if (classNumber == 31) {

        console.log("Call By Gyeonggi Data");
        $("#name").text("경기");
        $(".summary1").text("정보통신업");
        $(".summary2").text("2,500,000");

        dataArray = [15, 12, 8, 9, 9, 8];
        dataArray2 = [50, 150, 200, 0];
        
      } else if (classNumber == 32) {

        console.log("Call By Gangwon Data");
        $("#name").text("강원");
        $(".summary1").text("농업");
        $(".summary2").text("2,500,000");

        dataArray = [12, 19, 3, 5, 2, 3];
        dataArray2 = [200, 150, 100, 0];
        
      } else if (classNumber == 33) {

        console.log("Call By Chungbuk Data");
        $("#name").text("충북");
        $(".summary1").text("부동산업");
        $(".summary2").text("1,590,000");

        dataArray = [15, 12, 8, 9, 9, 8];
        dataArray2 = [130, 150, 200, 0];
        
      } else if (classNumber == 34) {

        console.log("Call By Chungnam Data");
        $("#name").text("충남");
        $(".summary1").text("보건업");
        $(".summary2").text("1,600,000");

        dataArray = [14, 15, 8, 7, 2, 5];
        dataArray2 = [170, 150, 100, 0];
        
      } else if (classNumber == 35) {

        console.log("Call By Junbuk Data");
        $("#name").text("전북");
        $(".summary1").text("교육 서비스업");
        $(".summary2").text("4,100,000");

        dataArray = [15, 12, 8, 9, 9, 8];
        dataArray2 = [200, 150, 200, 0];
        
      } else if (classNumber == 36) {

        console.log("Call By Chungnam Data");
        $("#name").text("전남");
        $(".summary1").text("금융업");
        $(".summary2").text("2,050,000");

        dataArray = [14, 15, 8, 7, 2, 5];
        dataArray2 = [100, 150, 200, 0];
        
      } else if (classNumber == 37) {

        console.log("Call By Gyeongbuk Data");
        $("#name").text("경북");
        $(".summary1").text("금융업");
        $(".summary2").text("1,550,000");

        dataArray = [12, 19, 3, 5, 2, 3];
        dataArray2 = [170, 150, 200, 0];
        
      } else if (classNumber == 38) {

        console.log("Call By Gyeongnam Data");
        $("#name").text("경남");
        $(".summary1").text("소메업");
        $(".summary2").text("1,450,000");

        dataArray = [14, 15, 8, 7, 2, 5];
        dataArray2 = [100, 150, 200, 0];
        
      } else if (classNumber == 39) {

        console.log("Call By Jeju Data");
        $("#name").text("제주");
        $(".summary1").text("광업 지원 서비스업");
        $(".summary2").text("1,000,000");

        dataArray = [25, 19, 2, 3, 5, 8];
        dataArray2 = [170, 150, 200, 0];
        
      }
    
    //그래프 초기화
    if(myChart){myChart.destroy();}
    if(myChart2){myChart2.destroy();}
    if(myChart3){myChart3.destroy();}
    if(myChart4){myChart4.destroy();}
    
    //연령별 평균 임금
    let ctx = document.getElementById('myChart');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['40대 미만', '40대', '50대', '60대', '60대 초과'],
            datasets: [{
                label: '연령대 평균 임금',
                data: dataArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });

    //성별 평균 임금
    let ctx2 = document.getElementById('myChart1');
    myChart2 = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            labels: ['전체', '남성', '여성'],
            datasets: [{
                label: '성별 평균 임금',
                data: dataArray2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });

    //성별 취업률
    let ctx3 = document.getElementById('pieChartCanvas');
    myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['남성', '여성'],
            datasets: [{
                label: '성별 평균 임금',
                data: [60,40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });

    //연령별 취업률
    let ctx4 = document.getElementById('pieChartCanvas2');
    myChart4 = new Chart(ctx4, {
        type: 'pie',
        data: {
            labels: ['40대', '50대', '60대', '70대'],
            datasets: [{
                label: '성별 평균 임금',
                data: [25,25,25,25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });
}
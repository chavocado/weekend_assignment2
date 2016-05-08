$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        MakeIndex(data);
        DisplayIndex(data);
        IndexEvents(data);
        Next(data);
        Prev(data);
      }
    });
});

var currentIndex = 0;

// console.log('Loads first');
//makes button index of people
function MakeIndex(data){
  for(var i = 0; i < data.mu.length ; i++ ){
    // var buttonName = data.mu[i];
    //console.log(data.mu[i]);
    $('#index').append('<button class="index i' + i + '" data-index="' + i + '">' + (i + 1) +'</button>');
  }
}
//tracks click events with the index
function IndexEvents(data){
$('body').on('click','.index',function(){
    RedMaker();
    currentIndex = $(this).data('index');
    DisplayIndex(data);
});
}

//tracks click events on next
function Next(data){
  $('body').on('click','#next',function(){
    RedMaker();
    currentIndex ++;
    DisplayIndex(data);
});
}
//tracks clicks on previous
function Prev(data){
  $('body').on('click','#prev',function(){
      RedMaker();
      currentIndex --;
      DisplayIndex(data);
  });
}

//function to remove class
function RedMaker(){
  $('button.i' + currentIndex).toggleClass('red');
}

// initial display
function DisplayIndex(data){
     var $el = $('.people');
     //if and else if to cover getting to end of index
     if ( currentIndex < 0 ){
      currentIndex = data.mu.length - 1;
    } else if (currentIndex > data.mu.length - 1) {
      currentIndex = 0;
    }
    //what goes on the young page
     $el.text(data.mu[currentIndex].name);
     $el.append('<p><a href="https://github.com/' + data.mu[currentIndex].git_username + '">' + data.mu[currentIndex].git_username + '</a></p>');
     $el.append('<p>' + data.mu[currentIndex].shoutout + '</p>');
     RedMaker();
    //  $('button.i' + currentIndex).toggleClass('red');

}
